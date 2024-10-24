'use client';

import { useState } from "react";

import {  
    SolanaIcon, 
    WebhookIcon, 
    NotificationIcon, 
    GoogleCalendarIcon, 
    GoogleContactsIcon, 
    GoogleDocsIcon, 
    GoogleDriveIcon, 
    GmailIcon, 
    GoogleSheetsIcon, 
    GoogleSlidesIcon, 
    ZoomIcon, 
    SlackIcon, 
    NotionIcon 
} from "./Icons";

import { EmailSelector, SolanaSelector, CalendarSelector } from "./Selectors"

export default function ZapModal({ index, onSelect, availableItems }: { index: number, onSelect: (props: null | { name: string; id: string; metadata: any; }) => void, availableItems: {id: string, name: string, image: string;}[] }) {
    const [step, setStep] = useState(0);
    const [selectedAction, setSelectedAction] = useState<{
        id: string;
        name: string;
    }>();
    const isTrigger = index === 1;

    const getIconForId = (id: string) => {
        switch (id) {
            case 'email':
                return <GmailIcon />;
            case 'send-sol':
                return <SolanaIcon />;
            case 'webhook':
                return <WebhookIcon />;
            case 'google-calendar':
                return <GoogleCalendarIcon />;
            case 'google-contacts':
                return <GoogleContactsIcon />;
            case 'google-docs':
                return <GoogleDocsIcon />;
            case 'google-drive':
                return <GoogleDriveIcon />;
            case 'google-sheets':
                return <GoogleSheetsIcon />;
            case 'google-slides':
                return <GoogleSlidesIcon />;
            case 'zoom':
                return <ZoomIcon />;
            case 'slack':
                return <SlackIcon />;
            case 'notion':
                return <NotionIcon />;
            default:
                return null;
        }
    };

    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-slate-900 bg-opacity-75">
            <div className="relative p-6 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-lg">
                    <div className="flex items-center justify-between p-5 border-b rounded-t bg-gray-50">
                        <div className="text-lg font-semibold text-gray-700">
                            Select {isTrigger ? "Trigger" : "Action"}
                        </div>
                        <button 
                            onClick={() => onSelect(null)} 
                            type="button" 
                            className="text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-full p-2 transition-colors"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Make the modal content scrollable */}
                    <div className="p-6 space-y-6 overflow-y-auto max-h-[400px]">
                        {step === 1 && selectedAction?.id === "email" && (
                            <EmailSelector setMetadata={(metadata) => {
                                onSelect({
                                    ...selectedAction,
                                    metadata
                                });
                            }} />
                        )}

                        {step === 1 && selectedAction?.id === "send-sol" && (
                            <SolanaSelector setMetadata={(metadata) => {
                                onSelect({
                                    ...selectedAction,
                                    metadata
                                });
                            }} />
                        )}

                        {step === 0 && (
                            <div>
                                {availableItems.map(({ id, name, image }) => (
                                    <div 
                                        key={id} 
                                        onClick={() => {
                                            if (isTrigger) {
                                                onSelect({
                                                    id,
                                                    name,
                                                    metadata: {}
                                                });
                                            } else {
                                                setStep(s => s + 1);
                                                setSelectedAction({
                                                    id,
                                                    name
                                                });
                                            }
                                        }} 
                                        className="flex items-center border p-4 mb-3 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                                    >
                                        {getIconForId(id)}
                                        {/* <img src={image} width={30} className="rounded-full" alt={name} />  */}
                                        <div className="flex flex-col justify-center ml-4 text-gray-700 font-medium">{name}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
