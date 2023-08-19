import ButtonB from '../Elements/ButtonB'
import Cards from '../Elements/Cards'
import styles from './Projects.module.css'


function Projects(){
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Cards/>
            <Cards/>
            <ButtonB text='Ver repositório Completo'/>
        </div>
    )
}

export default Projects