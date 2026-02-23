import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import StatCardGrid from "./components/dashboard/StatCardGrid";
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <Sidebar/>
 
      <main className="flex-1 p-6">
        <Navbar/>
        <StatCardGrid/>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* First card */}
            <div>
              <p className="text-sm text-gray-500">
                Built by developers   
              </p>

              <h1 className="text-xl font-bold text-gray-600 mt-2 leading-relaxed">
                Purity UI Dashboard
              </h1>

              <p className="text-xs mt-2 text-gray-600">
                From colors, cards, typography to complex elements, you will find the full documentation. 
              </p>

              <button className="text-sm font-medium text-teal-600  mt-20  cursor-pointer">
                Read more →
              </button>

            </div>
          <div className="flex items-center mb-1 justify-center bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-xl p-6">
              {/* <Zap size={32} className="mx-auto mb-4"/> */}
              <h1 className="text-3xl font-semibold mt-2 ">
                chakra
              </h1>
          </div> 
          </div>


          <div className="relative rounded-xl overflow-auto">
            <div className="absolute inset-0 bg-black/40">
              <img src="landing-page/app/working.jpg" 
                  alt="workspace" 
                  className="w-full h-full object-cover"
                  
              />
            </div>
                <h3 className="text-lg text-white font-bold absolute bottom-6 left-6">
                  Work with the Rockets
                </h3>
                <p className="text-sm text-white mt-2 absolute bottom-2 left-6">
                  Wealth creation is an evolutionarily recent positive-sum game.
                </p>
{/* 
              <div className="absolute bottom-6 left-6 text-white"> */}
              {/* </div>   */}
            {/* </div>        */}
          </div>
            
        </div>
      </main>
    </div>
  );
}