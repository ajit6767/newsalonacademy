import React from 'react'

const SLIDES = [
  { id: 1, image: '/images/IMG-20250904-WA0009.jpg' },
  { id: 2, image: '/images/IMG-20250904-WA0010.jpg' },
  { id: 3, image: '/images/IMG-20250904-WA0012.jpg' },
  { id: 4, image: '/images/IMG-20250904-WA0015.jpg' },
  { id: 5, image: '/images/Screenshot%202026-02-15%20185653.png' },
  { id: 6, image: '/images/Screenshot%202026-02-15%20185705.png' },
  { id: 7, image: '/images/WhatsApp%20Image%202026-02-15%20at%2018.59.37.jpeg' },
  { id: 8, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.00.21.jpeg' },
  { id: 9, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.34%20%281%29.jpeg' },
  { id: 10, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.34.jpeg' },
  { id: 11, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.35%20%281%29.jpeg' },
  { id: 12, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.35.jpeg' },
  { id: 13, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.36%20%281%29.jpeg' },
  { id: 14, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.36%20%282%29.jpeg' },
  { id: 15, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.36.jpeg' },
  { id: 16, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.37%20%281%29.jpeg' },
  { id: 17, image: '/images/WhatsApp%20Image%202026-02-15%20at%2019.02.37.jpeg' }
]

export default function Carousel() {
  return (
    <section className="mb-12">
      <h2 className="lux-section-title">Salon Showcase</h2>
      <p className="lux-muted mb-6">A moving window into our signature looks and rituals.</p>
      <div className="lux-carousel">
        <div className="lux-carousel-track">
          {[...SLIDES, ...SLIDES].map((slide, idx) => (
            <div key={`${slide.id}-${idx}`} className="lux-carousel-slide">
              <img src={slide.image} alt="Salon photo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
