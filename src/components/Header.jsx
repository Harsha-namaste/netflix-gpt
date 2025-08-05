import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector(store => store.user)

  // console.log("User: ", user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
  }

  return (
    <div className=' w-full absolute px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      {user && <div className='flex w-28 h-12'>
        <img src={user.photoURL} alt="user_icon" className='w-10 rounded-full' />
        <button onClick={handleSignOut} className=' font-bold text-white ml-2'>Sign out</button>
      </div>}
    </div>
  )
}

export default Header
