import WebDevI from "../icons/WebDevI"
import styled from "../../styles/cards.module.css"

const CardServices = ({title,icon,description}) => {
  return (
    <div className={styled.card_s}>
        <h4>{title}</h4>
        {icon}
        <p>{description}</p>
    </div>
  )
}

export default CardServices