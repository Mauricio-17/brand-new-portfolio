import styled from "../../styles/tech.module.css"

const myStack = [
  {
    src: 'aws',
    alt: 'Amazon Web Services'
  },
  {
    src: 'docker',
    alt: 'Docker'
  },
  {
    src: 'express',
    alt: 'Express'
  },
  {
    src: 'flask',
    alt: 'Flask'
  },
  {
    src: 'git',
    alt: 'Git'
  },
  {
    src: 'java',
    alt: 'Java'
  },
  {
    src: 'javascript',
    alt: 'Javascript'
  },
  {
    src: 'mysql',
    alt: 'MySql'
  },
  {
    src: 'python',
    alt: 'Python'
  },
  {
    src: 'spring-boot',
    alt: 'Spring Boot'
  },
  {
    src: 'typescript',
    alt: 'Typescript'
  },
  {
    src: 'vue-js',
    alt: 'Vue Js'
  },
]

const StackTechS = () => {
  return (
    <section className={styled.section}>
        <h3>Mi stack <span>Tecnologico</span></h3>
        <div className={styled.content}>
          {
            myStack.map( (stack,index) => (
                <figure className={styled.itech} key={index}>
                  <img src={`/img/tech/${stack.src}.svg`} alt={stack.alt} />
                  <figcaption>{stack.alt}</figcaption>
                </figure>
            ) )
          }
          
        </div>
    </section>
  )
}

export default StackTechS