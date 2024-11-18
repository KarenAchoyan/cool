import React from 'react';
import Image from "next/image";
import styles from "../../styles/international.module.css"
import App from "@/components/layouts/app";

const Index = () => {
    return (
        <>
            <App>
                <div className={styles.container}>
                    <Image src={"/exams.png"} width={1500} height={800} alt={'Exams'}/>
                </div>
            </App>
        </>
    );
};

export default Index;