export type ProductItem = {
  sku: number,
  category: string,
  title: string,
  unitPrice: number,
  thumbnail: string
};

export type Cart = {
  grandTotal: number;
  items: CartItem[];
};

export type CartItem = {
  sku: number,
  title: string,
  quantity: number,
  unitPrice: number,
  subTotal: number;
  thumbnail: string
};

export type AppState = {
  locale: string;
  currency: string;
  products: ProductItem[];
  cart: Cart;
};

export const initialState: Readonly<AppState> ={
  locale: 'en-GB',
  currency: 'GBP',
  products: [
    {
      sku: 50,
      category: "Men's Mountain Boots",
      title: "Men's Manta GORE-TEX Hiking Boot",
      unitPrice: 320.5,
      thumbnail: '/assets/product_050_thumb.jpg',
    },
    {
      sku: 150,
      category: "Men's Coats and Jackets",
      title: "Men's Stormcloud Prime Waterproof Jacket",
      unitPrice: 99.0,
      thumbnail: '/assets/product_150_thumb.jpg',
    },
    {
      sku: 200,
      category: "Men's Shirts and T-Shirts",
      title: "Men's Sonic Long Sleeve Zip",
      unitPrice: 40.5,
      thumbnail: '/assets/product_200_thumb.jpg',
    },
    {
      sku: 300,
      category: "Men's Gloves",
      title: "Men's Duality GORE-TEX Gloves",
      unitPrice: 72.0,
      thumbnail: '/assets/product_300_thumb.jpg',
    },
  ],
  cart: {
    grandTotal: 0,
    items: [],
  },
};

