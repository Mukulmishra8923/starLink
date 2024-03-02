
import './miniCard.css';

const MiniCard = ({img}) => {
  
  return (
    <div className="miniCard">
            <img src={img} alt='logo-Img' className='Img'></img>
          </div>
  )
}

export default MiniCard