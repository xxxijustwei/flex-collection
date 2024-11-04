import classNames from "classnames";

interface Props {
    maxWidth: number;
    minRows: number;
    maxRows: number;
    aspectRatio: number;
    gap: number;
}

export const useFlexCollection = ({ maxWidth, minRows, maxRows, aspectRatio, gap }: Props) => {

    const FCRender = ({ items, className }: { items: React.ReactNode[], className?: string }) => {
        return (
            <>
                <style>
                    {
                        `
                        .min-grow {
                            flex-basis: calc(${100 / minRows}% - ${gap}px);
                        }
                        @media (min-width: 640px) {
                            .sm-grow {
                                flex-basis: calc(${100 / (Math.min(minRows + 1, maxRows))}% - ${gap}px);
                            }
                        }
                        @media (min-width: 768px) {
                            .md-grow {
                                flex-basis: calc(${100 / (Math.min(minRows + 2, maxRows))}% - ${gap}px);
                            }
                        }
                        @media (min-width: 1024px) {
                            .lg-grow {
                                flex-basis: calc(${100 / (Math.min(minRows + 3, maxRows))}% - ${gap}px);
                            }
                        }
                        @media (min-width: 1280px) {
                            .xl-grow {
                                flex-basis: calc(${100 / (Math.min(minRows + 4, maxRows))}% - ${gap}px);
                            }
                        }
                        `
                    }
                </style>
                <div
                    className={classNames("w-full flex flex-wrap", className)}
                    style={{
                        maxWidth: `${maxWidth}px`,
                    }}
                >
                    <div
                        className="w-full flex flex-wrap"
                        style={{
                            columnGap: `${gap}px`,
                            marginTop: `-${gap}px`,
                        }}
                    >
                        {
                            items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-grow min-grow sm-grow md-grow lg-grow xl-grow"
                                    style={{
                                        aspectRatio,
                                        marginTop: `${gap}px`,
                                    }}
                                >
                                    {item}
                                </div>
                            ))
                        }
                        {
                            Array.from({ length: maxRows - 1 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex-grow min-grow sm-grow md-grow lg-grow xl-grow"
                                />
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }

    return {
        FCRender,
    }
}