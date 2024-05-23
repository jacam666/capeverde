"use client"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start text-muted text-black bg-gradient-to-r from-blue-10 to-slate-40'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
                <div className='me-5 d-none d-lg-block'>
                    <span className='text-black'>Get connected with us on social networks:</span>
                </div>

                <div className='text-black'>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                </div>
            </section>

            <section className='text-black'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        {/* <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                My Cape Verde
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse, facere placeat quisquam consequatur atque facilis dolor tempore dolorem aliquam eveniet unde aliquid, iusto amet.
                            </p>
                        </MDBCol> */}

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='/' className='text-reset'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='./whatWeDo' className='text-reset'>
                                    What we do
                                </a>
                            </p>
                            <p>
                                <a href='./whoWeAre' className='text-reset'>
                                    Who we are
                                </a>
                            </p>
                            <p>
                                <a href='./getInvolved' className='text-reset'>
                                    Get involved
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="5" lg="4" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            {/* <p>
                                <MDBIcon icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p> */}
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                enquiries@mycapeverde.org
                            </p>
                            {/* <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p> */}
                            {/* <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p> */}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}>
                © 2024 Copyright:
                <a className='text-reset fw-bold' href='#'>
                    CamDesigns.com
                </a>
            </div>
        </MDBFooter>
    );
}