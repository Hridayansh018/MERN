import { useNavigate } from "react-router-dom";

const PasswordManager = () => {
    const navigate = useNavigate();

    const handleBackToLogin = () => {
        navigate("/");
    }

    return(
        <div className=" w-1/3 bg-slate-800 rounded-md border p-8 border-slate-400 shadow-lg backdrop-filter backdrop-blur-30  bg-opacity-60 justify-center">
        <h1 className="text-3xl text-center p-8 font-bold">Password Manager</h1>

        <div className="flex justify-between items-center py-3 relative">
            <input type="name" placeholder="Enter Email" className="w-full h-10 text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
        </div>
        <p htmlFor="" >Enter your Registered Email address to get Verification Link</p>
            <div className="flex items-center">
                <button type="submit" className="flex-col w-full h-10 p-2 bg-blue-600 text-white rounded-full mt-4 font-bold" onClick={handleBackToLogin}>Submit</button>
            </div>
    
        </div>
    )
}

export  default PasswordManager