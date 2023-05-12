import { useEffect, useState } from "react"
import { axiosEcommerce } from "../../utils/configAxios"
import ProductCard from "../Home/ProductCard"

const SimilarProducts = ({categoryID, productID}) => {
    const [similarProducts, setSimilarProducts] = useState([])


    useEffect(()=>{
        if(categoryID){
        axiosEcommerce.get("products?categoryId="+categoryID)
        .then(res => {
            setSimilarProducts(res.data.filter(product => product.id !== productID))
        })
        .catch(err => console.error(err))}
    },[categoryID, productID])
  return (

    

    <section className="px-2 ">
        <h2 className="text-red-500 font-bold text-lg">Discover similar items</h2>
        <section className="grid gap-6 py-4 sm:grid-cols-2 sm:px-10">
            {
                similarProducts.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </section>
    </section>
  )
}
export default SimilarProducts