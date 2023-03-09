import React from "react";
// import Homepage from "./Pages/Homepage";

function topHeader ({ currentPage, handlePageChange}) {
    return (
        <nav className="headerSection">
            <ul className="headerNavList">

                    {/* ========= HOMEPAGE =========  */}
                <li className="navLinkItem">
                    <a
                    className='homepageNavLink' 
                    href="#Homepage" 
                    onClick={() => handlePageChange('Homepage')}
                    >
                        Homepage
                    </a>
                </li>

                    {/* ======== GALLERY ========  */}
                 <li className="navLinkItem">
                    <a
                    className='GalleryNavLink' 
                    href="#Gallery" 
                    onClick={() => handlePageChange('Gallery')}
                    >
                        Gallery
                    </a>
                </li>

                    {/* ======== CONTACT ========  */}
                 <li className="navLinkItem">
                    <a
                    className='contactNavLink'
                    href="#Contact" 
                    onClick={() => handlePageChange('Contact')}
                    >
                        Contact
                    </a>
                </li>


                
            </ul>
        </nav>
    )
}

export default topHeader;