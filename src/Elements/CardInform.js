import styles from './CardInform.module.css'

function CardInform({text, title}){
    return(
        <div className={styles.cardInform}> 
          <p><span>HTML</span> é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.</p>
           
        </div>
    )
}

export default CardInform