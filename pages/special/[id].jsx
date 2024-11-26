import React, {useEffect} from 'react';
import App from "@/components/layouts/app";
import styles from "../../styles/special.module.css";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {getTeacher} from "@/store/teacher/actions";
import { useRouter } from 'next/router';

const Index = () => {
    const teacher = useSelector((state) => state.teacher.teacher);
    const router = useRouter();

    const { id } = router.query;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTeacher.request({id:id}));
    },[dispatch])
    return (
        <App>
            <div className={styles.special}>
                <div className={styles.container}>
                    <img src={process.env.IMAGE_URL+teacher?.avatar} alt=""/>
                    <div >
                        <div className={styles.title}>
                            <h2>{teacher?.fullname}</h2>
                            <span>{teacher?.language?.title}</span>
                            <hr className={styles.hr}/>
                            <div className={styles.text}>
                                <p>{teacher?.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Index;
