import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../styles/section_formule.css';
import '../styles/style.css';




function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


    };

    return (
        <section>
            <form onSubmit={handleSubmit} className=''>
                <CardElement />
                <button type="submit" disabled={!stripe} className='button'>
                    Payer
                </button>
            </form>
            
        </section>
    );
}

export default PaymentForm;
