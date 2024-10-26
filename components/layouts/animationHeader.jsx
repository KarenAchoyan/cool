import React from 'react';
import Header from "@/components/layouts/header";
import styles from "../../styles/app.module.css"; // Adjust the path to your CSS file

const AnimationHeader = ({ show }) => {
    return (
        <div className={`${show ? "show":null} animation-header`}>
            <Header />
        </div>
    );
};

export default AnimationHeader;
