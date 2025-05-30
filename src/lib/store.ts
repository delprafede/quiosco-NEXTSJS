import { create } from "zustand"
import { OrderItem } from "./types"
import { Product } from "@prisma/client"


interface Store {
    order: OrderItem[]
    addToCart: (product: Product) => void
    increaseQuantity: (id: Product["id"]) => void
    decrementQuantity: (id: Product["id"]) => void
}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToCart: (product) => {
        const { categoryId, image, createdAt, updatedAt, description, stock, ...data } = product
        let order: OrderItem[] = []
        if (get().order.find(item => item.id === product.id)) {
            order = get().order.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * product.price }
                    : item
            )
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }
        set(() => ({
            order
        }))
    },
    increaseQuantity: (id) => {
        set((state)=> ({
  order : state.order.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * item.price }
                    : item
            )
        }))
      
    },
      decrementQuantity: (id) => {
        set((state)=> ({
  order : state.order.map(item =>
                item.id === id
                    ? item.quantity > 0 ? { ...item, quantity: item.quantity - 1, subtotal: (item.quantity - 1) * item.price } : item
                    : item
            )
        }))
      
    },
}))