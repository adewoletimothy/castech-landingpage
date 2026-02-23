import { ArrowUpRight, Wallet } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    icon: any;
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
}: StatCardProps) {
    const isPositive = change.startsWith('+');
    return(
        <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute top-4 right-4 bg-teal-100 p-2 rounded-lg">
                <Icon
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
            <p className={`text-sm mt-2 ${isPositive ? "text-green-500" : "text-red-500"}`}>
                {change}  

            </p>
        </div>
        
    )
}