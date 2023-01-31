import React from "react";
import CardSearch from "../CardSection/CardSearch";

const Tabs = ({ content }) => {
    const color = "slate";
    const [openTab, setOpenTab] = React.useState(0);
    let tabs = Object.keys(content);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        {tabs.map((item, index) =>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={item}>
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === index
                                            ? "text-white bg-[#0E0F0F]"
                                            : "text-" + color + "-600 bg-slate")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(index);
                                    }}
                                    data-toggle="tab"
                                    href={`#link${index}`}
                                    role="tablist"
                                >
                                    {item}
                                </a>
                            </li>
                        )}

                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="flex-auto">
                            <div className="tab-content tab-space">
                                {tabs.map((tab, index) =>
                                    <div className={openTab === index ? "block" : "hidden"} id={`link${index}`}>
                                        <div className="grid grid-cols-5 gap-x-6 gap-y-6 bg-[#0E0F0F]">
                                            {content[tab].map(item =>
                                                <CardSearch item={item} key={item.id} />
                                            )
                                        }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs