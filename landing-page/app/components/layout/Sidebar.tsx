
export default function Home() {
  return (
     
      <aside className="w-64 bg-white shadow-sm p-6 hidden md:flex md:flex-col">
        <h1 className="text-xl font-bold mb-8 text-teal-600">
          Purity UI
        </h1>
        <nav className="space-y-2">
          <SidebarItem label="Dashboard" active/>
          <SidebarItem label="Tables"/>
          <SidebarItem label="Billing"/>
          <SidebarItem label="RTL"/>
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
  active = false,
}: {
  label: string;
  active?: boolean;
}){
  return (
    <div className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${
      active ? 'bg-teal-500 text-white' : 'text-gray-600 hover:bg-gray-100'
    }`} >
      {label}

    </div>
  )
}