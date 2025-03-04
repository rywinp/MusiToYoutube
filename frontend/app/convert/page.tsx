"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/header-app';
import Section1 from '@/components/section1-app';

export default function Convert() {
    const searchParams = useSearchParams();
    const URL = searchParams.get("URL");
    const BACKEND = "http://127.0.0.1:8000";
    const stepOne = `${BACKEND}/stepOne/`;

    const [stepOneData, setStepOneData] = useState(null);

    async function fetchData(): Promise<void> {
        if (!URL) return; // Prevent fetching if URL is null

        try {
            const stepOneURL = `${stepOne}${URL}`;
            console.log(stepOneURL);
            const response = await fetch(stepOneURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setStepOneData(data); // Update state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [URL]);

    return (
        <>
            <Header />
            <main className="flex">
                <Section1 data={stepOneData} />
            </main>
        </>
    );
}
