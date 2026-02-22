import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
 


export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <Sidebar/>
 
      <main className="flex-1 p-6">
        <Navbar/>
        <div>

        Main Content
        </div>
      </main>
    </div>
  );
}