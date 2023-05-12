import { useDispatch } from "react-redux"
import { deleteProductCart } from "../../store/slices/cart.slice"

const CartProducts = ({product}) => {
    const dispatch = useDispatch()

    const clickDelete = () => {
        dispatch(deleteProductCart(product.id))
    }


  return (
    <article>
        <section className="grid grid-cols-[auto_1fr_auto] gap-1 py-4">
        <div className="h-[90px] row-span-2 aspect-square p-2">
            <img className="w-full h-full object-contain" src={product.product.images[0].url} alt="" />
        </div>
        <h4>{product.product.title}</h4>
        <i onClick={clickDelete} className="bx bxs-trash text-red-500 cursor-pointer"></i>
        <div className="flex items-center">
            <button className="border-[1px] p-2 px-2 hover:bg-red-500 hover:text-white transition-colors">-</button>
        
        <span className="border-[1px] p-2 px-4 border-x-0">
        {product.quantity}
        </span>
            <button className="border-[1px] p-2 px-2 hover:bg-red-500 hover:text-white transition-colors">+</button>
            </div>
        </section>
        <h4 className="mt-2 text-end">Total: 
        <span className="font-bold">{(product.quantity * product.product.price).toFixed(1)}</span></h4>
    </article>
  )
}
export default CartProducts