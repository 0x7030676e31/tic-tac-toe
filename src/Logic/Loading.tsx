import styles from "./Loading.module.scss"

function Loading() {
    return ( 
        <div className={styles.container}>
            <div className={styles.info}>Oczekiwanie na przeciwnika...</div>
            <div className={styles.loader} />
        </div>
     );
}

export default Loading;