import ButtonB from './ButtonB'
import styles from './Cards.module.css'
import { useState } from 'react'



function Cards({text, img, name}){
     
    const [info , setInfo]= useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div className={styles.cards} onMouseLeave={InfoOff}> 
            <figure>
               <img onMouseEnter={ InfoOn}  src={img}/>
            </figure>

            {
                info === true  &&(
                    <section>
                <h3>Projeto {name}</h3>
                <p><strong>Tecnologias:</strong>{text}</p>
            <ButtonB text='Acesse o repositório'/>
            </section>
                )
            }
            
            
        </div>
    )
}

export default Cards