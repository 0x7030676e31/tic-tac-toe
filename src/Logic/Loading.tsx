import styles from "./Loading.module.scss"
import animation from "../assets/loading.gif"

function Loading() {
    return ( 
        <div className={styles.container}>
            <img src={animation}/>
        </div>
     );
}

export default Loading;