"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination" 
import { Urbanist } from "next/font/google" 
import "./slider.css"
const urbanist = Urbanist({ subsets: ["latin"],   weight: ["400", "500", "600", "700"]  })

const testimonials = [
  {
    name: "Iva Ryan",
    title: "TikToker",
    video: "https://media-hosting.imagekit.io//0ac241c717fc4f24/856213-hd_1920_1080_24fps.mp4?Expires=1831953825&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Xn9WTlwDunB~hZtjEkaRQCjAgx7uUV~2bS0Vni5ForrzGiG1TB70mOmObR~rf3SlHoG29cS6rSJvI7Oy1gDz2j01JqJxqi7c032oQxmz9kWWgEVL68dNgyipdug0G8cAp4PpSox5MF8JWqAIztbnuWHwxksQNgmeevxqwZGAk3s5XfMjxEHTfgV~RqYb~GQlZyaWIUdeWT3QHOZfFEziXrKYnGMYZMvXxJwkgURErwPzMr3zsuFbUwrTnzPSNMq09dUNhoKb5C2IEETGrTwdI3r5JKnvx2SJoCc--4jAeDTW3mP7AdnEKP7D2WjpUMNh8fH5oapZ7yKE54ERMe7znQ__",
    quote:
      "We have enjoyed working with BB for years now. We've worked together on redesigning our complete product offering, including mobile apps, chat-widget, helpdesk, and web app. Our collaboration has been effortless as we speak.",
    metadata: "10x Return, Authentic works, fast-paced",
  },
  {
    name: "John Ryan",
    title: "Financial Analyst",
    image: "https://images.unsplash.com/photo-1719588126773-2095e0d1e2ea?q=80&w=570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "We have enjoyed working with BB for years now. We've worked together on redesigning our complete product offering, including mobile apps, chat-widget, helpdesk, and web app. Our collaboration has been effortless as we speak.",
    metadata: "10x Return, Authentic works, fast-paced",
  },
  // Add more testimonials as needed
]

const StartEarningSlider = () => {   
    return (
      <div className={`${urbanist.className} w-full lg:p-0 p-4`}> 
      <section className="creatorSliderBannerBg lg:h-[739px] flex items-center "> 
  <div className="container mx-auto bg-white  flex flex-col justify-center border-2 border-gray-300 rounded-2xl py-[30px] "> 

    <h2 className="text-center text-xl md:text-[32px] font-semibold mb-8 leading-10 lg:flex lg:flex-col  items-center ">
    <span>  Our goal is to provide good opportunities for </span> 
      
    <span>  the Content creator to start earning </span> 
    </h2>

    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className="relative lg:px-4 px-2" 

        navigation={{
          prevEl: '.swiper-button-prev',  
          nextEl: '.swiper-button-next',  
      }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-purple-50 rounded-xl p-4 md:p-8 ">
              <div className="flex flex-col md:flex-row gap-6 items-start relative">
                <div className="w-full md:w-1/3">
                  {testimonial.video ? (
                    <video
                      src={testimonial.video}
                      controls
                      className="rounded-lg h-[320px] w-[550px] object-cover"
                    />
                  ) : (
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt=""
                      className="w-full rounded-lg  lg:h-[320px] h-[250px] object-cover"
                    />
                  )}
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-2 lg:mb-5 pb-3"> 
                    <img src="/img1.webp" className="w-[64px] h-[64px] rounded-full object-cover" alt="" /> 

                    <div  className="flex flex-col gap-1">
                    <h3 className="font-semibold text-[18px]">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 lg:text-[18px] text-[16px] font-semibold leading-relaxed lg:w-3/4 w-full">
                   &quot; {testimonial.quote} &quot;
                  </p>
                  <p className="text-[16px] text-gray-600 lg:absolute lg:bottom-4">{testimonial.metadata}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev   z-10  rounded-full bg-[#7A00F1] shadow-lg flex items-center justify-center  ">
                   <span>  <ChevronLeft className="" color='white' /> </span>
                </button>

                <button className="swiper-button-next  z-10  rounded-full bg-[#7A00F1] shadow-lg flex items-center justify-center  ">
                  <span>  <ChevronRight className="" color='white' /> </span> 
                </button>

      <div className="swiper-pagination flex justify-center gap-2 mt-6" />
    </div>
  </div>
      </section>
</div>

    );
};

export default StartEarningSlider;