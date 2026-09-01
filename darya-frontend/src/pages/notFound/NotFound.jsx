import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import './NotFound.css'

export const NotFound = () => {
    return (
        <>
            <Header />

            <div className="not-found-page-container">
                <p>صفحه مورد نظر یافت نشد</p>
            </div>

            <Footer />
        </>
    )
}