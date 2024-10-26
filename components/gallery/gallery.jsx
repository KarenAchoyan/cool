import React, {useEffect} from 'react';
import styles from "../../styles/gallery.module.css";
import {Image} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getGalleries} from "@/store/gallery/actions";

const Gallery = () => {
    const dispatch = useDispatch();
    const galleries = useSelector(state => state?.gallery?.galleries)
    useEffect(() => {
        dispatch(getGalleries.request())
    }, [dispatch]);
    return (
        <div className={styles.container}>
            <div className={styles.containerItem}>
                {galleries?.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <Image src={process.env.IMAGE_URL + item.image}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
