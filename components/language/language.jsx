import React, {useEffect} from 'react';
import styles from "../../styles/language.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {t} from "../../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {getLanguages} from "@/store/languages/actions";
import Link from "next/link";

const Language = () => {
    const languages = useSelector(state => state.language.languages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLanguages.request());
    },[dispatch])


    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.prevArrow} onClick={onClick}>
                <LeftOutlined />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={styles.nextArrow} onClick={onClick}>
                <RightOutlined />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 11,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.language}>
            <h5>{t('choose_which_language')}</h5>
            <div className={styles.container}>
                <Slider {...settings}>
                    {languages.map((lang, index) => (
                        <div className={styles.item} key={index}>
                            <Link href={"/teachers/"+lang.id}>
                                <img src={process.env.IMAGE_URL + lang.avatar} alt={lang.alt}/>
                            </Link>
                            <span>{lang.name}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Language;
