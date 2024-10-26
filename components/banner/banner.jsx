import React, {useEffect} from 'react';
import styles from "../../styles/banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "react-redux";
import {getSlides} from "@/store/slides/actions";
import {t} from "../../utils/utils";

const Banner = () => {
    const slides = useSelector(state => state.slide.slides)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSlides.request());
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.banner}>
            <Slider {...settings}>
                {slides?.map((slide, index) => (
                    <div key={index} className={styles.item}>
                        <img src={process.env.IMAGE_URL + slide.avatar} alt={`Slide ${index + 1}`}/>
                        <div className={styles.overlay}></div>
                        <div className={styles.itemPage}>
                            <h3> {t('the_new_course')}</h3>

                            <div className={styles.itemText}>
                                <span>{t('the_new_course')}</span>
                            </div>
                            <div className={styles.button}>
                                <button>{t('read_more')}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
