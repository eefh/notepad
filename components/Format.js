import styles from "../styles/Format.module.css";
import { Cancel } from "iconoir-react";
export default function Format(props) {

    const handleClick = (e) => {

    }
    return (
        <div className={styles.Format}>
            <div className={styles.top}>
                <h3>Format</h3>
                <Cancel
                    onClick={() => props.toggleMd(false)}
                    className={styles.cancel}
                ></Cancel>
            </div>
            <div className={styles.options}>
                <h2
                    className={`${styles.option}`}
                    onClick={(e) => props.handleFontChange("Inter", "12", true)}
                >
                    Title
                </h2>
                <p
                    className={`${styles.Heading} ${styles.option}`}
                    onClick={(e) => props.handleFontChange("Inter", "8", false)}
                >
                    Heading
                </p>
                <h4
                    className={`${styles.option}`}
                    onClick={(e) => props.handleFontChange("Inter", "5", true)}
                >
                    Subheading
                </h4>
                <p
                    className={`${styles.option}`}
                    onClick={(e) => props.handleFontChange("Inter", "4", false)}
                >
                    Body
                </p>
                <p
                    className={`${styles.Monospace} ${styles.option}`}
                    onClick={(e) =>
                        props.handleFontChange("monospace", "5", true)
                    }
                >
                    Monospaced
                </p>
            </div>
        </div>
    );
}