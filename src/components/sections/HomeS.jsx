const HomeS = () => {
  return (
    <section id="inicio" className="home_section">
        <img src="/gato-m.jpg" alt="fondo" width={1440} height={700} />
        <div className="home_section_m">
          <div className="home_present">
            <h1>Mauricio <span>Solis</span></h1>
            <p>Desarrollador web y analista de datos</p>
            <div className="home_present_b">
              <a className="b_download" href="https://drive.google.com/file/d/17zUI1VnpY4v5H3_fAZfDB3Xgstd0YMt9/view?usp=sharing" target="_blank_">Descargar CV</a>
              <a className="b_contact" href="#contacto">Contactar</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeS