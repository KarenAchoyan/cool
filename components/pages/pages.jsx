import React from 'react';
import styles from "@/styles/gallery.module.css";

const Pages = ({content}) => {
    return (
        <div className={styles.gallery}>
            <div className={styles.pages}>
                <h1>{content}</h1>
            </div>
            <img src="https://language-center.ancorathemes.com/wp-content/uploads/2016/10/01-home-1-slide1.jpg" alt=""/>
        </div>
    );
};

export default Pages;