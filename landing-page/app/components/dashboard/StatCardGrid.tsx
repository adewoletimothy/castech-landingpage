import StatCard from './StatCard';
import {Wallet , Globe, ScrollText, ShoppingCart} from "lucide-react";

export default function StatCardGrid() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="relative">
        
            
            <StatCard 
                title="Today's Money" 
                value="$53,000" 
                change="+55%"
                icon = {Wallet}
            />
            </div>
            <StatCard 
                title="Today's Users" 
                value="2,300" 
                change="+5%"
                icon={Globe}
            />

            <StatCard 
                title="New Clients" 
                value="+3,052" 
                change="-14%"
                icon={ScrollText}
            />
            <StatCard 
                title="Total Sales" 
                value="$173,000" 
                change="+8%"
                icon={ShoppingCart}
            />
        </div>
    )
}