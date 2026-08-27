import { NavLink, Link } from 'react-router'
import { useState } from 'react'
import './Header.css'
import searchSvg from '../../assets/svgs/search.svg'
import dropDown from '../../assets/svgs/drop-down.svg'

export const Header = () => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div className="header-container-desktop">
                <div className='main-logo'>
                    <Link to='/'><img src="/darya-logo.webp" alt="لوگو کفش دریا" /></Link>
                </div>
                <div className='navigation'>
                    <NavLink to=''>محصولات</NavLink>
                    <NavLink to=''>ارتباط با ما</NavLink>
                    <NavLink to=''>وبلاگ</NavLink>
                </div>
                <div className='search-input'>
                    <input type="text" placeholder='جستجو' onChange={(e) => {
                        setSearchInputValue(e.target.value)
                    }} />
                    {
                        !searchInputValue ? <img src={searchSvg} className='search-svg' /> : ''
                    }
                </div>
            </div>

            <div className="header-container-mobile">
                <div className='right-side'>
                    <div className='main-logo'>
                        <Link to='/'><img src="/darya-logo.webp" alt="لوگو کفش دریا" /></Link>
                    </div>
                    <div className='search-input'>
                        <input type="text" placeholder='جستجو' onChange={(e) => {
                            setSearchInputValue(e.target.value)
                        }} />
                        {
                            !searchInputValue ? <img src={searchSvg} className='search-svg' /> : ''
                        }
                    </div>
                </div>
                <div className='navigation'>
                    <NavLink to=''>محصولات</NavLink>
                    <NavLink to=''>ارتباط با ما</NavLink>
                    <NavLink to=''>وبلاگ</NavLink>
                </div>
                <div className='navigation-mobile'>
                    <div className={`drop-down-svg ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={dropDown} />
                    </div>
                    <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to='' onClick={() => setIsMenuOpen(false)}>محصولات</NavLink>
                        <NavLink to='' onClick={() => setIsMenuOpen(false)}>ارتباط با ما</NavLink>
                        <NavLink to='' onClick={() => setIsMenuOpen(false)}>وبلاگ</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}