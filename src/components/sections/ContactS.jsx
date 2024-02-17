import FormS from "../forms/FormS"
import styled from "../../styles/contact.module.css"
import WhatsAppI from '../icons/WhatsAppI'
import styledA from '../../styles/about.module.css'

const ContactS = () => {
  return (
    <section id="contacto" className={styled.section}>
      <h3>Contactate <span>Conmigo</span></h3>
      <div className={`container ${styled.content}`}>
        <div>
          <h4>¿Deseas conversar conmigo?</h4>
          <div>
            <p>Enviame un mensaje colocando tus datos o simplemente escribeme directo <b>
              <a className={styled.link} href="https://wa.me/51936667905" target='_blank' rel="noreferrer">
                aquí
              </a>
            </b>
            </p>

          </div>

        </div>
        <FormS />
      </div>
    </section>
  )
}

export default ContactS