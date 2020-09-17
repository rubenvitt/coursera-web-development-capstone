import React from "react";
import {CourseraItems} from "../data/coursera-items.component";

export default function Home({titleSetter}) {
    titleSetter("Coursera Course list")
    return (
        <div>
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">My favourite Coursera projects</h2>
            <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {
                    CourseraItems.map(item => {
                        return <li className="col-span-1 flex shadow-sm rounded-md">
                            <img src={item.img}
                                className="h-16 flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md" />
                            <div
                                className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                                <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                                    <a href="#"
                                       className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150">
                                        {item.long}
                                    </a>
                                    <p className="text-gray-500">Online Course</p>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
