import styles from './Skills.module.css'
import html from '../Image/skills/html.svg'
import css from '../Image/skills/css.svg'
import js from '../Image/skills/js.svg'
import react from '../Image/skills/react.svg'
import tp from '../Image/skills/tp.svg'


function Skills(){
    return(
        <div id="Skills" className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <figure>
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={react}/>
                <img src={tp}/>

            </figure>
        </div>
    )
}

export default Skills