import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleBackToLogin = () => {
        navigate("/");
      };

      const habdelRegister = () => {
        navigate("/welcome");
      };

    return(
        <form className=" w-1/3 bg-slate-800 rounded-md border p-8 border-slate-400 shadow-lg backdrop-filter backdrop-blur-30  bg-opacity-60 justify-center">
        <h1 className="text-3xl text-center p-8 font-bold">Register</h1>

        <div className="flex justify-between items-center py-3 relative">
            <input type="name" placeholder="Enter Username" className="w-64 h-10 text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
            <label htmlFor="" className="font-bold">Username</label>
        </div>

        <div className="flex justify-between items-center py-3 relative">
            <input type="email" placeholder="Enter Email" className="w-64 h-10 text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
            <label htmlFor="" className="font-bold">Your Email</label>
        </div>
        <div className="relative flex justify-between items-center py-3">
            <input type="password" placeholder="Enter password" className="w-64 h-10 text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " />
            <label htmlFor="" className="font-bold">Your Password</label>
        </div>
        <div className="flex justify-between items-center py-3 px-4 mt-4">
            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
            </div>
            <p onClick={handleBackToLogin} className="font-bold hover:text-neutral-400 hover:cursor-pointer">Already have an account?</p>
        </div>
        <div className="flex justify-between">

        <button type="submit" className="flex-col w-full h-10 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full" onClick={habdelRegister}>Login</button>

        </div>
    
</form>
    )
}

export  default Register