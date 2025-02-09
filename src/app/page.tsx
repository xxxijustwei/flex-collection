'use client'

const Page = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full max-w-[1240px] mx-8">
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full">
                    {
                        Array.from({ length: 14 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative rounded-lg aspect-[4/5] overflow-hidden"
                            >
                                <img
                                    src={`https://www.miladymaker.net/milady/${index + 1}.png`}
                                    alt="image"
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Page;