import React from 'react';
import styles from "../../styles/level.module.css";

const Level = () => {
    return (
        <div className={styles.level}>
            <div className={styles.avatar}>
                <img src="./1.webp" alt="Language Test" />
            </div>
            <div className={styles.overlay}>
                <h1>COOL առաջարկ </h1>
                <div className={styles.text}>
                    <p>Գրանցվիր  ընկիերոջդ հետ ստացիր 10% զեղչ, ընտրիր մեկից ավելի լեզու՝ ստացիր 10% զեղչ</p>
                </div>
                <div className={styles.button}>
                    <button>Գրանցվել</button>
                </div>
            </div>
        </div>
    );
};

export default Level;