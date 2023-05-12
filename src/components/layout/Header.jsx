import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { changeIsShownCard } from "../../store/slices/cart.slice"


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {token} = useSelector(store => store.userInfo)

  const handleClickChangeShowCart = () =>{
    if(!token){
      return navigate("/login")
    }
    dispatch(changeIsShownCard())
  }

  return (
    <section className="flex p-4 justify-between items-center fixed bg-white w-full z-50 md:px-10">
        <Link to={'/'}><h1 className="font-bold text-[1.4rem] md:text-2xl text-red-400">e-commerce</h1></Link>
        <nav className="flex gap-5 md:gap-24 text-gray-400">
            <Link to='/login'><i className='bx bx-user text-2xl'></i></Link>
            <Link to='/purchases'><i className='bx bx-box text-2xl'></i></Link>
            <button onClick={handleClickChangeShowCart}><i className='bx bx-cart text-2xl'></i></button>       
        </nav>
    </section>
  )
}
export default Header