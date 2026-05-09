class Product {
    constructor (name, price, stock){
        this.name  = name;
        this.price = price;
        this.stock = stock;
    }

    OderProduct(name,quantity){

        if (this.stock > 0){
            this.stock -=quantity;
        }else {
            console.log("Product not available");
        }
        
    }

    #validateCouponCode (couponCode){
        const coupons = ['Rohan10','Welcome20'];

        for (let coupon in coupons){
            if (couponCode == coupon && coupon =='Rohan10'){
                return 10
            }
            else if (couponCode == coupon && coupon =='Welcome20'){
                return 20
            }
            else{
                return -1
            }
        }

        
    }

    applyCoupon(code){
        if (this.#validateCouponCode(code)==-1){
            console.log("Coupon is Invalid");
        }else{
           let discount = this.#validateCouponCode(code)
           console.log(`${discount} % discount is applied` );
        }
    }
}