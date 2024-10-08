import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import logo from '/logo1.png';

const Navbar = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-1 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
                <div className="flex flex-row">
                    <img src={logo} alt="logo" className="h-10" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap ml-2 text-gray-800">StayEasy.com</span>
                </div>
            </a>
            <div className="flex items-center lg:order-2">
                {isLoggedIn?(<SignOutButton/>):(
                  <a href="/sign-in" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-300 focus:outline-none dark:focus:ring-gray-300">Sign in</a>
                )}
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="/" className="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-black dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-black dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-black dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-black dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">FAQ</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-black dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                   {isLoggedIn?(
                    <>
                     <li>
                        <div className="px-2 py-1 border rounded-xl hover:bg-orange-400 bg-orange-500">
                        <a href="/my-bookings" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white lg:dark:hover:text-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">My Bookings</a>
                        </div>
                    </li>
                    <li>
                    <div className="px-2 py-1 border rounded-xl hover:bg-orange-400 bg-orange-500">
                        <a href="/my-hotels" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white lg:dark:hover:text-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700">My Hotels</a>
                        </div>
                    </li>
                    </>
                   ):(<></>)}
                </ul>
            </div>


        </div>
    </nav>
</header>
  );
};


export default Navbar;
