"use client"
"refresh reset"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBNavbarBrand,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function ResponsiveNavbar() {
    const [openNavSecond, setOpenNavSecond] = useState(false);

    return (
        <MDBNavbar className='d-flex align-items-center bg-gradient-to-r from-blue-10 to-slate-40 text-black' expand='lg' light bgColor='light'>
            <MDBContainer fluid className=''>
                {/* <MDBNavbarLink href='/' style={{ fontSize: '1.5rem' }}>My Cape Verde</MDBNavbarLink> */}
                <MDBNavbarBrand>
                    <img src='/images/myCapeVerdeLOGO1copy.png' alt="Logo" className="h-9 mr-2 logo" />
                    <MDBNavbarLink href='/'>My Cape Verde</MDBNavbarLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openNavSecond}>
                    <div className='ms-auto'>
                        <MDBNavbarNav>
                            <MDBNavbarLink active aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                            <MDBNavbarLink className='text-black ' href='./whatWeDo'>What we do</MDBNavbarLink>
                            <MDBNavbarLink className='text-black ' href='./whoWeAre'>Who we are</MDBNavbarLink>
                            <MDBNavbarLink className='text-black ' href='./getInvolved'>Get involved</MDBNavbarLink>
                            <MDBNavbarLink className='text-black ' href='./contactUs'>Contact Us</MDBNavbarLink>
                            <MDBNavbarLink className='text-black ' href='./donatePage'>Donate</MDBNavbarLink>
                            <MDBNavbarLink className='text-black ' href='./galleryPage'>Gallery</MDBNavbarLink>
                            <MDBNavbarLink className='text-black ' href='./ourTeam'>Our Team</MDBNavbarLink>
                        </MDBNavbarNav>
                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}