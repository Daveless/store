import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { axiosEcommerce } from "../utils/configAxios"
import ProductDetail from "../components/Products/ProductDetail"
import SimilarProducts from "../components/Products/SimilarProducts"

const Product = () => {
  

  const {id} = useParams()

  

  return (
    <main className="px-2 flex flex-col">
      
          <ProductDetail productId={id}/>
    </main>
  )
}
export default Product