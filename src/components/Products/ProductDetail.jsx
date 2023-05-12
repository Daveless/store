import { useEffect, useState } from "react";
import { axiosEcommerce } from "../../utils/configAxios";
import SimilarProducts from "./SimilarProducts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../store/slices/cart.slice";

const ProductDetail = ({ productId }) => {
  const [productData, setproductData] = useState();
  const [counter, setcounter] = useState(1)
  const dispatch = useDispatch()

  const handleCounterplus = () => {
    const newCounter = counter+1
    setcounter(newCounter)
  }
  const handleCounterless = () => {
    const newCounter = counter-1
    if(newCounter>0){
      setcounter(newCounter)
    }
  }
  const handleClickAddToCart = ()=>{
    dispatch(addProductCart({quantity: counter, productId: productData.id
    }))
  }


  useEffect(() => {
    axiosEcommerce("products/" + productId)
      .then((res) => setproductData(res.data))
      .catch((err) => console.log(err));
  }, [productId]);
  return (
    <>
  <section className=" gap-2 items-center">
          <div className="flex items-center gap-1">
          <Link to="/">Home</Link>
          <div className="h-[7px] aspect-square bg-red-500 rounded-full"></div>
          <span className="font-bold">{productData?.title}</span>
          </div>
          
      </section>

    <section className="grid gap-6 sm:grid-cols-2 sm:items-center max-w-[1000px] mx-auto">
      <section>
        <div className="h-[300px] p-4">
          <img className="h-full w-full object-contain"  src={productData?.images[0].url} alt="" />
        </div>
      </section>

      <section>
      <h4 className="text-gray-400 font-bold mt-6">{productData?.brand}</h4>
      <h3 className="font-bold text-lg ml-2">{productData?.title}</h3>

      <section className="grid grid-cols-2 mt-6">
        <article>
          <h4 className="text-gray-400 font-bold">Price</h4>
          <span className="font-bold text-lg ml-2">${productData?.price}</span>
        </article>
        <article>
          <h4 className="text-gray-400 font-bold">Quantity</h4>
          <div className="flex items-center">
            <button className="border-[1px] p-2  px-4 hover:bg-red-500 hover:text-white transition-colors" onClick={handleCounterless}>-</button>
            <button className="border-[1px] p-2  px-4 border-x-0">{counter}</button>
            <button className="border-[1px] p-2  px-4 hover:bg-red-500 hover:text-white transition-colors" onClick={handleCounterplus}>+</button>
          </div>
        </article>
      </section>

      <button onClick={handleClickAddToCart} className="w-full bg-red-500 py-2 text-white hover:bg-red-600 transition-colors rounded-sm mt-6">
        <i className="bx bx-cart"></i>
      </button>

      <p className="text-sm my-6 text-gray-700">{productData?.description}</p>
    </section>
      </section>
      <SimilarProducts categoryID={productData?.categoryId} productID={productData?.id}/>
      </>
  );
};
export default ProductDetail;
