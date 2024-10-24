'use client';

import { useState } from "react";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { Input } from "@/components/buttons/Input";

// EmailSelector Component
export function EmailSelector({ setMetadata }: { setMetadata: (params: any) => void; }) {
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    return (
        <div>
            <Input label={"To"} type={"text"} placeholder="To" onChange={(e) => setEmail(e.target.value)} />
            <Input label={"Body"} type={"text"} placeholder="Body" onChange={(e) => setBody(e.target.value)} />
            <div className="pt-2">
                <PrimaryButton onClick={() => {
                    setMetadata({ email, body });
                }}>Submit</PrimaryButton>
            </div>
        </div>
    );
}

// SolanaSelector Component
export function SolanaSelector({ setMetadata }: { setMetadata: (params: any) => void; }) {
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div>
            <Input label={"To"} type={"text"} placeholder="To" onChange={(e) => setAddress(e.target.value)}></Input>
            <Input label={"Amount"} type={"text"} placeholder="₹" onChange={(e) => setAmount(e.target.value)}></Input>
            <div className="pt-4">
                <PrimaryButton onClick={() => {
                    setMetadata({
                        amount,
                        address
                    });
                }}>Submit</PrimaryButton>
            </div>
        </div>
    );
}

// CalendarSelector Component
export function CalendarSelector({ setMetadata }: { setMetadata: (params: any) => void; }) {
    const [eventTitle, setEventTitle] = useState("");
    const [eventDate, setEventDate] = useState("");

    return (
        <div>
            <Input label={"Event Title"} type={"text"} placeholder="Event Title" onChange={(e) => setEventTitle(e.target.value)} />
            <Input label={"Event Date"} type={"text"} placeholder="Event Date" onChange={(e) => setEventDate(e.target.value)} />
            <div className="pt-4">
                <PrimaryButton onClick={() => {
                    setMetadata({
                        eventTitle,
                        eventDate
                    });
                }}>Submit</PrimaryButton>
            </div>
        </div>
    );
}

