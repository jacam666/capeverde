"use client"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Link from 'next/link';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start text-muted text-black bg-gradient-to-r from-blue-10 to-slate-40'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 '>
                <div className='me-5 d-none d-lg-block'>
                    <span className='text-black'>Get connected with us on social networks:</span>
                </div>

                <div className='text-black'>
                    <Link href='https://www.facebook.com/people/My-Cape-Verde/61559008711093/' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </Link>
                    <Link href='/' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </Link>
                    <Link href='/' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </Link>
                    <Link href='https://www.instagram.com/mycapeverdecharity?igsh=MXhoZnB5dTIxZG5hZw== ' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </Link>
                </div>
            </section>

            <section className='text-black'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-3'>Useful links</h6>
                            <div>
                                <Link href='./whatWeDo' className='text-reset'>
                                    What we do
                                </Link>
                            </div>
                            <div>
                                <Link href='./whoWeAre' className='text-reset'>
                                    Who we are
                                </Link>
                            </div>
                            <div>
                                <Link href='./getInvolved' className='text-reset'>
                                    Get involved
                                </Link>
                            </div>
                        </MDBCol>

                        <MDBCol md="5" lg="4" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                enquiries@mycapeverde.org
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='text-center p-4 text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}>
                © 2024 Copyright:<span className='font-bold'>CamDesigns</span>
            </div>
        </MDBFooter>
    );
}