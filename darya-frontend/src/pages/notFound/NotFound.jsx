import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import './NotFound.css'

export const NotFound = () => {
    return (
        <>
            <title>صفحه یافت نشد | کفش دریا</title>
            <meta name="robots" content="noindex" />
            
            <Header />

            <div className="not-found-page-container">
                <p>صفحه مورد نظر یافت نشد</p>
            </div>

            <Footer />
        </>
    )
}