
import { Bell, Settings, Search, User } from "lucide-react"

export default function Navbar () {
  return (
    <div className='flex items-center justify-between mb-6'>
        <div>
            <p className='text-sm text-gray-500'>
                Pages/Dashboard
            </p>
            <h2 className='text-xl font-semibold text-gray-800'>
                Dashboard
            </h2>
        </div>
        <div className='flex items-center gap-4'>
            {/* <Search className="text-gray-500 cursor-pointer hover:text-gray-800" size={18}/> */}
            <input 
                type="text" 
                placeholder='Type here...'
                className='hidden md:block h-8 placeholder-gray-200 bg-white border border-gray-200  rounded-lg  px-4 py- 
                            text-sm text-black focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
            <div className="flex items-center gap-1 mb-1">
                <User className="text-gray-500 cursor-pointer hover:text-gray-800" size={18}/>
                <button className='text-sm text-gray-600 cursor-pointer hover:text-gray-900'>
                    Sign in
                </button>
            </div>

            <Bell className="text-gray-500 cursor-pointer hover:text-gray-800" size={18}/>
            <Settings className="text-gray-500 cursor-pointer hover:text-gray-800" size={18}/>
        </div>  

    </div>
  )
}
