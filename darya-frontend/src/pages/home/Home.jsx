import { Link } from 'react-router'
import { Header } from '../../components/header/Header'
import { SwiperCom } from '../../components/swiper/SwiperCom'
import './Home.css'
import mainBanner from '../../assets/banners/darya-shoes-banner.png'
import mainBannerMobile from '../../assets/banners/darya-shoes-banner-mobile.png'
import menSandal from '../../assets/banners/men-sandal-category.webp'
import womenSandal from '../../assets/banners/women-sandal-category.webp'
import plastic from '../../assets/banners/plastic-category.webp'
import katoni from '../../assets/banners/katoni.webp'
export const Home = () => {
    return (
        <>
            <title>کفش دریا</title>
            <Header />

            <div className="home-container">
                <div className="main-banner">
                    <img src={mainBanner} alt="بنر اصلی کفش دریا" className='main-banner-img' />
                    <img src={mainBannerMobile} alt="بنر اصلی کفش دریا" className='main-banner-mobile-img' />
                    <div className="categories">
                        <Link to=''><img src={menSandal} alt="صندل های مردانه دریا" className='category-img' /> <span>صندل مردانه</span></Link>
                        <Link to=''><img src={womenSandal} alt="صندل های زنانه دریا" className='category-img' /> <span>صندل زنانه</span></Link>
                        <Link to=''><img src={plastic} alt="پلاستیکی های دریا" className='category-img' /> <span>پلاستیکی</span></Link>
                        <Link to=''><img src={katoni} alt="کتونی های دریا" className='category-img' /><span>کتونی</span></Link>
                    </div>
                </div>
                <div className='swiper-container'>
                    <SwiperCom />
                </div>
                
            </div>
        </>
    )
}