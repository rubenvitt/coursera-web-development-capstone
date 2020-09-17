import React, {useState} from "react";

export default function Home({titleSetter}) {
    titleSetter("Contact")

    const [name, setName] = useState("");

    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        Contact me
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        This contact form is not usable, but should show you, what's my intention for a real portfolio website.
                    </p>
                </div>
                <div className="mt-12">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First
                                name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="first_name" onChange={event => setName(event.currentTarget.value)}
                                       className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last
                                name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="last_name"
                                       className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email"
                                   className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="email" type="email"
                                       className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block text-sm font-medium leading-5 text-gray-700">Message</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <textarea id="message" rows="4"
                                          className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
          <span className="w-full inline-flex rounded-md shadow-sm">
            <button type="button" onClick={() => alert("Hello, " + name)}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150">
              Get in touch
            </button>
          </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
