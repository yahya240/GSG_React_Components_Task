import './style.css'

function Button({children,type}) {

  if(type === 'trans'){
    return(
      <button className='trans-btn'>{children}</button>
    )
  }else{
    return (
      <button className='article-btn'>{children}</button>
    )
  }
}

export default Button