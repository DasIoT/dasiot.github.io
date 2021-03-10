import React from 'react'

export default function ContactSection() {
    return <section className="text-gray-600 body-font relative mb-8">
        <div className="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" scrolling="no" style={{ filter: `grayscale(0.5) contrast(1.2) opacity(0.4)`, pointerEvents: 'none' }} src="https://maps.google.com/maps?ll=25.069082, 121.535371&amp;width=100%25&amp;height=600&amp;hl=en&amp;q=10452%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%B1%B1%E5%8D%80%E7%8E%89%E9%96%80%E8%A1%971%E8%99%9F+(DasIot)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us with email</h2>
                {/* <p className="leading-relaxed mb-5 text-gray-600">We will reach out to you shortly</p> */}
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email*</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message*</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
                <p className="text-xs text-gray-500 mt-3">We will reach out to you shortly.</p>
            </div>
        </div>
    </section>
}