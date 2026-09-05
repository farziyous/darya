import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import './ContactUs.css'

export const ContactUs = () => {
    return (
        <>
            <title>ارتباط با ما</title>

            <Header />
            <div className='contact-container'>
                <h1 className='contact-us-title'>ارتباط مستقیم با دریا</h1>
                <form action="" className='contact-us-form'>
                    <div className='inputs'>
                        <div>
                            <label htmlFor="name">نام: </label>
                            <input type="text" id='name' />
                        </div>
                        <div>
                            <label htmlFor="phone">شماره تماس: </label>
                            <input type="tel" id='phone' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="text">پیام: </label>
                        <textarea id="text"></textarea>
                    </div>
                    <button>ارسال</button>
                </form>
            </div>
            <div className="map-wrap">
                <iframe
                    title="موقعیت پازین روی نقشه"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.5136594792974!2d50.875505246027856!3d34.640032224832524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f93bb11148a4f2d%3A0xc2360e43adb12784!2z2qnZgdi0INiv2LHbjNin!5e0!3m2!1sen!2s!4v1788513648125!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Footer />
        </>
    )
}