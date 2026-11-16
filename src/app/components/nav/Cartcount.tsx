"use client"

import { useCart } from "@/app/context/CartContext"

export default function Cartcount(){
    const {cart}=useCart()
    return(
        <div>
            <span>{cart.length}</span>
        </div>
    )
}