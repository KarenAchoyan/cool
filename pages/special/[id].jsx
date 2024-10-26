import React from 'react';
import App from "@/components/layouts/app";
import styles from "../../styles/special.module.css";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";

const Index = () => {
    return (
        <App>
            <div className={styles.special}>
                <div className={styles.container}>
                    <img src="https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg" alt=""/>
                    <div >
                        <div className={styles.title}>
                            <h2>ASHRAF BADRY</h2>
                            <span>PROGRAMMING TECHNOLOGY</span>
                            <hr className={styles.hr}/>
                            <div className={styles.text}>
                                <p>Lorem ipsum dolor sit amet, ad autem erroribus eum, eum eu maluisset constituto, sam ut for has. Quod epicurei pro. Lorem ipsume dolor sit amet, ad autem erroribus eum, eum eu marksu fromers maluisset constituto.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Index;
