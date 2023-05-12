import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { addProductCart } from "../../store/slices/cart.slice";

const ProductCard = ({product}) => {

    const dispatch = useDispatch()


    const handleClickAddProduct = (e) => {
        e.preventDefault()
        dispatch(addProductCart(
            {
            productId: product.id,
            quantity: 1
        }))
    };
 
 
    return (
    <Link to={`/product/${product?.id}`}>
    <article className="border-[1px] border-gray-300">
        <div className="p-4 border-b-[1px] border-gray-300 h-[200px] overflow-hidden ">
            <img className="h-full w-full object-contain" src={product?.images[0].url} alt="" />
        </div>
        <section className="p-4 relative">
            <h4 className="text-gray-400 font-bold">{product?.brand}</h4>
            <h3 className="font-bold text-sm ml-2">{product?.title}</h3>
            <h4 className="text-gray-400 font-bold">Price</h4>
            <span className="font-bold text-sm ml-2">{product?.price}</span>

            <button onClick={handleClickAddProduct} className="absolute right-4 bottom-4 bg-red-500 p-2 text-white text-xl rounded-full w-[45px] aspect-square hover:bg-red-600 transition-colors">
                <i className='bx bx-cart-alt' ></i>
            </button>

        </section>
    </article>
    </Link>
  )
}
export default ProductCard