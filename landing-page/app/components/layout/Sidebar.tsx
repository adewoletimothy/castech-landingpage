'use client'

import { LayoutDashboard, Rocket, File, Menu, User, Table, CreditCard, Globe, Leaf } from "lucide-react"
import { useState } from "react";


export default function Home() {

    
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)
  return (

    <>
    <div className="flex items-center justify-between p-4 bg-white shadow-sm md:hidden">
        <h1 className="text-sm font-bold text-teal-600">
            PURITY UI DASHBOARD
        </h1>

        <button onClick={toggleSidebar}>
            <Menu size={24} />
        </button>
    </div>
     
    
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-sm p-6 transform transition-transform duration-300 z-50
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 md:static md:flex md:flex-col
        `}>
        <div className="flex items-center gap-1 mb-8  bg-white p-2 rounded-lg shadow-sm" >
        
         
        <Leaf size={32} className="text-teal-500 mb-4" />
        <h1 className="text-sm font-bold mb-5 text-teal-600">
          PURITY UI DASHBOARD
        </h1>

        </div>
        <nav className="space-y-2">
          <SidebarItem
            label="Dashboard"
            icon={LayoutDashboard}
            active
           />
          <SidebarItem
            label="Tables"
            icon={Table} 
           />
          <SidebarItem
            label="Billing"
            icon={CreditCard} 
           />
          <SidebarItem
            label="RTL"
            icon={Globe} 
           /> 
        </nav>
        <p className="text-xs font-semibold text-gray-500 my-4 mb-4 ml-3">ACCOUNT PAGES</p>
        <nav className="space-y-2 mb-6">
          <SidebarItem
            label="Profile"
            icon={User} 
           />
          <SidebarItem
            label="Sign In"
            icon={File} 
           />
            <SidebarItem
            label="Sign Up"
            icon={Rocket} 
           />
        </nav>

        
        <div className="flex-1 mt-10">
          <div className="bg-teal-500 text-white p-4 rounded-xl">
            <p className="text-sm font-medium">Need help?</p>
            <button className="mt-3 bg-white text-teal-600 text-sm px-3 py-1 rounded-md hover:bg-gray-100 cursor-pointer">
              Documentation
            </button>

          </div>

        </div>
      </aside> 
      
    </>

    );
}


function SidebarItem({
  label,
  icon: Icon,
  active = false,
}: {
  label: string
  icon: any
  active?: boolean;
}){
  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${
      active ? 'bg-teal-500 text-white' : 'text-gray-600 hover:bg-gray-100'
    }`} >
    <Icon size={16} />
    {label}

    </div>
  )
}
