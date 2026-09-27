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
    eyebrow: ["ANATOMY", "CREATURES", "VEHICLES", "SURFACE DESIGN"],
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
      "I’m interested in the balance between the natural and the engineered — how organic forms, mechanical logic and material behaviour can inspire each other."
    ]
  },

  services: [
    "3D Sculpting",
    "Surface Design",
    "Concept Development",
    "PrOduct Design",
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


/*
  ============================================
  PROJECTS
  ============================================

  To add a project, copy one project object and
  change the values.

  image = the main image
  gallery = additional images

  Put your images inside /assets.

  Example:
    image: "my-car.jpg"
    gallery: ["my-car-2.jpg", "my-car-3.jpg"]
*/

const PROJECTS = [
  {
    number: "01",
    title: "DIGITAL SCULPTING",
    shortTitle: "SCULPTING",
    category: "ORGANIC FORM",
    description: "Organic forms, creatures and sculptural explorations inspired by anatomy and nature.",
    image: "01_human_anatomy.jpg",
    gallery: ["01_human_anatomy_2.jpg", "body.svg"],
    tags: ["3D SCULPTING", "ANATOMY STUDY", "CONCEPT DEVELOPMENT"]
  },

  {
    number: "02",
    title: "VEHICLE DESIGN",
    shortTitle: "VEHICLE CONCEPT",
    category: "SURFACE DESIGN",
    description: "Exploration of aerodynamic forms, surface tension and functional aesthetics.",
    image: "02_vehicle_design_3.jpg",
    gallery: ["SW_Concept_01.jpg", "02_vehicle_design_4", "vehicle.svg"],
    tags: ["SURFACE DESIGN", "3D SCULPTING", "CONCEPT DEVELOPMENT", "VISUALISATION"]
  },

  {
    number: "03",
    title: "PRODUCT DESIGN",
    shortTitle: "PRODUCT",
    category: "INDUSTRIAL DESIGN",
    description: "Exploration of form, function and material to create refined products where aesthetics, ergonomics and purpose come together.",
    image: "03_product_design_01.jpg",
    gallery: ["02_vehicle_sketch.jpg", "creature.svg"],
    tags: ["CREATURE DESIGN", "ORGANIC FORMS", "CONCEPT EXPLORATION"]
  }
];
