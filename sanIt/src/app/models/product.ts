export class Products {
    // tslint:disable-next-line: variable-name
    id: string;
    title: string;
    description: string;
    url: string;
    price: string;

    constructor(id: string, title: string, description: string, url: string, price: string) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.title = title;
    }
}

export class Product {
    // tslint:disable-next-line: variable-name
    id: string;
    title: string;
    description: string;
    url: string;
    price: string;
    count: number;

    constructor(id: string, title: string, description: string, url: string, price: string, count: number = 0) {
        this.id = id;
        this.count = count;
        this.description = description;
        this.price = price;
        this.title = title;
    }
}
