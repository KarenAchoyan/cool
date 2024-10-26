import React from 'react';
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const App = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default App;