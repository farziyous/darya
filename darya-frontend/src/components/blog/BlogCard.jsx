import { Link } from 'react-router'
import './BlogCard.css'

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export const BlogCard = ({ blog }) => {
    return (
        <div className="blog" key={blog.slug}>
            <img src={blog.image_path} alt={blog.title} />
            <h3>{blog.title}</h3>
            <Link to={`/blog?blog=${blog.slug}`}>ادامه</Link>
            <span className='date'>{formatDate(blog.created_at)}</span>
        </div>
    )
}