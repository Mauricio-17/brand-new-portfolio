import XtwiterI from '../icons/XtwiterI'
import LinkedinI from '../icons/LinkedinI'
import GithubI from '../icons/GithubI'

import styled from '../../styles/about.module.css'

const AboutS = () => {
    return (
        <section id='acerca_de' className={`${styled.section_about}`}>
            <div className={`${styled.section_about_me}`}>
                <div className={styled.profile_me}>
                    <img src="/mauri_back_profile.jpeg" alt="Mauricio Solsis Cipriano" width={600} height={600} />
                </div>
                <div className={styled.about_me}>
                    <h2>Acerca de Mi</h2>
                    <p>Nacido en el año 2000, busco llevar una vida equilibrada y me apasiona el fútbol, el tiempo al aire libre y mejorar mi habilidad en inglés. Desde joven, he estado intrigado por la informática, lo que me hace estar dispuesto a explorar diversas ramas de la tecnología. Actualmente, me concentro en el desarrollo web y en menor proporcion a Machine Learning, mientras estudio <b>Time Series Analysis</b> para modelos de predicciones como proyecto de tesis universitaria.</p>
                    <div className={styled.about_me_redes}>
                        <a href="https://twitter.com/Maurici79297912" target='_blank' rel="noreferrer">
                            <XtwiterI />
                        </a>
                        <a href="https://www.linkedin.com/in/mauricio-solis-cipriano-s7" target='_blank' rel="noreferrer">
                            <LinkedinI />
                        </a>
                        <a href="https://github.com/Mauricio-17" target='_blank' rel="noreferrer">
                            <GithubI />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutS