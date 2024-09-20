import { Footer2 } from '@/components/sections/Footer2'
import Header from '../components/Header'
import ContactSection from '../components/sections/ContactSection'
import Footer3 from '@/components/sections/Footer3'

const ContactUS = () => {
  return (
    <div className='w-full'>

        <Header />
        <img src="/cont.png" alt="" className="w-full" />
        <ContactSection />
        <Footer3 />
        <Footer2 />
    </div>
  )
}

export default ContactUS