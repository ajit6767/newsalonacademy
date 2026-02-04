import React, { useState } from 'react'

const GALLERY_IMAGES = [
  { id: 1, title: 'Bridal Makeup', category: 'Makeup', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Bridal Makeup' },
  { id: 2, title: 'Party Makeup Look', category: 'Makeup', image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Party Makeup' },
  { id: 3, title: 'HD Makeup Application', category: 'Makeup', image: 'https://images.pexels.com/photos/3807523/pexels-photo-3807523.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'HD Makeup' },
  { id: 4, title: 'Professional Haircut', category: 'Hair', image: 'https://images.pexels.com/photos/3970669/pexels-photo-3970669.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Haircut' },
  { id: 5, title: 'Hair Styling', category: 'Hair', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Hair Styling' },
  { id: 6, title: 'Hair Treatment', category: 'Hair', image: 'https://images.pexels.com/photos/8350659/pexels-photo-8350659.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Hair Treatment' },
  { id: 7, title: 'Facial Treatment', category: 'Skin', image: 'https://images.pexels.com/photos/3987218/pexels-photo-3987218.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Facial' },
  { id: 8, title: 'Skin Care Service', category: 'Skin', image: 'https://images.pexels.com/photos/4458529/pexels-photo-4458529.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Skin Care' },
  { id: 9, title: 'Body Spa', category: 'Skin', image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Body Spa' },
  { id: 10, title: 'Nail Art Design', category: 'Nails', image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Nail Art' },
  { id: 11, title: 'Gel Polish Art', category: 'Nails', image: 'https://images.pexels.com/photos/3970669/pexels-photo-3970669.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Gel Polish' },
  { id: 12, title: 'Nail Extension', category: 'Nails', image: 'https://images.pexels.com/photos/4458529/pexels-photo-4458529.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Nail Extension' },
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
      <h2 className="text-3xl font-bold mb-1">Gallery</h2>
      <h3 className="text-2xl font-semibold text-pink-600 mb-6">गैलरी</h3>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded font-semibold transition ${
              selectedCategory === cat
                ? 'bg-pink-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-pink-200'
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
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
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
              <h3 className="text-xl font-bold text-pink-600">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
