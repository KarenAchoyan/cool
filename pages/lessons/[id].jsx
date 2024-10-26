import React, {useEffect} from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/lesson.module.css"
import Pages from "../../components/pages/pages";
import {useDispatch, useSelector} from "react-redux";
import {getTeachers} from "../../store/teacher/actions";
import Slider from "react-slick";
import Link from "next/link";
import {ArrowRightOutlined} from "@ant-design/icons";

const Index = () => {
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
        arrows: false,
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
        <>
            <App>
                <div className={styles.container}>
                    <Pages content={"Անգլերեն"}/>

                    <h1>Անգլերենի դասընթաց</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt ducimus eaque eveniet
                        fugiat, harum iure laboriosam laborum, magnam maxime minima neque odio, possimus quae quasi
                        quidem quisquam ratione tenetur?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at cum deserunt, distinctio ea
                        eligendi esse est exercitationem facilis, illum inventore laudantium magnam maiores maxime, nam
                        odit pariatur quidem veniam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis consequatur
                        deserunt eligendi est, et harum laborum minus, non nostrum obcaecati pariatur sint voluptatum.
                        Animi laboriosam molestiae perferendis sapiente veritatis?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dolor, eaque et fugiat ipsum
                        laudantium maxime molestiae mollitia nobis omnis perspiciatis provident qui quod repudiandae
                        unde voluptatibus. A, ipsum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, incidunt modi quasi quis quos sit
                        velit voluptas! Aliquam animi at, beatae blanditiis dignissimos dolores facilis provident quidem
                        reiciendis vero. Repudiandae.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fugiat inventore laudantium
                        nisi, possimus provident quod reiciendis. A adipisci aliquam dolorum rem sint. Accusantium eaque
                        fugit libero optio quam quisquam?
                    </p>
                </div>
            </App>
        </>
    );
};

export default Index;