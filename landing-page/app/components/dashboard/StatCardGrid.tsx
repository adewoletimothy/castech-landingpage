import StatCard from './StatCard';
import { ArrowUpRight, Wallet } from "lucide-react";

export default function StatCardGrid() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="relative">
        
            <Wallet className="absolute top-4 right-4 bg-teal-100 p-2 rounded-lg"/>
                <StatCard 
                    title="Today's Money" 
                    value="$53,000" 
                    change="+55%"
                />
            </div>  
            <StatCard 
                title="Today's Users" 
                value="2,300" 
                change="+5%"
            />
            <StatCard 
                title="New Clients" 
                value="+3,052" 
                change="-14%"
            />
            <StatCard 
                title="Total Sales" 
                value="$173,000" 
                change="+8%"
            />
        </div>
    )
}