import React from 'react';
import styles from "../../styles/blog.module.css";
import {CheckOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";

const Blog = () => {
    const blogItems = [
        {
            title: t("free_demo"),
            description: "In 2000 our centre became an academic department within the school of languages.",
            imageSrc: <CheckOutlined />,
        },
        {
            title: t('free_provision'),
            description: "In 2000 our centre became an academic department within the school of languages.",
            imageSrc: <CheckOutlined />,

        },
        {
            title: t('provision_of'),
            description: "In 2000 our centre became an academic department within the school of languages.",
            imageSrc: <CheckOutlined />,

        },
        {
            title:t('specialists_trained'),
            description: "In 2000 our centre became an academic department within the school of languages.",
            imageSrc: <CheckOutlined />,

        },
        {
            title:t('flexible_schedule'),
            description: "In 2000 our centre became an academic department within the school of languages.",
            imageSrc: <CheckOutlined />,

        },
        {
            title: t('hybrid_courses'),
            description: "In 2000 our centre became an academic department within the school of languages.",
            imageSrc: <CheckOutlined />,
        }
    ];



    return (
        <div className={styles.blog}>
            <h3>{t("why_choose_us")}</h3>
            <div className={styles.container}>
                <div className={styles.box}>
                    {blogItems.map((item, index) => (
                        <div className={styles.blogRadius} key={index}>
                            <div className={styles.radius}>
                                {item.imageSrc}
                            </div>
                            <div className={styles.page}>
                                <h4>{item.title}</h4>
                                <div className={styles.text}>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.logo}>
                    <img src={'./service-30.jpg'} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Blog;
