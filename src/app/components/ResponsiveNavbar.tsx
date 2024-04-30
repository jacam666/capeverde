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
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

export default function ResponsiveNavbar() {
    const [openNavSecond, setOpenNavSecond] = useState(false);

    return (
        <MDBNavbar className=' bg-gradient-to-r from-blue-100 to-slate-600' expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarLink href='/'>My Cape Verde</MDBNavbarLink>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNavSecond}>
                    <MDBNavbarNav>
                        <MDBNavbarLink active aria-current='page' href='/'>
                            Home
                        </MDBNavbarLink>
                        <MDBNavbarLink href='./whatWeDo'>What we do</MDBNavbarLink>
                        <MDBNavbarLink href='./whoWeAre'>Who we are</MDBNavbarLink>
                        <MDBNavbarLink href='./getInvolved'>Get involved</MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}