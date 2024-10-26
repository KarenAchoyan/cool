import React from 'react';
import styles from "../../styles/language.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {t} from "../../utils/utils";

const Language = () => {
    // Array of language data
    const languages = [
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/eng.jpg", alt: "English", name: "English" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/it.jpg", alt: "Italian", name: "Italian" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/sp.jpg", alt: "Spanish", name: "Spanish" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/por.jpg", alt: "Portuguese", name: "Portuguese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/ja.jpg", alt: "Japanese", name: "Japanese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/che.jpg", alt: "Chinese", name: "Chinese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/eng.jpg", alt: "English", name: "English" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/it.jpg", alt: "Italian", name: "Italian" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/sp.jpg", alt: "Spanish", name: "Spanish" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/por.jpg", alt: "Portuguese", name: "Portuguese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/ja.jpg", alt: "Japanese", name: "Japanese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/che.jpg", alt: "Chinese", name: "Chinese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/eng.jpg", alt: "English", name: "English" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/it.jpg", alt: "Italian", name: "Italian" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/sp.jpg", alt: "Spanish", name: "Spanish" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/por.jpg", alt: "Portuguese", name: "Portuguese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/ja.jpg", alt: "Japanese", name: "Japanese" },
        { src: "https://language-center.ancorathemes.com/wp-content/uploads/2016/10/che.jpg", alt: "Chinese", name: "Chinese" }
    ];

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
                            <img src={lang.src} alt={lang.alt} />
                            <span>{lang.name}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Language;
