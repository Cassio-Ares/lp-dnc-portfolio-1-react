import ButtonB from './ButtonB'
import styles from './Cards.module.css'



function Cards({text, img, name}){
    return(
        <div className={styles.cards}> 
            <figure>
               <img src={img}/>
            </figure>
            <section>
                <h3>Projeto {name}</h3>
                <p><strong>Tecnologias:</strong>{text}</p>
            <ButtonB text='Acesse o repositório'/>
            </section>
            
        </div>
    )
}

export default Cards