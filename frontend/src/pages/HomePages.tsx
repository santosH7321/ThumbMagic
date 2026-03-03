import TiltedImage from "../components/ThumbnailTitle"
import ContactSection from "../sections/ContactSection"
import FeaturesSection from "../sections/FeaturesSection"
import HeroSection from "../sections/HeroSection"
import PricingSection from "../sections/PricingSection"
import TestimonialSection from "../sections/TestimonialSection"

const HomePages = () => {
  return (
    <>
        <HeroSection />
        <TiltedImage />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
        <ContactSection />
    </>
  )
}

export default HomePages