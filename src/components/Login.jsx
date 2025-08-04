import { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="logo" />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Out"}</h1>
                {!isSignInForm && <input type="text" placeholder='Name' className='p-4 my-2 w-full bg-gray-700 rounded-lg bg-opacity-50' />}
                <input type="text" placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700 rounded-lg bg-opacity-50 ' />
                <input type="password" placeholder='Password' className='p-4 my-2 w-full bg-gray-700 rounded-lg bg-opacity-50' />
                <button className='p-4 my-4 bg-red-500 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Out"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign up now." : "Already a member"}</p>
            </form>
        </div>
    )
}

export default Login
