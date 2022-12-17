import SectionHeader from '../../components/SectionHeader'
import blogImage1 from '../../assets/images/blogs/blog-image1.png'
import blogImage2 from '../../assets/images/blogs/blog-image2.png'
import blogImage3 from '../../assets/images/blogs/blog-image3.png'
import BlogCard from '../../components/BlogCard'
import './style.css'

function Blogs() {
  return (
    <section id='blogs'>
        <SectionHeader title='Blogs' subTitle='words from our food lovers'/>
        <div className='blogs-cards'>
            <BlogCard title='Cooking Dining Experience' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ' img={blogImage1}/>
            <BlogCard flip={true} title='Cooking Dining Experience' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ' img={blogImage2}/>
            <BlogCard title='Cooking Dining Experience' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ' img={blogImage3}/>
        </div>
    </section>
  )
}

export default Blogs