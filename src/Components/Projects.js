import ButtonB from '../Elements/ButtonB'
import Cards from '../Elements/Cards'
import styles from './Projects.module.css'
import lp_dnc from '../Image/projects/lp_dnc.svg'


function Projects(){
    return(
        <div id="Projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Cards img={lp_dnc}  name='LP DNC' text='HTML, CSS, JS projeto para praticar o React'/>
            <Cards  img={lp_dnc} name='LP DNC' text='HTML, CSS, JS projeto para praticar o React'/>
            <ButtonB text='Ver repositório Completo'/>
        </div>
    )
}

export default Projects