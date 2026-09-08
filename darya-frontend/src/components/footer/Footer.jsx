import './Footer.css'
import telegramLogo from '../../assets/logos/telegram-logo.webp'
import rubikaLogo from '../../assets/logos/rubika-logo.webp'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='top'>
                <div className='right'>
                    <p>شماره تماس: <span>09198989765</span></p>
                    <p>آدرس: <span>فعلا نمیدونم ایشلا بعدا به یه نتیجه مطلوب می رسم حالا بتز دقیق معلوم نی یا تبلات</span></p>
                </div>
                <div className='left'>

                    <a className='social-link' href='https://t.me/daryashoe' target='_blank'>
                        <img src={telegramLogo} alt="تلگرام کفش دریا" />
                    </a>
                    <a className='social-link' href='https://web.rubika.ir/#c=c0Bj8ua04f986026c77abb920c25e0e4' target='_blank'>
                        <img src={rubikaLogo} alt="روبیکا کفش دریا" />
                    </a>
                </div>
            </div>
            <p className='bottom'>کفش دریا</p>
        </div>
    )
}