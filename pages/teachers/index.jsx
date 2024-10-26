import React from 'react';
import App from "@/components/layouts/app";
import Pages from "@/components/pages/pages";
import About from "@/components/about/about";
import Staff from "@/components/about/staff";
import Blog from "@/components/blog/blog";
import {t} from "../../utils/utils";
const Index = () => {
    return (
        <App>
            <Pages content={t("specialists")}/>
            <Staff/>
            <Blog/>
        </App>
    );
};

export default Index;