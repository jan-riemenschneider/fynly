'use client'
import { Product } from '@/data/products'
import React, { createContext, ReactNode, useReducer, useState } from 'react'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  totalItems: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'INCREASE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'DECREASE_QUANTITY'; payload: { id: string; quantity: number } }

const initialState: CartState = {
  items: [],
  total: 0,
  totalItems: 0,
}

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
}

const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id
      )

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity:
            updatedItems[existingItemIndex].quantity + action.payload.quantity,
        }

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
          totalItems: calculateTotalItems(updatedItems),
        }
      } else {
        const updatedItems = [
          ...state.items,
          {
            product: action.payload.product,
            quantity: action.payload.quantity,
          },
        ]

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
          totalItems: calculateTotalItems(updatedItems),
        }
      }
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        item => item.product.id !== action.payload
      )

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        totalItems: calculateTotalItems(updatedItems),
      }
    }

    case 'SET_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.product.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )

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
  addItem: (product: Product, quantity: number) => void
  removeItem: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  setCartOpen: (open: boolean) => void
  isCartOpen: boolean
  getItemQuantity: (id: string) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [isCartOpen, setCartOpen] = useState(false)
  const addItem = (product: Product, quantity: number) => {
    setCartOpen(true)
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const setQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'SET_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemQuantity = (id: string): number => {
    const item = state.items.find(item => item.product.id === id)
    return item?.quantity || 0
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
