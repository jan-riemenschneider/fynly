'use client'
import { Product } from '@/data/products'
import React, {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
export interface CartItem {
  product: Product
  quantity: number
  customization?: {
    name: string
    price: number
  }
}

interface CartState {
  items: CartItem[]
  total: number
  totalItems: number
}

type CartAction =
  | {
      type: 'ADD_ITEM'
      payload: { product: Product; quantity: number; customization?: string }
    }
  | {
      type: 'REMOVE_ITEM'
      payload: { id: string; customization: string }
    }
  | { type: 'CLEAR_CART' }
  | {
      type: 'SET_QUANTITY'
      payload: { id: string; quantity: number; customization?: string }
    }
  | { type: 'INCREASE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'DECREASE_QUANTITY'; payload: { id: string; quantity: number } }

const initialState: CartState = {
  items: [],
  total: 0,
  totalItems: 0,
}

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => {
    const productTotal = item.product.price * item.quantity
    const customizationTotal = item.customization
      ? item.customization.price * item.quantity
      : 0
    return sum + productTotal + customizationTotal
  }, 0)
}

const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { quantity = 1, customization, product } = action.payload

      const existingItem = state.items.find(item => {
        if (customization) {
          return (
            item.customization?.name === customization &&
            item.product.id === product.id
          )
        } else {
          return item.product.id === product.id && !item.customization
        }
      })

      let updatedItems

      if (existingItem) {
        updatedItems = state.items.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        updatedItems = [
          ...state.items,
          {
            product: product,
            quantity: quantity,
            ...(customization && {
              customization: {
                name: customization,
                price: 5,
              },
            }),
          },
        ]
      }

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        totalItems: calculateTotalItems(updatedItems),
      }
    }

    case 'REMOVE_ITEM': {
      const { id, customization } = action.payload

      const updatedItems = state.items.filter(item => {
        if (customization) {
          return !(
            item.product.id === id && item.customization?.name === customization
          )
        } else {
          return !(item.product.id === id && !item.customization)
        }
      })

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        totalItems: calculateTotalItems(updatedItems),
      }
    }

    case 'SET_QUANTITY': {
      const { quantity, customization, id } = action.payload

      const updatedItems = state.items.map(item => {
        if (customization) {
          return item.product.id === id &&
            item.customization?.name === customization
            ? { ...item, quantity }
            : item
        } else {
          return item.product.id === id && !item.customization
            ? { ...item, quantity }
            : item
        }
      })

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        totalItems: calculateTotalItems(updatedItems),
      }
    }

    case 'CLEAR_CART':
      return initialState

    default:
      return state
  }
}

interface CartContextType extends CartState {
  addItem: (product: Product, quantity: number, customization?: string) => void
  removeItem: (id: string, customization?: string) => void
  setQuantity: (id: string, quantity: number, customization?: string) => void
  clearCart: () => void
  setCartOpen: (open: boolean) => void
  isCartOpen: boolean
  getItemQuantity: (id: string) => number
  calculateTaxes: (total: number) => number
  removeTaxes: (total: number) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, init => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('cart')
        return stored ? JSON.parse(stored) : init
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e)
        return init
      }
    }
    return init
  })

  const [isCartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state])

  const addItem = (
    product: Product,
    quantity: number,
    customization?: string
  ) => {
    setCartOpen(true)
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, quantity, customization },
    })
  }

  const removeItem = (id: string, customization: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, customization } })
  }

  const setQuantity = (id: string, quantity: number, customization: string) => {
    dispatch({ type: 'SET_QUANTITY', payload: { id, quantity, customization } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemQuantity = (id: string): number => {
    const item = state.items.find(item => item.product.id === id)
    return item?.quantity || 0
  }

  const calculateTaxes = (total: number) => {
    return total * 0.19
  }

  const removeTaxes = (total: number) => {
    return total * 0.81
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        total: state.total,
        totalItems: state.totalItems,
        addItem,
        clearCart,
        removeItem,
        setQuantity,
        setCartOpen,
        isCartOpen,
        getItemQuantity,
        calculateTaxes,
        removeTaxes,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
