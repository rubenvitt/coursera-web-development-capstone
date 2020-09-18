import React from "react";
import {LayoutComponent} from "../components/layout.component";

export default function Home() {
    return (
        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Coursera
              <br className="xl:hidden" />
                <span className="text-orange-600">web development</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Welcome on my website for Coursera web development capstone course 09-2020! This app uses React (NextJS) with TailwindCSS web framework.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href={"https://github.com/rubenvitt/coursera-web-development-capstone"}
                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-700 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  View project on GitHub
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href={"/coursera-list"}
                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-700 bg-white hover:text-orange-500 focus:outline-none focus:border-orange-300 focus:shadow-outline-orange transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  View Coursera Course list
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}
