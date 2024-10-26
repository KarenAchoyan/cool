import React from 'react';
import App from "@/components/layouts/app";
import styles from "../../styles/special.module.css";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";

const Index = () => {
    return (
        <App>
            <div className={styles.special}>
                <div className={styles.specialLeft}>
                    <img src="https://img.freepik.com/premium-photo/beautiful-female-teacher-with-pointer-light-wall_392895-21874.jpg" alt=""/>
                    <div className={styles.marketing}>
                        <span>Marketing , Search Engine</span>
                    </div>
                    <div className={styles.text}>
                        <h1>Complete Web Design from Figma to Webflow</h1>
                    </div>
                </div>
                <div className={styles.specialRight}>
                    <div className={styles.avatar}>
                        <img src="https://wp.hixstudio.net/epora/wp-content/uploads/2022/08/c-details-video-bg.jpg" alt=""/>
                    </div>
                    <div className={styles.avatarText}>
                        <h3>Aram Nastyan</h3>
                    </div>
                    <div className={styles.share}>
                        <div className={styles.icon}>
                            <span><FacebookOutlined/></span>
                            <span><TwitterOutlined/></span>
                            <span><InstagramOutlined/></span>
                        </div>
                    </div>
                    <div className={styles.courseDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.user}><UserOutlined/></span>
                            <span>Students</span>
                            <span>1 student</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.user}><UserOutlined/></span>
                            <span>Skill Level </span>
                            <span>Expert</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.user}><UserOutlined/></span>
                            <span>Language</span>
                            <span>English</span>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Index;
