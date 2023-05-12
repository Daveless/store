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
    <section className="flex p-4 justify-between">
        <Link to={'/'}><h1 className="font-bold text-red-400">e-commerce</h1></Link>
        <nav className="flex gap-10 text-gray-400">
            <Link to='/login'><i className='bx bx-user'></i></Link>
            <Link to='/purchases'><i className='bx bx-box'></i></Link>
            <button onClick={handleClickChangeShowCart}><i className='bx bx-cart'></i></button>       
        </nav>
    </section>
  )
}
export default Header