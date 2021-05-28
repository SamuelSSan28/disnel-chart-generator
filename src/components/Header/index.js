import styles from './styles.module.css'


export default function Header(){

    return(
        <header className={styles.headerContainer}>
            <h3 className={styles.t2}>Disnel</h3>
            <h3  className={styles.t1}> Chart Generator</h3>        
        </header>
    )

}