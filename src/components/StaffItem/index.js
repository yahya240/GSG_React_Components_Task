import './style.css'

function StaffItem({img,count,desc}) {
  return (
        <div className='staff-item'>
            <img src={img} alt='staff-img'></img>
            <div className='staff-info'>
                <h2>{count}</h2>
                <h4>{desc}</h4>
            </div>
        </div>
  )
}

export default StaffItem