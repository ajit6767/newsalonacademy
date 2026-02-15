import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import Carousel from '../components/Carousel'

const SERVICES = [
  // Makeup Services
  { category: 'MAKEUP - Basic to Advance', title: 'Regular Makeup' },
  { category: 'MAKEUP - Basic to Advance', title: 'Party Makeup' },
  { category: 'MAKEUP - Basic to Advance', title: 'Engagement Makeup' },
  { category: 'MAKEUP - Basic to Advance', title: 'Bridal Makeup' },
  { category: 'MAKEUP - Basic to Advance', title: 'HD Bridal Makeup' },
  { category: 'MAKEUP - Basic to Advance', title: 'Reception Makeup' },
  { category: 'MAKEUP - Basic to Advance', title: 'Fantasy Makeup' },
  { category: 'MAKEUP - Basic to Advance', title: 'Modeling Makeup' },
  // Hair Services
  { category: 'HAIR', title: 'Haircut (Basic to Advance)' },
  { category: 'HAIR', title: 'Hair Spa with Treatment' },
  { category: 'HAIR', title: 'Blow Dry Hair Styling' },
  { category: 'HAIR', title: 'Shampoo Conditioner' },
  // Skin Services
  { category: 'SKIN - Skin Care & Knowledge', title: 'Facial' },
  { category: 'SKIN - Skin Care & Knowledge', title: 'Clean-up' },
  { category: 'SKIN - Skin Care & Knowledge', title: 'D-tan & Bleach' },
  { category: 'SKIN - Skin Care & Knowledge', title: 'Body Polishing' },
  { category: 'SKIN - Skin Care & Knowledge', title: 'Body Spa' },
  { category: 'SKIN - Skin Care & Knowledge', title: 'Waxing & Threading' },
  { category: 'SKIN - Skin Care & Knowledge', title: 'Beed Wax' },
  { category: 'SKIN - Skin Care & Knowledge', title: 'Meni-pedi' },
  // Nails Services
  { category: 'NAILS', title: 'Cut File' },
  { category: 'NAILS', title: 'Gel Polish with Art' },
  { category: 'NAILS', title: 'Temporary Extension' },
  { category: 'NAILS', title: 'Acrylic Extension' }
]

const COURSE_DETAILS = {
  'MAKEUP - Basic to Advance': {
    description: 'Professional makeup courses from basics to advanced techniques',
    curriculum: ['Face contouring & highlighting', 'Color theory', 'Bridal makeup techniques', 'Party & event makeup', 'HD makeup application', 'Special effects makeup', 'Makeup product knowledge', 'Client consultation skills']
  },
  'HAIR': {
    description: 'Complete hair care and styling training program',
    curriculum: ['Hair cutting techniques', 'Hair coloring & treatment', 'Blow dry styling', 'Hair spa procedures', 'Scalp treatment', 'Hair health assessment', 'Styling for different face shapes', 'Professional hair care products']
  },
  'SKIN - Skin Care & Knowledge': {
    description: 'Professional skincare and beauty treatment courses',
    curriculum: ['Skin analysis & diagnosis', 'Facial techniques', 'Chemical peeling', 'Body care treatments', 'Threading & waxing', 'Dermatology basics', 'Product application', 'Client skin counseling']
  },
  'NAILS': {
    description: 'Nail art and extension certification program',
    curriculum: ['Nail anatomy', 'Nail filing & shaping', 'Gel polish application', 'Nail art designs', 'Extension techniques', 'Acrylic application', 'Nail health', 'Salon hygiene standards']
  }
}

const SIGNATURE_SERVICES = [
  {
    title: 'Bridal Couture Artistry',
    description: 'Long-wear, camera-ready finishes with precision detailing and bespoke styling.'
  },
  {
    title: 'Advanced Hair Design',
    description: 'Cut, color, and styling crafted to elevate your natural texture and silhouette.'
  },
  {
    title: 'Skin Rituals',
    description: 'Deep cleansing, hydration, and glow therapy tailored to your skin profile.'
  },
  {
    title: 'Nail Atelier',
    description: 'Luxury gel, extensions, and art with clean lines and flawless finishes.'
  }
]

