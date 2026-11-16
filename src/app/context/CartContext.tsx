"use client"

import { error } from "console"
import { useState,createContext,useContext } from "react"

const CartContext=createContext<any>(null)

export function CartProvider({children}:any){

    const [searchTerm,setsearchTerm]=useState("")

    const [cart ,setcart]=useState<any[]>([])

    function addToCart(product:any){
        const found=cart.find((item)=>item.id === product.id)
        if(found){
            found.quantity++
            setcart([...cart])
            return
        }
        setcart([...cart,{...product,quantity:1}])
    }

    function removeFromCart(productId:number){
        setcart((currentCart)=> 
            currentCart.filter((item) => 
                item.id !== productId))
    }

    function IncreaseQuantity(id:number){
        const newCart=cart.map((product)=>
            product.id===id 
            ?{ ...product,quantity:product.quantity+1}
            :product)
            setcart(newCart)
    }

    function decreaseQuantity(id:number){
        const newCart=cart.map((product)=>
        product.id===id && product.quantity >1
    ?{
        ...product,quantity:product.quantity -1
    }:product)
    setcart(newCart)
    }

    const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0)

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,IncreaseQuantity,decreaseQuantity,total,searchTerm,setsearchTerm}}>{children}</CartContext.Provider>
    )
}

export function useCart(){
    const context=useContext(CartContext)
    if(context===null){
        throw new Error("useCart must be used inside CartProvider")
    }
    return context
}