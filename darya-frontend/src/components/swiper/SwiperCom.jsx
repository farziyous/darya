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
import alfarsBannerMobile from '../../assets/banners/alfares-banner-mobile.webp'
import crocsbannerMobile from '../../assets/banners/crocs-banner-mobile.webp'
import nikaBannerMobile from '../../assets/banners/nika-banner-mobile.webp'
import mitraBannerMobile from '../../assets/banners/mitra-banner-mobile.webp'
import sororBannerMobile from '../../assets/banners/soror-banner-mobile.webp'

export function SwiperCom({ categories }) {

    if (!categories) {
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
                        <Link><img src={alfarsBanner} alt="الفارس دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={crocsBanner} alt="کراکس دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={nikaBanner} alt="نیکا دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={mitraBanner} alt="میترا دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={sororBanner} alt="سرور دریا" /></Link>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper-mobile"
                >
                    <SwiperSlide>
                        <Link><img src={alfarsBannerMobile} alt="الفارس دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={crocsbannerMobile} alt="کراکس دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={nikaBannerMobile} alt="نیکا دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={mitraBannerMobile} alt="میترا دریا" /></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link><img src={sororBannerMobile} alt="سرور دریا" /></Link>
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }

    else {

        return (
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
                modules={[Autoplay]}
                className="products-swiper"
            >
                {
                    categories.map((category) =>
                        category.featured_product ? (
                            <SwiperSlide key={category.id}><div className="product-slide">
                                <Link to='' className='img-link'><img src={category.featured_product.default_image.path} alt={category.featured_product.title} /></Link> 
                                <div className='info'>
                                    <p>{category.featured_product.title}</p>
                                    <Link to='' className='link'>نمایش</Link>
                                </div>
                            </div></SwiperSlide>
                        ) : null
                    )
                }
            </Swiper>
        )
    }
}