import './outerCard.css'
import InnerCard from '../innerCard/InnerCard'

const OuterCard = () => {
  return (
    <div className='content-box '>
       
        <InnerCard/>
        <InnerCard/>
    
    </div>
  )
}

export default OuterCard