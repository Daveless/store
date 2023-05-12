import { useDispatch, useSelector } from "react-redux";
import {
  changeIsShownCard,
  getCartProducts,
  purchaseCart,
} from "../../store/slices/cart.slice";
import { useEffect } from "react";
import CartProducts from "./CartProducts";

const Cart = () => {

  const dispatch = useDispatch();
  const {token} = useSelector(store => store.userInfo)

  const handleClickChangeShowCart = () => {
    dispatch(changeIsShownCard());
  };

  const handleClickCheckout = () =>{
    dispatch(purchaseCart())
  }

  const { isShownCart, products } = useSelector((store) => store.cart);

  const totalPrice = products.reduce((acc,curr) => acc+(curr.quantity * curr.product.price), 0)

  useEffect(() => {
    if (isShownCart) {
      dispatch(getCartProducts());
    }
  }, [isShownCart]);

  return (
    <section
      className={`fixed top-0 ${
        isShownCart && token ? "right-0" : "-right-full"
      } duration-200 p-3 bg-white shadow-xl h-screen  w-[300px] grid grid-rows-[auto_1fr_auto]`}
    >
      <section>
        <h2>Shopping Cart</h2>
        <i
          onClick={handleClickChangeShowCart}
          className="bx bx-x absolute top-2 right-3 text-xl font-bold hover:text-red-500 cursos-pointer"
        ></i>
      </section>

      <section className="overflow-y-auto content-start grid gap-10 py-10 border-y-[1px] border-gray-400">
        {products?.map(product=><CartProducts key={product.id} product={product}/>)}
      </section>

      <section className="grid grid-cols-2">
        <span>total</span>
        <h4 className="text-end">{totalPrice}</h4>
        <button onClick={handleClickCheckout} className="w-full col-span-2 bg-red-500 py-2 text-white hover:bg-red-600 transition-colors rounded-sm mt-6">
          checkout
        </button>
      </section>
    </section>
  );
};
export default Cart;
