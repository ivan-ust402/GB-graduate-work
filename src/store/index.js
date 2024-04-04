import { createStore } from "vuex"
import dropmenuStore from "./modules/dropmenu-store"
import burgermenuStore from "./modules/burgermenu-store"
import cartStore from "./modules/cart-store"
import catalogStore from "./modules/catalog-store"

export default createStore({
  state: {
    genders: [
      {
        id: 0,
        name: "For men",
        shortName: "man",
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
        shortName: "woman",
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
    priceRanges: {
      start: 0,
      end: 1000,
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
        code: "#70123b",
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
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "0" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "0" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "0",
          },
        ],
        color: { id: 1, name: "grey", code: "#4D4A52" },
        allColors: [
          { productId: 0, color: { id: 1, name: "grey", code: "#4D4A52" } },
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
        id: "7",
        sku: "898226821",
        title: "Sports trousers Lia collection",
        price: 10.26,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.0,
        discount: 5,
        sales: 55,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "0" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "0" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 7,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "7/card.jpg",
        images: ["7/slider-0.jpg", "7/slider-1.jpg", "7/slider-2.jpg"],
        icons: ["7/icon-0.jpg", "7/icon-1.jpg", "7/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Men's sports trousers made of high-quality, wrinkle-resistant, wear-resistant knitwear!",
        details: {
          description:
            "Summer sports trousers made of lightweight material will be a great addition to any wardrobe, for fitness, for sports, for home, for running and walking, for daily wear. Loose fit sweatpants! Sports trousers for men are equipped with cuffs and ties at the waist.",
          composition: ["cotton 80%", "elastane 20%"],
        },
      },
      {
        id: "8",
        sku: "1362046063",
        title: "Bronx pants",
        price: 27.62,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 15,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "0" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "0" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 8,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "8/card.jpg",
        images: ["8/slider-0.jpg", "8/slider-1.jpg", "8/slider-2.jpg"],
        icons: ["8/icon-0.jpg", "8/icon-1.jpg", "8/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Joggers from Bronks Practicality, comfort and style are the fundamental qualities when choosing trousers.",
        details: {
          description:
            "The joggers model from the Bronks brand meets all the necessary requirements. Made from dense cotton material, which is tactilely pleasant to the body and allows it to breathe during physical activity.",
          composition: ["cotton 95%", "elastane 5%"],
        },
      },
      {
        id: "9",
        sku: "994440050",
        title: "AIGULA trousers",
        price: 28.25,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 10,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "0" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "0" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 9,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 10,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "9/card.jpg",
        images: ["9/slider-0.jpg", "9/slider-1.jpg", "9/slider-2.jpg"],
        icons: ["9/icon-0.jpg", "9/icon-1.jpg", "9/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Men's chinos are an element of a man's wardrobe that can be used in different styles.",
        details: {
          description:
            "Aigula cotton summer trousers are lightweight and comfortable to wear. Plain semi-tapered chinos go well with classic-cut cotton and linen shirts, as well as polo-shirts and sweatshirts. Cotton chinos are very practical, they are an alternative to jeans and therefore are very popular among many men and teenagers. Trousers made of thin cotton are suitable for a business style; you can wear them to work or school.",
          composition: ["cotton 97%", "spandex 3%"],
        },
      },
      {
        id: "10",
        sku: "679212842",
        title: "AIGULA trousers",
        price: 28.95,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "0" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "0" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 9,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 10,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "10/card.jpg",
        images: ["10/slider-0.jpg", "10/slider-1.jpg", "10/slider-2.jpg"],
        icons: ["10/icon-0.jpg", "10/icon-1.jpg", "10/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Men's chinos are an element of a man's wardrobe that can be used in different styles.",
        details: {
          description:
            "Aigula cotton summer trousers are lightweight and comfortable to wear. Plain semi-tapered chinos go well with classic-cut cotton and linen shirts, as well as polo-shirts and sweatshirts. Cotton chinos are very practical, they are an alternative to jeans and therefore are very popular among many men and teenagers. Trousers made of thin cotton are suitable for a business style; you can wear them to work or school.",
          composition: ["cotton 97%", "spandex 3%"],
        },
      },
      {
        id: "11",
        sku: "1209512538",
        title: "Pants ZINGER JEANS Casual",
        price: 18.65,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "0" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "0" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 11,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "11/card.jpg",
        images: ["11/slider-0.jpg", "11/slider-1.jpg", "11/slider-2.jpg"],
        icons: ["11/icon-0.jpg", "11/icon-1.jpg", "11/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "ZingerJeans pants are something that never goes out of style.",
        details: {
          description:
            "ZingerJeans pants are something that never goes out of style. This is a stylish and comfortable option for work, leisure and everyday wear. In addition, they suit almost any body type and go well with a variety of shoes.",
          composition: ["cotton 85%", "spandex 15%"],
        },
      },
      {
        id: "12",
        sku: "293479279",
        title: "oodji Lab Pants",
        price: 21.08,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5.0,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "10" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 1,
          name: "grey",
          code: "#4D4A52",
        },
        allColors: [
          {
            productId: 12,
            color: {
              id: 1,
              name: "grey",
              code: "#4D4A52",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "12/card.jpg",
        images: ["12/slider-0.jpg", "12/slider-1.jpg", "12/slider-2.jpg"],
        icons: ["12/icon-0.jpg", "12/icon-1.jpg", "12/icon-2.jpg"],
        availability: "true",
        shortDescription: "Tapered suit trousers with belt loops.",
        details: {
          description:
            "The model has two beveled side and two back welt pockets. These comfortable trousers feature a stylish vintage plaid pattern. Durable mixed fabric with the addition of viscose retains its color and appearance well and is easy to care for. Pair with boots and a shirt or a classic unpatterned pullover for an elegant look for the office. And with a T-shirt and blazer you will get a smart casual look.",
          composition: ["polyester 71%", "viscose 85%", "elastane 2%"],
        },
      },
      {
        id: "13",
        sku: "1202033917",
        title: "Trousers DTMD",
        price: 68.78,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 5,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 13,
            color: {
              id: 12,
              name: "brown",
              code: "#57402C",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "13/card.jpg",
        images: ["13/slider-0.jpg", "13/slider-1.jpg", "13/slider-2.jpg"],
        icons: ["13/icon-0.jpg", "13/icon-1.jpg", "13/icon-2.jpg"],
        availability: "true",
        shortDescription: "Spectacular trousers in Smart Casual style.",
        details: {
          description:
            "Made from premium Italian wool fabric, the trousers are warm, soft and lightweight at the same time.Thoughtful construction and perfect fit combined with modern design ensure maximum comfort and optimal fit!",
          composition: ["wool 80%", "polyester 20%"],
        },
      },
      {
        id: "14",
        sku: "343391074",
        title: "Trousers DTMD",
        price: 15.15,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 14,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 15,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 16,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 17,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "14/card.jpg",
        images: ["14/slider-0.jpg", "14/slider-1.jpg", "14/slider-2.jpg"],
        icons: ["14/icon-0.jpg", "14/icon-1.jpg", "14/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Classic trousers with side pockets and framed pockets at the back.",
        details: {
          description:
            "The product is made of mixed fabric with the addition of viscose, which is pleasant to the touch and retains its shape for a long time. The model is ideal for formal looks and will remain relevant regardless of fashion trends. Pair it with plain skinny shirts or turtlenecks, jackets and boots, and you will get a formal look for the office and formal events. And with a pullover or sweater you will create a more relaxed combination for going to the theater or a date in a restaurant. Discreet trousers with arrows are an integral part of a man's wardrobe!",
          composition: ["viscose 20%", "polyester 75%", "elastane 5%"],
        },
      },
      {
        id: "15",
        sku: "1364239145",
        title: "Trousers DTMD",
        price: 21.96,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 3,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "0",
          },
        ],
        color: {
          id: 9,
          name: "white",
          code: "#F0EDF5",
        },
        allColors: [
          {
            productId: 14,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 15,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 16,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 17,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "15/card.jpg",
        images: ["15/slider-0.jpg", "15/slider-1.jpg", "15/slider-2.jpg"],
        icons: ["15/icon-0.jpg", "15/icon-1.jpg", "15/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Classic trousers with side pockets and framed pockets at the back.",
        details: {
          description:
            "The product is made of mixed fabric with the addition of viscose, which is pleasant to the touch and retains its shape for a long time. The model is ideal for formal looks and will remain relevant regardless of fashion trends. Pair it with plain skinny shirts or turtlenecks, jackets and boots, and you will get a formal look for the office and formal events. And with a pullover or sweater you will create a more relaxed combination for going to the theater or a date in a restaurant. Discreet trousers with arrows are an integral part of a man's wardrobe!",
          composition: ["viscose 20%", "polyester 75%", "elastane 5%"],
        },
      },
      {
        id: "16",
        sku: "1335240094",
        title: "Trousers DTMD",
        price: 15.15,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 14,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 15,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 16,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 17,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "16/card.jpg",
        images: ["16/slider-0.jpg", "16/slider-1.jpg", "16/slider-2.jpg"],
        icons: ["16/icon-0.jpg", "16/icon-1.jpg", "16/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Classic trousers with side pockets and framed pockets at the back.",
        details: {
          description:
            "The product is made of mixed fabric with the addition of viscose, which is pleasant to the touch and retains its shape for a long time. The model is ideal for formal looks and will remain relevant regardless of fashion trends. Pair it with plain skinny shirts or turtlenecks, jackets and boots, and you will get a formal look for the office and formal events. And with a pullover or sweater you will create a more relaxed combination for going to the theater or a date in a restaurant. Discreet trousers with arrows are an integral part of a man's wardrobe!",
          composition: ["viscose 20%", "polyester 75%", "elastane 5%"],
        },
      },
      {
        id: "17",
        sku: "1364236440",
        title: "Trousers DTMD",
        price: 21.96,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 5,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 14,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 15,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 16,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 17,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "17/card.jpg",
        images: ["17/slider-0.jpg", "17/slider-1.jpg", "17/slider-2.jpg"],
        icons: ["17/icon-0.jpg", "17/icon-1.jpg", "17/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Classic trousers with side pockets and framed pockets at the back.",
        details: {
          description:
            "The product is made of mixed fabric with the addition of viscose, which is pleasant to the touch and retains its shape for a long time. The model is ideal for formal looks and will remain relevant regardless of fashion trends. Pair it with plain skinny shirts or turtlenecks, jackets and boots, and you will get a formal look for the office and formal events. And with a pullover or sweater you will create a more relaxed combination for going to the theater or a date in a restaurant. Discreet trousers with arrows are an integral part of a man's wardrobe!",
          composition: ["viscose 20%", "polyester 75%", "elastane 5%"],
        },
      },
      {
        id: "18",
        sku: "1381342132",
        title: "Trousers",
        price: 21.96,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 18,
            color: {
              id: 12,
              name: "brown",
              code: "#57402C",
            },
          },
          {
            productId: 19,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "18/card.jpg",
        images: ["18/slider-0.jpg", "18/slider-1.jpg", "18/slider-2.jpg"],
        icons: ["18/icon-0.jpg", "18/icon-1.jpg", "18/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "These men's lounge pants are made from premium fabrics for high quality and durability.",
        details: {
          description:
            "These European and American autumn men's casual pants are suitable for wearing on various occasions, whether casual leisure or party, they can highlight your individual charm. Not only that, these pants are also perfect as a gift for your friends or loved ones.",
          composition: ["cotton 80%", "polyester 20%"],
        },
      },
      {
        id: "19",
        sku: "1381353426",
        title: "Trousers",
        price: 26.23,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.8,
        discount: 5,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "0",
          },
        ],
        color: {
          id: 8,
          name: "dark green",
          code: "#255449",
        },
        allColors: [
          {
            productId: 18,
            color: {
              id: 12,
              name: "brown",
              code: "#57402C",
            },
          },
          {
            productId: 19,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "19/card.jpg",
        images: ["19/slider-0.jpg", "19/slider-1.jpg", "19/slider-2.jpg"],
        icons: ["19/icon-0.jpg", "19/icon-1.jpg", "19/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "These men's lounge pants are made from premium fabrics for high quality and durability.",
        details: {
          description:
            "These European and American autumn men's casual pants are suitable for wearing on various occasions, whether casual leisure or party, they can highlight your individual charm. Not only that, these pants are also perfect as a gift for your friends or loved ones.",
          composition: ["cotton 80%", "polyester 20%"],
        },
      },
      {
        id: "20",
        sku: "1313857140",
        title: "Lyle & Scott T-shirt",
        price: 19.66,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 4.8,
        discount: 5,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 20,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 21,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 22,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 23,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "20/card.jpg",
        images: ["20/slider-0.jpg", "20/slider-1.jpg", "20/slider-2.jpg"],
        icons: ["20/icon-0.jpg", "20/icon-1.jpg", "20/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Core Raglan is a stylish and versatile addition to any man's wardrobe.",
        details: {
          description:
            "This men's T-shirt with no graphics or lettering is ideal for those who prefer a minimalist and elegant style. It comes in a solid color design, making it easy to combine with other clothes and accessories. The embroidered logo is a sign of the authority and quality of the Lyle & Scott brand. The T-shirt is made of quality materials that provide comfort and a pleasant wearing feeling. Made from a polyester and elastane blend, it has moisture-wicking properties, making it ideal for sports and outdoor activities. The T-shirt has raglan sleeves that provide freedom of movement.",
          composition: ["elastane 17%", "polyester 83%"],
        },
      },
      {
        id: "21",
        sku: "1206160104",
        title: "Lyle & Scott T-shirt",
        price: 19.92,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 20,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 21,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 22,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 23,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "21/card.jpg",
        images: ["21/slider-0.jpg", "21/slider-1.jpg", "21/slider-2.jpg"],
        icons: ["21/icon-0.jpg", "21/icon-1.jpg", "21/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Core Raglan is a stylish and versatile addition to any man's wardrobe.",
        details: {
          description:
            "This men's T-shirt with no graphics or lettering is ideal for those who prefer a minimalist and elegant style. It comes in a solid color design, making it easy to combine with other clothes and accessories. The embroidered logo is a sign of the authority and quality of the Lyle & Scott brand. The T-shirt is made of quality materials that provide comfort and a pleasant wearing feeling. Made from a polyester and elastane blend, it has moisture-wicking properties, making it ideal for sports and outdoor activities. The T-shirt has raglan sleeves that provide freedom of movement.",
          composition: ["elastane 17%", "polyester 83%"],
        },
      },
      {
        id: "22",
        sku: "1313799814 ",
        title: "Lyle & Scott T-shirt",
        price: 18.04,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 10,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 20,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 21,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 22,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 23,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "22/card.jpg",
        images: ["22/slider-0.jpg", "22/slider-1.jpg", "22/slider-2.jpg"],
        icons: ["22/icon-0.jpg", "22/icon-1.jpg", "22/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Core Raglan is a stylish and versatile addition to any man's wardrobe.",
        details: {
          description:
            "This men's T-shirt with no graphics or lettering is ideal for those who prefer a minimalist and elegant style. It comes in a solid color design, making it easy to combine with other clothes and accessories. The embroidered logo is a sign of the authority and quality of the Lyle & Scott brand. The T-shirt is made of quality materials that provide comfort and a pleasant wearing feeling. Made from a polyester and elastane blend, it has moisture-wicking properties, making it ideal for sports and outdoor activities. The T-shirt has raglan sleeves that provide freedom of movement.",
          composition: ["elastane 17%", "polyester 83%"],
        },
      },
      {
        id: "23",
        sku: "1313797680",
        title: "Lyle & Scott T-shirt",
        price: 17.52,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 5,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 20,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 21,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 22,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 23,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "23/card.jpg",
        images: ["23/slider-0.jpg", "23/slider-1.jpg", "23/slider-2.jpg"],
        icons: ["23/icon-0.jpg", "23/icon-1.jpg", "23/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Core Raglan is a stylish and versatile addition to any man's wardrobe.",
        details: {
          description:
            "This men's T-shirt with no graphics or lettering is ideal for those who prefer a minimalist and elegant style. It comes in a solid color design, making it easy to combine with other clothes and accessories. The embroidered logo is a sign of the authority and quality of the Lyle & Scott brand. The T-shirt is made of quality materials that provide comfort and a pleasant wearing feeling. Made from a polyester and elastane blend, it has moisture-wicking properties, making it ideal for sports and outdoor activities. The T-shirt has raglan sleeves that provide freedom of movement.",
          composition: ["elastane 17%", "polyester 83%"],
        },
      },
      {
        id: "24",
        sku: "406692032",
        title: "adidas Entrada 22 T-Shirt",
        price: 38.43,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 24,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-03-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "24/card.jpg",
        images: ["24/slider-0.jpg", "24/slider-1.jpg", "24/slider-2.jpg"],
        icons: ["24/icon-0.jpg", "24/icon-1.jpg", "24/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Adidas football style in every detail. This V-neck knit is inspired by the beautiful game. Comfortable cotton fabric and classic design are perfect for every day",
        details: {
          description:
            "By purchasing our cotton clothing, you are supporting more environmentally friendly cotton growing and processing.Standard fit. V-neck at front. Fine jersey: 100% cotton. Type of clothing: Anatomical cut.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "25",
        sku: "178880071",
        title: "T-shirt ZRCE",
        price: 10.02,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          { size: { id: 7, name: "3X-Large", shortName: "xxxl" }, amount: "0" },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 25,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-03-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "25/card.jpg",
        images: ["25/slider-0.jpg", "25/slider-1.jpg", "25/slider-2.jpg"],
        icons: ["25/icon-0.jpg", "25/icon-1.jpg", "25/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "The comfort of your workout and jogging will depend on the choice of a sports T-shirt or tank top. A stylish T-shirt with a print from the ZRCE brand is perfect for these purposes.",
        details: {
          description:
            "The long sports top allows for freedom of movement and is ideal for gym training and outdoor activities, as well as for everyday walks. This sleeveless sports T-shirt is made of lightweight, breathable material that quickly wicks away moisture without stretching the fabric. The casual boxing shirt is not tight-fitting and quite loose, can be used as a beach or home shirt. A sports-style football jersey is very well suited for sports in the gym, as well as for yoga, crossfit, football, mma. This T-shirt is comfortable for bodybuilding. You can put together a tracksuit by adding shorts or tights from the ZRCE brand.",
          composition: ["polyester 100%"],
        },
      },
      {
        id: "26",
        sku: "855033720",
        title: "Polo SIMBA.LAND",
        price: 6.23,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 5,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 10,
          name: "dark blue",
          code: "#102E4F",
        },
        allColors: [
          {
            productId: 26,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 27,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "26/card.jpg",
        images: ["26/slider-0.jpg", "26/slider-1.jpg", "26/slider-2.jpg"],
        icons: ["26/icon-0.jpg", "26/icon-1.jpg", "26/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Men's straight-fit polo shirt without embroidery. The sleeves are short, straight, round neckline with a turn-down collar and three-button closure.",
        details: {
          description:
            "This polo shirt is made with love for the customer and every detail has been carefully considered to ensure the highest level of satisfaction.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "27",
        sku: "879871883",
        title: "Polo SIMBA.LAND",
        price: 6.23,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 8,
          name: "dark green",
          code: "#255449",
        },
        allColors: [
          {
            productId: 26,
            color: {
              id: 10,
              name: "dark blue",
              code: "#102E4F",
            },
          },
          {
            productId: 27,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "27/card.jpg",
        images: ["27/slider-0.jpg", "27/slider-1.jpg", "27/slider-2.jpg"],
        icons: ["27/icon-0.jpg", "27/icon-1.jpg", "27/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Men's straight-fit polo shirt without embroidery. The sleeves are short, straight, round neckline with a turn-down collar and three-button closure.",
        details: {
          description:
            "This polo shirt is made with love for the customer and every detail has been carefully considered to ensure the highest level of satisfaction.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "28",
        sku: "804831824",
        title: "Happyfox T-shirt for men",
        price: 6.56,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 27,
          name: "dark grey",
          code: "#524755",
        },
        allColors: [
          {
            productId: 28,
            color: {
              id: 27,
              name: "dark grey",
              code: "#524755",
            },
          },
          {
            productId: 29,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "28/card.jpg",
        images: ["28/slider-0.jpg", "28/slider-1.jpg", "28/slider-2.jpg"],
        icons: ["28/icon-0.jpg", "28/icon-1.jpg", "28/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "A plain cotton T-shirt is a combination of style and comfort for every day. The trendy graphite color emphasizes masculinity and adds charisma to the image.",
        details: {
          description:
            "The wide range of sizes includes large sizes and allows everyone to choose the perfect basic T-shirt. Height is 186 cm, measurements are 120-96-106 cm. He is wearing an anthracite T-shirt, size 58.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "29",
        sku: "804834918",
        title: "Happyfox T-shirt for men",
        price: 5.94,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 9,
          name: "white",
          code: "#F0EDF5",
        },
        allColors: [
          {
            productId: 28,
            color: {
              id: 27,
              name: "dark grey",
              code: "#524755",
            },
          },
          {
            productId: 29,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "29/card.jpg",
        images: ["29/slider-0.jpg", "29/slider-1.jpg", "29/slider-2.jpg"],
        icons: ["29/icon-0.jpg", "29/icon-1.jpg", "29/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "A plain cotton T-shirt is a combination of style and comfort for every day. The trendy graphite color emphasizes masculinity and adds charisma to the image.",
        details: {
          description:
            "The wide range of sizes includes large sizes and allows everyone to choose the perfect basic T-shirt. Height is 186 cm, measurements are 120-96-106 cm. He is wearing an anthracite T-shirt, size 58.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "30",
        sku: "1015710196",
        title: "T-shirt RoMaxTex",
        price: 8.62,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 3,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 30,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "30/card.jpg",
        images: ["30/slider-0.jpg", "30/slider-1.jpg", "30/slider-2.jpg"],
        icons: ["30/icon-0.jpg", "30/icon-1.jpg", "30/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "We present to you a T-shirt that will surprise you with its brightness and unusual ability to glow in the dark. Phosphorus applied to the drawing is absolutely safe!",
        details: {
          description:
            "We present to you a T-shirt that will surprise you with its brightness and unusual ability to glow in the dark. Phosphorus applied to the drawing is absolutely safe!",
          composition: ["cotton 93%", "lycra 7%"],
        },
      },
      {
        id: "31",
        sku: "491481159",
        title: "Fosfor T-shirt",
        price: 7,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 31,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "31/card.jpg",
        images: ["31/slider-0.jpg", "31/slider-1.jpg", "31/slider-2.jpg"],
        icons: ["31/icon-0.jpg", "31/icon-1.jpg", "31/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "The design is printed with special inks using silk-screen printing, which makes it glow brightly in the dark and in ultraviolet light.",
        details: {
          description:
            "A men's T-shirt from the Fosfor brand with the popular character Homer J Simpson on the chest evokes bright emotions, and also glows in the dark! The one-color model made of soft but dense material contains cotton (93%) and elastane (7%), which means it is breathable and environmentally friendly, wear-resistant and holds its shape well. The product with short sleeves and a round neckline is made in large and small sizes. To feel free, choose an oversized model (1-2 sizes larger than yours). A wide youth T-shirt will be convenient for sports and fitness, training on the street and in the gym, and will be suitable as a top uniform for physical education classes at school.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "32",
        sku: "937909494",
        title: "T-shirt ARTimperia Luminous",
        price: 9.49,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 0, name: "man" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 31,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "32/card.jpg",
        images: ["32/slider-0.jpg", "32/slider-1.jpg", "32/slider-2.jpg"],
        icons: ["32/icon-0.jpg", "32/icon-1.jpg", "32/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Men's T-shirt with Joker print, glowing in the dark, brand 'ARTimperia'.",
        details: {
          description:
            "Made from premium quality cotton “pene”, pleasant to the touch, dense, but does not interfere with air exchange and allows the skin to breathe. The fabric does not deform and retains its presentable appearance even after 100 washes. The T-shirt with a joker glows in the dark and in ultraviolet light - it charges in the sun and glows with bright colors in the dark, in cafes and clubs, at parties and parties. You will stand out from the crowd and attract admiring glances with your stylish and mysterious look. The luminous T-shirt will not fade or fade. The joker or clown design is silk-screened, which guarantees the brightness and durability of the print.",
          composition: ["cotton 100%"],
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
        id: "93",
        sku: "714562536",
        title: "Sports trousers VAVILON ROOM Universal",
        price: 11.02,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 9,
          name: "white",
          code: "#F0EDF5",
        },
        allColors: [
          {
            productId: 93,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 94,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "93/card.jpg",
        images: ["93/slider-0.jpg", "93/slider-1.jpg", "93/slider-2.jpg"],
        icons: ["93/icon-0.jpg", "93/icon-1.jpg", "93/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Banana pants for youth, an excellent option for walking, playing sports, very comfortable for everyday wear at home.",
        details: {
          description:
            "Fashionable sweatpants with a high-waist print are suitable for women, girls, girls, children, for teenagers, as home pants, for summer cottages, for walking, training, running, yoga, dancing, cycling, picnic, in the office, hiking, sweatpants in a fitness club , boxing, gym, physical education at school. This trouser model is suitable for all occasions! Lightweight trousers are ideal for pregnant women. The presence of large size sweatpants will allow curvy ladies not to be left out and also buy cool pants! Sportswear, women's uniform for sports, an integral part of the wardrobe!",
          composition: ["cotton 80%", "elastane 20%"],
        },
      },
      {
        id: "94",
        sku: "720410185",
        title: "Sports trousers VAVILON ROOM Universal",
        price: 11.41,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 93,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 94,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "94/card.jpg",
        images: ["94/slider-0.jpg", "94/slider-1.jpg", "94/slider-2.jpg"],
        icons: ["94/icon-0.jpg", "94/icon-1.jpg", "94/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Banana pants for youth, an excellent option for walking, playing sports, very comfortable for everyday wear at home.",
        details: {
          description:
            "Fashionable sweatpants with a high-waist print are suitable for women, girls, girls, children, for teenagers, as home pants, for summer cottages, for walking, training, running, yoga, dancing, cycling, picnic, in the office, hiking, sweatpants in a fitness club , boxing, gym, physical education at school. This trouser model is suitable for all occasions! Lightweight trousers are ideal for pregnant women. The presence of large size sweatpants will allow curvy ladies not to be left out and also buy cool pants! Sportswear, women's uniform for sports, an integral part of the wardrobe!",
          composition: ["cotton 80%", "elastane 20%"],
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
        id: "99",
        sku: "1361480442",
        title: "BeCasual trousers",
        price: 25.88,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 5,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 7,
          name: "light brown",
          code: "#CABCA3",
        },
        allColors: [
          {
            productId: 99,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 100,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "99/card.jpg",
        images: ["99/slider-0.jpg", "99/slider-1.jpg", "99/slider-2.jpg"],
        icons: ["99/icon-0.jpg", "99/icon-1.jpg", "99/icon-2.jpg"],
        availability: "true",
        shortDescription: "Eco leather, style",
        details: {
          description:
            "Fashionable sweatpants with a high-waist print are suitable for women, girls, girls, children, for teenagers, as home pants, for summer cottages, for walking, training, running, yoga, dancing, cycling, picnic, in the office, hiking, sweatpants in a fitness club , boxing, gym, physical education at school. This trouser model is suitable for all occasions! Lightweight trousers are ideal for pregnant women. The presence of large size sweatpants will allow curvy ladies not to be left out and also buy cool pants! Sportswear, women's uniform for sports, an integral part of the wardrobe!",
          composition: ["polyester 100%"],
        },
      },
      {
        id: "100",
        sku: "1292187407 ",
        title: "BeCasual trousers",
        price: 22.36,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 99,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 100,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "100/card.jpg",
        images: ["100/slider-0.jpg", "100/slider-1.jpg", "100/slider-2.jpg"],
        icons: ["100/icon-0.jpg", "100/icon-1.jpg", "100/icon-2.jpg"],
        availability: "true",
        shortDescription: "Eco leather, style",
        details: {
          description:
            "Fashionable sweatpants with a high-waist print are suitable for women, girls, girls, children, for teenagers, as home pants, for summer cottages, for walking, training, running, yoga, dancing, cycling, picnic, in the office, hiking, sweatpants in a fitness club , boxing, gym, physical education at school. This trouser model is suitable for all occasions! Lightweight trousers are ideal for pregnant women. The presence of large size sweatpants will allow curvy ladies not to be left out and also buy cool pants! Sportswear, women's uniform for sports, an integral part of the wardrobe!",
          composition: ["polyester 100%"],
        },
      },
      {
        id: "101",
        sku: "1220067619 ",
        title: "Trousers",
        price: 22.41,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 3,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 7,
          name: "light brown",
          code: "#CABCA3",
        },
        allColors: [
          {
            productId: 101,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "101/card.jpg",
        images: [
          "101/slider-0.jpg",
          "101/slider-1.jpg",
          "101/slider-2.jpg",
          "101/slider-3.jpg",
          "101/slider-4.jpg",
          "101/slider-5.jpg",
        ],
        icons: [
          "101/icon-0.jpg",
          "101/icon-1.jpg",
          "101/icon-2.jpg",
          "101/icon-3.jpg",
          "101/icon-4.jpg",
          "101/icon-5.jpg",
        ],
        availability: "true",
        shortDescription:
          "Basic suit trousers are a classic in the wardrobe of a modern woman.",
        details: {
          description:
            "Strict trousers are made of dense stretch material, tapered and shortened. The soft stretch fabric has great stretch. Each customer will be able to choose the right size for herself; there is a large size chart available. Stretchy pipes look great on those with a full figure. The high waist has a thin elastic band. The high waist combined with long tapered legs with creases make the legs visually slimmer. Solid colors also have a positive effect on elongating the silhouette.",
          composition: ["polyester 65%", "viscose 30%", "elastane 5%"],
        },
      },
      {
        id: "102",
        sku: "986788256 ",
        title: "Juliya Trozenko Palazzo trousers",
        price: 15.6,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 102,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "102/card.jpg",
        images: [
          "102/slider-0.jpg",
          "102/slider-1.jpg",
          "102/slider-2.jpg",
          "102/slider-3.jpg",
        ],
        icons: [
          "102/icon-0.jpg",
          "102/icon-1.jpg",
          "102/icon-2.jpg",
          "102/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "Wide flared trousers with arrows are the trend of the season.",
        details: {
          description:
            "Black classic high-waisted flared trousers are an indispensable part of an office, casual, as well as evening look that emphasize elegance and femininity.   Wide women's palazzos go well with tops, blouses and shirts.",
          composition: ["polyester 70%", "viscose 30%"],
        },
      },
      {
        id: "103",
        sku: "935889333",
        title: "Pants SASHYOU",
        price: 28.46,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 103,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "103/card.jpg",
        images: [
          "103/slider-0.jpg",
          "103/slider-1.jpg",
          "103/slider-2.jpg",
          "103/slider-3.jpg",
        ],
        icons: [
          "103/icon-0.jpg",
          "103/icon-1.jpg",
          "103/icon-2.jpg",
          "103/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "The SASHYU brand is pleased to present its new product - classic black trousers, which are very popular among girls of all ages.",
        details: {
          description:
            "An improved model with a high waist and a tapered cut visually lengthens and slims the figure, emphasizing all the advantages of its owner, and the shortened cut allows you to look attractive at any height. The pants are perfect for work in the office, for daily wear, for teenagers as a school uniform, as well as for festive events and evening walks. They are universal and therefore fit perfectly with almost any clothing, without limiting the possibilities for creating a stylish look. Suitable for blouses and cropped tops, they are a trend in the spring and summer collections, and in autumn and winter they can be worn in combination with fashionable boots.",
          composition: ["polyester 94%", "spandex 6%"],
        },
      },
      {
        id: "104",
        sku: "577133945",
        title: "Kickers sports trousers",
        price: 18.24,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 10,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 104,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 105,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "104/card.jpg",
        images: ["104/slider-0.jpg", "104/slider-1.jpg", "104/slider-2.jpg"],
        icons: ["104/icon-0.jpg", "104/icon-1.jpg", "104/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Elegant trousers - harem pants made of weightless, flowing knitted fabric.",
        details: {
          description:
            "Ideal for dancing, oriental practices and for creating a beautiful look in boho style. The wide figured belt is made of two layers of denser, but soft and elastic fabric. It fits comfortably around the waist and securely fixes the product. And in combination with a loose cut of trousers, the belt visually makes the waist thinner, emphasizes the buttocks, and creates an impeccable feminine silhouette. Slits along the side seams provide a feminine look and provide good breathability. The bottom of the trousers is decorated with elastic cuffs. The cuffs comfortably secure the trouser legs at the ankles so that nothing interferes with your comfortable movement..",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "105",
        sku: "941122135",
        title: "Kickers sports trousers",
        price: 27.7,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 15,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 2,
          name: "blue",
          code: "#294FA4",
        },
        allColors: [
          {
            productId: 104,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 105,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "105/card.jpg",
        images: ["105/slider-0.jpg", "105/slider-1.jpg", "105/slider-2.jpg"],
        icons: ["105/icon-0.jpg", "105/icon-1.jpg", "105/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Elegant trousers - harem pants made of weightless, flowing knitted fabric.",
        details: {
          description:
            "Ideal for dancing, oriental practices and for creating a beautiful look in boho style. The wide figured belt is made of two layers of denser, but soft and elastic fabric. It fits comfortably around the waist and securely fixes the product. And in combination with a loose cut of trousers, the belt visually makes the waist thinner, emphasizes the buttocks, and creates an impeccable feminine silhouette. Slits along the side seams provide a feminine look and provide good breathability. The bottom of the trousers is decorated with elastic cuffs. The cuffs comfortably secure the trouser legs at the ankles so that nothing interferes with your comfortable movement..",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "106",
        sku: "984472546",
        title: "HayDay style trousers",
        price: 14.77,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 106,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 107,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 108,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
          {
            productId: 109,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "106/card.jpg",
        images: [
          "106/slider-0.jpg",
          "106/slider-1.jpg",
          "106/slider-2.jpg",
          "106/slider-3.jpg",
          "106/slider-4.jpg",
        ],
        icons: [
          "106/icon-0.jpg",
          "106/icon-1.jpg",
          "106/icon-2.jpg",
          "106/icon-3.jpg",
          "106/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "Stylish women's oversized cargo pants are a super trendy option for trousers in the 2023 season.",
        details: {
          description:
            "Cargo pants go well with puffy jackets, trench coats, oversized midi coats, fur coats and down jackets of any length in tandem with rough and sporty seasonal shoes. Women's loose-fitting sweatpants with a drawstring in the waist and hidden pockets in the side seams are an indispensable part of the wardrobe, an excellent option for dancing, for sports, for fitness, for running, for a walk, for school, for school, for every day. Our trousers are suitable for any occasion: for graduation, for school, for a walk, on a date, to the office, to a party, for a photo shoot, to a wedding or bachelorette party.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "107",
        sku: "984472560",
        title: "HayDay style trousers",
        price: 9.87,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 7,
          name: "light brown",
          code: "#CABCA3",
        },
        allColors: [
          {
            productId: 106,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 107,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 108,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
          {
            productId: 109,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "107/card.jpg",
        images: [
          "107/slider-0.jpg",
          "107/slider-1.jpg",
          "107/slider-2.jpg",
          "107/slider-3.jpg",
          "107/slider-4.jpg",
        ],
        icons: [
          "107/icon-0.jpg",
          "107/icon-1.jpg",
          "107/icon-2.jpg",
          "107/icon-3.jpg",
          "107/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "Stylish women's oversized cargo pants are a super trendy option for trousers in the 2023 season.",
        details: {
          description:
            "Cargo pants go well with puffy jackets, trench coats, oversized midi coats, fur coats and down jackets of any length in tandem with rough and sporty seasonal shoes. Women's loose-fitting sweatpants with a drawstring in the waist and hidden pockets in the side seams are an indispensable part of the wardrobe, an excellent option for dancing, for sports, for fitness, for running, for a walk, for school, for school, for every day. Our trousers are suitable for any occasion: for graduation, for school, for a walk, on a date, to the office, to a party, for a photo shoot, to a wedding or bachelorette party.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "108",
        sku: "984472568 ",
        title: "HayDay style trousers",
        price: 10.46,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 3,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 8,
          name: "dark green",
          code: "#255449",
        },
        allColors: [
          {
            productId: 106,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 107,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 108,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
          {
            productId: 109,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "108/card.jpg",
        images: [
          "108/slider-0.jpg",
          "108/slider-1.jpg",
          "108/slider-2.jpg",
          "108/slider-3.jpg",
          "108/slider-4.jpg",
        ],
        icons: [
          "108/icon-0.jpg",
          "108/icon-1.jpg",
          "108/icon-2.jpg",
          "108/icon-3.jpg",
          "108/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "Stylish women's oversized cargo pants are a super trendy option for trousers in the 2023 season.",
        details: {
          description:
            "Cargo pants go well with puffy jackets, trench coats, oversized midi coats, fur coats and down jackets of any length in tandem with rough and sporty seasonal shoes. Women's loose-fitting sweatpants with a drawstring in the waist and hidden pockets in the side seams are an indispensable part of the wardrobe, an excellent option for dancing, for sports, for fitness, for running, for a walk, for school, for school, for every day. Our trousers are suitable for any occasion: for graduation, for school, for a walk, on a date, to the office, to a party, for a photo shoot, to a wedding or bachelorette party.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "109",
        sku: "984472554",
        title: "HayDay style trousers",
        price: 14.77,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 5,
        sales: 60,
        type: { id: 1, name: "Trousers" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 3,
          name: "green",
          code: "#787E62",
        },
        allColors: [
          {
            productId: 106,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 107,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 108,
            color: {
              id: 8,
              name: "dark green",
              code: "#255449",
            },
          },
          {
            productId: 109,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "109/card.jpg",
        images: [
          "109/slider-0.jpg",
          "109/slider-1.jpg",
          "109/slider-2.jpg",
          "109/slider-3.jpg",
          "109/slider-4.jpg",
        ],
        icons: [
          "109/icon-0.jpg",
          "109/icon-1.jpg",
          "109/icon-2.jpg",
          "109/icon-3.jpg",
          "109/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "Stylish women's oversized cargo pants are a super trendy option for trousers in the 2023 season.",
        details: {
          description:
            "Cargo pants go well with puffy jackets, trench coats, oversized midi coats, fur coats and down jackets of any length in tandem with rough and sporty seasonal shoes. Women's loose-fitting sweatpants with a drawstring in the waist and hidden pockets in the side seams are an indispensable part of the wardrobe, an excellent option for dancing, for sports, for fitness, for running, for a walk, for school, for school, for every day. Our trousers are suitable for any occasion: for graduation, for school, for a walk, on a date, to the office, to a party, for a photo shoot, to a wedding or bachelorette party.",
          composition: ["polyester 87%", "spandex 13%"],
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
        id: "111",
        sku: "379886480",
        title: "Kickers T-shirt",
        price: 8.33,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 111,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 112,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 113,
            color: {
              id: 16,
              name: "burgundy",
              code: "#70123b",
            },
          },
          {
            productId: 114,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 115,
            color: {
              id: 29,
              name: "turquoise",
              code: "#55E1B9",
            },
          },
          {
            productId: 116,
            color: {
              id: 21,
              name: "coral/orange",
              code: "#F8584B",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "111/card.jpg",
        images: [
          "111/slider-0.jpg",
          "111/slider-1.jpg",
          "111/slider-2.jpg",
          "111/slider-3.jpg",
        ],
        icons: [
          "111/icon-0.jpg",
          "111/icon-1.jpg",
          "111/icon-2.jpg",
          "111/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "This short-sleeve T-shirt is made from soft, stretch jersey and is designed for the gym, running, yoga and outdoor activities.",
        details: {
          description:
            "The comfortable cut provides freedom of movement, and the elongated silhouette allows you to comfortably perform any exercise and not worry about your appearance. The sports T-shirt has a smooth texture, is pleasant to the body and looks beautiful on any figure. The fabric has good hygroscopicity and breathability, and dries quickly after washing. Flat printing instead of a label does not cause discomfort or irritation on the skin. There is a logo on the chest.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "112",
        sku: "379855716",
        title: "Kickers T-shirt",
        price: 7.84,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 9,
          name: "white",
          code: "#F0EDF5",
        },
        allColors: [
          {
            productId: 111,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 112,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 113,
            color: {
              id: 16,
              name: "burgundy",
              code: "#70123b",
            },
          },
          {
            productId: 114,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 115,
            color: {
              id: 29,
              name: "turquoise",
              code: "#55E1B9",
            },
          },
          {
            productId: 116,
            color: {
              id: 21,
              name: "coral/orange",
              code: "#F8584B",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "112/card.jpg",
        images: [
          "112/slider-0.jpg",
          "112/slider-1.jpg",
          "112/slider-2.jpg",
          "112/slider-3.jpg",
        ],
        icons: [
          "112/icon-0.jpg",
          "112/icon-1.jpg",
          "112/icon-2.jpg",
          "112/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "This short-sleeve T-shirt is made from soft, stretch jersey and is designed for the gym, running, yoga and outdoor activities.",
        details: {
          description:
            "The comfortable cut provides freedom of movement, and the elongated silhouette allows you to comfortably perform any exercise and not worry about your appearance. The sports T-shirt has a smooth texture, is pleasant to the body and looks beautiful on any figure. The fabric has good hygroscopicity and breathability, and dries quickly after washing. Flat printing instead of a label does not cause discomfort or irritation on the skin. There is a logo on the chest.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "113",
        sku: "379855626",
        title: "Kickers T-shirt",
        price: 7.79,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 16,
          name: "burgundy",
          code: "#70123b",
        },
        allColors: [
          {
            productId: 111,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 112,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 113,
            color: {
              id: 16,
              name: "burgundy",
              code: "#70123b",
            },
          },
          {
            productId: 114,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 115,
            color: {
              id: 29,
              name: "turquoise",
              code: "#55E1B9",
            },
          },
          {
            productId: 116,
            color: {
              id: 21,
              name: "coral/orange",
              code: "#F8584B",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "113/card.jpg",
        images: [
          "113/slider-0.jpg",
          "113/slider-1.jpg",
          "113/slider-2.jpg",
          "113/slider-3.jpg",
        ],
        icons: [
          "113/icon-0.jpg",
          "113/icon-1.jpg",
          "113/icon-2.jpg",
          "113/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "This short-sleeve T-shirt is made from soft, stretch jersey and is designed for the gym, running, yoga and outdoor activities.",
        details: {
          description:
            "The comfortable cut provides freedom of movement, and the elongated silhouette allows you to comfortably perform any exercise and not worry about your appearance. The sports T-shirt has a smooth texture, is pleasant to the body and looks beautiful on any figure. The fabric has good hygroscopicity and breathability, and dries quickly after washing. Flat printing instead of a label does not cause discomfort or irritation on the skin. There is a logo on the chest.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "114",
        sku: "1061585742",
        title: "Kickers T-shirt",
        price: 7.4,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 23,
          name: "yellow",
          code: "#D6B41A",
        },
        allColors: [
          {
            productId: 111,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 112,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 113,
            color: {
              id: 16,
              name: "burgundy",
              code: "#70123b",
            },
          },
          {
            productId: 114,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 115,
            color: {
              id: 29,
              name: "turquoise",
              code: "#55E1B9",
            },
          },
          {
            productId: 116,
            color: {
              id: 21,
              name: "coral/orange",
              code: "#F8584B",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "114/card.jpg",
        images: [
          "114/slider-0.jpg",
          "114/slider-1.jpg",
          "114/slider-2.jpg",
          "114/slider-3.jpg",
        ],
        icons: [
          "114/icon-0.jpg",
          "114/icon-1.jpg",
          "114/icon-2.jpg",
          "114/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "This short-sleeve T-shirt is made from soft, stretch jersey and is designed for the gym, running, yoga and outdoor activities.",
        details: {
          description:
            "The comfortable cut provides freedom of movement, and the elongated silhouette allows you to comfortably perform any exercise and not worry about your appearance. The sports T-shirt has a smooth texture, is pleasant to the body and looks beautiful on any figure. The fabric has good hygroscopicity and breathability, and dries quickly after washing. Flat printing instead of a label does not cause discomfort or irritation on the skin. There is a logo on the chest.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "115",
        sku: "818059036",
        title: "Kickers T-shirt",
        price: 9.94,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 29,
          name: "turquoise",
          code: "#55E1B9",
        },
        allColors: [
          {
            productId: 111,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 112,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 113,
            color: {
              id: 16,
              name: "burgundy",
              code: "#70123b",
            },
          },
          {
            productId: 114,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 115,
            color: {
              id: 29,
              name: "turquoise",
              code: "#55E1B9",
            },
          },
          {
            productId: 116,
            color: {
              id: 21,
              name: "coral/orange",
              code: "#F8584B",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "115/card.jpg",
        images: [
          "115/slider-0.jpg",
          "115/slider-1.jpg",
          "115/slider-2.jpg",
          "115/slider-3.jpg",
        ],
        icons: [
          "115/icon-0.jpg",
          "115/icon-1.jpg",
          "115/icon-2.jpg",
          "115/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "This short-sleeve T-shirt is made from soft, stretch jersey and is designed for the gym, running, yoga and outdoor activities.",
        details: {
          description:
            "The comfortable cut provides freedom of movement, and the elongated silhouette allows you to comfortably perform any exercise and not worry about your appearance. The sports T-shirt has a smooth texture, is pleasant to the body and looks beautiful on any figure. The fabric has good hygroscopicity and breathability, and dries quickly after washing. Flat printing instead of a label does not cause discomfort or irritation on the skin. There is a logo on the chest.",
          composition: ["polyester 87%", "spandex 13%"],
        },
      },
      {
        id: "116",
        sku: "379859505",
        title: "Kickers T-shirt",
        price: 10.86,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 15,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 21,
          name: "coral/orange",
          code: "#F8584B",
        },
        allColors: [
          {
            productId: 111,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 112,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 113,
            color: {
              id: 16,
              name: "burgundy",
              code: "#70123b",
            },
          },
          {
            productId: 114,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 115,
            color: {
              id: 29,
              name: "turquoise",
              code: "#55E1B9",
            },
          },
          {
            productId: 116,
            color: {
              id: 21,
              name: "coral/orange",
              code: "#F8584B",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "116/card.jpg",
        images: [
          "116/slider-0.jpg",
          "116/slider-1.jpg",
          "116/slider-2.jpg",
          "116/slider-3.jpg",
        ],
        icons: [
          "116/icon-0.jpg",
          "116/icon-1.jpg",
          "116/icon-2.jpg",
          "116/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "This short-sleeve T-shirt is made from soft, stretch jersey and is designed for the gym, running, yoga and outdoor activities.",
        details: {
          description:
            "The comfortable cut provides freedom of movement, and the elongated silhouette allows you to comfortably perform any exercise and not worry about your appearance. The sports T-shirt has a smooth texture, is pleasant to the body and looks beautiful on any figure. The fabric has good hygroscopicity and breathability, and dries quickly after washing. Flat printing instead of a label does not cause discomfort or irritation on the skin. There is a logo on the chest.",
          composition: ["polyester 87%", "spandex 13%"],
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
        id: "118",
        sku: "851437474",
        title: "T-shirt MONO MOOD Basic with cuffs on the sleeves",
        price: 14.64,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 9,
          name: "white",
          code: "#F0EDF5",
        },
        allColors: [
          {
            productId: 118,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 119,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 120,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 121,
            color: {
              id: 11,
              name: "light grey",
              code: "#A5A7AB",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "118/card.jpg",
        images: [
          "118/slider-0.jpg",
          "118/slider-1.jpg",
          "118/slider-2.jpg",
          "118/slider-3.jpg",
        ],
        icons: [
          "118/icon-0.jpg",
          "118/icon-1.jpg",
          "118/icon-2.jpg",
          "118/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "A white or colored plain women's T-shirt from Mono Mood is high quality tailoring combined with a stylish design.",
        details: {
          description:
            "The minimalist design is suitable for any age, a stylish girl and an adult woman, and the minimum size is suitable for a teenage girl as an oversized children's T-shirt. A short sleeve T-shirt is ideal for office wear. Comfortable to wear untucked or tucked in. Incredibly stylish with formal clothes: trousers, culottes, skirt, jeans, jeggings (casual), can be worn instead of a shirt, blouse or body blouse under a jacket, jacket, jumper or cardigan.",
          composition: ["cotton 92%", "lycra 8%"],
        },
      },
      {
        id: "119",
        sku: "881225722",
        title: "T-shirt MONO MOOD Basic with cuffs on the sleeves",
        price: 13.96,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 23,
          name: "yellow",
          code: "#D6B41A",
        },
        allColors: [
          {
            productId: 118,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 119,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 120,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 121,
            color: {
              id: 11,
              name: "light grey",
              code: "#A5A7AB",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "119/card.jpg",
        images: [
          "119/slider-0.jpg",
          "119/slider-1.jpg",
          "119/slider-2.jpg",
          "119/slider-3.jpg",
        ],
        icons: [
          "119/icon-0.jpg",
          "119/icon-1.jpg",
          "119/icon-2.jpg",
          "119/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "A white or colored plain women's T-shirt from Mono Mood is high quality tailoring combined with a stylish design.",
        details: {
          description:
            "The minimalist design is suitable for any age, a stylish girl and an adult woman, and the minimum size is suitable for a teenage girl as an oversized children's T-shirt. A short sleeve T-shirt is ideal for office wear. Comfortable to wear untucked or tucked in. Incredibly stylish with formal clothes: trousers, culottes, skirt, jeans, jeggings (casual), can be worn instead of a shirt, blouse or body blouse under a jacket, jacket, jumper or cardigan.",
          composition: ["cotton 92%", "lycra 8%"],
        },
      },
      {
        id: "120",
        sku: "923027800",
        title: "T-shirt MONO MOOD Basic with cuffs on the sleeves",
        price: 13.96,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 118,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 119,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 120,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 121,
            color: {
              id: 11,
              name: "light grey",
              code: "#A5A7AB",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "120/card.jpg",
        images: [
          "120/slider-0.jpg",
          "120/slider-1.jpg",
          "120/slider-2.jpg",
          "120/slider-3.jpg",
        ],
        icons: [
          "120/icon-0.jpg",
          "120/icon-1.jpg",
          "120/icon-2.jpg",
          "120/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "A white or colored plain women's T-shirt from Mono Mood is high quality tailoring combined with a stylish design.",
        details: {
          description:
            "The minimalist design is suitable for any age, a stylish girl and an adult woman, and the minimum size is suitable for a teenage girl as an oversized children's T-shirt. A short sleeve T-shirt is ideal for office wear. Comfortable to wear untucked or tucked in. Incredibly stylish with formal clothes: trousers, culottes, skirt, jeans, jeggings (casual), can be worn instead of a shirt, blouse or body blouse under a jacket, jacket, jumper or cardigan.",
          composition: ["cotton 92%", "lycra 8%"],
        },
      },
      {
        id: "121",
        sku: "1130724513",
        title: "T-shirt MONO MOOD Basic with cuffs on the sleeves",
        price: 13.96,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 2, name: "T-shirts" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 11,
          name: "light grey",
          code: "#A5A7AB",
        },
        allColors: [
          {
            productId: 118,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 119,
            color: {
              id: 23,
              name: "yellow",
              code: "#D6B41A",
            },
          },
          {
            productId: 120,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 121,
            color: {
              id: 11,
              name: "light grey",
              code: "#A5A7AB",
            },
          },
        ],
        added: "2023-01-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "121/card.jpg",
        images: [
          "121/slider-0.jpg",
          "121/slider-1.jpg",
          "121/slider-2.jpg",
          "121/slider-3.jpg",
        ],
        icons: [
          "121/icon-0.jpg",
          "121/icon-1.jpg",
          "121/icon-2.jpg",
          "121/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "A white or colored plain women's T-shirt from Mono Mood is high quality tailoring combined with a stylish design.",
        details: {
          description:
            "The minimalist design is suitable for any age, a stylish girl and an adult woman, and the minimum size is suitable for a teenage girl as an oversized children's T-shirt. A short sleeve T-shirt is ideal for office wear. Comfortable to wear untucked or tucked in. Incredibly stylish with formal clothes: trousers, culottes, skirt, jeans, jeggings (casual), can be worn instead of a shirt, blouse or body blouse under a jacket, jacket, jumper or cardigan.",
          composition: ["cotton 92%", "lycra 8%"],
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
        id: "200",
        sku: "927258613",
        title: "Skirt MAXADORRE",
        price: 12.54,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 9, name: "Skirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 200,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 201,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 202,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "200/card.jpg",
        images: ["200/slider-0.jpg", "200/slider-1.jpg", "200/slider-2.jpg"],
        icons: ["200/icon-0.jpg", "200/icon-1.jpg", "200/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "MAXADORRE straight midi denim skirt with a slit at the back Spring - Summer trend 2023, presented in plain blue, black and gray.",
        details: {
          description:
            "Women's long skirt below the knee with a high waist, classic for everyday wardrobe, office skirt. The stylish skirt can be easily adjusted at the waist thanks to the elastic waistband and drawstring. The demi-season straight skirt has stylish pockets. The cotton skirt is suitable for any season, spring and summer. Demi-season denim model. The perfect fit of the plus size basic skirt enhances the silhouette. A fashionable skirt is suitable for women, tall and short girls, plus size, plump girls in casual style, large sizes, classic push-up pencil push-up, evening skirt.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "201",
        sku: "927258455",
        title: "Skirt MAXADORRE",
        price: 11.47,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 9, name: "Skirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 7,
          name: "light brown",
          code: "#CABCA3",
        },
        allColors: [
          {
            productId: 200,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 201,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 202,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "201/card.jpg",
        images: ["201/slider-0.jpg", "201/slider-1.jpg", "201/slider-2.jpg"],
        icons: ["201/icon-0.jpg", "201/icon-1.jpg", "201/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "MAXADORRE straight midi denim skirt with a slit at the back Spring - Summer trend 2023, presented in plain blue, black and gray.",
        details: {
          description:
            "Women's long skirt below the knee with a high waist, classic for everyday wardrobe, office skirt. The stylish skirt can be easily adjusted at the waist thanks to the elastic waistband and drawstring. The demi-season straight skirt has stylish pockets. The cotton skirt is suitable for any season, spring and summer. Demi-season denim model. The perfect fit of the plus size basic skirt enhances the silhouette. A fashionable skirt is suitable for women, tall and short girls, plus size, plump girls in casual style, large sizes, classic push-up pencil push-up, evening skirt.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "202",
        sku: "1132529154",
        title: "Skirt MAXADORRE",
        price: 19.57,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 9, name: "Skirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 2,
          name: "blue",
          code: "#294FA4",
        },
        allColors: [
          {
            productId: 200,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 201,
            color: {
              id: 7,
              name: "light brown",
              code: "#CABCA3",
            },
          },
          {
            productId: 202,
            color: {
              id: 2,
              name: "blue",
              code: "#294FA4",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "202/card.jpg",
        images: ["202/slider-0.jpg", "202/slider-1.jpg", "202/slider-2.jpg"],
        icons: ["202/icon-0.jpg", "202/icon-1.jpg", "202/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "MAXADORRE straight midi denim skirt with a slit at the back Spring - Summer trend 2023, presented in plain blue, black and gray.",
        details: {
          description:
            "Women's long skirt below the knee with a high waist, classic for everyday wardrobe, office skirt. The stylish skirt can be easily adjusted at the waist thanks to the elastic waistband and drawstring. The demi-season straight skirt has stylish pockets. The cotton skirt is suitable for any season, spring and summer. Demi-season denim model. The perfect fit of the plus size basic skirt enhances the silhouette. A fashionable skirt is suitable for women, tall and short girls, plus size, plump girls in casual style, large sizes, classic push-up pencil push-up, evening skirt.",
          composition: ["cotton 100%"],
        },
      },
      {
        id: "203",
        sku: "1056048558",
        title: "Skirt Katty Po",
        price: 27.52,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 9, name: "Skirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 203,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 204,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "203/card.jpg",
        images: [
          "203/slider-0.jpg",
          "203/slider-1.jpg",
          "203/slider-2.jpg",
          "203/slider-3.jpg",
          "203/slider-4.jpg",
        ],
        icons: [
          "203/icon-0.jpg",
          "203/icon-1.jpg",
          "203/icon-2.jpg",
          "203/icon-3.jpg",
          "203/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "A stylish, trendy long skirt will become your favorite basic item in your wardrobe for any time of year.",
        details: {
          description:
            "Versatile and easy to style, it fits almost any shoe and clothing. An elegant skirt below the knee will fit perfectly not only into an everyday, casual look, but will also become the main element of an evening look. The classic model in maxi length is suitable for spring, summer, autumn, winter and mid-season. Made of light, dense silky fabric that holds its shape well and does not wrinkle during wear.",
          composition: ["polyester 70%", "cationite 30%"],
        },
      },
      {
        id: "204",
        sku: "1056120500",
        title: "Skirt Katty Po",
        price: 27.82,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 3,
        sales: 60,
        type: { id: 9, name: "Skirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 203,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 204,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "204/card.jpg",
        images: [
          "204/slider-0.jpg",
          "204/slider-1.jpg",
          "204/slider-2.jpg",
          "204/slider-3.jpg",
          "204/slider-4.jpg",
        ],
        icons: [
          "204/icon-0.jpg",
          "204/icon-1.jpg",
          "204/icon-2.jpg",
          "204/icon-3.jpg",
          "204/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "A stylish, trendy long skirt will become your favorite basic item in your wardrobe for any time of year.",
        details: {
          description:
            "Versatile and easy to style, it fits almost any shoe and clothing. An elegant skirt below the knee will fit perfectly not only into an everyday, casual look, but will also become the main element of an evening look. The classic model in maxi length is suitable for spring, summer, autumn, winter and mid-season. Made of light, dense silky fabric that holds its shape well and does not wrinkle during wear.",
          composition: ["polyester 70%", "cationite 30%"],
        },
      },
      {
        id: "205",
        sku: "997791954",
        title: "Skirt SOFIA MUM",
        price: 15.82,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 9, name: "Skirts" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 205,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "205/card.jpg",
        images: [
          "205/slider-0.jpg",
          "205/slider-1.jpg",
          "205/slider-2.jpg",
          "205/slider-3.jpg",
          "205/slider-4.jpg",
        ],
        icons: [
          "205/icon-0.jpg",
          "205/icon-1.jpg",
          "205/icon-2.jpg",
          "205/icon-3.jpg",
          "205/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "Do you want to be at the center of fashion trends? Then you will definitely like our women's skirt for the New Year made of viscose! This incredibly light and flowy New Year's skirt will be your ideal companion for any event - from the office to a walk on the beach and at home or tango dancing, corporate events.",
        details: {
          description:
            "The skirt is ideal for creating a fashionable look for every day or a unique style for work. It also easily fits into your wardrobe for any season - be it summer, winter, autumn or spring. Women's skirt, women's pencil skirt, women's skirts, women's classic skirt, midi skirt, long skirt, black women's skirt, women's midi skirt, skirt with a slit, school skirt, women's autumn skirt, women's black skirt, A-line skirt, women's office skirt, women's summer skirt, gift, long black skirt, polka dot skirt.",
          composition: ["viscose 70%", "polyester 30%"],
        },
      },
      {
        id: "206",
        sku: "898337330",
        title: "MINAKU dress",
        price: 26.25,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 206,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "206/card.jpg",
        images: [
          "206/slider-0.jpg",
          "206/slider-1.jpg",
          "206/slider-2.jpg",
          "206/slider-3.jpg",
          "206/slider-4.jpg",
        ],
        icons: [
          "206/icon-0.jpg",
          "206/icon-1.jpg",
          "206/icon-2.jpg",
          "206/icon-3.jpg",
          "206/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "An evening women's dress is an ideal casual dress for every day. Lightweight fabric will balance the silhouette and highlight the advantages of any figure.",
        details: {
          description:
            "A women's sundress goes well with any shoes, be it high-heeled shoes, pumps, sandals, or sneakers. A women's summer dress will be an excellent gift for March 8, birthday, New Year, Mother's Day.",
          composition: ["viscose 37%", "polyester 60%", "elastane 3%"],
        },
      },
      {
        id: "207",
        sku: "1109069757",
        title: "Sensual Chic Dress",
        price: 15.54,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 207,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 208,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 209,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "207/card.jpg",
        images: ["207/slider-0.jpg", "207/slider-1.jpg", "207/slider-2.jpg"],
        icons: ["207/icon-0.jpg", "207/icon-1.jpg", "207/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Sensual Chic is a Russian brand that, with great love, produces beautiful women's clothing in which every woman will feel sensual and chic.",
        details: {
          description:
            "We present to your attention a very fashionable and at the same time classic basic look - a plain bright sundress dress with open shoulders, long sleeves and an adjustable neckline with an elastic band. A simple dress can also be worn with a round neckline, covering the shoulders, or on one shoulder. A stylish semi-fitting dress with open shoulders is suitable for any celebration or holiday, as an evening or cocktail party, be it a corporate event, a party, a date, a party, a birthday, an anniversary, and it can also be used as a New Year's dress for Christmas and New Year (NYE).",
          composition: ["viscose 67%", "polyester 33%"],
        },
      },
      {
        id: "208",
        sku: "964537696",
        title: "Sensual Chic Dress",
        price: 19.1,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 9,
          name: "white",
          code: "#F0EDF5",
        },
        allColors: [
          {
            productId: 207,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 208,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 209,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "208/card.jpg",
        images: ["208/slider-0.jpg", "208/slider-1.jpg", "208/slider-2.jpg"],
        icons: ["208/icon-0.jpg", "208/icon-1.jpg", "208/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Sensual Chic is a Russian brand that, with great love, produces beautiful women's clothing in which every woman will feel sensual and chic.",
        details: {
          description:
            "We present to your attention a very fashionable and at the same time classic basic look - a plain bright sundress dress with open shoulders, long sleeves and an adjustable neckline with an elastic band. A simple dress can also be worn with a round neckline, covering the shoulders, or on one shoulder. A stylish semi-fitting dress with open shoulders is suitable for any celebration or holiday, as an evening or cocktail party, be it a corporate event, a party, a date, a party, a birthday, an anniversary, and it can also be used as a New Year's dress for Christmas and New Year (NYE).",
          composition: ["viscose 67%", "polyester 33%"],
        },
      },
      {
        id: "209",
        sku: "1030540690",
        title: "Sensual Chic Dress",
        price: 18.52,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 0, name: "Casual" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 4,
          name: "red",
          code: "#C8031C",
        },
        allColors: [
          {
            productId: 207,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
          {
            productId: 208,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 209,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "209/card.jpg",
        images: ["209/slider-0.jpg", "209/slider-1.jpg", "209/slider-2.jpg"],
        icons: ["209/icon-0.jpg", "209/icon-1.jpg", "209/icon-2.jpg"],
        availability: "true",
        shortDescription:
          "Sensual Chic is a Russian brand that, with great love, produces beautiful women's clothing in which every woman will feel sensual and chic.",
        details: {
          description:
            "We present to your attention a very fashionable and at the same time classic basic look - a plain bright sundress dress with open shoulders, long sleeves and an adjustable neckline with an elastic band. A simple dress can also be worn with a round neckline, covering the shoulders, or on one shoulder. A stylish semi-fitting dress with open shoulders is suitable for any celebration or holiday, as an evening or cocktail party, be it a corporate event, a party, a date, a party, a birthday, an anniversary, and it can also be used as a New Year's dress for Christmas and New Year (NYE).",
          composition: ["viscose 67%", "polyester 33%"],
        },
      },
      {
        id: "210",
        sku: "818718426",
        title: "Dress GILA",
        price: 18.51,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 210,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 211,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "210/card.jpg",
        images: [
          "210/slider-0.jpg",
          "210/slider-1.jpg",
          "210/slider-2.jpg",
          "210/slider-3.jpg",
          "210/slider-4.jpg",
        ],
        icons: [
          "210/icon-0.jpg",
          "210/icon-1.jpg",
          "210/icon-2.jpg",
          "210/icon-3.jpg",
          "210/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "Feminine dress from GILA. The best solution to the eternal female problem “what should I wear”: a very feminine and at the same time classic dress in black from the manufacturer GILA will be able to reproduce only a good impression on others.",
        details: {
          description:
            "An outfit from a domestic manufacturer will be able to reveal a woman, give a new breath to her image, tempt her, while still feeling like a nice lady. The dress can be easily combined with long boots and heels of classic colors. Dark shades of shoes are perfect. The look can be perfectly complemented with a small handbag, which will help highlight the individuality of a woman at an important event. In addition, the dress is made of expensive suiting fabric. It is worth noting the excellent design solution of the dress. The presence of a pointed collar just describes the current form of the trend for such a trend.",
          composition: ["viscose 35%", "polyester 60%", "lycra 5%"],
        },
      },
      {
        id: "211",
        sku: "872670016",
        title: "Dress GILA",
        price: 18.68,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 1, name: "Formal" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 4,
          name: "red",
          code: "#C8031C",
        },
        allColors: [
          {
            productId: 210,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
          {
            productId: 211,
            color: {
              id: 4,
              name: "red",
              code: "#C8031C",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "211/card.jpg",
        images: [
          "211/slider-0.jpg",
          "211/slider-1.jpg",
          "211/slider-2.jpg",
          "211/slider-3.jpg",
          "211/slider-4.jpg",
        ],
        icons: [
          "211/icon-0.jpg",
          "211/icon-1.jpg",
          "211/icon-2.jpg",
          "211/icon-3.jpg",
          "211/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "Feminine dress from GILA. The best solution to the eternal female problem “what should I wear”: a very feminine and at the same time classic dress in black from the manufacturer GILA will be able to reproduce only a good impression on others.",
        details: {
          description:
            "An outfit from a domestic manufacturer will be able to reveal a woman, give a new breath to her image, tempt her, while still feeling like a nice lady. The dress can be easily combined with long boots and heels of classic colors. Dark shades of shoes are perfect. The look can be perfectly complemented with a small handbag, which will help highlight the individuality of a woman at an important event. In addition, the dress is made of expensive suiting fabric. It is worth noting the excellent design solution of the dress. The presence of a pointed collar just describes the current form of the trend for such a trend.",
          composition: ["viscose 35%", "polyester 60%", "lycra 5%"],
        },
      },
      {
        id: "212",
        sku: "1290715802",
        title: "Evening Dress",
        price: 32.33,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 10,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 212,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: true,
        image: "212/card.jpg",
        images: [
          "212/slider-0.jpg",
          "212/slider-1.jpg",
          "212/slider-2.jpg",
          "212/slider-3.jpg",
          "212/slider-4.jpg",
        ],
        icons: [
          "212/icon-0.jpg",
          "212/icon-1.jpg",
          "212/icon-2.jpg",
          "212/icon-3.jpg",
          "212/icon-4.jpg",
        ],
        availability: "true",
        shortDescription:
          "New Year's festive women's dress is the ideal choice for all those who want to shine and stand out at any event.",
        details: {
          description:
            "Thanks to the many sequins placed across the entire surface of the dress, it simply sparkles and twinkles dazzlingly, like stars in the night sky. This dress is a real find for those who are looking for a loose, but at the same time elegant and feminine dress. Its long, but light and flowing fabric gives it a special sophistication and charm, making every movement charming and graceful. Do not doubt that in this dress you will be the star of any party, New Year's ball or even wedding! You will look great in it and attract everyone's attention.",
          composition: ["polyester 100%"],
        },
      },
      {
        id: "213",
        sku: "1302363366",
        title: "Evening Dress",
        price: 35.59,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 5,
        sales: 60,
        type: { id: 10, name: "Dresses" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 22,
          name: "beige",
          code: "#F7EBE1",
        },
        allColors: [
          {
            productId: 213,
            color: {
              id: 22,
              name: "beige",
              code: "#F7EBE1",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: true,
        image: "213/card.jpg",
        images: [
          "213/slider-0.jpg",
          "213/slider-1.jpg",
          "213/slider-2.jpg",
          "213/slider-3.jpg",
        ],
        icons: [
          "213/icon-0.jpg",
          "213/icon-1.jpg",
          "213/icon-2.jpg",
          "213/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "New Year's festive women's dress is the ideal choice for all those who want to shine and stand out at any event.",
        details: {
          description:
            "Thanks to the many sequins placed across the entire surface of the dress, it simply sparkles and twinkles dazzlingly, like stars in the night sky. This dress is a real find for those who are looking for a loose, but at the same time elegant and feminine dress. Its long, but light and flowing fabric gives it a special sophistication and charm, making every movement charming and graceful. Do not doubt that in this dress you will be the star of any party, New Year's ball or even wedding! You will look great in it and attract everyone's attention.",
          composition: ["polyester 100%"],
        },
      },
      {
        id: "214",
        sku: "267647362",
        title: "Bona Fide top",
        price: 34.39,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 10,
        sales: 60,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 3, name: "Gym" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 5,
          name: "black",
          code: "#141316",
        },
        allColors: [
          {
            productId: 214,
            color: {
              id: 5,
              name: "black",
              code: "#141316",
            },
          },
        ],
        added: "2023-02-03T12:30:00.000-05:00",
        newArrivals: false,
        topSelling: false,
        image: "214/card.jpg",
        images: [
          "214/slider-0.jpg",
          "214/slider-1.jpg",
          "214/slider-2.jpg",
          "214/slider-3.jpg",
        ],
        icons: [
          "214/icon-0.jpg",
          "214/icon-1.jpg",
          "214/icon-2.jpg",
          "214/icon-3.jpg",
        ],
        availability: "true",
        shortDescription: "Bona Fide is not just clothes, it is a way of life.",
        details: {
          description: "Bona Fide is not just clothes, it is a way of life.",
          composition: ["polyester 92%", "elastane 8%"],
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
      {
        id: "218",
        sku: "1185518172",
        title: "Crop top OlnatModa",
        price: 13.78,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "10" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 9,
          name: "white",
          code: "#F0EDF5",
        },
        allColors: [
          {
            productId: 218,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 219,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 220,
            color: {
              id: 25,
              name: "pink",
              code: "#FD377E",
            },
          },
          {
            productId: 221,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "218/card.jpg",
        images: [
          "218/slider-0.jpg",
          "218/slider-1.jpg",
          "218/slider-2.jpg",
          "218/slider-3.jpg",
          "218/slider-4.jpg",
          "218/slider-5.jpg",
          "218/slider-6.jpg",
          "218/slider-7.jpg",
          "218/slider-8.jpg",
          "218/slider-9.jpg",
        ],
        icons: [
          "218/icon-0.jpg",
          "218/icon-1.jpg",
          "218/icon-2.jpg",
          "218/icon-3.jpg",
          "218/icon-4.jpg",
          "218/icon-5.jpg",
          "218/icon-6.jpg",
          "218/icon-7.jpg",
          "218/icon-8.jpg",
          "218/icon-9.jpg",
        ],
        availability: "true",
        shortDescription:
          "We present to you a new product for the fall-winter 2023 - 2024 season - a fashionable corset top with chiffon long sleeves with a lock, made in Turkey.",
        details: {
          description:
            "This wardrobe staple is the perfect addition to your outfit any time of year. The top has a gorgeous V-neckline and plunging neckline that give it an elegant and feminine feel. Off the shoulder when the sleeves are pulled down, it creates a sophisticated and fitted silhouette that flatters your figure. Crafted from light and airy chiffon, this top will keep you comfortable throughout the evening. Crop top with a zipper to the waist is ideal for evening events, discotheques, holidays, club meetings or dates. Thanks to their stylish design, the items are also suitable for business and office events if you combine a blouse with a jacket or jacket.",
          composition: ["polyester 60%", "cotton 40%"],
        },
      },
      {
        id: "219",
        sku: "1218836999",
        title: "Crop top OlnatModa",
        price: 14.21,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
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
            productId: 218,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 219,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 220,
            color: {
              id: 25,
              name: "pink",
              code: "#FD377E",
            },
          },
          {
            productId: 221,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "219/card.jpg",
        images: [
          "219/slider-0.jpg",
          "219/slider-1.jpg",
          "219/slider-2.jpg",
          "219/slider-3.jpg",
        ],
        icons: [
          "219/icon-0.jpg",
          "219/icon-1.jpg",
          "219/icon-2.jpg",
          "219/icon-3.jpg",
        ],
        availability: "true",
        shortDescription:
          "We present to you a new product for the fall-winter 2023 - 2024 season - a fashionable corset top with chiffon long sleeves with a lock, made in Turkey.",
        details: {
          description:
            "This wardrobe staple is the perfect addition to your outfit any time of year. The top has a gorgeous V-neckline and plunging neckline that give it an elegant and feminine feel. Off the shoulder when the sleeves are pulled down, it creates a sophisticated and fitted silhouette that flatters your figure. Crafted from light and airy chiffon, this top will keep you comfortable throughout the evening. Crop top with a zipper to the waist is ideal for evening events, discotheques, holidays, club meetings or dates. Thanks to their stylish design, the items are also suitable for business and office events if you combine a blouse with a jacket or jacket.",
          composition: ["polyester 60%", "cotton 40%"],
        },
      },
      {
        id: "220",
        sku: "1218839082",
        title: "Crop top OlnatModa",
        price: 15.45,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 25,
          name: "pink",
          code: "#FD377E",
        },
        allColors: [
          {
            productId: 218,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 219,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 220,
            color: {
              id: 25,
              name: "pink",
              code: "#FD377E",
            },
          },
          {
            productId: 221,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "220/card.jpg",
        images: [
          "220/slider-0.jpg",
          "220/slider-1.jpg",
          "220/slider-2.jpg",
          "220/slider-3.jpg",
          "220/slider-4.jpg",
          "220/slider-5.jpg",
        ],
        icons: [
          "220/icon-0.jpg",
          "220/icon-1.jpg",
          "220/icon-2.jpg",
          "220/icon-3.jpg",
          "220/icon-4.jpg",
          "220/icon-5.jpg",
        ],
        availability: "true",
        shortDescription:
          "We present to you a new product for the fall-winter 2023 - 2024 season - a fashionable corset top with chiffon long sleeves with a lock, made in Turkey.",
        details: {
          description:
            "This wardrobe staple is the perfect addition to your outfit any time of year. The top has a gorgeous V-neckline and plunging neckline that give it an elegant and feminine feel. Off the shoulder when the sleeves are pulled down, it creates a sophisticated and fitted silhouette that flatters your figure. Crafted from light and airy chiffon, this top will keep you comfortable throughout the evening. Crop top with a zipper to the waist is ideal for evening events, discotheques, holidays, club meetings or dates. Thanks to their stylish design, the items are also suitable for business and office events if you combine a blouse with a jacket or jacket.",
          composition: ["polyester 60%", "cotton 40%"],
        },
      },
      {
        id: "221",
        sku: "1185484802",
        title: "Crop top OlnatModa",
        price: 14.26,
        currency: "USD",
        currencyCode: "&#36;",
        grade: 5,
        discount: 0,
        sales: 60,
        type: { id: 11, name: "Tops" },
        dressStyle: { id: 2, name: "Party" },
        gender: { id: 1, name: "woman" },
        sizesInfo: [
          { size: { id: 0, name: "XX-Small", shortName: "xxs" }, amount: "0" },
          { size: { id: 1, name: "X-Small", shortName: "xs" }, amount: "10" },
          { size: { id: 2, name: "Small", shortName: "s" }, amount: "2" },
          { size: { id: 3, name: "Medium", shortName: "m" }, amount: "1" },
          { size: { id: 4, name: "Large", shortName: "l" }, amount: "4" },
          { size: { id: 5, name: "X-Large", shortName: "xxs" }, amount: "4" },
          { size: { id: 6, name: "XX-Large", shortName: "xxl" }, amount: "10" },
          {
            size: { id: 7, name: "3X-Large", shortName: "xxxl" },
            amount: "10",
          },
          {
            size: { id: 8, name: "4X-Large", shortName: "xxxxl" },
            amount: "10",
          },
        ],
        color: {
          id: 3,
          name: "green",
          code: "#787E62",
        },
        allColors: [
          {
            productId: 218,
            color: {
              id: 9,
              name: "white",
              code: "#F0EDF5",
            },
          },
          {
            productId: 219,
            color: {
              id: 6,
              name: "light blue",
              code: "#7395AE",
            },
          },
          {
            productId: 220,
            color: {
              id: 25,
              name: "pink",
              code: "#FD377E",
            },
          },
          {
            productId: 221,
            color: {
              id: 3,
              name: "green",
              code: "#787E62",
            },
          },
        ],
        added: "2023-04-03T12:30:00.000-05:00",
        newArrivals: true,
        topSelling: false,
        image: "221/card.jpg",
        images: [
          "221/slider-0.jpg",
          "221/slider-1.jpg",
          "221/slider-2.jpg",
          "221/slider-3.jpg",
          "221/slider-4.jpg",
          "221/slider-5.jpg",
        ],
        icons: [
          "221/icon-0.jpg",
          "221/icon-1.jpg",
          "221/icon-2.jpg",
          "221/icon-3.jpg",
          "221/icon-4.jpg",
          "221/icon-5.jpg",
        ],
        availability: "true",
        shortDescription:
          "We present to you a new product for the fall-winter 2023 - 2024 season - a fashionable corset top with chiffon long sleeves with a lock, made in Turkey.",
        details: {
          description:
            "This wardrobe staple is the perfect addition to your outfit any time of year. The top has a gorgeous V-neckline and plunging neckline that give it an elegant and feminine feel. Off the shoulder when the sleeves are pulled down, it creates a sophisticated and fitted silhouette that flatters your figure. Crafted from light and airy chiffon, this top will keep you comfortable throughout the evening. Crop top with a zipper to the waist is ideal for evening events, discotheques, holidays, club meetings or dates. Thanks to their stylish design, the items are also suitable for business and office events if you combine a blouse with a jacket or jacket.",
          composition: ["polyester 60%", "cotton 40%"],
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
      return state.products.find((product) => Number(product.id) === Number(id))
    },
    getGenders(state) {
      return state.genders
    },
    getTypes(state) {
      return state.types
    },
    getDressStyles(state) {
      return state.dressStyles
    },
    getSizes(state) {
      return state.sizes
    },
    getColors(state) {
      return state.colors
    },
    getPriceRange(state) {
      return state.priceRanges
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
          if (startIndex === 0) {
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
      const newArrivals = state.products.filter(
        (product) => product.newArrivals
      )
      return (step, startIndex = index) => {
        const batch = newArrivals.slice(startIndex, startIndex + step)
        if (batch.length === 0) {
          index = 0
          if (startIndex === 0) {
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
          if (startIndex === 0) {
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
    getProductByQuery:
      (state) =>
      (query, sort = {}) => {
        const { gender, type, color, size, style, priceMin, priceMax, show } =
          query

        // Фильтрация продуктов по параметрам query запроса
        const targetArray = state.products.filter((product) => {
          return (
            (!show || product) &&
            (!gender ||
              product.gender.name.split("")[0] === gender.split("")[0]) &&
            (!type || product.type.name.toLowerCase() === type) &&
            (!color || product.color.name.toLowerCase() === color) &&
            (!size ||
              product.sizesInfo.find(
                (sizeInfo) => sizeInfo.size.name === size && sizeInfo.amount > 0
              )) &&
            (!style || product.dressStyle.name.toLowerCase() === style) &&
            (!priceMin ||
              !priceMax ||
              (Number(product.price) > priceMin &&
                Number(product.price) < priceMin))
          )
        })

        // Сортировка продуктов по условию
        if (Object.keys(sort).length !== 0) {
          if (sort.field === "price") {
            targetArray.sort((a, b) =>
              sort.order === "asc"
                ? a.price -
                  Math.round(((a.price * a.discount) / 100) * 100) / 100 -
                  (b.price -
                    Math.round(((b.price * b.discount) / 100) * 100) / 100)
                : b.price -
                  Math.round(((b.price * b.discount) / 100) * 100) / 100 -
                  (a.price -
                    Math.round(((a.price * a.discount) / 100) * 100) / 100)
            )
          }
          if (sort.field === "rating") {
            targetArray.sort((a, b) =>
              sort.order === "asc" ? a.grade - b.grade : b.grade - a.grade
            )
          }
        }
        return targetArray
      },
  },
  mutations: {},
  actions: {},
  modules: {
    dropmenuStore,
    burgermenuStore,
    cartStore,
    catalogStore,
  },
})
