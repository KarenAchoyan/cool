import React, { useEffect } from 'react';
import Slider from "react-slick";
import styles from "../../styles/about.module.css";
import { ArrowRightOutlined} from "@ant-design/icons";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../store/teacher/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {t} from "../../utils/utils";

const Staff = () => {
    const teachers = useSelector(state => state.teacher.teachers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeachers.request());
    }, [dispatch]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Adjust the number of slides you want to show
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.container}>
            <h2>{t('our_specialists')}</h2>
            <h3>Meet the Team</h3>
            <div className={styles.box}>
                <Slider {...settings}>
                    {teachers.map((item) => (
                        <div key={item.id} className={styles.itemImg}>
                            <div className={styles.item}>
                                <img
                                    src={process.env.IMAGE_URL + item.avatar}
                                    alt=""/>
                                <div className={styles.overlay}>
                                    <Link href={'/special/'+item.id} className={styles.special}>
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
                </Slider>
            </div>
        </div>
    );
};

export default Staff;
