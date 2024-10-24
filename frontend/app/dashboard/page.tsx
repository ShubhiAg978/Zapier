"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ZapTable from './ZapTable';

// export const metadata = {
//     title: 'Home | Zapier',
//     description: "Workflow automation software for everyone. Zapier automates your work across 7000+ app integrations, so you can focus on what matters.",
// }

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/signin');
        }
    }, [router]);

    return (
        <div className="flex justify-center pt-10 h-screen">
            <div className="max-w-screen-lg w-full">
                <div className="flex justify-between pr-8">
                    <div className="text-2xl font-bold">My Zaps</div>
                    <button
                        className="bg-purple-600 text-white px-4 py-2 rounded"
                        onClick={() => router.push('/zap/create')}>
                        + Create
                    </button>
                </div>
                <div className="flex justify-center mt-8">
                    <ZapTable />
                </div>
            </div>
        </div>
    );
}
