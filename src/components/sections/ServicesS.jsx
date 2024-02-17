import styled from "../../styles/services.module.css"
import CardServices from "../cards/CardServices"
import AutoProI from "../icons/AutoProI"
import DataAnaI from "../icons/DataAnaI"
import WebDevI from "../icons/WebDevI"

const ServicesS = () => {
  return (
    <section id="servicios" className={styled.section}>
        <div className={`${styled.content}`}>
            <h3>Mis <span>Servicios</span></h3>
            <div className={styled.services}>
                <CardServices title="Desarrollo Web" icon={<WebDevI/>} description="Desarrollo de aplicaciones y/o servicios Web de acuerdo al caso de uso requerido."/>
                <CardServices title="Analisis de datos" icon={<DataAnaI/>} description="Análisis de datos utilizando herramientas y tecnologías basadas en Python para "/>
                <CardServices title="Automatizacion" icon={<AutoProI/>} description="Automatizacion de actividades computacionales, utilizando tecnologías basadas en Python y JavaScript."/>
            </div>
        </div>
    </section>
  )
}

export default ServicesS