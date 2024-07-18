class BasePayment {

} 
class StripePayment extends BasePayment {
    constructor() {
        super()
    };

    doPayment() {
        return 'Method not implemented!'
    };

    undoPayment() {
        return 'Stripe payment undo!'
    }

    paymentSuccess() {
        return 'Striper payment success!'
    }

    paymentFailure() {
        return 'Stripe payment failure'
    }
}

class PaypalPayment extends BasePayment {
    constructor() {
        super()
    };

    doPayment() {
        return 'Paypal doPayment'
    };

    undoPayment() {
        return 'Paypal undo Payment!'
    }

    paymentSuccess() {
        return 'Paypal payment succeded!'
    }

    paymentFailure() {
        return 'Payment Failure'
    }
}

class payment extends BasePayment {
    constructor() {
        super()
    }


}


