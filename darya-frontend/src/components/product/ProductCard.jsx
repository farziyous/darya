import { Link } from 'react-router'
import './ProductCard.css'

export const ProductCard = ({ product }) => {
    return (
        <div key={product.id} className="product-card">
            <Link to='' className='image-link'><img src={product.default_image.path} alt={product.name} /></Link>
            <p className='product-name'>{product.title}</p>
            <p className='product-description'>{product.description}</p>
            <Link to={`/product?product=${product.slug}`} className='follow-link'>نمایش</Link>
        </div>
    )
}