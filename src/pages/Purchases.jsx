import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { axiosEcommerce, getConfig } from "../utils/configAxios"
import PurchaseCard from "../components/Purchases/PurchaseCard"

const Purchases = () => {

  const [purchases, setPurchases] = useState([])

  useEffect(()=>{
  


    axiosEcommerce.get("purchases", getConfig())
    .then(res => {
      const orderedPurchases = res.data.sort(
        (a, b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      setPurchases(orderedPurchases)
    })
    .catch(err => console.error(err))
  },[])
  return (
    <main className="px-2 max-w-[1200px] mt-24 mx-auto">
      <section className=" gap-2 items-center">
          <div className="flex items-center gap-1">
          <Link to="/">Home</Link>
          <div className="h-[7px] aspect-square bg-red-500 rounded-full"></div>
          <span className="font-bold">Purchases</span>
          </div>
      </section>

      <section className="grid gap-6">
        {
          purchases.map(purchase => <PurchaseCard key={purchase.id} purchase={purchase}/>)
        }
      </section>
    </main>
  )
}
export default Purchases