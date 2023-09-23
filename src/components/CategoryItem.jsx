import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const {
        idCategory, 
        strCategory, 
        strCategoryThumb, 
        strCategoryDescription
    } = props
    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb}  alt='img'/>
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${idCategory}`} className='btn blue darken-1' >
                    Wath category
                </Link>
            </div>
      </div>
   
    )
}

export {CategoryItem}

// 