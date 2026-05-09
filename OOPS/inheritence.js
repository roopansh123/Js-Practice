class Product {
    #price;
    #stock;

    constructor(name, price, stock) {
        this.name = name;
        this.#price = price;
        this.#stock = stock;
    }

    getPrice() {
        return this.#price;
    }

    isInStock() {
        return this.#stock > 0;
    }
}

class DigitalProduct extends Product {
    constructor(name, price, stock, downloadLink) {
        super(name, price, stock);
        this.downloadLink = downloadLink;
    }

    getProduct() {
        return `download link: ${this.downloadLink}`;
    }
}

class PhysicalProduct extends Product {
    constructor(name, price, stock, weight) {
        super(name, price, stock);
        this.weight = weight;
    }

    deliver() {
        return `Your product named ${this.name} will charge ${this.weight * 5} rupees`;
    }
}




const ebook = new DigitalProduct(
    "DSA in JS",
    500,
    10,
    "www.abc.com"
);

const mobile = new PhysicalProduct(
    "iPhone",
    70000,
    5,
    2
);