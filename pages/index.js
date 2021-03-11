import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ContactSection from '../components/ContactSection'
import 'cesium/Build/Cesium/Widgets/widgets.css'

export default function Home() {
  const MapView = dynamic(
    () => import('../components/MapView'),
    {
      ssr: false,
      loading: () => <div className="flex justify-center items-center h-48">
        <span>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-300" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-15" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        <h2> Dashboard example is loading... </h2>
      </div>
    }
  )

  return (
    <div className="px-14 divide-y divide-gray-300">
      <Head>
        <title>DasIoT – Smart Construction With Ease</title>
      </Head>
      <Header />
      <main>
        <h1 id="product" className="title-font sm:text-4xl text-3xl pt-8 mb-4 font-medium text-gray-900">Product</h1>
        <HeroSection />
        <MapView/>

        <h1 id="contact" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact</h1>
        <ContactSection />

      </main>
      <Footer />
    </div>
  )
}
