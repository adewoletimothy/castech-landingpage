import { LayoutDashboard, Table, CreditCard, Globe, Leaf } from "lucide-react"


export default function Home() {
  return (
     
      <aside className="w-64 bg-white shadow-sm p-6 hidden md:flex md:flex-col">
        <div className="flex items-center gap-1 mb-8">
        <Leaf size={32} className="text-teal-500 mb-4" />
        <h1 className="text-xl font-bold mb-5 text-teal-600">
          Purity UI
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
        
        <div className="flex-1">
          <div className="bg-teal-500 text-white p-4 rounded-xl">
            <p className="text-sm font-medium">Need help?</p>
            <button className="mt-3 bg-white text-teal-600 text-sm px-3 py-1 rounded-md">
              Documentation
            </button>

          </div>

        </div>
      </aside> 

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