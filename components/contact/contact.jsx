import React from 'react';
import styles from "../../styles/contact.module.css";
import {HeatMapOutlined, MessageOutlined, PhoneOutlined} from "@ant-design/icons";

const Contact = () => {
    const contactItems = [
        {
            icon: <PhoneOutlined />,
            details: [
                "+78 887 222 33",
                "+78 888 111 22"
            ]
        },
        {
            icon: <HeatMapOutlined />,
            details: [
                "123 6th St.",
                "Melbourne, FL 32904"
            ]
        },
        {
            icon: <MessageOutlined />,
            details: [
                "info@example.com",
                "info@example.com"
            ]
        }
    ];

    return (
        <div className={styles.contact}>
            <h3>Կոնտակտային տվյալներ</h3>
            <h1>Կապ մեզ հետ</h1>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2154.811598080994!2d44.47555195515427!3d40.20097006464234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1722589411484!5m2!1sen!2sam"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.box}>
                {contactItems.map((item, index) => (
                    <div className={styles.contactInfo} key={index}>
                        <div className={styles.item}>
                            <span>{item.icon}</span>
                            {item.details.map((detail, i) => (
                                <p key={i}>{detail}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
