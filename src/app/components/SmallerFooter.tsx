"use client"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function SmallerFooter() {
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
                        <MDBCol md="5" lg="4" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-center fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                enquiries@mycapeverde.org
                            </p>
                            {/* <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p> */}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}>
                © 2024 Copyright:
                <a className='text-reset fw-bold' href='#'>
                    camdesigns.com
                </a>
            </div>
        </MDBFooter>
    );
}