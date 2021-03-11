import React from 'react'

export default function HeroSection() {
    return <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" id="product">Product</h1> */}
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-gray-900">
                    DasIoT
      </h1>
                <p className="mb-8 leading-relaxed">DasIoT is an all in one IoT platform that helps you to manage construction sites with custom IoT devices integration.</p>
                <span><a className="underline hover:text-gray-900" href="#contact">Contact us</a> for more detail.</span>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                <img className="object-cover object-center rounded" alt="hero" src="arch.png" />
            </div>
        </div>
    </section>
}
