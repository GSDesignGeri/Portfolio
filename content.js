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
      "FOR CHARACTERS, CREATURES",
      "AND VEHICLES."
    ]
  },

  about: {
    title: ["SCULPT", "DESIGN", "EXPLORE"],
    paragraphs: [
      "I’m a 3D sculpt and surface designer working on anatomical studies, creatures and vehicles. My work explores form, proportion and materiality, from organic anatomy to high-end automotive surfaces.",
      "I’m interested in the balance between the natural and the engineered — how organic forms, mechanical logic and material behaviour can inspire each other."
    ]
  },

  services: [
    "3D Sculpting",
    "Surface Design",
    "Concept Development",
    "Anatomy Studies",
    "Creature Design",
    "Vehicle Design",
    "Visualisation & Art Direction"
  ],

  contact: {
    email: "hello@yourdomain.com",
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
    title: "HUMAN ANATOMY",
    shortTitle: "ANATOMY",
    category: "ANATOMY STUDY",
    description: "Heads, busts and anatomical studies exploring proportion, structure and surface.",
    image: "01_human_anatomy.jpg",
    gallery: ["anatomy.svg", "body.svg"],
    tags: ["3D SCULPTING", "ANATOMY STUDY", "CONCEPT DEVELOPMENT"]
  },

  {
    number: "02",
    title: "VEHICLE DESIGN",
    shortTitle: "VEHICLE CONCEPT",
    category: "SURFACE DESIGN",
    description: "Exploration of aerodynamic forms, surface tension and functional aesthetics.",
    image: "02_vehicle_design.jpg",
    gallery: ["vehicle.svg", "vehicle.svg", "vehicle.svg"],
    tags: ["SURFACE DESIGN", "3D SCULPTING", "CONCEPT DEVELOPMENT", "VISUALISATION"]
  },

  {
    number: "03",
    title: "CREATURE DESIGN",
    shortTitle: "CREATURE",
    category: "ORGANIC FORM",
    description: "Organic forms, creatures and sculptural explorations inspired by anatomy and nature.",
    image: "03_creature_design.jpg",
    gallery: ["creature.svg", "creature.svg"],
    tags: ["CREATURE DESIGN", "ORGANIC FORMS", "CONCEPT EXPLORATION"]
  }
];
