import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { BlogCard } from "../../components/blog/BlogCard"
import './Blogs.css'

export const Blogs = ({ blogs }) => {

    return (
        <>
            <title>وبلاگ</title>

            <Header />
            <div className="blogs-page-contianter">
                <h1 className='blogs-title'>وبلاگ و مقاله ها</h1>
                {blogs.length === 0 ? (
                    <p className="empty-message">مقاله‌ای یافت نشد.</p>
                ) : (
                    <div className="blogs">
                        {blogs.map((blog) => (
                            <BlogCard blog={blog} key={blog.slug} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}