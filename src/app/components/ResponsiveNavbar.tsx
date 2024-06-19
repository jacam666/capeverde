"use client"
"refresh reset"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
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
} from 'mdb-react-ui-kit'
export default function ResponsiveNavbar() {
    const [openNavSecond, setOpenNavSecond] = useState(false)
    return (
        <MDBNavbar className='bg-gradient-to-r from-blue-10 to-slate-40 text-black' expand='lg' light bgColor='light'>
            <MDBContainer fluid className='d-flex justify-content-between align-items-center'>
                <MDBNavbarBrand>
                    <MDBNavbarLink href='/'>My Cape Verde</MDBNavbarLink>
                    <img src='/images/image.png' alt="Logo" className="h-10 ml-5" />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNavSecond}>
                    <MDBNavbarNav className='ml-auto'>
                        <MDBNavbarLink className='text-black' active aria-current='page' href='/'>Home</MDBNavbarLink>
                        <MDBNavbarLink className='text-black' href='./whatWeDo'>What we do</MDBNavbarLink>
                        <MDBNavbarLink className='text-black' href='./whoWeAre'>Who we are</MDBNavbarLink>
                        <MDBNavbarLink className='text-black' href='./getInvolved'>Get involved</MDBNavbarLink>
                        <MDBNavbarLink className='text-black' href='./contactUs'>Contact Us</MDBNavbarLink>
                        <MDBNavbarLink className='text-black' href='./donatePage'>Donate</MDBNavbarLink>
                        <MDBNavbarLink className='text-black' href='./galleryPage'>Gallery</MDBNavbarLink>
                        <MDBNavbarLink className='text-black' href='./ourTeam'>Our Team</MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}