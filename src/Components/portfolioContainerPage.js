import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

export default function PortfolioContainerPage() {
    const [currentPage, setCurrentPage] = useState('Homepage');


    const renderPage = () => {
        if (currentPage === Homepage) {
            return <Homepage />;
        }
        if (currentPage === Gallery) {
            return <Gallery />;
        }
        if (currentPage === Contact) {
            return <Contact />;
        }
    };


    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="mainBody">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}