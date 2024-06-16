import { Button } from '@material-tailwind/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ImSpinner } from 'react-icons/im';
import toast from 'react-hot-toast';
import UseAuth from '../../Hook/UseAuth';
import useAxiosSecure from './../../Hook/useAxiosSecure';


const CheckoutForm = ({ amount, campaignData }) => {

    const stripe = useStripe()
    const { user } = UseAuth()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const [transectionId, setTransectionId] = useState('')

    useEffect(() => {
        axiosSecure.post('/payment-intent', { fees: amount })
            .then(res => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, amount])

    const handlePaymentSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        try {
            const { error } = await stripe.createPaymentMethod({
                type: 'card',
                card
            })

            if (error) {
                setError(error?.message)
                setLoading(false)
            } else {
                setError('')
                setLoading(false)
            }

            const { paymentIntent, error: confimationError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "Unknown",
                        name: user?.displayName || "Unknown"
                    }
                }
            })

            if (confimationError) {
                toast.error(confimationError)
            } else {
                if (paymentIntent?.status === 'succeeded') {
                    setTransectionId(paymentIntent?.id)
                    const paidAmount = paymentIntent.amount / 100;
                    console.log("Paid : ", paidAmount);
                    const newPaymentData = {
                        userName: user?.displayName,
                        userEmail: user?.email,
                        paidAmount: paidAmount,
                        campaignId: campaignData._id,
                        campaignCreator: campaignData.campaignCreator,
                        petImage: campaignData.donationImageURL,
                        petName: campaignData.campaignName
                    }
                    await axiosSecure.post("/donation-payment", newPaymentData)
                    toast.success("Payment Success")
                } else{
                    toast.error('Payment Error')
                }
            }

        } catch (err) {
            console.log(err);
            toast.err('Payment Failed')
        }
    }

    return (
        <form onSubmit={handlePaymentSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='mt-10'>
                <div>
                    {
                        error && <p className='text-red-500 font-semibold text-center'> {error}</p>
                    }
                </div>
                <div>
                    {
                        transectionId &&
                        <div>
                            <h1 className='text-2xl font-semibold text-center'> Payment Success </h1>
                            <p className='text-green-500 font-semibold text-center mt-2 uppercase'>Transection ID : {transectionId}</p>
                        </div>
                    }
                </div>
            </div>
            <Button className='px-10 py-3 block mx-auto mt-10' type="submit" disabled={!stripe || !clientSecret || transectionId}>
                {
                    loading ? <span> <ImSpinner className='animate-spin' /> </span>
                        :
                        <span>Pay</span>
                }
            </Button>
        </form>
    );
};

CheckoutForm.propTypes = {
    amount: PropTypes.number,
    campaignData: PropTypes.object,
};

export default CheckoutForm;