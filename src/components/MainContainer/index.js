import './style.css'

function MainContainer({children}) {
  return (
    <section className='main-section'>
        {children}
    </section>
  )
}

export default MainContainer