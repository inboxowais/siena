import { useState } from "react";
import Message from "@/components/Message";
import Menu from "@/components/Menu";

import { navigation } from "@/constants/navigation";
import Icon from "@/components/Icon";
import Answer from "@/components/Answer";
import Link from "next/link";
import Field from "@/components/Field";
import FaceBookPost from "./facebook.post";
import Image from "next/image";
import PageListPage from './../../PageListPage/index'
type MainProps = {};

const Main = ({ }: MainProps) => {
    const [message, setMessage] = useState<string>("");

    return (
        <>
            {/* <div className="grow px-10 py-20 overflow-y-auto scroll-xsooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
                <div className="mb-10 text-center">
                    <div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4">
                        Unlock the power of AI
                    </div>
                    <div className="body1 text-n-4 2xl:body1S">
                        Chat with the xsartest AI - Experience the power of AI
                        with us
                    </div>
                </div>
              
            </div> */}
            {/* <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            /> */}
            <div style={{ height: "100%", }}>
                <div className="flex h-full justify-end justify-items-between items-end w-full" style={{ background: "#FC5A5A", height: "25%", position: "relative" }}>
                    <div style={{ width: 100, height: 100, backgroundColor: "#FC5A5A", border: "3px solid #ffffff", borderRadius: 100, position: "absolute", left: 0, bottom: "-40px" }}>

                    </div>
                    <div className="flex h-full flex-col justify-end justify-items-between items-end w-full pb-1.5" style={{ marginLeft: 102 }} >
                        <div className="w-full text-white" style={{ backgroundColor: "background: rgba(255, 0, 0, 0.5" }}>Lawrance Nathaniel</div>
                        <div className="w-full text-white" style={{ backgroundColor: "background: rgba(255, 0, 0, 0.5" }}>@fawait</div>
                    </div>
                    <div className="flex">
                        <div>
                            <Icon
                                className="relative z-1"
                                fill={"#ffffff"}
                                name={"chat"}
                            />
                        </div>
                        <div>
                            <Icon
                                className="relative z-1"
                                fill={"#ffffff"}
                                name={"notification"}
                            />
                        </div>
                        <div>
                            <Icon
                                className="relative z-1"
                                fill={"#ffffff"}
                                name={"bell"}
                            />
                        </div>
                    </div>

                </div>
                <div style={{ height: "75%", paddingTop: 50, overflow: "auto" }}>
                    <div className="flex w-full">
                        <div className="w-1/4">
                            <Menu
                                items={navigation}
                                fontSizeSmall={true}
                            />
                            <div className="pt-4">
                                <Answer loading />
                            </div>
                            <div className="flex justify-items-between w-full items-between pt-4" style={{ justifyContent: "space-between", alignItems: "center" }}>
                                <div>Today Task</div>
                                <Link href={"#"} className="text-xs text-blue-400">View All</Link>
                            </div>
                            <div className="relative mt-2">

                                <Link className="block" href={"#"} >
                                    <div
                                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                                        className={`group py-3 pl-12 pr-3 rounded-xl transition-colors hover:bg-n-3/75 dark:hover:bg-n-5 ${"bg-n-3/75 dark:bg-n-5"
                                            }`}
                                    >
                                        <div>
                                            <div className="base1 font-semi bold dark:text-n-1">
                                                Leorem ipsum
                                            </div>
                                            <div className="mt-1 truncate caption1 text-n-4 text-xs">
                                                2 min ago
                                            </div>
                                        </div>
                                        <div>
                                            <Icon
                                                name="check-circle"
                                                fill="blue"
                                            />
                                        </div>

                                    </div>
                                </Link>
                            </div>

                        </div>

                        <div className="w-6/12 pl-2 flex flex-col">
                            <div className="w-full flex pb-2 " style={{ justifyContent: "space-between", alignItems: "start" }}>
                                <div className="font-bold text-xs p-2">
                             
                                    Post , ask anything
                                  
                                </div>
                                <div className="flex flex-wrap">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs m-1">
                                        <Link href="#">
                                        For Personal
                                        </Link>
                                        </button>
                                    <button className="bg-blue-400  hover:bg-blue-700 text-dark font-bold py-2 px-4 rounded-full text-xs m-1">For Work</button>
                                    <button className="bg-blue-400  hover:bg-blue-700 text-dark font-bold py-2 px-4 rounded-full text-xs m-1">For Creation</button>
                                    <button className="bg-blue-400  hover:bg-blue-700 text-dark font-bold py-2 px-4 rounded-full text-xs m-1">For Research</button>
                                    <button className="bg-blue-700 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-xs m-1">Share Post</button>
                                </div>
                            </div>
                            <Field
                                className="mb-6"

                                placeholder="Write me a post about the sun"
                                borderRadiusNone={true}
                                // noHoverEffect={true}
                                value={""}
                                onChange={() => {
                                    
                                }}
                                // onChange={(e: any) => setBio(e.target.value)}
                                textarea
                                required
                            />
                            <FaceBookPost />
                            <FaceBookPost />
                            <FaceBookPost />
                        </div>
                        <div className="w-3/12 pl-4">
                            <div className="flex flex-col">
                                <div className="flex" style={{ alignItems: "center" }}>
                                    <Icon
                                        name={"dots"}
                                        className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                                        size={10}
                                    />
                                    <div className="text-xs pl-2">
                                        Feed
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex" style={{ alignItems: "center" }}>
                                    <Icon
                                        name={"users-plus"}
                                        className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                                        size={10}
                                    />
                                    <div className="text-xs pl-2">
                                        Friends
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex" style={{ alignItems: "center" }}>
                                    <Icon
                                        name={"calendar"}
                                        className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                                        size={10}
                                    />
                                    <div className="text-xs pl-2">
                                        Event
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex" style={{ alignItems: "center" }}>
                                    <Icon
                                        name={"clock"}
                                        className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                                        size={10}
                                    />
                                    <div className="text-xs pl-2">
                                        Watch Videos
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex" style={{ alignItems: "center" }}>
                                    <Icon
                                        name={"profile"}
                                        className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                                        size={10}
                                    />
                                    <div className="text-xs pl-2">
                                        Photos
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex" style={{ alignItems: "center" }}>
                                    <Icon
                                        name={"sun"}
                                        className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                                        size={10}
                                    />
                                    <div className="text-xs pl-2">
                                        Files
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <div className="flex" style={{ alignItems: "center" }}>
                                    <Icon
                                        name={"card"}
                                        className="w-5 h-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                                        size={10}
                                    />
                                    <div className="text-xs pl-2">
                                        Mater card
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div>Your Card</div>
                                <Image
                                    className="object-cover "
                                    src={'/images/debit-card.jpg'}
                                    height={40}
                                    width={180}
                                    // fill
                                    alt="Avatar"
                                // "/images/avatar.jpg",

                                />
                            </div>
                            <div className="pt-4 mb-4">
                                <div className="">
                                    <div>Your Goals</div>
                                    <div className="flex flex-col border-solid border-2 p-2">
                                        <div className="flex w-full" style={{ justifyContent: "space-between" }} >
                                            <div >New House</div>
                                            <div className="text-blue-700">85%</div>
                                        </div>
                                        <div className="text-xs">June Ol,2020</div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ widows: "15%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="btn-blue w-full" href="/" >
                                Add New
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
