import styles from './CardInform.module.css'

function CardInform({text, title}){
    return(
        <div className={styles.cardInform}> 
          <p><span>{title}</span>{text}</p>
           
        </div>
    )
}

export default CardInform