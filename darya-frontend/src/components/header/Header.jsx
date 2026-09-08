import { NavLink, Link, useLocation, useNavigate, useSearchParams } from 'react-router'
import { useEffect, useState, useRef } from 'react'
import './Header.css'
import searchSvg from '../../assets/svgs/search.svg'
import dropDown from '../../assets/svgs/drop-down.svg'

let shouldRefocus = false

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()
    const debounceRef = useRef(null)
    const inputRef = useRef(null)
    const searchValue = location.pathname === '/products'
        ? (searchParams.get('search') || '')
        : ''

    useEffect(() => {
        if (shouldRefocus && inputRef.current) {
            const input = inputRef.current
            input.focus()
            const len = input.value.length
            input.setSelectionRange(len, len)
        }
    }, [])

    const search = (event) => {
        const value = event.target.value
        shouldRefocus = true

        if (debounceRef.current) clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            const params = new URLSearchParams(value ? { search: value } : {})
            navigate(`/products?${params.toString()}`, { replace: true })
        }, 300)
    }

    const handleBlur = () => {
        shouldRefocus = false
    }

    return (
        <>
            <div className="header-container-desktop">
                <div className='main-logo'>
                    <Link to='/'><img src="/darya-logo.webp" alt="لوگو کفش دریا" /></Link>
                </div>
                <div className='navigation'>
                    <NavLink to='/products'>محصولات</NavLink>
                    <NavLink to='/contact-us'>ارتباط با ما</NavLink>
                    <NavLink to='/blogs'>وبلاگ</NavLink>
                </div>
                <div className='search-input'>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder='جستجو'
                        defaultValue={searchValue}
                        onChange={search}
                        onBlur={handleBlur}
                    />
                    {
                        !searchValue ? <img src={searchSvg} className='search-svg' /> : ''
                    }
                </div>
            </div>

            <div className="header-container-mobile">
                <div className='right-side'>
                    <div className='main-logo'>
                        <Link to='/'><img src="/darya-logo.webp" alt="لوگو کفش دریا" /></Link>
                    </div>
                    <div className='search-input'>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder='جستجو'
                            defaultValue={searchValue}
                            onChange={search}
                            onBlur={handleBlur}
                        />
                        {
                            !searchValue ? <img src={searchSvg} className='search-svg' /> : ''
                        }
                    </div>
                </div>
                <div className='navigation'>
                    <NavLink to='/products'>محصولات</NavLink>
                    <NavLink to='/contact-us'>ارتباط با ما</NavLink>
                    <NavLink to='/blogs'>وبلاگ</NavLink>
                </div>
                <div className='navigation-mobile'>
                    <div className={`drop-down-svg ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={dropDown} />
                    </div>
                    <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to='/products' onClick={() => setIsMenuOpen(false)}>محصولات</NavLink>
                        <NavLink to='/contact-us' onClick={() => setIsMenuOpen(false)}>ارتباط با ما</NavLink>
                        <NavLink to='/blogs' onClick={() => setIsMenuOpen(false)}>وبلاگ</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}