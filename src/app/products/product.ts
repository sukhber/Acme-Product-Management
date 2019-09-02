export interface IProduct {
    "id": number,
    "productName": string,
    "productCode": string,
    "releaseDate": string,
    "description": string,
    "price": number,
    "starRating": number,
    "imageUrl": string
}

export interface IProductResolved {
    "product": IProduct,
    "error"?: any
}

export interface IProductListResolved {
    "products": IProduct[],
    "error"?: any
}