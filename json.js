let data = [
  {
    id: 1,
    name: "name 1",
    des: "this is a full description of the product. this is a full description of the product. this is a full description of the product. ",
    stock: 34,
    price: 21,
    img: "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PedigreeMeat_RiceAdultDryDogFood_1000x.jpg?v=1636440620",
  },
  {
    id: 2,
    name: "name 2",
    des: "this is a full description of the product. this is a full description of the product. this is a full description of the product. ",
    stock: 28,
    price: 12,
    img: "https://images.heb.com/is/image/HEBGrocery/002083057?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    id: 3,
    name: "name 3",
    des: "this is a full description of the product. this is a full description of the product. this is a full description of the product. ",
    stock: 30,
    price: 23,
    img: "https://cdn.shopify.com/s/files/1/0484/0009/products/48841-18kg-Premium-Dog-Lamb-_-Rice-_FRONT_1600x1600.jpg?v=1647488934",
  },
  {
    id: 4,
    name: "name 4",
    des: "this is a full description of the product. this is a full description of the product. this is a full description of the product. ",
    stock: 34,
    price: 21,
    img: "https://cdn.shopify.com/s/files/1/0086/0795/7054/products/PedigreeMeat_RiceAdultDryDogFood_1000x.jpg?v=1636440620",
  },
  {
    id: 5,
    name: "name 5",
    des: "this is a full description of the product. this is a full description of the product. this is a full description of the product. ",
    stock: 28,
    price: 12,
    img: "https://images.heb.com/is/image/HEBGrocery/002083057?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
  },
  {
    id: 6,
    name: "name 6",
    des: "this is a full description of the product. this is a full description of the product. this is a full description of the product. ",
    stock: 30,
    price: 23,
    img: "https://cdn.shopify.com/s/files/1/0484/0009/products/48841-18kg-Premium-Dog-Lamb-_-Rice-_FRONT_1600x1600.jpg?v=1647488934",
  },
];

export default function getProduct(number) {
  console.log(
    number,
    data.filter((x) => x.id === number)
  );
  return data.filter((x) => x.id === number);
}
export function getProducts() {
  return data;
}
