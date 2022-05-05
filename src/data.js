import airtag from "./image/airtag.png";
import iphone13 from "./image/iphone-13.jpg";
import appleStand from "./image/applestand.jpg";
import applewatch from "./image/applewatch.jpg";
import macbook from "./image/macbook.jpg";
const data = {
  products: [
    {
      id: 1,
      name: "Apple airtag",
      description:
        "Tag that tracks your things. but also creepy gadget that been used to tracked others by stalkers",
      price: 39,
      image: airtag,
    },
    {
      id: 2,
      name: "Apple watch",
      description:
        "If you forget that you have a clock on you phone you can use apple watch.",
      price: 500,
      image: applewatch,
    },
    {
      id: 3,
      name: "Macbook",
      description:
        "computer with worse specs than a regular computer but is more expensive but you get the apple logo that dont even light up anymore",
      price: 2900,
      image: macbook,
    },
    {
      id: 4,
      name: "Iphone 13",
      description:
        "Next gen of Iphoneapp does the same thing like the last one but cost twice as much.",
      price: 1199,
      image: iphone13,
    },
    {
      id: 5,
      name: "Pro Stand",
      description:
        "A very expensive screen holder that cost more than regular computer but aleast it´s apple ",
      price: 1300,
      image: appleStand,
    },
  ],
};
export default data;
