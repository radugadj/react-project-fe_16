import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L5QipAyBZ9zx8jiOIuI9s0k2HpoEospOlZ3zPrdPYndnTdVF7vMLp0PQQrVGcKh9kFzmv4ibQfe6Hq1Fspki4st00oXABwOC3"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}