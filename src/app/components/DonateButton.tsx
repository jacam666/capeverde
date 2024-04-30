"use client"
import { MDBBtn } from 'mdb-react-ui-kit';

export default function DonateButton() {
    return (
        <div className='text-center'>
            <a href='https://www.paypal.com' target='blank' rel='noopener noreferrer'>
                <MDBBtn className='mt-4 mb-4 py-2 text-3xl'>Donate Now</MDBBtn>
            </a>
        </div>
    );
}