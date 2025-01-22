import React from 'react'
import PaymentCard from './MainAdminPaymentsCompo/PaymentCard'
import PaymentChart from './MainAdminPaymentsCompo/PaymentChart'
import { Plus } from 'lucide-react';

const MainAdminPaymentsPage = () => {
    return (
        <div className='p-4 lg:pl-64 '>

            <div className=" flex justify-between items-center mb-4 ">
                <div className="flex items-center gap-2">
                    <span className="text-gray-900 font-medium">Dashboard</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-emerald-500">Payments</span>
                </div>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
                    <Plus size={20} />
                    Add Class
                </button>
            </div>
            <PaymentCard />

            <PaymentChart />
        </div>
    )
}

export default MainAdminPaymentsPage