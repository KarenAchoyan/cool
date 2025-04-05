import React from 'react';
import styles from "../../styles/about.module.css";

const About = () => {


    return (
        <div className={styles.about}>
            <h1>Բարի գալուստ Cool</h1>
            <h3>Մեր մասին </h3>
            <div className={styles.aboutText}>
                <p>We have over 10 years of experience. Our center is trusted by students who are learning languages.
                    The team of our center takes great pride in ensuring our students have all the resources and
                    opportunities to succeed. Our goal is not a simple focus on books and classrooms, so we are creating
                    an involving rounded experience. Enjoy English, learn new cultures, make new friends, and see the
                    world.</p>
            </div>
            
            <div className={styles.interviewContent}>
                <div className={styles.interviewAvatar}>
                    <img src="https://hoonch.am/images/Hay/2024/Hasmik-GAsparyan/hoonch-Hasmik-Gasparyan-Cool-Language1.jpg" alt=""/>
                </div>
                <div className={styles.content}>
                    <h1>Հասմիկ Գասպարյան, Cool Language center կենտրոնի հիմնադիր</h1>
                    <a href="https://hoonch.am/post/hasmik-gasparyan?fbclid=IwZXh0bgNhZW0CMTEAAR0JkTL0LHSd7bkdlUYrou8fo1zISKtrJIzXwnokRpLNx5f5ttDz5UJCkZk_aem_tnyc0iXY5LXrj_gFDBH9gg">
                        <button>Կարդալ</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
