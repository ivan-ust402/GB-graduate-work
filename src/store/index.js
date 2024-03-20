import { createStore } from "vuex"
import dropmenuStore from "./modules/dropmenu-store"
import burgermenuStore from "./modules/burgermenu-store"
import cartStore from "./modules/cart-store"

export default createStore({
  state: {
    genders: [
      {
        id: 0,
        name: "For men",
        showClothesTypes: false,
        clothesTypes: [
          {
            id: 0,
            name: "Jeans",
          },
          {
            id: 1,
            name: "Trousers",
          },
          {
            id: 2,
            name: "T-shirts",
          },
          {
            id: 3,
            name: "Shirts",
          },
          {
            id: 4,
            name: "Sweaters",
          },
          {
            id: 5,
            name: "Jackets",
          },
          {
            id: 6,
            name: "Coats",
          },
          {
            id: 7,
            name: "Vets",
          },
          {
            id: 8,
            name: "Shorts",
          },
        ],
      },
      {
        id: 1,
        name: "For women",
        showClothesTypes: false,
        clothesTypes: [
          {
            id: 0,
            name: "Jeans",
          },
          {
            id: 1,
            name: "Trousers",
          },
          {
            id: 2,
            name: "T-shirts",
          },
          {
            id: 3,
            name: "Shirts",
          },
          {
            id: 4,
            name: "Sweaters",
          },
          {
            id: 5,
            name: "Jackets",
          },
          {
            id: 6,
            name: "Coats",
          },
          {
            id: 7,
            name: "Vets",
          },
          {
            id: 8,
            name: "Shorts",
          },
          {
            id: 9,
            name: "Skirts",
          },
          {
            id: 10,
            name: "Dresses",
          },
          {
            id: 11,
            name: "Tops",
          },
          {
            id: 12,
            name: "Blouses",
          },
        ],
      },
    ],
    types: [
      {
        id: 0,
        name: "Jeans",
      },
      {
        id: 1,
        name: "Trousers",
      },
      {
        id: 2,
        name: "T-shirts",
      },
      {
        id: 3,
        name: "Shirts",
      },
      {
        id: 4,
        name: "Sweaters",
      },
      {
        id: 5,
        name: "Jackets",
      },
      {
        id: 6,
        name: "Coats",
      },
      {
        id: 7,
        name: "Vets",
      },
      {
        id: 8,
        name: "Shorts",
      },
      {
        id: 9,
        name: "Skirts",
      },
      {
        id: 10,
        name: "Dresses",
      },
      {
        id: 11,
        name: "Tops",
      },
      {
        id: 12,
        name: "Blouses",
      },
    ],
    priceRange: {
      start: 0,
      end: 100000,
    },
    colors: [
      {
        id: 0,
        name: "orange",
        code: "#F57906",
      },
      {
        id: 1,
        name: "grey",
        code: "#4D4A52",
      },
      {
        id: 2,
        name: "blue",
        code: "#294FA4",
      },
      {
        id: 3,
        name: "green",
        code: "#787E62",
      },
      {
        id: 4,
        name: "red",
        code: "#C8031C",
      },
      {
        id: 5,
        name: "black",
        code: "#141316",
      },
      {
        id: 6,
        name: "light blue",
        code: "#7395AE",
      },
      {
        id: 7,
        name: "light brown",
        code: "#CABCA3",
      },
      {
        id: 8,
        name: "dark green",
        code: "#255449",
      },
      {
        id: 9,
        name: "white",
        code: "#F0EDF5",
      },
      {
        id: 10,
        name: "dark blue",
        code: "#102E4F",
      },
      {
        id: 11,
        name: "light grey",
        code: "#A5A7AB",
      },
      {
        id: 12,
        name: "brown",
        code: "#57402C",
      },
      {
        id: 13,
        name: "light green",
        code: "#779284",
      },
      {
        id: 14,
        name: "colorful",
        code: null,
      },
      {
        id: 15,
        name: "light pink",
        code: "#D6C7DC",
      },
      {
        id: 16,
        name: "burgundy",
        code: "#35171A",
      },
      {
        id: 17,
        name: "emerald",
        code: "#193849",
      },
      {
        id: 18,
        name: "violet",
        code: "#7147A2",
      },
      {
        id: 19,
        name: "silver",
        code: "#D1CFD0",
      },
      {
        id: 20,
        name: "gold",
        code: "#E99C00",
      },
      {
        id: 21,
        name: "coral/orange",
        code: "#F8584B",
      },
      {
        id: 22,
        name: "beige",
        code: "#F7EBE1",
      },
      {
        id: 23,
        name: "yellow",
        code: "#D6B41A",
      },
      {
        id: 24,
        name: "graphite",
        code: "#73667A",
      },
      {
        id: 25,
        name: "pink",
        code: "#FD377E",
      },
      {
        id: 26,
        name: "dark beige",
        code: "#CEB2A7",
      },
      {
        id: 27,
        name: "dark grey",
        code: "#524755",
      },
      {
        id: 28,
        name: "purple",
        code: "#602446",
      },
      {
        id: 29,
        name: "turquoise",
        code: "#55E1B9",
      },
    ],
    dressStyles: [
      {
        id: 0,
        name: "Casual",
      },
      {
        id: 1,
        name: "Formal",
      },
      {
        id: 2,
        name: "Party",
      },
      {
        id: 3,
        name: "Gym",
      },
    ],
    sizes: [
      {
        id: 0,
        name: "XX-Small",
        shortName: "xxs",
      },
      {
        id: 1,
        name: "X-Small",
        shortName: "xs",
      },
      {
        id: 2,
        name: "Small",
        shortName: "s",
      },
      {
        id: 3,
        name: "Medium",
        shortName: "m",
      },
      {
        id: 4,
        name: "Large",
        shortName: "l",
      },
      {
        id: 5,
        name: "X-Large",
        shortName: "xxs",
      },
      {
        id: 6,
        name: "XX-Large",
        shortName: "xxl",
      },
      {
        id: 7,
        name: "3X-Large",
        shortName: "xxxl",
      },
      {
        id: 8,
        name: "4X-Large",
        shortName: "xxxxl",
      },
    ],
    products: [
      {
        id: "0",
        sku: "937023680",
        title: "Jeans D13",
        price: 20.63,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.8,
        discount: 10,
        sales: 50,
        type: { id: 0, name: "Jeans" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 1,
          name: "grey",
          code: "#4D4A52",
        },
        allColors: [
          {
            productId: 0,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "0/card.jpg",
        images: ["0/slider-0.jpg", "0/slider-1.jpg", "0/slider-2.jpg"],
        icons: ["0/icon-0.jpg", "0/icon-1.jpg", "0/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Men's banana jeans, like classic ones, are a basic item in any man's wardrobe.",
        details: {
          description:
            "Men's banana jeans, like classic ones, are a basic item in any man's wardrobe. The trousers are wide, slightly tapered at the bottom, it is possible to roll up the bottom of the legs. The jeans are NOT insulated, NOT with elastic, NOT with laces, the model has a zipper and a button on the front, and there are belt loops on the waistband. There are comfortable deep welt pockets at the front and patch pockets at the back. A high rise, unlike low or mid rise pants, is versatile and will look like stylish pants in any situation. Straight-fit trousers are made of 100% cotton. Standard denim pants are suitable for men, boys, youth, boys and teenagers of any shape and height.",
          composition: ["cotton 90%", "elastane 10%"],
        },
      },
      {
        id: "1",
        sku: "1270619665",
        title: "Jeans BOCHETTI",
        price: 19.68,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 10,
        sales: 10,
        type: { id: 0, name: "Jeans" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "2",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "1",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "10",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 2,
          name: "blue",
          code: "#294FA4",
        },
        allColors: [
          {
            productId: 1,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "1/card.jpg",
        images: ["1/slider-0.jpg", "1/slider-1.jpg", "1/slider-2.jpg"],
        icons: ["1/icon-0.jpg", "1/icon-1.jpg", "1/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Bochetti jeans are ideal for those who like to combine casual and sporty styles and want to look stylish and fashionable in everyday life.",
        details: {
          description:
            "Basic straight-fit jeans with a comfortable mid-rise are ideal for any body type. The trouser leg at the knee and thigh provides a loose fit. Thanks to the combination of cotton and elastane (stretch), they not only fit perfectly to your figure, but also provide incredible comfort. All seams and pockets have stylish stitching. They are decorated with fittings with the brand logo. Fashionable and comfortable jeans will be an excellent choice for your wardrobe. If you're looking for a gift for a man, then Bochetti's classic straight leg jeans are a great choice. They are suitable for men of any age and will be a useful and stylish addition to his wardrobe.",
          composition: ["98% cotton", "2% elastane"],
        },
      },
      {
        id: "2",
        sku: "1063766882",
        title: "Jeans Omaqlo",
        price: 24.79,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 10,
        sales: 150,
        type: { id: 0, name: "Jeans" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "20",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "10",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "10",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "10",
          },
        ],
        color: {
          id: 6,
          name: "light blue",
          code: "#7395AE",
        },
        allColors: [
          {
            productId: 2,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "2/card.jpg",
        images: ["2/slider-0.jpg", "2/slider-1.jpg", "2/slider-2.jpg"],
        icons: ["2/icon-0.jpg", "2/icon-1.jpg", "2/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "High quality. Thick and durable jeans do not hinder movement; due to elastane, they create a slight “stretch effect”.",
        details: {
          description:
            "Breathable cotton fabric makes them suitable for year-round wear. Men's jeans are suitable for both teenagers and older men. High-quality accessoriesTurkish-made items have proven themselves to be high-quality and durable clothing. Our gins are designed in Turkey and made from premium cotton, they do not wash out, and keep their shape and color for a long time. Tapered legs Straight and tapered legs look stylish and fashionable. Classic blue jeans 'varenki' are an integral part of the modern man's wardrobe and will perfectly complement your cargo or joggers. Universal fit The universal MOM pattern and small oversize fit will suit any body type.",
          composition: ["cotton 98%", "elastane 2%"],
        },
      },
      {
        id: "3",
        sku: "364704667",
        title: "Insulated trousers LAINA Comfort",
        price: 13.32,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 50,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 3,
          name: "green",
          code: "#787E62",
        },
        allColors: [
          {
            productId: 3,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
          {
            productId: 4,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 5,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
          {
            productId: 6,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "3/card.jpg",
        images: ["3/slider-0.jpg", "3/slider-1.jpg", "3/slider-2.jpg"],
        icons: ["3/icon-0.jpg", "3/icon-1.jpg", "3/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "An excellent choice for creating a sporty look - joggers from the Russian brand LAINA.",
        details: {
          description:
            "An excellent choice for creating a sporty look are joggers from the Russian brand LAINA. The tapered jogger pants are a unique style for comfort in any weather.",
          composition: ["cotton 80%", "elastane 20%"],
        },
      },
      {
        id: "4",
        sku: "364657021",
        title: "Insulated trousers LAINA Comfort",
        price: 13.32,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 50,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 10,
          name: "dark blue",
          code: "#102E4F",
        },
        allColors: [
          {
            productId: 3,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
          {
            productId: 4,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 5,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
          {
            productId: 6,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "4/card.jpg",
        images: ["4/slider-0.jpg", "4/slider-1.jpg", "4/slider-2.jpg"],
        icons: ["4/icon-0.jpg", "4/icon-1.jpg", "4/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "An excellent choice for creating a sporty look - joggers from the Russian brand LAINA.",
        details: {
          description:
            "An excellent choice for creating a sporty look are joggers from the Russian brand LAINA. The tapered jogger pants are a unique style for comfort in any weather.",
          composition: ["cotton 80%", "elastane 20%"],
        },
      },
      {
        id: "5",
        sku: "367641005",
        title: "Insulated trousers LAINA Comfort",
        price: 8.96,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 50,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 4,
          name: "red",
          code: "#C8031C",
        },
        allColors: [
          {
            productId: 3,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
          {
            productId: 4,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 5,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
          {
            productId: 6,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "5/card.jpg",
        images: ["5/slider-0.jpg", "5/slider-1.jpg", "5/slider-2.jpg"],
        icons: ["5/icon-0.jpg", "5/icon-1.jpg", "5/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "An excellent choice for creating a sporty look - joggers from the Russian brand LAINA.",
        details: {
          description:
            "An excellent choice for creating a sporty look are joggers from the Russian brand LAINA. The tapered jogger pants are a unique style for comfort in any weather.",
          composition: ["cotton 80%", "elastane 20%"],
        },
      },
      {
        id: "6",
        sku: "364724131",
        title: "Insulated trousers LAINA Comfort",
        price: 19.12,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 3.8,
        discount: 0,
        sales: 50,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 3,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
          {
            productId: 4,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 5,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
          {
            productId: 6,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "6/card.jpg",
        images: ["6/slider-0.jpg", "6/slider-1.jpg", "6/slider-2.jpg"],
        icons: ["6/icon-0.jpg", "6/icon-1.jpg", "6/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "An excellent choice for creating a sporty look - joggers from the Russian brand LAINA.",
        details: {
          description:
            "An excellent choice for creating a sporty look are joggers from the Russian brand LAINA. The tapered jogger pants are a unique style for comfort in any weather.",
          composition: ["cotton 80%", "elastane 20%"],
        },
      },

      {
        id: "33",
        sku: "1187385444",
        title: "Californication Shirt",
        price: 32.54,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 3.5,
        discount: 5,
        sales: 50,
        type: { id: 3, name: "Shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 33,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 34,
            color: {
              id: 12,
              name: "brown",
              code: "#57402C",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "33/card.jpg",
        images: ["33/slider-0.jpg", "33/slider-1.jpg", "33/slider-2.jpg"],
        icons: ["33/icon-0.jpg", "33/icon-1.jpg", "33/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "The Californication brand will help you plunge into the fashion of the 2000s.",
        details: {
          description:
            "Men's oversized collar shirt is the perfect choice for those looking for comfortable and stylish casual clothing. This loose-fitting shirt is suitable for both casual and school looks for teenagers. Its design fits perfectly with the trendy y2k style. Drape shirt - a thick demi-season shirt can be worn for graduation and as a second layer of clothing in the fall, there is a fashionable detail of youth clothing - patch pockets. Made of cozy polyester, wrinkle-resistant and wear-resistant material, a wide oversized shirt provides comfort and freedom of movement. The material resembles suede fabric with a velvety texture.",
          composition: ["polyester 100%"],
        },
      },
      {
        id: "34",
        sku: "1187536377",
        title: "Californication Shirt",
        price: 33.36,
        currency: "USD",
        currencyCode: "&#36;",
        currencyCode: "&#36;",
        currencyCode: "&#36;",
        currencyCode: "&#36;",
        currencyCode: "&#36;",
        grade: 2.4,
        discount: 3,
        sales: 50,
        type: { id: 3, name: "Shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 12,
          name: "brown",
          code: "#57402C",
        },
        allColors: [
          {
            productId: 33,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 34,
            color: {
              id: 12,
              name: "brown",
              code: "#57402C",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "34/card.jpg",
        images: ["34/slider-0.jpg", "34/slider-1.jpg", "34/slider-2.jpg"],
        icons: ["34/icon-0.jpg", "34/icon-1.jpg", "34/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "The Californication brand will help you plunge into the fashion of the 2000s.",
        details: {
          description:
            "Men's oversized collar shirt is the perfect choice for those looking for comfortable and stylish casual clothing. This loose-fitting shirt is suitable for both casual and school looks for teenagers. Its design fits perfectly with the trendy y2k style. Drape shirt - a thick demi-season shirt can be worn for graduation and as a second layer of clothing in the fall, there is a fashionable detail of youth clothing - patch pockets. Made of cozy polyester, wrinkle-resistant and wear-resistant material, a wide oversized shirt provides comfort and freedom of movement. The material resembles suede fabric with a velvety texture.",
          composition: ["polyester 100%"],
        },
      },

      {
        id: "73",
        sku: "469133123",
        title: "Paxton coat",
        price: 75.08,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 0,
        sales: 10,
        type: { id: 6, name: "Coats" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 73,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "73/card.jpg",
        images: ["73/slider-0.jpg", "73/slider-1.jpg", "73/slider-2.jpg"],
        icons: ["73/icon-0.jpg", "73/icon-1.jpg", "73/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Elegant straight-fit coat with turn-down collar and button closure.",
        details: {
          description:
            "Elegant straight-fit coat with turn-down collar and button closure.",
          composition: ["wool 60%", "polyester 20%", "cashmere 20%"],
        },
      },

      {
        id: "83",
        sku: "983560021",
        title: "Shorts CATCH The whole world of fashion",
        price: 20.54,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 3,
        sales: 250,
        type: { id: 8, name: "Shorts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "0",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "0",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 6,
          name: "light blue",
          code: "#7395AE",
        },
        allColors: [
          {
            productId: 83,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 84,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "83/card.jpg",
        images: [
          "83/slider-0.jpg",
          "83/slider-1.jpg",
          "83/slider-2.jpg",
          "83/slider-3.jpg",
          "83/slider-4.jpg",
          "83/slider-5.jpg",
          "83/slider-6.jpg",
          "83/slider-7.jpg",
        ],
        icons: [
          "83/icon-0.jpg",
          "83/icon-1.jpg",
          "83/icon-2.jpg",
          "83/icon-3.jpg",
          "83/icon-4.jpg",
          "83/icon-5.jpg",
          "83/icon-6.jpg",
          "83/icon-7.jpg",
        ],
        availability: "true",
        shortDescription:
          "Men's blue plain shorts are a true classic that will never go out of style.",
        details: {
          description:
            "They are perfect for those who are looking for a stylish and fashionable look. Also, if you are planning to visit the beach, these shorts will be a great choice. They are light, comfortable and go well with any T-shirt or shirt. If you prefer long, extended shorts, then these trendy Bermuda shorts are perfect for you for the summer. The classic shorts are made of thick, high-quality Turkish denim with the addition of cotton, so they are very strong and durable. They also have a worn and boiled effect, which gives them a special charm and appeal.",
          composition: ["cotton 98%", "lycra 2%"],
        },
      },
      {
        id: "84",
        sku: "967582871",
        title: "Shorts CATCH The whole world of fashion",
        price: 22.62,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.8,
        discount: 0,
        sales: 50,
        type: { id: 8, name: "Shorts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "1",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "4",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 2,
          name: "blue",
          code: "#294FA4",
        },
        allColors: [
          {
            productId: 83,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 84,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "84/card.jpg",
        images: [
          "84/slider-0.jpg",
          "84/slider-1.jpg",
          "84/slider-2.jpg",
          "84/slider-3.jpg",
          "84/slider-4.jpg",
          "84/slider-5.jpg",
          "84/slider-6.jpg",
          "84/slider-7.jpg",
          "84/slider-8.jpg",
          "84/slider-9.jpg",
        ],
        icons: [
          "84/icon-0.jpg",
          "84/icon-1.jpg",
          "84/icon-2.jpg",
          "84/icon-3.jpg",
          "84/icon-4.jpg",
          "84/icon-5.jpg",
          "84/icon-6.jpg",
          "84/icon-7.jpg",
          "84/icon-8.jpg",
          "84/icon-9.jpg",
        ],
        availability: "true",
        shortDescription:
          "Men's blue plain shorts are a true classic that will never go out of style.",
        details: {
          description:
            "They are perfect for those who are looking for a stylish and fashionable look. Also, if you are planning to visit the beach, these shorts will be a great choice. They are light, comfortable and go well with any T-shirt or shirt. If you prefer long, extended shorts, then these trendy Bermuda shorts are perfect for you for the summer. The classic shorts are made of thick, high-quality Turkish denim with the addition of cotton, so they are very strong and durable. They also have a worn and boiled effect, which gives them a special charm and appeal.",
          composition: ["cotton 98%", "lycra 2%"],
        },
      },

      {
        id: "88",
        sku: "1026692238",
        title: "Barouz jeans",
        price: 21.73,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.1,
        discount: 0,
        sales: 1050,
        type: { id: 0, name: "Jeans" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "1000",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "2",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "4",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 6,
          name: "light blue",
          code: "#7395AE",
        },
        allColors: [
          {
            productId: 88,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "88/card.jpg",
        images: ["88/slider-0.jpg", "88/slider-1.jpg", "88/slider-2.jpg"],
        icons: ["88/icon-0.jpg", "88/icon-1.jpg", "88/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Mom's stylish high-waist boyfriends are comfortable, fit well and softly hug the hips, with the perfect amount of stretch to keep you feeling great all day long.",
        details: {
          description:
            "The trendy model 2023 is made of high-quality premium denim, it is soft to the touch, pleasant to the skin, but dense and holds its shape perfectly. Turkish jeans come in a variety of sizes and colors, so you can find the perfect fit for your body type. Fashionable sloafs in classic shades have a loose fit that makes them look like they were made especially for you! Thanks to the long tapered leg, wide style, stretch material and a comfortable belt that does not put pressure on the stomach, popular bananas, like balloons, are suitable for any type of female figure, including plus size ladies, slender and thin ladies with a thin waist.",
          composition: ["cotton 95%", "elastane 5%"],
        },
      },

      {
        id: "92",
        sku: "1152067295",
        title: "Shilliano jeans",
        price: 26.61,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 1000,
        type: { id: 0, name: "Jeans" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 92,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "92/card.jpg",
        images: [
          "92/slider-0.jpg",
          "92/slider-1.jpg",
          "92/slider-2.jpg",
          "92/slider-3.jpg",
          "92/slider-4.jpg",
          "92/slider-5.jpg",
          "92/slider-6.jpg",
          "92/slider-7.jpg",
        ],
        icons: [
          "92/icon-0.jpg",
          "92/icon-1.jpg",
          "92/icon-2.jpg",
          "92/icon-3.jpg",
          "92/icon-4.jpg",
          "92/icon-5.jpg",
          "92/icon-6.jpg",
          "92/icon-7.jpg",
        ],
        availability: "true",
        shortDescription:
          "Women's high-waisted skinny jeans - new for fall 2023 from Shilliano. Women's jeans with belt decor.",
        details: {
          description:
            "The jeans have excellent stretch, and thanks to the correct pattern, they fit snugly to your figure. Women's black jeans are suitable for tall and short stature and any body type. Women's skinny jeans in a trendy design are decorated with a belt and have a push-up effect, which allows you to model and correct your figure, hiding flaws, visually stretching the silhouette. Women's high-waisted jeans from Turkey are a trendy model that will help hide flaws, visually increase your height and perfectly highlight your strengths. Landing is high.",
          composition: ["cotton 95%", "elastane 5%"],
        },
      },

      {
        id: "95",
        sku: "933469103",
        title: "Leggings MAECO Sport",
        price: 10.95,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 1000,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 95,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 96,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 97,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
          {
            productId: 98,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "95/card.jpg",
        images: ["95/slider-0.jpg", "95/slider-1.jpg", "95/slider-2.jpg"],
        icons: ["95/icon-0.jpg", "95/icon-1.jpg", "95/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
        details: {
          description:
            "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
          composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
        },
      },
      {
        id: "96",
        sku: "953618383",
        title: "Leggings MAECO Sport",
        price: 11.06,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 0,
        sales: 1005,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 7,
          name: "light brown",
          code: "#CABCA3",
        },
        allColors: [
          {
            productId: 95,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 96,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 97,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
          {
            productId: 98,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "96/card.jpg",
        images: ["96/slider-0.jpg", "96/slider-1.jpg", "96/slider-2.jpg"],
        icons: ["96/icon-0.jpg", "96/icon-1.jpg", "96/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
        details: {
          description:
            "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
          composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
        },
      },
      {
        id: "97",
        sku: "1413135363 ",
        title: "Leggings MAECO Sport",
        price: 11.98,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 500,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 1,
          name: "grey",
          code: "#4D4A52",
        },
        allColors: [
          {
            productId: 95,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 96,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 97,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
          {
            productId: 98,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "97/card.jpg",
        images: ["97/slider-0.jpg", "97/slider-1.jpg", "97/slider-2.jpg"],
        icons: ["97/icon-0.jpg", "97/icon-1.jpg", "97/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
        details: {
          description:
            "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
          composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
        },
      },
      {
        id: "98",
        sku: "1412874870",
        title: "Leggings MAECO Sport",
        price: 11.98,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 400,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 95,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 96,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 97,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
          {
            productId: 98,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "98/card.jpg",
        images: ["98/slider-0.jpg", "98/slider-1.jpg", "98/slider-2.jpg"],
        icons: ["98/icon-0.jpg", "98/icon-1.jpg", "98/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion.",
        details: {
          description:
            "Seamless leggings are created for those who value comfort and quality. Ribbed leggings are the perfect choice for active and stylish girls! These women's leggings are a real find for those who value comfort and fashion. Thanks to their high rise and seamless design, they are perfect for fitness classes or everyday wear. The high waist makes leggings an excellent choice for girls who want to hide some figure flaws and highlight their beauty. Thanks to the slimming effect and elastic fabric, they are suitable for an adult woman or teenage girl. Black ribbed high-waisted leggings pair perfectly with any other item for a stylish and elegant look. High quality materials guarantee a long service life of the product, and the absence of pilling and fading after washing preserves its original appearance.",
          composition: ["polyester 34%", "nylon 54%", "spandex 12%"],
        },
      },

      {
        id: "110",
        sku: "1290563191",
        title: "Trousers DLIWLID",
        price: 18.76,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 800,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 19,
          name: "silver",
          code: "#D1CFD0",
        },
        allColors: [
          {
            productId: 110,
            color: {
              id: 19,
              name: "silver",
              code: "#D1CFD0",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "110/card.jpg",
        images: [
          "110/slider-0.jpg",
          "110/slider-1.jpg",
          "110/slider-2.jpg",
          "110/slider-3.jpg",
          "110/slider-4.jpg",
          "110/slider-5.jpg",
        ],
        icons: [
          "110/icon-0.jpg",
          "110/icon-1.jpg",
          "110/icon-2.jpg",
          "110/icon-3.jpg",
          "110/icon-4.jpg",
          "110/icon-5.jpg",
        ],
        availability: "true",
        shortDescription:
          "Shiny women's trousers studded with sequins are new for 2023 from the DLIWLID brand.",
        details: {
          description:
            "Captivating with their shimmering shine, they are ideal for summer evenings and festive events. Palazzo-style pants (light flare from the knee), these clothes will be a harmonious addition to your evening look. Thanks to their design, they can be easily adapted even to office style. Are you planning an outfit for New Year's holidays, a wedding or a corporate event? With an emphasis on silver glitter, they become a universal wardrobe item.",
          composition: ["polyester 95%", "spandex 5%"],
        },
      },

      {
        id: "117",
        sku: "1007864928",
        title: "T-shirt OSO&OSO",
        price: 16.31,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 5,
        sales: 1700,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 1,
          name: "grey",
          code: "#4D4A52",
        },
        allColors: [
          {
            productId: 117,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "117/card.jpg",
        images: [
          "117/slider-0.jpg",
          "117/slider-1.jpg",
          "117/slider-2.jpg",
          "117/slider-3.jpg",
          "117/slider-4.jpg",
          "117/slider-5.jpg",
        ],
        icons: [
          "117/icon-0.jpg",
          "117/icon-1.jpg",
          "117/icon-2.jpg",
          "117/icon-3.jpg",
          "117/icon-4.jpg",
          "117/icon-5.jpg",
        ],
        availability: "true",
        shortDescription:
          "Youth clothing in the oversize style has been a trend for many seasons in a row and is one of the trends for 2024. A basic fashionable tunic keeps its shape and will not stretch over time.",
        details: {
          description:
            "Freestyle fashion is gaining momentum. In this regard, our store offers a stylish women's T-shirt. Varenka 100% cotton. The model is wide, straight, loose fit, one size.A plain, elongated, sporty fashion model has a round neck, pattern and/or text. Youth clothing in the oversize style has been a trend for many seasons in a row and one of the trends for 2024. A basic fashionable tunic keeps its shape and will not stretch over time. Lightweight, comfortable, breathable fabric. Suitable for everyday wear, as loungewear. Ideal for: fitness, gymnastics, yoga, running, gym training and dancing, suitable for tourism, outdoor activities, as beachwear, for walking or as homewear.",
          composition: ["cotton 100%"],
        },
      },

      {
        id: "146",
        sku: "1212783269",
        title: "T-shirt OSO&OSO",
        price: 33.39,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 3.5,
        discount: 0,
        sales: 700,
        type: { id: 4, name: "Sweaters" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 17,
          name: "emerald",
          code: "#193849",
        },
        allColors: [
          {
            productId: 146,
            color: {
              id: 17,
              name: "emerald",
              code: "#193849",
            },
          },
          {
            productId: 147,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "146/card.jpg",
        images: [
          "146/slider-0.jpg",
          "146/slider-1.jpg",
          "146/slider-2.jpg",
          "146/slider-3.jpg",
        ],
        icons: [
          "146/icon-0.jpg",
          "146/icon-1.jpg",
          "146/icon-2.jpg",
          "146/icon-3.jpg",
        ],
        availability: "true",
        shortDescription: "High quality, confident, honest hoodie",
        details: {
          description:
            "We are a Belarusian clothing brand. One of the fastest growing clothing brands in Belarus. Made more than 200 thousand customers happy over the past year. We sell not just clothes, but we are building a brand - high-quality, confident, honest.",
          composition: ["cotton 65%", "polyester 35%"],
        },
      },
      {
        id: "147",
        sku: "1171646478",
        title: "T-shirt OSO&OSO",
        price: 33.39,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 0,
        sales: 700,
        type: { id: 4, name: "Sweaters" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 1,
          name: "grey",
          code: "#4D4A52",
        },
        allColors: [
          {
            productId: 146,
            color: {
              id: 17,
              name: "emerald",
              code: "#193849",
            },
          },
          {
            productId: 147,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "147/card.jpg",
        images: [
          "147/slider-0.jpg",
          "147/slider-1.jpg",
          "147/slider-2.jpg",
          "147/slider-3.jpg",
        ],
        icons: [
          "147/icon-0.jpg",
          "147/icon-1.jpg",
          "147/icon-2.jpg",
          "147/icon-3.jpg",
        ],
        availability: "true",
        shortDescription: "High quality, confident, honest hoodie",
        details: {
          description:
            "We are a Belarusian clothing brand. One of the fastest growing clothing brands in Belarus. Made more than 200 thousand customers happy over the past year. We sell not just clothes, but we are building a brand - high-quality, confident, honest.",
          composition: ["cotton 65%", "polyester 35%"],
        },
      },

      {
        id: "175",
        sku: "906635615",
        title: "Coat Libas",
        price: 80.43,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 700,
        type: { id: 6, name: "Coats" },
        dressStyle: { id: 3, name: "Formal" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 7,
          name: "light brown",
          code: "#CABCA3",
        },
        allColors: [
          {
            productId: 117,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "175/card.jpg",
        images: [
          "175/slider-0.jpg",
          "175/slider-1.jpg",
          "175/slider-2.jpg",
          "175/slider-3.jpg",
          "175/slider-4.jpg",
        ],
        icons: [
          "175/icon-0.jpg",
          "175/icon-1.jpg",
          "175/icon-2.jpg",
          "175/icon-3.jpg",
          "175/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "The coat has a straight cut, sits loosely, and if you want the coat to fit your figure, then just tie it with a belt.",
        details: {
          description:
            "The coat has a straight cut, sits loosely, and if you want the coat to fit your figure, then just tie it with a belt. Thanks to the free style, it will look fashionable on girls with different body types. A medium-length coat, very comfortable and practical, for everyday wear, work and holidays. The women's double-breasted coat is woolen and warm, and goes well with different styles of women's clothing and different shoes. The coat is made of high-quality woolen fabric, soft and pleasant to the touch, does not wrinkle. The long double-breasted coat is fastened with 3 buttons, one hidden. Oversize allows you to wear warm clothes under a wool coat and wear the coat in Eurowinter, autumn and spring.",
          composition: ["wool 75%", "viscose 20%", "elastane 5%"],
        },
      },

      {
        id: "215",
        sku: "936473250",
        title: "Top MOSHKA LOV",
        price: 10.78,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 200,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 215,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 216,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 217,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "215/card.jpg",
        images: [
          "215/slider-0.jpg",
          "215/slider-1.jpg",
          "215/slider-2.jpg",
          "215/slider-3.jpg",
          "215/slider-4.jpg",
          "215/slider-5.jpg",
        ],
        icons: [
          "215/icon-0.jpg",
          "215/icon-1.jpg",
          "215/icon-2.jpg",
          "215/icon-3.jpg",
          "215/icon-4.jpg",
          "215/icon-5.jpg",
        ],
        availability: "true",
        shortDescription: "Evening top under a jacket.",
        details: {
          description:
            "Combine a summer crop top with a jacket and wide palazzo pants, or a stylish bright skirt, a couple of accessories and you are a queen. Girls' tank top looks good with jeans, shorts, skirts and leggings.",
          composition: ["cotton 80%", "elastane 5%", "viscose 15%"],
        },
      },
      {
        id: "216",
        sku: "981281953",
        title: "Top MOSHKA LOV",
        price: 10.61,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 300,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 6,
          name: "light blue",
          code: "#7395AE",
        },
        allColors: [
          {
            productId: 215,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 216,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 217,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "216/card.jpg",
        images: [
          "216/slider-0.jpg",
          "216/slider-1.jpg",
          "216/slider-2.jpg",
          "216/slider-3.jpg",
          "216/slider-4.jpg",
          "216/slider-5.jpg",
        ],
        icons: [
          "216/icon-0.jpg",
          "216/icon-1.jpg",
          "216/icon-2.jpg",
          "216/icon-3.jpg",
          "216/icon-4.jpg",
          "216/icon-5.jpg",
        ],
        availability: "true",
        shortDescription: "Evening top under a jacket.",
        details: {
          description:
            "Combine a summer crop top with a jacket and wide palazzo pants, or a stylish bright skirt, a couple of accessories and you are a queen. Girls' tank top looks good with jeans, shorts, skirts and leggings.",
          composition: ["cotton 80%", "elastane 5%", "viscose 15%"],
        },
      },
      {
        id: "217",
        sku: "943457811",
        title: "Top MOSHKA LOV",
        price: 10.81,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 100,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          {
            size: {
              id: 0,
              name: "XX-Small",
              shortName: "xxs",
            },
            amount: "10",
          },
          {
            size: {
              id: 1,
              name: "X-Small",
              shortName: "xs",
            },
            amount: "10",
          },
          {
            size: {
              id: 2,
              name: "Small",
              shortName: "s",
            },
            amount: "200",
          },
          {
            size: {
              id: 3,
              name: "Medium",
              shortName: "m",
            },
            amount: "10",
          },
          {
            size: {
              id: 4,
              name: "Large",
              shortName: "l",
            },
            amount: "40",
          },
          {
            size: {
              id: 5,
              name: "X-Large",
              shortName: "xxs",
            },
            amount: "40",
          },
          {
            size: {
              id: 6,
              name: "XX-Large",
              shortName: "xxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 7,
              name: "3X-Large",
              shortName: "xxxl",
            },
            amount: "0",
          },
          {
            size: {
              id: 8,
              name: "4X-Large",
              shortName: "xxxxl",
            },
            amount: "0",
          },
        ],
        color: {
          id: 3,
          name: "green",
          code: "#787E62",
        },
        allColors: [
          {
            productId: 215,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 216,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 217,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-02-26T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "217/card.jpg",
        images: [
          "217/slider-0.jpg",
          "217/slider-1.jpg",
          "217/slider-2.jpg",
          "217/slider-3.jpg",
          "217/slider-4.jpg",
          "217/slider-5.jpg",
        ],
        icons: [
          "217/icon-0.jpg",
          "217/icon-1.jpg",
          "217/icon-2.jpg",
          "217/icon-3.jpg",
          "217/icon-4.jpg",
          "217/icon-5.jpg",
        ],
        availability: "true",
        shortDescription: "Evening top under a jacket.",
        details: {
          description:
            "Combine a summer crop top with a jacket and wide palazzo pants, or a stylish bright skirt, a couple of accessories and you are a queen. Girls' tank top looks good with jeans, shorts, skirts and leggings.",
          composition: ["cotton 80%", "elastane 5%", "viscose 15%"],
        },
      },
    ],
    productReviews: [
      {
        reviewId: 0,
        productId: 0,
        userId: 0,
        userName: "Samantha D.",
        grade: 4.5,
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: "2023-08-14T01:30:00.000-05:00",
      },
      {
        reviewId: 1,
        productId: 0,
        userId: 1,
        userName: "Alex M.",
        grade: 4,
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        date: "2023-08-15T01:30:00.000-05:00",
      },
      {
        reviewId: 2,
        productId: 0,
        userId: 2,
        userName: "Ethan R.",
        grade: 3.5,
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        reviewId: 3,
        productId: 0,
        userId: 3,
        userName: "Ethan O.",
        grade: 5,
        text: "Cool. I'm very happy",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        reviewId: 4,
        productId: 0,
        userId: 12,
        userName: "Olivia P.",
        grade: 4,
        text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        reviewId: 5,
        productId: 0,
        userId: 13,
        userName: "Liam K.",
        grade: 4,
        text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        reviewId: 6,
        productId: 0,
        userId: 14,
        userName: "Ava H.",
        grade: 5,
        text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        reviewId: 7,
        productId: 0,
        userId: 6,
        userName: "Kate M.",
        grade: 5,
        text: "I received my order from this store! The items are excellent, very high quality tailoring, bright colors, everything is carefully and securely packaged. The size is right and I look as beautiful in these outfits as the store models on Instagram!",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        reviewId: 8,
        productId: 0,
        userId: 3,
        userName: "Julia K.",
        grade: 5,
        text: "I liked everything. Fast, high quality, beautiful!",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        reviewId: 9,
        productId: 0,
        userId: 4,
        userName: "Helena P.",
        grade: 4.5,
        text: "Many thanks to the online consultants in the store. They treat customers with attention and love! Careful packaging in branded bags.In general, I am immensely glad that we have such a store.",
        date: "2023-08-16T01:30:00.000-05:00",
      },
    ],
    shopReviews: [
      {
        id: 0,
        userId: 0,
        grade: 4.5,
        userName: "Samantha D.",
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        date: "2023-08-16T01:30:00.000-05:00",
      },
      {
        id: 1,
        userId: 1,
        grade: 4,
        userName: "Alex M.",
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 2,
        userId: 2,
        grade: 3.5,
        userName: "Ethan R.",
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 3,
        userId: 3,
        grade: 5,
        userName: "Ethan O.",
        text: "Cool. I'm very happy",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 4,
        userId: 4,
        grade: 5,
        userName: "Helena P.",
        text: "Many thanks to the online consultants in the store. They treat customers with attention and love! Careful packaging in branded bags.In general, I am immensely glad that we have such a store.",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 5,
        userId: 5,
        grade: 5,
        userName: "Julia K.",
        text: "I liked everything. Fast, high quality, beautiful!",
        date: "2024-01-02T01:30:00.000-05:00",
      },
      {
        id: 6,
        userId: 6,
        grade: 4.5,
        userName: "Kate M.",
        text: "I received my order from this store! The items are excellent, very high quality tailoring, bright colors, everything is carefully and securely packaged. The size is right and I look as beautiful in these outfits as the store models on Instagram!",
        date: "2023-03-07T01:30:00.000-05:00",
      },
      {
        id: 7,
        userId: 7,
        grade: 5,
        userName: "Nicole S.",
        text: "Today I received my order. The quality of the jacket and skirt is very good. Everything was beautifully packed with love. The jacket didn't even wrinkle. There was also a sweet surprise. Thank you for the good mood and quality items!",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 8,
        userId: 8,
        grade: 4.5,
        userName: "Angelika R.",
        text: "Very good selection and excellent service. Thanks a lot.",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 9,
        userId: 9,
        grade: 5,
        userName: "Kim K.",
        text: "Cool store, quality items, large assortment and very pleasant consultants.",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 10,
        userId: 10,
        grade: 4.5,
        userName: "Lessy O.",
        text: "I'll definitely come back again. Thank you very much.",
        date: "2022-09-21T01:30:00.000-05:00",
      },
      {
        id: 11,
        userId: 11,
        grade: 5,
        userName: "Jessy M.",
        text: "I'm already placing my third order!!! All orders through the online store. Very pleased with the quality!!!!! The models are gorgeous, I’m simply in love! All dresses are perfect! I wear it with pleasure!",
        date: "2022-09-21T01:30:00.000-05:00",
      },
    ],
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    },
    getGenders(state) {
      return state.genders
    },
    getTypes(state) {
      return state.types
    },
    getALLProducts(state) {
      return state.products
    },
    getRequiredAmountOfNewArivals: (state) => {
      let index = 0
      const newArrivals = state.products.filter(
        (product) => product.newArrivals
      )
      return (step, startIndex = index) => {
        const batch = newArrivals.slice(startIndex, startIndex + step)
        if (batch.length < step || batch.length === 0) {
          index = 0
          if(startIndex === 0) {
            return batch
          }
          return { message: "No more products available" }
        }
        index = startIndex + step
        return batch
      }
    },
    getRequiredExtraAmountOfNewArivals: (state) => {
      let index = 0
      const newArrivals = state.products.filter((product) => product.newArrivals)
      return (step, startIndex = index) => {
        const batch = newArrivals.slice(startIndex, startIndex + step)
        if (batch.length === 0) {
          index = 0
          if(startIndex === 0) {
            return batch
          }
          return { message: "No more products available" }
        }
        index = startIndex + step
        return batch
      }
    },
    getRequiredAmountOfTopSellings: (state) => {
      let index = 0
      const topSellings = state.products.filter((product) => product.topSelling)
      return (step, startIndex = index) => {
        const batch = topSellings.slice(startIndex, startIndex + step)

        if (batch.length < step || batch.length === 0) {
          index = 0
          return { message: "No more products available" }
        }
        index = startIndex + step
        return batch
      }
    },
    getRequiredExtraAmountOfTopSellings: (state) => {
      let index = 0
      const topSellings = state.products.filter((product) => product.topSelling)
      return (step, startIndex = index) => {
        const batch = topSellings.slice(startIndex, startIndex + step)
        if (batch.length === 0) {
          index = 0
          return { message: "No more products available" }
        }
        index = startIndex + step
        return batch
      }
    },
    getRequiredAmountShopReviews: (state) => {
      let index = 0
      return (step, startIndex = index) => {
        const batch = state.shopReviews.slice(startIndex, startIndex + step)
        if (batch.length < step || batch.length === 0) {
          index = 0
          if(startIndex === 0) {
            return batch
          }
          return { message: "No more reviews available" }
        }
        index = startIndex + step
        return batch
      }
    },


    getSimilarProducts: (state, typeName, styleName, genderName) => {
      let index = 0
      const offer = state.products.filter(
        (product) =>
          product.type.name === typeName &&
          product.dressStyle.name === styleName &&
          product.gender.name === genderName
      )
      return (step, startIndex = index) => {
        const batch = offer.slice(startIndex, startIndex + step)
        if (batch.length < step || batch.length === 0) {
          index = 0
          return { message: "No more products available" }
        }
        index = startIndex + step
        return batch
      }
    },

    getProductByQuery: (state) => (query) => {
      const { gender, type, color, size, style, priceMin, priceMax, show } = query
      console.log(gender, type, color, size, style, priceMin, priceMax, show)

      return state.products.filter(product => {
        return (!show || product) && (!gender || product.gender.name.split('')[0] === gender.split('')[0]) &&
        (!type || product.type.name.toLowerCase() === type) &&
        (!color || product.color.name.toLowerCase() === color) &&
        (!size || product.sizesInfo.find(sizeInfo => sizeInfo.size.name === size && sizeInfo.amount > 0)) &&
        (!style || product.dressStyle.name.toLowerCase() === style) &&
        (!priceMin || !priceMax || Number(product.price) > priceMin && Number(product.price) < priceMin) 
      })
    }
  },
  mutations: {},
  actions: {},
  modules: {
    dropmenuStore,
    burgermenuStore,
    cartStore,
  },
})
