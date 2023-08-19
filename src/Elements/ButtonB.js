import styles from './ButtonB.module.css'


function ButtonB({text, link}){
    return(
        <div >
            <button className={styles.btnA}>
            <a href={link}><strong>{text}</strong></a>
            </button>
        </div>
    )
}

export default ButtonB