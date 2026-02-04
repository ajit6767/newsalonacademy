import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'
import Gallery from '../components/Gallery'

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

export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header id="home" className="bg-gradient-to-r from-red-900 to-red-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <img src="/logo.svg" alt="The Ramayaana Salon" className="h-32 w-32 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Premium Women Salon & Academy</h1>
          <p className="text-2xl font-semibold text-pink-200">द राम्यान सैलून एंड एकेडमी</p>
          <p className="mt-4 text-xl text-yellow-100">Beauty • Care • Confidence</p>
          <p className="text-lg text-yellow-100">सुंदरता • देखभाल • आत्मविश्वास</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#book" className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700">Book Appointment</a>
            <a href="tel:8317097467" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-red-900">Call Now</a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-3">About</h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">हमारे बारे में</h3>
          <p className="text-gray-700">THE RAMAYAN SALON AND ACADEMY is a premium women-focused salon and training academy offering professional beauty services and expert training to help clients look and feel their best. Located at Nandanagar New Project Road, Near Shubham Sweet and Restaurant, we prioritise hygiene, skilled staff, and a comforting experience.</p>
          <p className="text-gray-700 mt-2 italic text-sm">द राम्यान सैलून एंड एकेडमी एक प्रीमियम महिला-केंद्रित सैलून और प्रशिक्षण अकादमी है जो पेशेवर सौंदर्य सेवाएं और विशेषज्ञ प्रशिक्षण प्रदान करती है। नंदनगर न्यू प्रोजेक्ट रोड, शुभम स्वीट और रेस्तरां के पास स्थित, हम स्वच्छता, कुशल कर्मचारी और आरामदायक अनुभव को प्राथमिकता देते हैं।</p>
        </section>

        <section id="admission" className="mb-12 bg-gradient-to-r from-pink-50 to-red-50 p-8 rounded-lg border-l-4 border-pink-600">
          <h2 className="text-3xl font-bold text-pink-700 mb-2">🎓 ADMISSION OPEN</h2>
          <h3 className="text-2xl font-bold text-pink-600 mb-4">🎓 प्रवेश खुला है</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Why Join Our Academy?</h3>
              <p className="text-gray-600 mb-2 text-sm">हमारी अकादमी में क्यों शामिल हों?</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Expert trainers with 10+ years experience (10+ वर्षों का अनुभव)</li>
                <li>✓ Hands-on practical training (व्यावहारिक प्रशिक्षण)</li>
                <li>✓ International standard curriculum (अंतर्राष्ट्रीय मानक पाठ्यक्रम)</li>
                <li>✓ Certification upon completion (पूरा करने पर प्रमाण पत्र)</li>
                <li>✓ Job placement assistance (नौकरी प्लेसमेंट सहायता)</li>
                <li>✓ Flexible batch timings (लचीले बैच समय)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Course Highlights</h3>
              <p className="text-gray-600 mb-2 text-sm">कोर्स की विशेषताएं</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Small batch sizes (5-8 students) - छोटे बैच आकार (5-8 छात्र)</li>
                <li>✓ Professional equipment provided (पेशेवर उपकरण प्रदान किए गए)</li>
                <li>✓ Live salon practice (लाइव सैलून प्रैक्टिस)</li>
                <li>✓ Industry-standard products (उद्योग-मानक उत्पाद)</li>
                <li>✓ Weekend batches available (सप्ताहांत बैच उपलब्ध)</li>
                <li>✓ Affordable course fees (सस्ती कोर्स फीस)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-lg font-bold text-red-900">📞 Call for admission: <a href="tel:8317097467" className="text-pink-600 hover:text-pink-700">8317097467</a></p>
            <p className="text-sm text-gray-700 mt-1">📞 प्रवेश के लिए कॉल करें: <a href="tel:8317097467" className="text-pink-600 hover:text-pink-700">8317097467</a></p>
          </div>
        </section>

        <section id="courses" className="mb-12">
          <h2 className="text-2xl font-bold mb-1">Our Courses & Curriculum</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-8">हमारे कोर्स और पाठ्यक्रम</h3>
          <div className="space-y-8">
            {['MAKEUP - Basic to Advance', 'HAIR', 'SKIN - Skin Care & Knowledge', 'NAILS'].map(category => {
              const details = COURSE_DETAILS[category];
              const catServices = SERVICES.filter(s => s.category === category);
              const hindiNames = {
                'MAKEUP - Basic to Advance': 'मेकअप - बेसिक से एडवांस',
                'HAIR': 'बाल',
                'SKIN - Skin Care & Knowledge': 'त्वचा - त्वचा देखभाल और ज्ञान',
                'NAILS': 'नाखून'
              };
              return (
                <div key={category} className="bg-white border-l-4 border-pink-600 p-6 rounded shadow-md">
                  <h3 className="text-2xl font-bold text-pink-600 mb-1">{category}</h3>
                  <p className="text-lg font-semibold text-pink-500 mb-3">{hindiNames[category]}</p>
                  <p className="text-gray-700 mb-4 italic">{details.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-1">📚 What You'll Learn:</h4>
                    <p className="font-bold text-gray-700 mb-2">📚 आप क्या सीखेंगे:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {details.curriculum.map((item, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <span className="text-pink-600 mr-2 flex-shrink-0">→</span>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Services Offered (सेवाएं प्रदान की जाती हैं):</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {catServices.map(s => (
                        <div key={s.title} className="p-2 bg-gray-50 rounded border-l-2 border-pink-400">
                          <p className="font-medium text-gray-800">• {s.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="book" className="mb-12">
          <BookingForm />
        </section>

        <section id="gallery" className="mb-12">
          <Gallery />
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-1">Contact</h2>
          <h3 className="text-xl font-semibold text-gray-600 mb-3">संपर्क करें</h3>
          <p className="mb-1"><span className="font-bold">Address:</span> Nandanagar New Project Road, Near Shubham Sweet and Restaurant</p>
          <p className="mb-2 text-gray-700 text-sm"><span className="font-bold">पता:</span> नंदनगर न्यू प्रोजेक्ट रोड, शुभम स्वीट और रेस्तरां के पास</p>
          <p className="mb-3"><span className="font-bold">Phone:</span> <a href="tel:8317097467" className="text-pink-600">8317097467</a></p>
          <p className="mb-3 text-gray-700 text-sm"><span className="font-bold">फोन:</span> <a href="tel:8317097467" className="text-pink-600">8317097467</a></p>
          <div className="mt-4">
            <iframe title="map" src="https://www.google.com/maps?q=Nandanagar%20New%20Project%20Road%20Near%20Shubham%20Sweet%20and%20Restaurant&output=embed" className="w-full h-64 border-0" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
