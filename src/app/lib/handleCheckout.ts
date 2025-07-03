import { CartItem } from "@/context/CartContext";

export async function handleCheckout(items: CartItem[]) {
  try {
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP Error: ${response.status}`);
    }

    const result = await response.json();

    if (result.url) {
      window.location.href = result.url;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Checkout Error:", error.message);
    }
  }
}
