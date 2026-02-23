import { ArrowUpRight, Wallet } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
}

export default function StatCard({
  title,
  value,
  change,
}: StatCardProps) {
    return(
        <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute top-4 right-4 bg-teal-100 p-2 rounded-lg">
                <ArrowUpRight
                    size={16}
                    className="text-teal-600"
                />

            </div>
            <p className="text-sm text-gray-500">
                {title}
            </p>
            <h3 className="text-2xl text-black font-bold mt-2">
                {value}
            </h3>
            <p className="text-sm text-green-500 mt-2">
                {change}  

            </p>
        </div>
        
    )
}