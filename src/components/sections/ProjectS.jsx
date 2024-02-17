import styled from "../../styles/projects.module.css"
import CardProject from "../cards/CardProject"

const ProjectS = () => {
  return (
    <section id="proyectos">
      <div className={`${styled.content}`}>
        <h3>Conoce mis <span>proyectos</span></h3>
        <p>Estos proyectos contemplan una demostración de una parte de mis habilidades.</p>
        <div className={styled.grid_pro}>
          <CardProject img="sistema_ventas.png"
                       title="Sistema de invetario" 
                       description="El sistema de inventario ayudó a mantener un rastreo de los artículos o equipamentos relacionados a redes y comunicaciones, cuando estos ingresan, salen o son trasladados."
                       link="https://github.com/Mauricio-17/inventory-system" />
          <CardProject img="veterinaria.png"
                       title="Sistema de veterinaria"
                       description="Sistema veterinario aportó en mantener relacionada y analizada la info de los involucrados del proceso de atención de mascotas."
                       link="https://github.com/Mauricio-17/vet-sys-MEVN-stack"/>
          <CardProject img="webscraping.jpg"
                       title="Web scraping a Audible.com con Scrapy"
                       description="El proyecto de recojo de datos de audible es una demostración de que existen otras maneras de recolectar datos en la WEB, en este caso de información de los más recientes audiolibros."
                       link="https://github.com/Mauricio-17/WebScraping-Scrapy-AudiblePage" />
        </div>
      </div>
    </section>
  )
}

export default ProjectS