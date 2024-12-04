import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import App from "@/components/layouts/app";
import Pages from "@/components/pages/pages";
import {t} from "@/utils/utils";
import styles from "@/styles/about.module.css";
import Link from "next/link";
import {ArrowRightOutlined} from "@ant-design/icons";
import Blog from "@/components/blog/blog";
import {getTeachers} from "@/store/teacher/actions";

const Index = () => {
    const teachers = useSelector(state => state.teacher.teachers);
    const router = useRouter();
    const {id} = router.query;
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTeachers.request());
    }, [dispatch])


    useEffect(() => {
        setData(function () {
            return teachers.filter(x => x.language_id == id);
        })
    }, [id]);


    return (
        <>
            <App>
                <Pages content={t("specialists")}/>
                <div className={styles.container}>
                    <h2>{t('our_specialists')}</h2>
                    <h3>Meet the Team</h3>
                    <div className={styles.row}>

                        {data.map((item) => (
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
        </>
    )
        ;
};

export default Index;