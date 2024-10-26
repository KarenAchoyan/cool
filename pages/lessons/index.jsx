import React from 'react';
import App from "@/components/layouts/app";
import Pages from "@/components/pages/pages";
import Lessons from "@/components/lessons/lessons";

const Index = () => {
    return (
        <App>
            <Pages content={"Դասընթացներ"} />
            <Lessons/>
        </App>
    );
};

export default Index;