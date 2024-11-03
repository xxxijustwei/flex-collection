'use client'

const Page = () => {
    return (
        <div className="w-full min-h-svh flex items-center justify-center">
            <div className="w-full min-h-svh max-w-[1240px] mx-8">
                <div className="w-full flex flex-wrap gap-x-4 p-4">
                    {
                        Array.from({ length: 14 }).map((_, index) => (
                            <div key={index} className="flex-grow aspect-[1/1.4] mt-4 rounded-lg overflow-hidden sm:basis-[calc(50%-16px)] md:basis-[calc(33.33%-16px)] lg:basis-[calc(25%-16px)] xl:basis-[calc(20%-16px)]">
                                <div className="w-full h-full">
                                    <img
                                        src={`https://www.miladymaker.net/milady/${index + 1}.png`}
                                        alt="image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))
                    }
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="sm:basis-[calc(50%-16px)] md:basis-[calc(33.33%-16px)] lg:basis-[calc(25%-16px)] xl:basis-[calc(20%-16px)]"
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Page;