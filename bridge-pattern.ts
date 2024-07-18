class SPayment {
    processPayment(payment: string){
        console.log('Payment Processing');
        console.log(payment);
    }
}

class Holista {
    private payment: SPayment
    constructor(payment: SPayment){
        this.payment = payment;
    }
    processPayment() {
        this.payment.processPayment('Stripe')
    }
}

class Alithias {
    private payment: SPayment
    
    constructor(payment: SPayment){
        this.payment = payment;
    }
    processPayment() {
        this.payment.processPayment('Stripe')
    }
}

const holistaPayment = new Holista(new SPayment());
console.log(holistaPayment.processPayment())
    
