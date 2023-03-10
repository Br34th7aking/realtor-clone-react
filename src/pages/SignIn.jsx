import React from 'react'; 
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignIn() {
    const [showPassword, setShowPassword] = React.useState(false);

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })
    const { email, password } = formData;

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
          })
    )}
    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
                <div className="md:w-[50%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="https://images.unsplash.com/photo-1487029752779-a0c17b1f5ec9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2lnbiUyMGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="enter"
                        className="w-full rounded-2xl" />
                </div>
                <div className="w-full md:w-[40%] lg:w[-40%] md:ml-10 lg:ml-20">
                    <form className="w-full">
                        <input type="email" id="email" className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" 
                         value={email} onChange={onChange}
                         placeholder="Email" />
                        <div className='relative mb-6 '><input type={showPassword ? "text" : "password"} id="password" className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                         value={password} onChange={onChange}
                         placeholder="Password" />
                         {showPassword ? 
                         (<AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" 
                         onClick={() => setShowPassword((prevState) => !prevState)}/>)
                         : (<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" 
                         onClick={() => setShowPassword((prevState) => !prevState)}/>)
                        } 
                         </div>
                         <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                            <p className='mb-6'>Don't have an account? <Link className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1" to="/sign-up">Register</Link></p>
                            <p><Link className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1" to="/forgot-password">Forgot Password?</Link></p>
                         </div>
                    <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Sign in</button>
                    <div className='my-4 
                    before:border-t flex before:flex-1 items-center
                    before:border-gray-300
                    after:border-t after:flex-1 
                    after:border-gray-300'>
                        <p className='text-center uppercase font-semibold mx-4'>or</p>
                    </div>
                    <OAuth />
                    </form>
                </div>
            </div>
        </section>
    )
}