import React from 'react';
import styles from '../../styles/opinions.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";

const Opinions = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div className={styles.container}>
            <h2>{t('reviews')}</h2>
            <h3>{t('what_our')}</h3>
            <div>

                <Slider {...settings}>
                    <div className={styles.story}>
                        <img src="review1.jpg" alt="Story 1" />
                    </div>
                    <div className={styles.story}>
                        <img src="review2.jpg" alt="Story 1" />
                    </div>
                    <div className={styles.story}>
                        <img src="review3.jpg" alt="Story 1" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Opinions;
