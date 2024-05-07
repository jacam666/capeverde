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
                    <img src='/images/myCapeVerdeLOGO1copy.png' alt="Logo" className="h-14" />
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

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css"
// import React, { useState } from 'react';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarToggler,
//     MDBNavbarNav,
//     MDBNavbarLink,
//     MDBNavbarBrand,
//     MDBIcon,
//     MDBCollapse
// } from 'mdb-react-ui-kit'

// export default function ResponsiveNavbar() {
//     const [openNavSecond, setOpenNavSecond] = useState(false);

//     return (
//         <MDBNavbar className='bg-gradient-to-r from-blue-10 to-slate-40 text-black' expand='lg' light bgColor='light'>
//             <MDBContainer fluid className=''>
//                 <div className="flex justify-between w-full items-center">
//                     <MDBNavbarBrand className={openNavSecond ? "w-full text-center" : "mx-auto"}>
//                         <MDBNavbarLink href='/'>My Cape Verde</MDBNavbarLink>
//                         <img src='/images/myCapeVerdeLOGO1copy.png' alt="Logo" className="h-14" />
//                     </MDBNavbarBrand>
//                     <MDBNavbarToggler
//                         aria-expanded='false'
//                         aria-label='Toggle navigation'
//                         onClick={() => setOpenNavSecond(!openNavSecond)}
//                     >
//                         <MDBIcon icon='bars' fas />
//                     </MDBNavbarToggler>
//                 </div>
//                 <MDBCollapse navbar open={openNavSecond}>
//                     <MDBNavbarNav className={openNavSecond ? "ml-auto flex w-full justify-end" : "justify-center"}>
//                         <MDBNavbarLink className='text-black' active aria-current='page' href='/'>Home</MDBNavbarLink>
//                         <MDBNavbarLink className='text-black' href='./whatWeDo'>What we do</MDBNavbarLink>
//                         <MDBNavbarLink className='text-black' href='./whoWeAre'>Who we are</MDBNavbarLink>
//                         <MDBNavbarLink className='text-black' href='./getInvolved'>Get involved</MDBNavbarLink>
//                         <MDBNavbarLink className='text-black' href='./contactUs'>Contact Us</MDBNavbarLink>
//                         <MDBNavbarLink className='text-black' href='./donatePage'>Donate</MDBNavbarLink>
//                         <MDBNavbarLink className='text-black' href='./galleryPage'>Gallery</MDBNavbarLink>
//                         <MDBNavbarLink className='text-black' href='./ourTeam'>Our Team</MDBNavbarLink>
//                     </MDBNavbarNav>
//                 </MDBCollapse>
//             </MDBContainer>
//         </MDBNavbar>
//     );
// }




// "use client"
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useState } from 'react';

// export default function ResponsiveNavbar() {

//     const [expanded, setExpanded] = useState(false);

//     const handelNavClick = () => {
//         setExpanded(false);
//     }


//     return (
//         <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
//             <Container>
//                 <div className='flex lg:mr-28 xl:mr-96'>
//                     <Navbar.Brand onClick={handelNavClick}>My Cape Verde</Navbar.Brand>
//                     <img src='/images/myCapeVerdeLOGO1copy.png' alt="Logo" className="h-14" />
//                 </div>

//                 <Navbar.Toggle aria-controls="basic-navbar-nav d-flex justify-content-right" onClick={() => setExpanded(!expanded)} />
//                 <Navbar.Collapse id="basic-navbar-nav bg-black">
//                     <Nav className="me-auto d-flex justify-content-center  align-items-center">
//                         <a href='/' className="text-dark mr-3 " onClick={handelNavClick}>Home</a>
//                         <a href='/ProteinCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>What we do</a>
//                         <a href='/PreWorkoutCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Who we are</a>
//                         <a href='/FatLossCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Get involved</a>
//                         <a href='/WellBeingCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Contact Us</a>
//                         <a href='/TrainingAndDietPage' className="text-dark mr-5" onClick={handelNavClick}>Gallery</a>
//                         <a href='/TheStudioPage' className="text-dark mr-5" onClick={handelNavClick}>Our Team</a>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }


