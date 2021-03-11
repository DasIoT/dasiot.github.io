import React from 'react'

export default function Header() {
  return <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
          height="64px"
          width="64px"
          src="/logo.png"
        />
      </a>
      <span className="ml-3 text-xl italic"> – All In One Smart Construction With Ease </span>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900" href="#">Home</a>
        <a className="mr-5 hover:text-gray-900" href="#product">Product</a>
        <a className="mr-5 hover:text-gray-900" href="#contact">Contact</a>
      </nav>
    </div>
  </header>
}
