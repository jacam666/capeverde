"use client"
"refresh reset"

import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
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
                <MDBNavbarBrand href='#'>My Cape Verde</MDBNavbarBrand>
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