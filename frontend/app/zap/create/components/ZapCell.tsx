"use client"

import { useState } from 'react';

export const ZapCell = ({
    name,
    index,
    type,
    onClick
    // onRename,
    // onDelete
}: {
    name?: string; 
    index: number;
    type: 'Trigger' | 'Action'; 
    onClick: () => void;
    // onRename: () => void;
    // onDelete: () => void;
}) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="flex items-start">
            {/* ZapCell content */}
            <div className="border-2 border-dashed border-black py-6 px-8 flex w-[350px] rounded bg-white justify-center relative">
                {/* Small box for "Trigger" or "Action" */}
                <div onClick={onClick} 
                    className="absolute border border-black top-1 left-1 bg-gray-200 text-xs text-black px-2 py-1 rounded">
                    {type}
                </div>
                
                {/* ZapCell Content */}
                <div className="flex text-l text-gray-500 mt-4">
                    <div className="font-bold mr-2">
                        {index}. 
                    </div>
                    <div>
                        {name}
                    </div>
                </div>
            </div>

            {/* Three vertical dots for options */}
            {/* <div className="ml-4 relative">
                <button onClick={() => setShowOptions(!showOptions)} className="text-gray-500 text-xl">
                    &#x22EE;
                </button>

                {showOptions && (
                    <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded shadow-lg">
                        <button 
                            // onClick={onRename} 
                            className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-gray-100"
                        >
                            Rename
                        </button>
                        <button 
                            // onClick={onDelete} 
                            className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-gray-100"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div> */}
        </div>
    );
};
