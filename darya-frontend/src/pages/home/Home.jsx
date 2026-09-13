import { Link } from 'react-router'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { SwiperCom } from '../../components/swiper/SwiperCom'
import { ProductCard } from '../../components/product/ProductCard'
import { BlogCard } from '../../components/blog/BlogCard'
import './Home.css'
import mainBanner from '../../assets/banners/darya-shoes-banner.webp'
import mainBannerMobile from '../../assets/banners/darya-shoes-banner-mobile.webp'
import menSandal from '../../assets/banners/men-sandal-category.webp'
import womenSandal from '../../assets/banners/women-sandal-category.webp'
import plastic from '../../assets/banners/plastic-category.webp'
import katoni from '../../assets/banners/katoni.webp'

export const Home = ({ products, categories, blogs }) => {
    return (
        <>
            <title>کفش دریا</title>
            <meta name="description" content="فروشگاه آنلاین کفش دریا - صندل، پلاستیکی، کتونی مردانه و زنانه با کیفیت بالا و قیمت مناسب. خرید آنلاین انواع کفش و صندل." />
            
            <Header />

            <div className="home-container">
                <div className="main-banner">
                    <img src={mainBanner} alt="بنر اصلی کفش دریا" className='main-banner-img' />
                    <img src={mainBannerMobile} alt="بنر اصلی کفش دریا" className='main-banner-mobile-img' />
                    <div className="categories">
                        <Link to='products?category=men-sandal'><img src={menSandal} alt="صندل های مردانه دریا" className='category-img' /> <span>صندل مردانه</span></Link>
                        <Link to='products?category=women-sandal'><img src={womenSandal} alt="صندل های زنانه دریا" className='category-img' /> <span>صندل زنانه</span></Link>
                        <Link to='products?category=plastic'><img src={plastic} alt="پلاستیکی های دریا" className='category-img' /> <span>پلاستیکی</span></Link>
                        <Link to='products?category=sneakers'><img src={katoni} alt="کتونی های دریا" className='category-img' /><span>کتونی</span></Link>
                    </div>
                </div>
                <div className='swiper-container'>
                    <SwiperCom />
                </div>
                <div className="new-products-container">
                    <h1>جدیدترین ها</h1>
                    <div className="new-products">
                        {products.slice(0, 6).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <div className="products-swiper">
                    <h1>محبوب ترین ها</h1>
                    <SwiperCom categories={categories} />
                </div>
                <div className="new-blogs-container">
                    <h1>جدیدترین مقاله ها</h1>
                    <div className="new-blogs">
                        {blogs.slice(0, 3).map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}