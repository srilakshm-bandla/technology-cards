// Write your code here.
import './index.css'

const CardItem = props => {
  // console.log(props);
  const {item} = props
  const {title, description, imgUrl, className} = item

  return (
    <li className={`${className} card-container`}>
      <h1 className="name-heading">{title}</h1>
      <p className="desc">{description}</p>
      <img src={imgUrl} alt={title} className="imgSize" />
    </li>
  )
}

export default CardItem
