export type Internationalization = {
  locale: string;
  currencyCode: string;
};

export type ProductItem = {
  sku: number,
  category: string,
  title: string,
  unitPrice: number,
  thumbnail: string
};

export type ProductSlice = {
  asyncInFlight: boolean;
  error: string|null;
  items: ProductItem[];
};

export type CartItem = {
  sku: number,
  title: string,
  quantity: number,
  unitPrice: number,
  subTotal: number;
  thumbnail: string
};

export type CartSlice = {
  asyncInFlight: boolean;
  error: string|null;
  grandTotal: number;
  items: CartItem[];
};

export type AppState = {
  i18n: Internationalization;
  product: ProductSlice;
  cart: CartSlice;
};

export const initialState: Readonly<AppState> = {
  i18n: {
    locale: 'en-GB',
    currencyCode: 'GBP'
  },
  product: {
    asyncInFlight: false,
    error: null,
    items: [],
  },
  cart: {
    asyncInFlight: false,
    error: null,
    grandTotal: 0,
    items: [],
  },
};

