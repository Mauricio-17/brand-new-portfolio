import styled from "../../styles/cards.module.css"
import PropTypes from "prop-types"

const CardProject = ({ title, description, link, img }) => {
  return (
    <div className={styled.card_p}>
      <div className={styled.card_img}>
        <img src={`/img/${img}`} alt="Sistema de ventas" width={1116} height={615} />
      </div>
      <div className={styled.card_content}>
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer" >Codigo</a>
      </div>
    </div>
  )
}


CardProject.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes
}

export default CardProject