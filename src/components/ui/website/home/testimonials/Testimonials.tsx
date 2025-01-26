'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import "./style.css"
import { Urbanist } from 'next/font/google'
import { IoStar } from 'react-icons/io5'

const urbanist = Urbanist({ subsets: ["latin"], weight: "400" })

const testimonials = [
    {
        id: 1,
        content: "I found the copywriting tool to be incredibly helpful in streamlining my writing process. It saved me time and helped me come up with more compelling copy.",
        author: "Mikaily Garayev",
        role: "Product Designer",
        avatar: "/img1.webp",
        rating: 5
    },
    {
        id: 2,
        content: "I found the copywriting tool to be incredibly helpful in streamlining my writing process. It saved me time and helped me come up with more compelling copy.",
        author: "Mikaily Garayev",
        role: "Product Designer",
        avatar: "/img2.jpg",
        rating: 5
    },
    {
        id: 3,
        content: "Using the copywriting ai tool helped me improve my writing skills by showing me where I could improve and offering suggestions for how to do it.",
        author: "Mikaily Garayev",
        role: "UX Designer",
        avatar: "/img3.jpg",
        rating: 5
    },
    {
        id: 4,
        content: "Using the copywriting ai tool helped me improve my writing skills by showing me where I could improve and offering suggestions for how to do it.",
        author: "Mikaily Garayev",
        role: "UX Designer",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KME6I06zIaDkgaLDIl7pT3HRIPq3F4.png",
        rating: 5
    },
    {
        id: 5,
        content: "Using the copywriting ai tool helped me improve my writing skills by showing me where I could improve and offering suggestions for how to do it.",
        author: "Mikaily Garayev",
        role: "UX Designer",
        avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KME6I06zIaDkgaLDIl7pT3HRIPq3F4.png",
        rating: 5
    }
]

export default function Testimonials() {
    return (
        <div className='testimonialsBannerBg  py-[300px] '>
            <div className=" mx-auto px-10 ">
                <h2 className="text-center text-4xl font-semibold pb-14">Testimonials</h2>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1250: {
                                slidesPerView: 4,
                            },
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                    >

                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className={`rounded-xl p-8 h-full ${index % 2 !== 0 ? 'bg-[#202020] text-white' : 'bg-white'}  transition-all duration-300`}>
                                    <div className="flex mb-4 items-center justify-center gap-[3px]">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <IoStar key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className={`mb-8 text-lg ${urbanist.className}`}>{testimonial.content}</blockquote>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.avatar || '/placeholder.svg'}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-medium">{testimonial.author}</div>
                                            <div className="text-sm text-zinc-500">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="swiper-button-prev   z-10  rounded-full bg-black shadow-lg flex items-center justify-center  ">
                        <span>  <ChevronLeft className="" color='white' /> </span>
                    </button>

                    <button className="swiper-button-next  z-10  rounded-full bg-black shadow-lg flex items-center justify-center  ">
                        <span>  <ChevronRight className="" color='white' /> </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

