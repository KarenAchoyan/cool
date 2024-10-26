import React from 'react';
import App from "@/components/layouts/app";
import Pages from "@/components/pages/pages";
import Gallery from "@/components/gallery/gallery";

const Index = () => {
    return (
        <>
            <App>
                <Pages content={"Պատկերասրահ"} />
                <Gallery/>
            </App>
        </>
    );
};

export default Index;