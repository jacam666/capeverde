"use client"
"refresh reset"
// import React from "react";
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const menuItems = [
//         "Profile",
//         "Dashboard",
//         "Activity",
//         "Analytics",
//         "System",
//         "Deployments",
//         "My Settings",
//         "Team Settings",
//         "Help & Feedback",
//         "Log Out",
//     ];

//     return (
//         <Navbar onMenuOpenChange={setIsMenuOpen}>
//             <NavbarContent>
//                 <NavbarMenuToggle
//                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                     className="sm:hidden"
//                 />
//                 <NavbarBrand>
//                     <p className="font-bold text-inherit">My Cape Verde</p>
//                 </NavbarBrand>
//             </NavbarContent>

//             <NavbarContent className="hidden sm:flex gap-4" justify="center">
//                 <NavbarItem>
//                     <Link color="foreground" href="#">
//                         What we do
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem isActive>
//                     <Link href="#" aria-current="page">
//                         Who we are
//                     </Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Link color="foreground" href="#">
//                         Get involved
//                     </Link>
//                 </NavbarItem>
//             </NavbarContent>
//             <NavbarContent justify="end">
//                 <NavbarItem className="hidden lg:flex">
//                     <Link href="#">Login</Link>
//                 </NavbarItem>
//                 <NavbarItem>
//                     <Button as={Link} color="primary" href="#" variant="flat">
//                         Donate
//                     </Button>
//                 </NavbarItem>
//             </NavbarContent>
//             <NavbarMenu>
//                 {menuItems.map((item, index) => (
//                     <NavbarMenuItem key={`${item}-${index}`}>
//                         <Link
//                             color={
//                                 index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
//                             }
//                             className="w-full"
//                             href="#"
//                             size="lg"
//                         >
//                             {item}
//                         </Link>
//                     </NavbarMenuItem>
//                 ))}
//             </NavbarMenu>
//         </Navbar>
//     );
// }







// export default function Header () {
//     return (
//         <div className="flex justify-center bg-black">
//             <div className="  rounded">
//             <h1 className='text-white py-2 px-5 text-3xl ' style={{ letterSpacing: '4px'}}>My Cape Verde</h1>
//             </div>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBIcon,
//     MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function App() {
//     const [openNavSecond, setOpenNavSecond] = useState(false);

//     return (
//         <MDBNavbar expand='lg' light bgColor='light'>
//             <MDBContainer fluid>
//                 <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//                 <MDBNavbarToggler
//                     aria-expanded='false'
//                     aria-label='Toggle navigation'
//                     onClick={() => setOpenNavSecond(!openNavSecond)}
//                 >
//                     <MDBIcon icon='bars' fas />
//                 </MDBNavbarToggler>
//                 <MDBCollapse navbar open={openNavSecond}>
//                     <MDBNavbarNav>
//                         <MDBNavbarLink active aria-current='page' href='#'>
//                             Home
//                         </MDBNavbarLink>
//                         <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//                         <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//                         <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
//                             Disabled
//                         </MDBNavbarLink>
//                     </MDBNavbarNav>
//                 </MDBCollapse>
//             </MDBContainer>
//         </MDBNavbar>
//     );
// }

// import React, { useState } from 'react';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     //MDBBtn,
//     MDBCollapse,
// } from 'mdb-react-ui-kit';

// import '../styles/Navbar.css'

// export default function ResponsiveNavbar() {
//     const [showBasic, setShowBasic] = useState(false);

//     return (
//         <MDBNavbar className='navbar-container' expand='lg' light bgColor='light'>
//             <MDBContainer fluid>
//                 <MDBNavbarBrand href='/'>Claire's Workouts</MDBNavbarBrand>

//                 <MDBNavbarToggler
//                     aria-controls='navbarSupportedContent'
//                     aria-expanded='false'
//                     aria-label='Toggle navigation'
//                     onClick={() => setShowBasic(!showBasic)} 
//                 >
//                     <MDBIcon icon='bars' fas />
//                 </MDBNavbarToggler>

//                 <MDBCollapse navbar show={showBasic}>
//                     <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/'>
//                                 Home
//                             </MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Arms'>Arms</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Chest'>Chest</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Legs'>Legs</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Back'>Back</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Shoulders'>Shoulders</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/Abs'>Abs</MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem>
//                             <MDBNavbarLink active aria-current='page' className='exercise-links' href='/TrainingDiaryPage'>Training Diary</MDBNavbarLink>
//                         </MDBNavbarItem>

//                     </MDBNavbarNav>

//                     {/* <form className='d-flex input-group w-auto'>
//                         <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
//                         <MDBBtn color='dark'>Search</MDBBtn>
//                     </form> */}
//                 </MDBCollapse>
//             </MDBContainer>
//         </MDBNavbar>
//     );
// }