import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handelLogin = () =>{
        navigate("/welcome");
    }

    const handleRegister = () =>{
        navigate("/register");
    }

    const handlePasswordManager = () =>{
        navigate("/PasswordManager");
    }
    return (
    <form className=" w-1/3 bg-slate-800 rounded-md border p-8 border-slate-400 shadow-lg backdrop-filter backdrop-blur-30 relative bg-opacity-60 justify-center">
            <h1 className="text-3xl text-center p-8 font-bold">Login</h1>
            <div className="flex justify-between items-center py-3 relative">
                <input type="email" placeholder="Enter Email" className="w-64 h-10 text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "/>
                <label htmlFor="" className="font-bold">Your Email</label>
            </div>
                <div className="relative flex justify-between items-center py-3">
                <input type="password" placeholder="Enter password" className="w-64 h-10 text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " />
                <label htmlFor="" className="font-bold">Your Password</label>
            </div>
            <div className="flex justify-between items-center py-3">
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="font-bold">Remember me</label>
                </div>
                <span className="font-bold hover:text-neutral-400 hover:cursor-pointer" onClick={handlePasswordManager}>Forget Password</span>
            </div>
            <div className="flex justify-between">

            <button type="submit" className="flex-col w-52 h-10 p-2 bg-green-600 text-white rounded-full" onClick={handelLogin}>Login</button>

            <button type="register" className="flex-col w-52 h-10 px-4 bg-blue-600 text-white rounded-full" onClick={handleRegister}>Register</button>

            </div>
            {/* <div>
                <span>Don't have an account<link to='Register'>Create An account</link></span>
            </div> */}
        
    </form>
    )
}

export default Login