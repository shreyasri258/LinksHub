import { IData, ISidebar } from "../types";

export const data: IData[] = [
  {
    id: "1",
    name: "Unsplash",
    description:
      "Unsplash is a site to get free images, you can download all kind of HD images in here for free.",
    url: "https://unsplash.com",
    category: "frontend",
    subcategory: "images",
  },
  {
    id: "2",
    name: "Pixabay",
    description:
      "Pixabay have Over 2M free stock photos, vectors and art illustrations you can use anywhere.",
    url: "https://pixabay.com/",
    category: "frontend",
    subcategory: "images",
  },
  {
    id: "3",
    name: "Pexels",
    description:
      "A great resource for free stock photos and videos, created by photographers around the world.",
    url: "https://www.pexels.com/",
    category: "frontend",
    subcategory: "images",
  },
  {
    id: "4",
    name: "Open Color",
    description:
      "An open-source color scheme, optimized for UI. My go-to resource to choose colors from scratch. ",
    url: "https://yeun.github.io/open-color/",
    category: "frontend",
    subcategory: "colors",
  },
  {
    id: "5",
    name: "UI Gradients",
    description:
      "Collection of beautiful color gradients for you to choose from and export to your project. ",
    url: "https://uigradients.com/#MoonlitAsteroid",
    category: "frontend",
    subcategory: "colors",
  },
  {
    id: "6",
    name: "Tailwind Colors",
    description:
      "This an excellent and popular set of color pallettes by TailwindCSS. Get beautiful colors of all shades ",
    url: "https://tailwindcss.com/docs/customizing-colors",
    category: "frontend",
    subcategory: "colors",
  },
  {
    id: "7",
    name: "Color Contract Checker",
    description:
      "This an excellent site to check whether contrast of two colors is good or not ",
    url: "https://tailwindcss.com/docs/customizing-colors",
    category: "frontend",
    subcategory: "colors",
  },
  {
    id: "8",
    name: "0to255",
    description:
      "0to255 is a color tool that makes it easy to find lighter and darker colors, or tints and shades, based on any color. ",
    url: "https://0to255.com/",
    category: "frontend",
    subcategory: "colors",
  },
  {
    id: "9",
    name: "Google Fonts",
    description:
      "The No. 1 resource for free and easy-to-use webfonts by Google. It has a huge library of fonts. ",
    url: "https://fonts.google.com/",
    category: "frontend",
    subcategory: "fonts",
  },
  {
    id: "10",
    name: "Fonts Quirrel",
    description:
      "Fonts Quirrel is platform to get free commercial fonts for your project. It's another huge library for fonts ",
    url: "https://www.fontsquirrel.com/",
    category: "frontend",
    subcategory: "fonts",
  },
  {
    id: "11",
    name: "Glaze",
    description:
      "All in one resource to get free illustrations images for characters, backgrounds, avatar and more",
    url: "https://www.glazestock.com/",
    category: "frontend",
    subcategory: "illustrations",
  },
  {
    id: "12",
    name: "unDraw",
    description:
      "unDraw os another exccelent platform to get free illustration images with No color restrictions",
    url: "https://undraw.co/illustrations",
    category: "frontend",
    subcategory: "illustrations",
  },
  {
    id: "12",
    name: "DrawKit",
    description:
      "It is a collection of fully customisable PSD illustrations, in two styles, available to use on your next project.",
    url: "https://www.drawkit.com/",
    category: "frontend",
    subcategory: "illustrations",
  },
  {
    id: "14",
    name: "Font Awesome",
    description:
      "A highly popular icon font, consisting of 1000+ icons spread across countless categories.",
    url: "https://www.glazestock.com/",
    category: "frontend",
    subcategory: "icons",
  },
  {
    id: "15",
    name: "Phosphor Icons",
    description:
      "Another beautiful, more boxy SVG collection of free icons. Customizable thickness and color.",
    url: "https://phosphoricons.com/",
    category: "frontend",
    subcategory: "icons",
  },
  {
    id: "16",
    name: "Flat Icon",
    description:
      "It is a collection of fully customisable PSD icons, in two styles, available to use on your next project.",
    url: "https://www.flaticon.com/",
    category: "frontend",
    subcategory: "icons",
  },
  {
    id: "17",
    name: "Line Awesome",
    description:
      "It is a collection of fully customisable PSD icons, in two styles, available to use on your next project.",
    url: "https://icons8.com/line-awesome",
    category: "frontend",
    subcategory: "icons",
  },
  {
    id: "18",
    name: "Font Joy",
    description:
      "Font Joy is a website that generates font pairings for designers and developers to use in their projects. ",
    url: "https://fontjoy.com/",
    category: "frontend",
    subcategory: "fonts",
  },
  {
    id: "19",
    name: "Icon Sets",
    description:
      "Icon-sets is a website that provides a collection of icons for designers and developers to use in their projects.",
    url: "https://icon-sets.iconify.design/",
    category: "frontend",
    subcategory: "icons",
  },
];

export const sidebarData: ISidebar[] = [
  {
    category: "frontend",
    subcategory: [
      { name: "images", url: "/images" },
      { name: "fonts", url: "/fonts" },
      { name: "colors", url: "/colors" },
      { name: "illustrations", url: "/illustrations" },
      { name: "animations", url: "/animations" },
      { name: "icons", url: "/icons" },
      { name: "design inspiration", url: "/design-inspiration" },
      { name: "testing", url: "/testing" },
      { name: "themes & templates", url: "/themes-templates" },
    ],
  },
  {
    category: "backend",
    subcategory: [
      { name: "validation", url: "" },
      { name: "security", url: "" },
      { name: "authentication", url: "" },
      { name: "caching", url: "" },
      { name: "testing", url: "" },
    ],
  },
];
