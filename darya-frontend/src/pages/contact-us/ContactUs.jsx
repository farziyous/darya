import { useState } from 'react'
import { useSearchParams } from 'react-router'
import axios from 'axios'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import './ContactUs.css'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export const ContactUs = () => {
    const [searchParams] = useSearchParams()
    const aboutProduct = searchParams.get('about') || ''

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState(
        aboutProduct ? `ارسال پیام در مورد ${aboutProduct}:` : ''
    )
    const [status, setStatus] = useState('idle')
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name.trim() || !phone.trim() || !message.trim()) {
            setStatus('error')
            setErrorMsg('لطفا تمام فیلدها را پر کنید')
            return
        }
        else if (name.trim().length < 2) {
            setStatus('error')
            setErrorMsg('نام نامعتبر است')
            return
        }
        else if (phone.trim().length < 10 || !/^\d+$/.test(phone.trim())) {
            setStatus('error')
            setErrorMsg('تلفن نامعتبر است')
            return
        }

        setStatus('sending')
        setErrorMsg('')

        try {
            await axios.post(`${API_BASE}/contact/`, {
                name,
                phone,
                message,
            })

            setStatus('success')
            setName('')
            setPhone('')
            setMessage('')
        } catch (err) {
            setStatus('error')
            setErrorMsg(
                err.response?.data?.error ||
                err.response?.data?.detail ||
                'ارسال پیام با خطا مواجه شد'
            )
        }
    }

    return (
        <>
            <title>ارتباط با ما</title>
            <meta name="description" content="تماس با فروشگاه کفش دریا - برای سوالات، سفارشات و مشاوره خرید با ما در ارتباط باشید." />

            <Header />
            <div className='contact-container'>
                <h1 className='contact-us-title'>ارتباط مستقیم با دریا</h1>
                <form onSubmit={handleSubmit} className='contact-us-form'>
                    <div className='inputs'>
                        <div>
                            <label htmlFor="name">نام: </label>
                            <input
                                type="text"
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">شماره تماس: </label>
                            <input
                                type="tel"
                                id='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message">پیام: </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? 'در حال ارسال...' : 'ارسال'}
                    </button>

                    {status === 'success' && (
                        <p className='form-success'>پیام شما با موفقیت ارسال شد</p>
                    )}
                    {status === 'error' && (
                        <p className='form-error'>{errorMsg}</p>
                    )}
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