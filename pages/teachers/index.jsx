import React, {useEffect} from 'react';
import App from "@/components/layouts/app";
import Pages from "@/components/pages/pages";
import About from "@/components/about/about";
import Staff from "@/components/about/staff";
import Blog from "@/components/blog/blog";
import {t} from "../../utils/utils";
import styles from "@/styles/about.module.css";
import Link from "next/link";
import {ArrowRightOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {getTeachers} from "@/store/teacher/actions";

const Index = () => {
    const teachers = useSelector(state => state.teacher.teachers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeachers.request());
    }, [dispatch]);

    return (
        <App>
            <Pages content={t("specialists")}/>
            <div className={styles.container}>
                <h2>{t('our_specialists')}</h2>
                <h3>Meet the Team</h3>
                <div className={styles.row}>
                    {teachers.map((item) => (
                        <div key={item.id} className={styles.itemAll}>
                            <div className={styles.item}>
                                <img
                                    src={process.env.IMAGE_URL + item.avatar}
                                    alt=""/>
                                <div className={styles.overlay}>
                                    <Link href={'/special/' + item.id} className={styles.special}>
                                        <span>Read More <ArrowRightOutlined/></span>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.bottomText}>
                                <span>{item.fullname}</span>
                            </div>
                            <div className={styles.language}>
                                <img src={process.env.IMAGE_URL + item.language.avatar}
                                     alt={item.language.name}/>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <Blog/>
        </App>
    );
};

export default Index;