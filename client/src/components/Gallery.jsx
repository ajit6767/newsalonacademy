import React, { useState } from 'react'

const GALLERY_IMAGES = [
  { id: 1, title: 'Salon Photo 01', category: 'Makeup', image: '/images/IMG-20250904-WA0007.jpg', alt: 'Salon photo 01' },
  { id: 2, title: 'Salon Photo 02', category: 'Hair', image: '/images/IMG-20250904-WA0008.jpg', alt: 'Salon photo 02' },
  { id: 3, title: 'Salon Photo 03', category: 'Skin', image: '/images/IMG-20250904-WA0009.jpg', alt: 'Salon photo 03' },
  { id: 4, title: 'Salon Photo 04', category: 'Nails', image: '/images/IMG-20250904-WA0010.jpg', alt: 'Salon photo 04' },
  { id: 5, title: 'Salon Photo 05', category: 'Makeup', image: '/images/IMG-20250904-WA0011.jpg', alt: 'Salon photo 05' },
  { id: 6, title: 'Salon Photo 06', category: 'Hair', image: '/images/IMG-20250904-WA0012.jpg', alt: 'Salon photo 06' },
  { id: 7, title: 'Salon Photo 07', category: 'Skin', image: '/images/IMG-20250904-WA0013.jpg', alt: 'Salon photo 07' },
  { id: 8, title: 'Salon Photo 08', category: 'Nails', image: '/images/IMG-20250904-WA0014.jpg', alt: 'Salon photo 08' },
  { id: 9, title: 'Salon Photo 09', category: 'Makeup', image: '/images/IMG-20250904-WA0015.jpg', alt: 'Salon photo 09' },
  { id: 10, title: 'Salon Photo 10', category: 'Hair', image: '/images/IMG-20250904-WA0016.jpg', alt: 'Salon photo 10' },
  { id: 11, title: 'Salon Photo 11', category: 'Skin', image: '/images/IMG-20250905-WA0001.jpg', alt: 'Salon photo 11' },
  { id: 12, title: 'Salon Photo 12', category: 'Nails', image: '/images/IMG-20250905-WA0002.jpg', alt: 'Salon photo 12' },
  { id: 13, title: 'Salon Photo 13', category: 'Makeup', image: '/images/IMG-20250905-WA0003.jpg', alt: 'Salon photo 13' },
  { id: 14, title: 'Salon Photo 14', category: 'Hair', image: '/images/IMG-20250905-WA0004.jpg', alt: 'Salon photo 14' },
  { id: 15, title: 'Salon Photo 15', category: 'Skin', image: '/images/IMG-20250906-WA0009.jpg', alt: 'Salon photo 15' },
  { id: 16, title: 'Salon Photo 16', category: 'Nails', image: '/images/IMG-20250906-WA0010.jpg', alt: 'Salon photo 16' },
  { id: 17, title: 'Salon Photo 17', category: 'Makeup', image: '/images/IMG-20250906-WA0011.jpg', alt: 'Salon photo 17' },
  { id: 18, title: 'Salon Photo 18', category: 'Hair', image: '/images/IMG-20250906-WA0012.jpg', alt: 'Salon photo 18' },
  { id: 19, title: 'Salon Photo 19', category: 'Skin', image: '/images/IMG-20250906-WA0014.jpg', alt: 'Salon photo 19' },
  { id: 20, title: 'Salon Photo 20', category: 'Nails', image: '/images/IMG-20250906-WA0015.jpg', alt: 'Salon photo 20' },
  { id: 21, title: 'Salon Photo 21', category: 'Makeup', image: '/images/IMG-20250906-WA0016.jpg', alt: 'Salon photo 21' },
  { id: 22, title: 'Salon Photo 22', category: 'Hair', image: '/images/IMG-20250906-WA0017.jpg', alt: 'Salon photo 22' },
  { id: 23, title: 'Salon Photo 23', category: 'Skin', image: '/images/IMG-20250906-WA0018.jpg', alt: 'Salon photo 23' },
  { id: 24, title: 'Salon Photo 24', category: 'Nails', image: '/images/IMG-20250906-WA0019.jpg', alt: 'Salon photo 24' },
  { id: 25, title: 'Salon Photo 25', category: 'Makeup', image: '/images/IMG-20250906-WA0020.jpg', alt: 'Salon photo 25' },
  { id: 26, title: 'Salon Photo 26', category: 'Hair', image: '/images/IMG-20250906-WA0021.jpg', alt: 'Salon photo 26' },
  { id: 27, title: 'Salon Photo 27', category: 'Skin', image: '/images/IMG-20250906-WA0022.jpg', alt: 'Salon photo 27' },
  { id: 28, title: 'Salon Photo 28', category: 'Nails', image: '/images/IMG-20250906-WA0023.jpg', alt: 'Salon photo 28' },
  { id: 29, title: 'Salon Photo 29', category: 'Makeup', image: '/images/IMG-20250906-WA0024.jpg', alt: 'Salon photo 29' },
  { id: 30, title: 'Salon Photo 30', category: 'Hair', image: '/images/IMG-20250906-WA0025.jpg', alt: 'Salon photo 30' },
  { id: 31, title: 'Salon Photo 31', category: 'Skin', image: '/images/IMG-20250906-WA0026.jpg', alt: 'Salon photo 31' },
  { id: 32, title: 'Salon Photo 32', category: 'Nails', image: '/images/IMG-20250906-WA0027.jpg', alt: 'Salon photo 32' },
  { id: 33, title: 'Salon Photo 33', category: 'Makeup', image: '/images/IMG-20250906-WA0028.jpg', alt: 'Salon photo 33' },
  { id: 34, title: 'Salon Photo 34', category: 'Hair', image: '/images/IMG-20250906-WA0029.jpg', alt: 'Salon photo 34' },
  { id: 35, title: 'Salon Photo 35', category: 'Skin', image: '/images/IMG-20250906-WA0030.jpg', alt: 'Salon photo 35' },
  { id: 36, title: 'Salon Photo 36', category: 'Nails', image: '/images/IMG-20250906-WA0031.jpg', alt: 'Salon photo 36' },
  { id: 37, title: 'Salon Photo 37', category: 'Makeup', image: '/images/WhatsApp Image 2025-09-04 at 20.14.07_6a2e7036.jpg', alt: 'Salon photo 37' },
  { id: 38, title: 'Salon Photo 38', category: 'Hair', image: '/images/WhatsApp Image 2025-09-07 at 14.42.55_01f6296c.jpg', alt: 'Salon photo 38' },
  { id: 39, title: 'Salon Photo 39', category: 'Skin', image: '/images/WhatsApp Image 2025-09-07 at 14.55.46_b4fe6833.jpg', alt: 'Salon photo 39' },
  { id: 40, title: 'Salon Photo 40', category: 'Nails', image: '/images/WhatsApp Image 2025-09-19 at 13.56.28_d3a23cd1.jpg', alt: 'Salon photo 40' },
  { id: 41, title: 'Salon Photo 41', category: 'Makeup', image: '/images/WhatsApp Image 2025-09-20 at 13.14.37_002a6a6c.jpg', alt: 'Salon photo 41' }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['All', 'Makeup', 'Hair', 'Skin', 'Nails']
  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory)

  return (
    <section className="mb-12">
      <h2 className="lux-section-title">Gallery</h2>
      <p className="lux-muted mb-6">A curated look at our signature artistry and finishes.</p>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              selectedCategory === cat
                ? 'lux-chip-active'
                : 'lux-chip'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map(image => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="relative group cursor-pointer overflow-hidden rounded-lg lux-card hover:shadow-xl transition"
          >
            <img
              src={image.image}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
              <p className="text-white text-center font-bold opacity-0 group-hover:opacity-100 transition px-4">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-gray-200"
            >
              ✕
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="w-full rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="lux-muted">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
