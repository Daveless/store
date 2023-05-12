import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginUser, logOut } from "../store/slices/userInfo.slice";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  
  const dispatch = useDispatch()
  const {token, user} = useSelector(store => store.userInfo)

  const { register, handleSubmit } = useForm();

  const handleClickLogOut = () => dispatch(logOut())

  const submit = (data) => {
  dispatch(loginUser(data))
  };

  return (
    <main className="bg-gray-100 grid place-content-center px-2 h-screen">
    {token? (
      <section className="bg-white p-4 w-[300px] text-center rounded-md max-w-[350] grid gap-6">
        <i className='bx bxs-user-circle text-6xl' ></i>
        <h3 className="capitalize">{user?.firstName} {user?.lastName}</h3>
        <button onClick={handleClickLogOut} className="bg-red-500 text-white py-2 rounded-md block w-full">Log Out</button>
      </section>
    ):(
    <form
      onSubmit={handleSubmit(submit)}
      className="bg-white p-4 rounded-md max-w-[350px] grid gap-4"
      action=""
    >
      <h2 className="text-2xl font-[500] text-gray-[700]">
        Welcome! Enter your email and password to continue
      </h2>

      <section className="bg-[#bef1ff] p-4 rounded-md py-2">
        <h3 className="text-center">Test data</h3>

        <div className="flex gap-2 items-center">
          <i className="bx bx-envelope text-xl"></i>
          <span>john@gmail.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <i className="bx bx-lock-alt text-xl"></i>
          <span>john1234</span>
        </div>
      </section>

      <div className="grid gap-1">
        <label htmlFor="email">Email</label>
        <input
          className="border-[1px] border-gray-300 p-1 outline-none"
          id="email"
          type="email"
          {...register("email", {
            required:true
          })}
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="password">Password</label>
        <input
          className="border-[1px] border-gray-300 p-1 outline-none"
          id="password"
          type="password"
          {...register("password", {
            required:true
          })}
        />
      </div>

      <button className="block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors">
        Login
      </button>

      <span className="text-sm">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-400" to="#">
          Sign up
        </Link>
      </span>
    </form>
  )}
</main>
    
  );
};
export default Login;
