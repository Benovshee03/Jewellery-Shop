import React from "react"
import {useParams} from "react-router-dom"
import { useContext } from "react";
import { MyContext } from "../../App";
import Header from "../Header/Header";
// import productsData from "./productsData"

export default function ProductDetail() {
    const {productId} = useParams()
    const { product } = useContext(MyContext);
    const thisProduct = product.find(prod => prod.id === productId)
    
    return (
        <div>
            <Header/>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}
