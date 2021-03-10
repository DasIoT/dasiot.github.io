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
    { ssr: false }
  )

  return (
    <div className="px-14 divide-y divide-gray-300">
      <Head>
        <title>DasIoT – Smart Construction With Ease</title>
      </Head>
      <Header />
      <main>
        <h1 id="product" className="title-font sm:text-4xl text-3xl pt-8 mb-4 font-medium text-gray-900">Product</h1>
        <HeroSection/>
        <MapView/>

        <h1 id="contact" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact</h1>
        <ContactSection/>
        
      </main>
      <Footer />
    </div>
  )
}
