import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout/layout"
import CallToAction from "../components/sections/call-to-action/call-to-action"
import ServiceList from "../components/sections/service-list/service-list"
import ServiceHero from "../components/sections/service-hero/service-hero"

const services = [
  {
    title: "General Janitorial and Facility Cleaning",
    description:
      "Routine cleaning services designed to keep your space clean, organized, and inviting. Our trained team ensures every corner is spotless, creating a professional environment for your business.",
    tags: [
      "Dusting and vacuuming",
      "Trash removal",
      "Restroom cleaning and sanitizing",
      "Floor maintenance",
    ],
    image: "/images/janitorial/Desktop/service1.jpg",
  },
  {
    title: "Deep Cleaning",
    description:
      "When your space requires more than surface-level care, our deep cleaning services tackle every nook and cranny, leaving your facility refreshed and immaculate.",
    tags: [
      "High-touch surface sanitization",
      "Furniture and floor detailing",
      "Baseboard, vent, and hard-to-reach area cleaning",
    ],
    image: "/images/janitorial/Desktop/service2.jpg",
  },
  {
    title: "Sanitation Cleaning",
    description:
      "Prioritize health and safety with our specialized sanitation cleaning services. Using advanced techniques and EPA-approved products, we create a hygienic environment for staff and visitors.",
    tags: [
      "Disinfection of high-traffic areas",
      "Customized solutions for specific needs",
      "Focus on health compliance",
    ],
    image: "/images/janitorial/Desktop/service3.jpg",
  },
  {
    title: "Day Porter Services",
    description:
      "Keep your facility consistently clean throughout the day with our day porter services. From restocking restrooms to maintaining lobbies, we ensure your space remains welcoming.",
    tags: [
      "Restocking restroom supplies",
      "Continuous trash removal",
      "Maintaining cleanliness in high-traffic areas",
    ],
    image: "/images/janitorial/Desktop/service4.jpg",
  },
  {
    title: "Strip & Wax Services",
    description:
      "Bring your floors back to life with our strip and wax service. We remove old finishes, apply high-quality wax, and polish your floors for a durable and glossy look.",
    tags: [
      "Removal of old floor finishes",
      "Application of protective wax layers",
      "Polishing for a smooth and shiny finish",
    ],
    image: "/images/janitorial/Desktop/service5.jpg",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Extend the life of your carpets and keep them looking like new with our professional carpet cleaning services.",
    tags: [
      "Stain removal and deep cleaning",
      "Texture revitalization",
      "Fabric-safe and eco-friendly methods",
    ],
    image: "/images/janitorial/Desktop/service6.jpg",
  },
  {
    title: "Spot Cleaning",
    description:
      "Quick and effective spot cleaning services to address stains and spills promptly.",
    tags: [
      "Stain removal for furniture, carpets, and surfaces",
      "Specialized solutions for stubborn marks",
      "Minimal drying time",
    ],
    image: "/images/janitorial/Desktop/service7.jpg",
  },
  {
    title: "Window Cleaning",
    description:
      "Enhance the appearance of your building with crystal-clear windows that let in more light.",
    tags: [
      "Interior and exterior window cleaning",
      "Streak and smudge removal",
      "Safe techniques for all types of windows",
    ],
    image: "/images/janitorial/Desktop/service8.jpg",
  },
  {
    title: "Green Cleaning",
    description:
      "Our eco-friendly cleaning solutions provide the same exceptional results while minimizing environmental impact. Perfect for businesses that value sustainability.",
    tags: [
      "Use of organic and biodegradable products",
      "Practices that reduce water and energy usage",
      "Certified to national and state standards",
    ],
    image: "/images/janitorial/Desktop/service9.jpg",
  },
  {
    title: "Ozone Cleaning",
    description:
      "Using cutting-edge ozone technology, we eliminate odors, bacteria, and viruses to create a cleaner and fresher space.",
    tags: [
      "Odor neutralization",
      "Air and surface disinfection",
      "Effective against bacteria, viruses, and allergens",
    ],
    image: "/images/janitorial/Desktop/service10.jpg",
  },
]

const janitorialStats = [
  { number: "1,650+", label: "Facilities Cleaned" },
  { number: "18", label: "Years of Service" },
  { number: "98%", label: "Satisfaction Rate" },
]

const ctaTitle = `Not sure what service you need?`
const ctaDescription = `Let us help you find the perfect cleaning solution for your business. Get in touch today<br/> to schedule a consultation or request a free quote.`

const Janitorial = () => (
  <Layout>
    <ServiceHero
      subtitle="Professional Janitorial Services"
      title="Janitorial"
      description="Our professional janitorial services ensure your business maintains a clean, hygienic, and welcoming environment. From routine cleaning to tackling tough messes, we’ve got you covered."
      stats={janitorialStats}
    />
    <ServiceList services={services}></ServiceList>
    <CallToAction title={ctaTitle} description={ctaDescription} />
  </Layout>
)

export default Janitorial
