import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './SwiperCom.css';
import alfarsBanner from '../../assets/banners/alfares-banner.webp'
import crocsBanner from '../../assets/banners/crocs-banner.webp'
import nikaBanner from '../../assets/banners/nika-banner.webp'
import mitraBanner from '../../assets/banners/mitra-banner.webp'
import sororBanner from '../../assets/banners/soror-banner.webp'


export function SwiperCom() {
    return (
        <>
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link><img src={alfarsBanner} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link><img src={crocsBanner} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link><img src={nikaBanner} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link><img src={mitraBanner} alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link><img src={sororBanner} alt="" /></Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}