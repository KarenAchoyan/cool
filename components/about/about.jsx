import React from 'react';
import styles from "../../styles/about.module.css";

const About = () => {


    return (
        <div className={styles.about}>
            <h1>Բարի գալուստ Cool</h1>
            <h3>Մեր մասին </h3>
            <div  className={styles.aboutText}>
                <p>We have over 10 years of experience. Our center is trusted by students who are learning languages. The team of our center takes great pride in ensuring our students have all the resources and opportunities to succeed. Our goal is not a simple focus on books and classrooms, so we are creating an involving rounded experience. Enjoy English, learn new cultures, make new friends, and see the world.</p>
            </div>
        </div>
    );
};

export default About;
