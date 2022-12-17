import Button from '../Button'
import './style.css'

function BlogCard({img,title,text,flip}) {
  if(flip){
    return (
      <div className='blog-card'>
          <div className='blog-content'>
              <h4>{title}</h4>
              <p>{text}</p>
              <Button type='trans'>Read More</Button>
          </div>
          <img src={img} alt="blog-img"></img>
      </div>
    )
  }else{
    return (
      <div className='blog-card'>
          <img src={img} alt="blog-img"></img>
          <div className='blog-content'>
              <h4>{title}</h4>
              <p>{text}</p>
              <Button type='trans'>Read More</Button>
          </div>
      </div>
    )
  }
}

export default BlogCard