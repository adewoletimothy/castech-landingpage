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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div>
              <p className="text-sm text-gray-500">
                Built by developers   
              </p>

              <h1 className="text-xl font-bold text-gray-600 mt-2 leading-relaxed">
                Purity UI Dashboard
              </h1>

              <p className="text-sm text-gray-600 mt-4 ">
                From colors, cards, typography to complex elements, you will find the full documentation. 
              </p>

              <button className="text-sm font-medium text-teal-600  mt-6  cursor-pointer">
                Read more →
              </button>

            </div>
          </div>
          <div className="bg-linear-to-r from-teal-500 to-teal-400 text-white rounded-xl p-6 shadow-sm">
            Middle Card
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            Right Card
          </div>

        </div>
      </main>
    </div>
  );
}