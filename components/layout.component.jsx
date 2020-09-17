import React, {useState} from 'react';
import {MenuList} from "../data/menu.component";
import {useRouter} from "next/router";


export const LayoutComponent = ({children, header}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const route = useRouter().pathname;

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            <div className="md:hidden">
                <div className={`${menuOpen ? '' : 'hidden'} fixed inset-0 flex z-40`}>
                    {/*<!--
                      Off-canvas menu overlay, show/hide based on off-canvas menu state.

                      Entering: "transition-opacity ease-linear duration-300"
                        From: "opacity-0"
                        To: "opacity-100"
                      Leaving: "transition-opacity ease-linear duration-300"
                        From: "opacity-100"
                        To: "opacity-0"
                    -->*/}
                    <div onClick={() => toggleMenu()} className={`fixed inset-0`}>
                        <div className="absolute inset-0 bg-gray-600 opacity-75"/>
                    </div>
                    {/*<!--
                      Off-canvas menu, show/hide based on off-canvas menu state.

                      Entering: "transition ease-in-out duration-300 transform"
                        From: "-translate-x-full"
                        To: "translate-x-0"
                      Leaving: "transition ease-in-out duration-300 transform"
                        From: "translate-x-0"
                        To: "-translate-x-full"
                    -->*/}
                    <div
                        className={`${menuOpen ? '' : 'hidden'} relative flex-1 flex flex-col max-w-xs w-full bg-orange-800`}>
                        <div className="absolute top-0 right-0 -mr-14 p-1">
                            <button onClick={() => toggleMenu()}
                                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                                    aria-label="Close sidebar">
                                <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img className="h-8 w-auto"
                                     src="https://dev.rubeen.dev/assets/images/rubeen.png" alt="Rubeen"/>
                            </div>
                            <nav className="mt-5 px-2 space-y-1">
                                {
                                    MenuList.map(item => {
                                        return <a href={item.url}
                                                  className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${(item.url === route) ? 'text-white bg-orange-900' : 'text-orange-300 hover:text-white focus:text-white hover:bg-orange-700'} focus:bg-orange-700 transition ease-in-out duration-150`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 data-reactroot="" stroke="currentColor"
                                                 className="mr-4 h-6 w-6 text-orange-400 group-hover:text-orange-300 group-focus:text-orange-300 transition ease-in-out duration-150">{item.icon}</svg>
                                            {item.name}
                                        </a>
                                    })
                                }
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-orange-700 p-4">
                            <a href="https://github.com/rubenvitt" className="flex-shrink-0 group block focus:outline-none">
                                <div className="flex items-center">
                                    <div>
                                        <img className="inline-block h-10 w-10 rounded-full"
                                             src="https://dev.rubeen.dev/assets/images/profile.jpg"
                                             alt=""/>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base leading-6 font-medium text-white">
                                            Ruben Vitt
                                        </p>
                                        <p className="text-sm leading-5 font-medium text-orange-300 group-hover:text-orange-100 group-focus:underline transition ease-in-out duration-150">
                                            View my GitHub profile
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-14">
                    </div>
                </div>
            </div>

            <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64">
                    <div className="flex flex-col h-0 flex-1 bg-orange-800">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <img className="h-8 w-auto"
                                     src="https://dev.rubeen.dev/assets/images/rubeen.png" alt="Rubeen"/>
                            </div>
                            <nav className="mt-5 flex-1 px-2 bg-orange-800 space-y-1">
                                {MenuList.map(item => {
                                    return <a href={item.url}
                                              className={`group flex items-center px-2 py-2 text-sm leading-5 font-medium ${(item.url === route) ? 'text-white bg-orange-900' : 'text-orange-300 hover:text-white hover:bg-orange-700'} rounded-md focus:outline-none focus:bg-orange-700 transition ease-in-out duration-150`}>
                                        <svg
                                            className="mr-3 h-6 w-6 text-orange-400 group-focus:text-orange-300 transition ease-in-out duration-150"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
                                        {item.name}
                                    </a>
                                })}
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex border-t border-orange-700 p-4">
                            <a href="https://github.com/rubenvitt" className="flex-shrink-0 w-full group block">
                                <div className="flex items-center">
                                    <div>
                                        <img className="inline-block h-9 w-9 rounded-full"
                                             src="https://dev.rubeen.dev/assets/images/profile.jpg"
                                             alt=""/>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                    <button onClick={() => toggleMenu()}
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                            aria-label="Open sidebar">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                    <div className="pt-2 pb-6 md:py-6">
                        {
                            header ? <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">{header}</h1>
                            </div> : <></>
                        }
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};