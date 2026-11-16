import { ServiceBase } from "./service-base";

export class ProductServices extends ServiceBase{
    static getProducts=async () =>{
        var response=await fetch(this.getURL("/products"))
        var data = await response.json()

        return data.products
        
    }

    static getProductsById = async ( id :number) =>{
        var response =await fetch(this.getURL(`/products/${id}`))
        var data =await response.json()
        return data
    }
}   