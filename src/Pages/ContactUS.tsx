import Header from '../components/Header'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/sections/Footer'

const ContactUS = () => {
  return (
    <div className='w-full'>

        <Header />
        <img src="/cont.png" alt="" className="w-full" />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default ContactUS