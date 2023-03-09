import React from "react";
// import Homepage from "./Pages/Homepage";

function Header ({ currentPage, handlePageChange}) {
    return (
        <nav className="headerSection">
            <ul className="headerNavList">

                    {/* ========= HOMEPAGE =========  */}
                <li className="navLinkItem">
                    <a
                    className={currentPage === 'Homepage'} 
                    href="#Homepage" 
                    onClick={() => handlePageChange('Homepage')}
                    >
                        Homepage
                    </a>
                </li>

                    {/* ======== GALLERY ========  */}
                 <li className="navLinkItem">
                    <a
                    className={currentPage === 'Gallery'} 
                    href="#Gallery" 
                    onClick={() => handlePageChange('Gallery')}
                    >
                        Gallery
                    </a>
                </li>

                    {/* ======== CONTACT ========  */}
                 <li className="navLinkItem">
                    <a
                    className={currentPage === 'Contact'} 
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

export default Header;