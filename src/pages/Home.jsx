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
    <main className="px-2">
      <form onSubmit={handleSubmit} action="">
        <div>
          <input id="productName" placeholder="What are you looking for?" type="text" />
          <button>
            <i className="bx bx-search"></i>
          </button>
        </div>

        <ul>
          <li onClick={handleClickCategory} data-category={0}>All</li>
          {categories?.map((category) => (
            <li onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>
          ))}
        </ul>
      </form>

      <section className='grid gap-8 py-2'>
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
