import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/Home/ProductCard";
import { axiosEcommerce } from "../utils/configAxios";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState('')
  const [currentcategory, setcurrentCategory] = useState(0)

  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductName = e.target.productName.value
    setProductName(newProductName);
  }
  const handleClickCategory = (e) => {
    setcurrentCategory(e.target.dataset.category);
  };

  const productsByname =  products.filter(product => product.title.toLowerCase().includes(productName.toLowerCase()))
    

  useEffect(() => {
  
    axiosEcommerce
      .get("categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    
    axiosEcommerce
    .get("products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
  }, [])

  useEffect( () =>{
    if (currentcategory !== 0){
      axiosEcommerce.get('products?categoryId='+currentcategory)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
    }
  }, [currentcategory])

  return (
    <main className="px-8 mt-24 max-w-[1200px] mx-auto">
      <form onSubmit={handleSubmit} action="">
        <div className="grid grid-cols-[1fr_auto] ">
          <input className="w-full border-[1px] border-gray-300 p-2 placeholder:text-gray-300" id="productName" placeholder="What are you looking for?" type="text" />
          <button>
            <i className="bx bx-search p-4 bg-red-500 text-white"></i>
          </button>
        </div>

        <ul>
          <li onClick={handleClickCategory} data-category={0}>All</li>
          {categories?.map((category) => (
            <li onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>
          ))}
        </ul>
      </form>

      <section className='grid sm:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4 py-2'>
        {
          productsByname?.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </section>
          
      

    </main>
  );
};
export default Home;
