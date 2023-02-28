import styles from "../styles/Home.module.css";

export default function Tab(props) {

    return (
        <div className={styles.tab} onClick={props.setContent(props.content)}>
            {props.title}
        </div>
    )
}