import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import StatCardGrid from "./components/dashboard/StatCardGrid";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <Sidebar/>
 
      <main className="flex-1 p-6">
        <Navbar/>
        <StatCardGrid/>
      </main>
    </div>
  );
}