const TESTIMONIALS = [
  {
    name: 'Aanya Kapoor',
    role: 'Bridal Client',
    text: 'Every detail was perfect. The finish, the calm studio, the confidence. Absolute luxury.'
  },
  {
    name: 'Ritika Sharma',
    role: 'Academy Graduate',
    text: 'The training is structured, practical, and modern. I felt industry-ready on day one.'
  },
  {
    name: 'Neha Verma',
    role: 'Salon Member',
    text: 'The team is professional and precise. I love the hygiene, care, and premium products.'
  }
]

const PARTNERS = ['Luxe Skin Lab', 'Studio Aesthetics', 'Velvet Bridal', 'Pure Glow Labs', 'Atelier Nails']

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header id="home" className="lux-hero py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="lux-kicker">Premium Women Salon & Academy</div>
          <h1 className="lux-hero-title">The Ramayan Salon & Academy</h1>
          <p className="lux-hero-sub text-lg md:text-xl">Luxury hair, skin, and makeup artistry with studio-grade training for the next generation of professionals.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#book" className="lux-button">Book Appointment</a>
            <a href="tel:8317097467" className="lux-button-outline">Call Now</a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <section id="about" className="mb-12 lux-reveal">
          <h2 className="lux-section-title">About</h2>
          <p className="lux-muted text-lg">The Ramayan Salon and Academy delivers couture beauty services with refined artistry, rigorous hygiene, and a calm, elevated guest experience. Our academy offers structured training led by experienced professionals, designed to build real-world mastery and confidence.</p>
        </section>

        <section className="mb-12 lux-reveal lux-hero-media">
          <div className="lux-hero-media-text">
            <p className="lux-kicker">Studio Experience</p>
            <h2 className="lux-section-title">A Salon Designed for Focused Artistry</h2>
            <p className="lux-muted text-lg">Step into a modern, serene space where every detail supports precision, comfort, and beauty that lasts.</p>
          </div>
          <div className="lux-hero-media-image">
            <img src="/images/IMG-20250904-WA0012.jpg" alt="Salon studio" />
          </div>
        </section>

        <section className="mb-12 lux-reveal">
          <h2 className="lux-section-title">Impact in Numbers</h2>
          <p className="lux-muted text-lg mb-6">A premium journey shaped by consistency, craftsmanship, and client trust.</p>
          <div className="lux-stats">
            <div className="lux-stat">
              <p className="lux-stat-number">12+</p>
              <p className="lux-muted">Years of artistry</p>
            </div>
            <div className="lux-stat">
              <p className="lux-stat-number">4,500+</p>
              <p className="lux-muted">Client transformations</p>
            </div>
            <div className="lux-stat">
              <p className="lux-stat-number">250+</p>
              <p className="lux-muted">Academy graduates</p>
            </div>
            <div className="lux-stat">
              <p className="lux-stat-number">98%</p>
              <p className="lux-muted">Client satisfaction</p>
            </div>
          </div>
        </section>

        <section className="mb-12 lux-reveal">
          <h2 className="lux-section-title">Signature Services</h2>
          <p className="lux-muted text-lg mb-6">Curated services that define our standards of luxury and precision.</p>
          <div className="lux-grid lux-stagger">
            {SIGNATURE_SERVICES.map(service => (
              <div key={service.title} className="lux-card lux-service-card">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="lux-muted mt-3">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="showcase" className="mb-12 lux-reveal">
          <Carousel />
        </section>

        <section id="admission" className="mb-12 lux-card p-10 md:p-12 lux-reveal">
          <h2 className="lux-section-title">Academy Admissions Open</h2>
          <p className="lux-muted mb-6 text-lg">Launch a career in beauty with structured training, real-world practice, and professional mentorship led by industry experts.</p>
          <img
            src="/images/WhatsApp%20Image%202026-02-15%20at%2018.59.37.jpeg"
            alt="Academy admission"
            className="w-full md:w-3/5 h-72 object-cover rounded-lg mb-8 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Why Join Our Academy</h3>
              <ul className="space-y-2 lux-muted text-lg">
                <li>Expert trainers with 10+ years of experience</li>
                <li>Hands-on practical training and live models</li>
                <li>International standard curriculum</li>
                <li>Certification upon completion</li>
                <li>Job placement assistance</li>
                <li>Flexible batch timings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Course Highlights</h3>
              <ul className="space-y-2 lux-muted text-lg">
                <li>Small batch sizes (5-8 students)</li>
                <li>Professional equipment provided</li>
                <li>Live salon practice</li>
                <li>Industry-standard products</li>
                <li>Weekend batches available</li>
                <li>Affordable course fees</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-lg md:text-xl font-semibold">Call for admission: <a href="tel:8317097467" className="lux-link">8317097467</a></p>
          </div>
        </section>

        <section id="services" className="mb-12 lux-reveal">
          <h2 className="lux-section-title">Academy Courses & Curriculum</h2>
          <p className="lux-muted mb-8 text-lg">Structured programs designed to deliver mastery, confidence, and industry readiness for modern salon careers.</p>
          <div className="space-y-8">
            {['MAKEUP - Basic to Advance', 'HAIR', 'SKIN - Skin Care & Knowledge', 'NAILS'].map(category => {
              const details = COURSE_DETAILS[category];
              const catServices = SERVICES.filter(s => s.category === category);
              return (
                <div key={category} className="lux-card p-6">
                  <h3 className="text-2xl font-semibold mb-1">{category}</h3>
                  <p className="lux-muted mb-4 italic">{details.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">What You Will Learn</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {details.curriculum.map((item, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <span className="lux-accent mr-2 flex-shrink-0">•</span>
                          <p className="lux-muted">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Services Offered</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {catServices.map(s => (
                        <div key={s.title} className="p-2 lux-surface rounded">
                          <p className="font-medium">{s.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-12 lux-reveal">
          <h2 className="lux-section-title">Testimonials</h2>
          <p className="lux-muted text-lg mb-6">Real words from clients and academy graduates.</p>
          <div className="lux-testimonial-track lux-stagger">
            {TESTIMONIALS.map(quote => (
              <div key={quote.name} className="lux-card lux-testimonial-card">
                <p className="lux-muted">"{quote.text}"</p>
                <p className="mt-4 font-semibold">{quote.name}</p>
                <p className="lux-muted text-sm">{quote.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 lux-reveal">
          <h2 className="lux-section-title">Awards and Partners</h2>
          <p className="lux-muted text-lg mb-6">Trusted by premium brands and communities.</p>
          <div className="lux-partner-row lux-stagger">
            {PARTNERS.map(partner => (
              <span key={partner} className="lux-partner">{partner}</span>
            ))}
          </div>
        </section>

        <section id="book" className="mb-12 lux-reveal">
          <BookingForm />
        </section>

        <section id="contact" className="mb-12 lux-reveal">
          <h2 className="lux-section-title">Contact</h2>
          <p className="mb-2"><span className="font-semibold">Address:</span> Nandanagar New Project Road, Near Shubham Sweet and Restaurant</p>
          <p className="mb-3"><span className="font-semibold">Phone:</span> <a href="tel:8317097467" className="lux-link">8317097467</a></p>
          <div className="mt-4">
            <iframe title="map" src="https://www.google.com/maps?q=Nandanagar%20New%20Project%20Road%20Near%20Shubham%20Sweet%20and%20Restaurant&output=embed" className="w-full h-64 border-0" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
