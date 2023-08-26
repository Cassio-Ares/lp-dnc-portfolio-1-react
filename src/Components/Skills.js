import styles from './Skills.module.css'
import html from '../Image/skills/html.svg'
import css from '../Image/skills/css.svg'
import js from '../Image/skills/js.svg'
import react from '../Image/skills/react.svg'
import tp from '../Image/skills/tp.svg'
import CardInform from '../Elements/CardInform'
import {useState} from 'react'


function Skills(){
    const [infor, setInfor]= useState(false)

    function info(){
        setInfor(true)
    }

    function infoNot(){
        setInfor(false)
    }

    return(
        <div id="Skills" className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <figure onMouseOut={infoNot}>
                <img src={html}  onMouseEnter={info}/> 
                { infor === true && (
                    <CardInform title="HTML"  text=" é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."/>
                 )
                 }
                <img src={css}/>
                 
                <img src={js}/>
                <img src={react}/>
                <img src={tp}/>
            </figure>
        </div>
    )
}

export default Skills