'use client'

import { useFlexCollection } from "@/hooks/use-flex-collection";
import { useState } from "react";

const Page = () => {
    const [rows, setRows] = useState({
        min: 1,
        max: 5,
    });
    const { FCRender } = useFlexCollection({
        maxWidth: 1680,
        minRows: rows.min || 1,
        maxRows: rows.max || 1,
        aspectRatio: 1 / 1.4,
        gap: 16,
    });

    return (
        <div className="w-full min-h-svh flex flex-col gap-4 items-center justify-center">
            <div className="w-full flex items-center justify-center gap-4">
                <div className="flex flex-col gap-2">
                    <div>Min Rows</div>
                    <input
                        type="number"
                        className="border border-gray-300 rounded-md p-1"
                        value={rows.min}
                        onChange={(e) => setRows({ ...rows, min: parseInt(e.target.value) })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div>Max Rows</div>
                    <input
                        type="number"
                        className="border border-gray-300 rounded-md p-1"
                        value={rows.max}
                        onChange={(e) => setRows({ ...rows, max: parseInt(e.target.value) })}
                    />
                </div>
            </div>
            <FCRender
                className="mx-6 p-4"
                items={
                    Array.from({ length: 7 }).map((_, index) => (
                        <div key={index} className="w-full h-full">
                            <img
                                src={`https://www.miladymaker.net/milady/${index + 1}.png`}
                                alt="image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))
                }
            />
        </div>
    )
}

export default Page;