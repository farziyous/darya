import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Home } from './pages/home/Home'
import { Products } from './pages/products/Products'
import { Product } from './pages/product/Product'
import { ContactUs } from './pages/contact-us/ContactUs'
import { Blogs } from './pages/blogs/Blogs'
import { Blog } from './pages/blog/Blog'
import { NotFound } from './pages/notFound/NotFound'
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadInitialData = async () => {
      try {
        setLoading(true)
        const [productRes, categoriesRes, blogsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/products/`, { signal: controller.signal }),
          axios.get(`${API_BASE_URL}/api/categories/`, { signal: controller.signal }),
          axios.get(`${API_BASE_URL}/api/blogs/`, { signal: controller.signal }),
        ])
        setProducts(productRes.data.results)
        setCategories(categoriesRes.data)
        setBlogs(blogsRes.data)
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err)
          console.error('Failed to load initial data:', err)
        }
      } finally {
        setLoading(false)
      }
    }

    loadInitialData()
    return () => controller.abort()
  }, [])

  if (error) {
    return <div className="app-error">مشکلی پیش امده است لطفا بعدا تلاش کنید</div>
  }

  if (loading) {
    return <div className='loading'>...در حال بار گیری</div>
  }

  return (
    <Routes>
      <Route index element={<Home products={products} categories={categories} blogs={blogs} />} />
      <Route path='products' element={<Products products={products} categories={categories} />} />
      <Route path='product' element={<Product />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route path='blogs' element={<Blogs blogs={blogs} />} />
      <Route path='blog' element={<Blog />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App