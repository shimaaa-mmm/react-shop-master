import Aboutsection from "@components/homepage/section-1/about-section"
import Intro from "@components/homepage/section-2/intro"
import ReservationArea from "@components/homepage/section-3/ReservationArea"
import GallerySection from "@components/homepage/section-4/GallerySection"
import ReviewArea from "@components/homepage/section-5/Review"
import BlogSection from "@components/homepage/section-6/BlogPosts"
import { Map } from "../Map/Map"

export const Home = () => {
   
    return (
        <div>
           <Aboutsection/>
           <Intro/>
           <ReservationArea/>
           <GallerySection/>
           <ReviewArea/>
           <BlogSection/>
           <Map/>
        </div>
    )
}
