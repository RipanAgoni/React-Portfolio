import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// --- Testimonial Data ---
// It's good practice to manage your data separately, often in an array of objects.
const testimonialsData = [
  {
    id: 1,
    image: '/assets/images/saatvik.webp', // Ensure this path is correct relative to your public folder
    alt: 'testimonial 1',
    quote:
      '“Anurag is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!”',
    name: 'Saatvik Nagpal',
    title: 'Founder, EazyGrad',
  },
  {
    id: 2,
    image: '/assets/images/kira.webp', // Ensure this path is correct
    alt: 'testimonial 2',
    quote:
      '“Anurag was a wonderful developer to work with! He anticipated everything I need to consider for my website. He also went the extra mile and added details that I hadn\'t considered! He is helping my business grow, and I will definitely work with him again!”',
    name: 'Kira Bragg',
    title: 'English Mentor',
  },
  {
    id: 3,
    image: '/assets/images/Srihari.webp', // Ensure this path is correct
    alt: 'testimonial 3',
    quote:
      '“I worked with Anurag to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.”',
    name: 'Srihari Kestur',
    title: 'Founder Harigurus',
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="max-w-screen-xl mx-auto pb-12">
      <h2
        className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md"
      >
        What my clients are saying?
      </h2>

      {/* Swiper Container */}
      <Swiper
        // Assign the same class as in your HTML
        className="mySwiper !py-14"
        // Install modules
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30} // Space between slides
        centeredSlides={true} // Center active slide
        loop={true} // Enable looping
        autoplay={{
          delay: 5000, // Time between slides in ms
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        navigation={{
          nextEl: '.swiper-button-next', // Use the custom class for next button
          prevEl: '.swiper-button-prev', // Use the custom class for previous button
        }}
        pagination={{
          el: '.swiper-pagination', // Use the custom class for pagination dots
          clickable: true, // Make pagination dots clickable
          dynamicBullets: true, // Optional: Dynamic bullets for visual effect
        }}
        // Responsive breakpoints for slidesPerView
        // This is crucial for showing multiple slides on larger screens
        breakpoints={{
          // When window width is >= 640px (sm breakpoint)
          640: {
            slidesPerView: 1, // Still 1 on small screens if you want full width
          },
          // When window width is >= 768px (md breakpoint)
          768: {
            slidesPerView: 1.2, // Show 1.2 slides, creating a peek effect
            spaceBetween: 40,
          },
          // When window width is >= 1024px (lg breakpoint)
          1024: {
            slidesPerView: 1.5, // Show 1.5 slides
            spaceBetween: 50,
          },
        }}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="px-4">
            {/* The individual testimonial card */}
            <div
              className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab mx-auto"
              // The original HTML had w-full but also max-w-[800px].
              // `mx-auto` added here to center the card within the SwiperSlide.
              // Note: Tailwind's `cursor-grab` doesn't directly translate to Swiper's drag behavior.
              // Swiper handles the drag behavior itself.
            >
              <img
                className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                src={testimonial.image}
                alt={testimonial.alt}
              />
              <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p className="text-sm md:text-base mb-2">
                  {testimonial.quote}
                </p>
                <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                  {testimonial.name}
                </h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                  {testimonial.title}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons (must be OUTSIDE SwiperSlide but INSIDE Swiper component) */}
        {/* These need to be positioned with CSS, as Swiper expects specific classes */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* Custom Pagination (must be OUTSIDE SwiperSlide but INSIDE Swiper component) */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default Testimonials;