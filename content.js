/*
  ============================================
  GS DESIGN PORTFOLIO — EASY EDIT FILE
  ============================================

  Most changes you will ever need are in THIS FILE.

  1. Change your name/studio in SITE.
  2. Change email + social links.
  3. Change the hero text.
  4. Add/edit projects in PROJECTS.
  5. Put your images in the assets folder and
     change the image filename for each project.

  You do NOT need to edit index.html for normal updates.
*/

const SITE = {
  name: "GS Design",
  tagline: "SCULPT / FORM / SURFACE",

  hero: {
    eyebrow: ["ANATOMY", "CHARACTERS", "VEHICLES", "SURFACE DESIGN"],
    title: ["SCULPT", "FORM", "SURFACES", "IDEAS"],
    description: [
      "3D SCULPT & SURFACE DESIGN",
      "FOR PRODUCTS, CHARACTERS",
      "AND VEHICLES."
    ]
  },

  about: {
    title: ["SCULPT", "DESIGN", "EXPLORE"],
    paragraphs: [
      "I’m a 3D sculpt and surface designer working on anatomical studies, characters and vehicles. My work explores form, proportion and materiality, from organic anatomy to high-end automotive surfaces.",
      "I’m interested in the balance between the natural and the engineered, how organic forms, mechanical logic and material behaviour can inspire each other."
    ]
  },

  services: [
    "3D Sculpting",
    "Surface Design",
    "Concept Development",
    "Product Design",
    "Character Design",
    "Vehicle Design",
    "Visualisation & Art Direction"
  ],

  contact: {
    email: "info@gsdesign.at",
    instagram: "#",
    behance: "#",
    linkedin: "#"
  }
};

const PROJECTS = [
  {
    number: "01",
    title: "CAR SCULPT",
    shortTitle: "CAR SCULPT",
    category: "VEHICLE DESIGN",
    description: "Vehicle form development exploring proportion, surfacing and sculptural character.",
    image: "Car_Sculpt_01_b.jpg",
    gallery: [],
    tags: ["VEHICLE DESIGN", "3D SCULPTING", "SURFACE DESIGN"]
  },

  {
    number: "02",
    title: "CROSSKART",
    shortTitle: "CROSSKART",
    category: "VEHICLE DESIGN",
    description: "A compact off-road vehicle study exploring aggressive proportions, structure and functional form.",
    image: "Crosskart_01.jpg",
    gallery: ["Crosskart_02.jpg"],
    tags: ["VEHICLE DESIGN", "CONCEPT DEVELOPMENT", "SURFACE DESIGN"]
  },

  {
    number: "03",
    title: "RC VEHICLE DESIGN",
    shortTitle: "RC VEHICLE DESIGN",
    category: "PRODUCT DESIGN",
    description: "Exploration of a compact radio-controlled vehicle concept combining functional engineering with bold surface language.",
    image: "RC_Box_Cover_02.jpg",
    gallery: [],
    tags: ["PRODUCT DESIGN", "VEHICLE DESIGN", "CONCEPT DEVELOPMENT"]
  }
];
