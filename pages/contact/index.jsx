import React from 'react';
import Pages from "@/components/pages/pages";
import App from "@/components/layouts/app";
import Contact from "@/components/contact/contact";
import AnimationHeader from "@/components/layouts/animationHeader";

const Index = () => {
    return (
        <App>
            <Pages content={"ԿԱՊ ՄԵԶ ՀԵՏ"}/>
            <Contact/>
        </App>
    );
};

export default Index;