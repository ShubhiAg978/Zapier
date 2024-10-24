'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BACKEND_URL, HOOKS_URL } from '../config';
import { useEffect, useState } from 'react';

interface Zap {
    id: string;
    triggerId: string;
    userId: number;
    actions: {
        id: string;
        zapId: string;
        actionId: string;
        sortingOrder: number;
        type: {
            id: string;
            name: string;
            image: string;
        };
    }[];
    trigger: {
        id: string;
        zapId: string;
        triggerId: string;
        type: {
            id: string;
            name: string;
            image: string;
        };
    };
}

function useZaps() {
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState<Zap[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }

        axios.get(`${BACKEND_URL}/api/v1/zap`, {
            headers: {
                Authorization: token,
            },
        })
        .then(res => {
            setZaps(res.data.zaps);
            setLoading(false);
        })
        .catch(err => {
            setError('Failed to fetch zaps...');
            setLoading(false);
        });
    }, []);

    return { loading, zaps, error };
}

export default function ZapTable() {
    const router = useRouter();    
    const { loading, zaps, error } = useZaps();

    if (loading) return <div>Loading...</div>;

    if (error) return <div className="text-red-500">{error}</div>;

    if (zaps.length === 0) {
        return (
            <div className="flex justify-center items-center h-full">
                <div className="text-center bg-gray p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4">No Zaps Yet</h2>
                    <p className="text-gray-500 mb-8">
                        It looks like you haven't created any zaps yet. Let's get started by creating your first Zap!
                    </p>
                    <button
                        className="bg-purple-600 text-white px-8 py-3 rounded-md shadow hover:bg-blue-700 transition duration-150"
                        onClick={() => router.push('/zaps/create')}
                    >
                        + Create New Zap
                    </button>
                    <p className="text-gray-500 mt-6">
                        Not sure where to start? <a href="#" className="text-blue-600 underline">Get inspired by trying some popular Zap</a>.
                    </p>
                </div>
            </div>
        );
    }

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        alert('Webhook URL copied to clipboard!');
    };

    return (
        <div className="p-8 max-w-screen-lg w-full">
            <div className="flex font-bold">
                <div className="flex-1">Name</div>
                <div className="flex-1">ID</div>
                <div className="flex-1">Created at</div>
                <div className="flex-1">Webhook URL</div>
                {/* <div className="flex-1">Running</div> */}
                <div className="flex-1"></div>
            </div>
            {zaps.map(z => (
                <div key={z.id} className="flex border-b border-t py-4 items-center">
                    <div className="flex-1 flex items-center space-x-2">
                        <img src={z.trigger.type.image} className="w-[30px] h-[30px]" alt="Trigger" />
                        {z.actions.map(x => (
                            <img key={x.id} src={x.type.image} className="w-[30px] h-[30px]" alt="Action" />
                        ))}
                    </div>
                    <div className="flex-1">{z.id}</div> 
                    <div className="flex-1">{new Date().toLocaleDateString()}</div> 
                    <div className="flex-1 flex items-center">
                        <span>{`${HOOKS_URL}/hooks/catch/1/${z.id}`}</span>
                        <button
                            className="ml-2"
                            onClick={() => copyToClipboard(`${HOOKS_URL}/hooks/catch/1/${z.id}`)}>
                            <img src="/images/copy.gif" className="w-[20px] h-[20px]" alt="Copy" />
                        </button>

                        <button
                            className="ml-2"
                            onClick={() => router.push(`/zap/${z.id}`)}>
                                Go
                            <img src="/images/arrow-icon.png" className="w-[20px] h-[20px]" alt="Go" />
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
}
