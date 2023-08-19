import ButtonB from './ButtonB'
import styles from './Cards.module.css'
import lp_dnc from '../Image/projects/lp_dnc.svg'


function Cards({text, img}){
    return(
        <div className={styles.cards}> 
            <figure>
               <img src={img}/>
            </figure>
            <section>
                <h3>Projeto XPTO</h3>
                <p><strong>Tecnologias:</strong>{text}</p>
            <ButtonB text='Acesse o repositório'/>
            </section>
            
        </div>
    )
}

export default Cards