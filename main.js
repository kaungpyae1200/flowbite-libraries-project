import Typed from "typed.js";
import "./style.css";
import AOS from "aos";
import WOW from "wow.js";
import Glide from "@glidejs/glide";
import { Chart } from "chart.js/auto";
import "./node_modules/waypoints/lib/noframework.waypoints"

AOS.init();
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  focusAt: "center",
  breakpoints: {
    400: {
      perView: 1,
    },
    800: {
      perView: 2,
    },
  },
}).mount();
const typeUi = document.querySelector("#typeUi");
const headerUi = document.querySelector("#headerUi");
const myChartUi = document.querySelector("#myChart");
const wayJs = document.querySelector("#wayJs");
const way =

const chart = new Chart(myChartUi, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "2023 of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
      },
      {
        label: "2024 of Votes",
        data: [19, 3, 5, 2, 2, 3],
        borderWidth: 5,
      },
      {
        label: "2025 of Votes",
        data: [3, 5, 2, 12, 19, 2,],
        borderWidth: 8,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// const menu = document.querySelector("#menu");
// const menuUi = document.querySelector("#mobile-menu");

// const mobile = new Mobile = () => {
//     console.log(object);
// }

const wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});

wow.init();

const header = new Typed(headerUi, {
  strings: [
    "<span class='text-primary-700'>We invest in the world’s potential</span> ",
    "<span class='text-pink-700'>capital can unlock long-term value and drive economic growth</span> ",
  ],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 2000,
  startDelay: 1500,
  loop: true,
});

const typed = new Typed(typeUi, {
  strings: [
    "<span class='text-primary-700'>Organization</span> ",
    "House",
    "  <span class='text-primary-700'>Companies</span> ",
  ],
  typeSpeed: 150,
  backSpeed: 50,
  backDelay: 2000,
  startDelay: 1500,
  loop: true,
});
