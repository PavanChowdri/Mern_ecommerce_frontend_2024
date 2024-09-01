export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: {
    url: string;
    public_id: string;
  }[];
  _id: string;
};

export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
};

export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

export type OrderItem = Omit<CartItem, "stock"> & { _id: string }; //except stock all will be there from cartItem and one extra type called _id which will be generated by mongodb is taken

export type Order = {
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};

type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};

type LatestTransaction = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
};

export type Stats = {
  categoryCount: Record<string, number>[];
  changePercent: CountAndChange;
  count: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransactions: LatestTransaction[];
};

type RevenueDistrubion = {
  netMargin: number;
  discount: number;
  ProductionCost: number;
  burnt: number;
  marketingCost: number;
};

type OrderFullfillment = {
  processing: number;
  shipped: number;
  delivered: number;
};

type UserAgeGroup = { teen: number; adult: number; old: number };

export type Pie = {
  orderFullfillment: OrderFullfillment;
  productCategories: Record<string, number>[];
  stockAvailability: { inStock: number; outOfStock: number };
  revenueDistribution: RevenueDistrubion;
  usersAgeGroup: UserAgeGroup;
  adminCustomer: { admin: number; customer: number };
};

export type Bar = {
  products: number[];
  users: number[];
  orders: number[];
};

export type Line = {
  products: number[];
  users: number[];
  discount: number[];
  revenue: number[];
};
