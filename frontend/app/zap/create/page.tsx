"use client";

import { BACKEND_URL } from "@/app/config";
import { ZapCell } from "./components/ZapCell";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ZapModal from "./components/ZapModal";

function useAvailableActionsAndTriggers() {
    const [availableActions, setAvailableActions] = useState([]);
    const [availableTriggers, setAvailableTriggers] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/trigger/available`)
            .then(x => setAvailableTriggers(x.data.availableTriggers))

        axios.get(`${BACKEND_URL}/api/v1/action/available`)
            .then(x => setAvailableActions(x.data.availableActions))
    }, [])

    return {
        availableActions,
        availableTriggers
    }
}

export default function ZapCreation() {

    const router = useRouter();
    const { availableActions, availableTriggers } = useAvailableActionsAndTriggers();
    const [selectedTrigger, setSelectedTrigger] = useState<{
        id: string;
        name: string;
    }>();

    const [selectedActions, setSelectedActions] = useState<{
        index: number;
        availableActionId: string;
        availableActionName: string;
        metadata: any;
    }[]>([]);
    const [selectedModalIndex, setSelectedModalIndex] = useState<null | number>(null);

    const isZapReady = selectedTrigger && selectedActions.length > 0;

    const handlePublish = async () => {
        if (!selectedTrigger?.id) {
            return;
        }
        console.log("Click pushed");

        const response = await axios.post(`${BACKEND_URL}/api/v1/zap`, 
            {
            "availableTriggerId": selectedTrigger.id,
            "triggerMetadata": {},
            "actions": selectedActions.map(a => ({
                availableActionId: a.availableActionId,
                actionMetadata: a.metadata
            }
        ))
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });

        router.push("/dashboard");
    };

    return (
        <div className="pt-0">
            <div className="flex justify-end bg-slate-200 p-4">
                <button
                    className={`bg-purple-600 text-white px-4 py-2 rounded`}
                    onClick={() => { 
                        // console.log("Button clicked");
                        handlePublish(); 
                    }}
                >
                    Publish
                </button>
            </div>
            <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center">
                <div className="flex justify-center w-full">
                    <ZapCell 
                        type= 'Trigger'
                        onClick={() => setSelectedModalIndex(1)}
                        name={selectedTrigger?.name ? selectedTrigger.name : "Select the event that starts your Zap"} 
                        index={1} 
                    />
                </div>
                <div className="w-full pt-2 pb-2">
                    {selectedActions.length === 0 ? (
                        <div className="pt-2 flex justify-center">
                            <ZapCell 
                                type='Action'
                                onClick={() => setSelectedModalIndex(2)}
                                name="Select the event for your Zap to run"
                                index={2} 
                            />
                        </div>
                    ) : (
                        selectedActions.map((action, index) => (
                            <div key={index} className="pt-2 flex justify-center">
                                <ZapCell 
                                    type='Action'
                                    onClick={() => setSelectedModalIndex(action.index)} 
                                    name={action.availableActionName ? action.availableActionName : "Select the event for your Zap to run"} 
                                    index={action.index} 
                                />
                            </div>
                        ))
                    )}
                </div>
                <div className="flex justify-center">
                    <button 
                        onClick={() => {
                        setSelectedActions(a => [...a, {
                            index: selectedActions.length + 2,
                            availableActionId: "",
                            availableActionName: "",
                            metadata: {}
                        }]);
                    }}>
                        <div className="text-2xl text-purple-600">+</div>
                    </button>
                </div>
            </div>
            {selectedModalIndex && (
                <ZapModal 
                    index={selectedModalIndex}
                    availableItems={selectedModalIndex === 1 ? availableTriggers : availableActions}
                    onSelect={(props: null | { name: string; id: string; metadata: any; }) => {
                        if (props === null) {
                            setSelectedModalIndex(null);
                            return;
                        }
                        if (selectedModalIndex === 1) {
                            setSelectedTrigger({
                                id: props.id,
                                name: props.name
                            });
                        } else {
                            setSelectedActions(a => {
                                let newActions = [...a];
                                newActions[selectedModalIndex - 2] = {
                                    index: selectedModalIndex,
                                    availableActionId: props.id,
                                    availableActionName: props.name,
                                    metadata: props.metadata
                                };
                                return newActions;
                            });
                        }
                        setSelectedModalIndex(null);
                    }}
                />
            )}
        </div>
    );
}
