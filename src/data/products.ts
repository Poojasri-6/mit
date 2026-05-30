import turmeric from "@/assets/p-turmeric.jpg";
import kulambu from "@/assets/p-kulambu.jpg";
import curryMasala from "@/assets/p-curry-masala.jpg";
import coriander from "@/assets/p-coriander.jpg";
import moringa from "@/assets/p-moringa.jpg";
import currylf from "@/assets/p-curry-leaf.jpg";
import pirandai from "@/assets/p-pirandai.jpg";
import paruppu from "@/assets/p-paruppu.jpg";
import kollu from "@/assets/p-kollu.jpg";
import idly from "@/assets/p-idly.jpg";
import bananaLeaf from "@/assets/p-banana-leaf.jpg";
import bananaPeel from "@/assets/p-banana-peel.jpg";
import bambooSalt from "@/assets/p-bamboo-salt.jpg";
import nithya from "@/assets/p-nithya.jpg";
import spirulina from "@/assets/p-spirulina.jpg";
import granite from "@/assets/p-granite.jpg";
import herbals from "@/assets/p-herbals.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Spices" | "Herbal" | "Agro" | "Industrial";
  group: string;
  image: string;
  short: string;
  description: string;
  features: string[];
};

export const PRODUCTS: Product[] = [
  /* ── SPICES & TRADITIONAL PODIS ─────────────────────────── */
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: turmeric,
    short: "Pure golden curcumin-rich turmeric.",
    description:
      "Our Turmeric Powder is sourced from high-quality turmeric roots and processed under hygienic conditions to retain its natural colour, aroma, and purity. Known for its vibrant golden hue and rich curcumin content, it is widely used in cooking, health applications, and traditional remedies.",
    features: [
      "100% pure and natural",
      "Rich color and strong aroma",
      "Finely ground for easy use",
      "Free from additives and preservatives",
    ],
  },
  {
    slug: "kulambu-podi",
    name: "Kulambu Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: kulambu,
    short: "Traditional South Indian gravy blend.",
    description:
      "Kulambu Podi is a traditional South Indian spice blend used to prepare flavorful and aromatic gravies. Made from carefully selected spices, it delivers authentic taste and enhances everyday cooking.",
    features: [
      "Authentic homemade-style blend",
      "Balanced mix of spices",
      "Rich aroma and taste",
      "Suitable for a variety of curry dishes",
    ],
  },
  {
    slug: "curry-masala-podi",
    name: "Curry Masala Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: curryMasala,
    short: "Versatile multi-curry masala mix.",
    description:
      "Curry Masala Podi is a versatile spice mix designed to add depth and richness to curries. Prepared using premium ingredients, it brings consistency and flavor to a wide range of dishes.",
    features: [
      "Multi-purpose spice blend",
      "Strong flavor and aroma",
      "Hygienically processed",
      "Ideal for vegetarian and non-vegetarian dishes",
    ],
  },
  {
    slug: "coriander-podi",
    name: "Coriander Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: coriander,
    short: "Fresh-ground premium coriander.",
    description:
      "Coriander Podi is made from carefully selected coriander seeds, finely ground to preserve its natural flavor and freshness. It is widely used to enhance the taste of traditional dishes.",
    features: [
      "Fresh and aromatic",
      "Natural flavor enhancer",
      "Fine texture and uniform quality",
      "No artificial additives",
    ],
  },
  {
    slug: "moringa-powder",
    name: "Murungai Ilai (Moringa) Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: moringa,
    short: "Nutrient-dense moringa leaf powder.",
    description:
      "Murungai Ilai Podi is made from dried moringa leaves, known for their nutritional richness. It is widely used as a natural supplement and traditional food ingredient.",
    features: [
      "Made from high-quality moringa leaves",
      "Rich in natural nutrients",
      "Finely processed and hygienically packed",
      "Suitable for food and wellness applications",
    ],
  },
  {
    slug: "curry-leaf-powder",
    name: "Karuvepilai (Curry Leaf) Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: currylf,
    short: "Traditional curry leaf herbal powder.",
    description:
      "Karuvepilai Podi is a traditional herbal powder made from dried curry leaves blended with spices. It is valued for its distinctive taste and natural goodness.",
    features: [
      "Authentic traditional preparation",
      "Rich flavor and aroma",
      "Hygienically processed",
      "Suitable for daily consumption",
    ],
  },
  {
    slug: "pirandai-powder",
    name: "Pirandai Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: pirandai,
    short: "Time-tested pirandai herbal blend.",
    description:
      "Pirandai Podi is a traditional herbal blend made from the pirandai plant, widely used in South Indian cuisine. It is prepared using time-tested methods to retain its natural properties.",
    features: [
      "Traditional herbal formulation",
      "Carefully processed for quality",
      "Unique taste and texture",
      "Suitable for rice and side dishes",
    ],
  },
  {
    slug: "paruppu-podi",
    name: "Paruppu Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: paruppu,
    short: "Protein-rich roasted lentil podi.",
    description:
      "Paruppu Podi is a classic South Indian protein-rich powder made from roasted lentils and spices. It is commonly mixed with rice and ghee for a quick and nutritious meal.",
    features: [
      "Rich in protein",
      "Authentic homemade taste",
      "Ready-to-eat with rice",
      "Balanced blend of lentils and spices",
    ],
  },
  {
    slug: "kollu-podi",
    name: "Kollu Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: kollu,
    short: "Horse gram nutritional powder.",
    description:
      "Kollu Podi is made from horse gram and spices, offering a unique taste and traditional value. It is known for its strong flavor and nutritional benefits.",
    features: [
      "Made from premium horse gram",
      "Rich taste and aroma",
      "Traditional preparation method",
      "Suitable for healthy diets",
    ],
  },
  {
    slug: "idly-podi",
    name: "Idly Podi",
    category: "Spices",
    group: "Spices & Traditional Podis",
    image: idly,
    short: "Iconic 'gunpowder' condiment.",
    description:
      "Idly Podi, also known as \"Gunpowder,\" is a popular South Indian condiment served with idly and dosa. It is made from roasted lentils and spices, offering a flavorful and slightly spicy taste.",
    features: [
      "Authentic South Indian recipe",
      "Coarse texture with rich flavor",
      "Ready-to-use condiment",
      "Long shelf life",
    ],
  },

  /* ── HERBAL PRODUCTS ────────────────────────────────────── */
  {
    slug: "nithya-kalyani-powder",
    name: "Nithya Kalyani Powder",
    category: "Herbal",
    group: "Herbal Products",
    image: nithya,
    short: "Periwinkle herbal powder.",
    description:
      "Sourced from high-quality Madagascar periwinkle (Nithya Kalyani) leaves, our powder is processed using traditional sun-drying methods to preserve its natural properties. It is a staple in traditional herbal formulations and is valued for its purity and consistency.",
    features: [
      "100% natural and organic",
      "Carefully sun-dried and finely ground",
      "No artificial colors or preservatives",
      "Ideal for herbal and traditional applications",
    ],
  },
  {
    slug: "spirulina",
    name: "Spirulina Algae",
    category: "Herbal",
    group: "Herbal Products",
    image: spirulina,
    short: "Premium-grade spirulina powder.",
    description:
      "Our Spirulina is a premium-grade superfood cultivated in controlled, hygienic environments to ensure the highest purity and nutrient density. It is exceptionally rich in proteins, vitamins, and minerals, making it a powerful supplement for modern wellness diets.",
    features: [
      "High protein and micronutrient content",
      "Pure and lab-tested quality",
      "Fine texture for easy consumption",
      "Free from contaminants and additives",
    ],
  },
  {
    slug: "herbals",
    name: "Herbals Collection",
    category: "Herbal",
    group: "Herbal Products",
    image: herbals,
    short: "Curated herbal product range.",
    description:
      "A curated selection of premium Indian herbal powders, sourced from the finest growers. This collection represents the best of traditional wellness, with each product processed under strict quality standards to ensure authenticity and efficacy.",
    features: [
      "Wide range of authentic herbs",
      "Sourced from trusted regional growers",
      "Hygienically processed and packed",
      "Suitable for diverse wellness and food uses",
    ],
  },

  /* ── AGRO PRODUCTS ──────────────────────────────────────── */
  {
    slug: "banana-leaf",
    name: "Banana Leaf",
    category: "Agro",
    group: "Agro Products",
    image: bananaLeaf,
    short: "Fresh & processed export-grade banana leaf.",
    description:
      "Fresh and processed banana leaves, harvested at the peak of freshness and sustainably sourced. Our leaves are handled with care to ensure they remain vibrant and durable, meeting international standards for food service, traditional dining, and eco-friendly packaging.",
    features: [
      "Freshly harvested and sustainably sourced",
      "Cleaned and prepared for immediate use",
      "Vibrant green color and durable texture",
      "Available in various sizes and formats",
    ],
  },
  {
    slug: "banana-peel-powder",
    name: "Banana Peel Powder",
    category: "Agro",
    group: "Agro Products",
    image: bananaPeel,
    short: "Sustainable banana peel powder.",
    description:
      "A sustainable and nutrient-rich powder derived from high-quality banana peels. Processed using advanced drying techniques, it retains essential fibers and minerals, serving as a versatile ingredient for food supplements and natural health formulations.",
    features: [
      "Eco-friendly and sustainable product",
      "Rich in natural fiber and potassium",
      "Finely ground with uniform quality",
      "Multipurpose application in food and health",
    ],
  },
  {
    slug: "bamboo-salt",
    name: "Bamboo Salt",
    category: "Agro",
    group: "Agro Products",
    image: bambooSalt,
    short: "Traditional roasted bamboo salt.",
    description:
      "Our Bamboo Salt is prepared using traditional roasting methods where sea salt is packed into bamboo stems and roasted at high temperatures. This unique process infuses the salt with minerals from the bamboo, resulting in a premium product for both culinary and wellness use.",
    features: [
      "Traditionally roasted for mineral enrichment",
      "Unique alkaline properties",
      "Distinctive flavor profile",
      "Ideal for gourmet cooking and wellness",
    ],
  },

  /* ── INDUSTRIAL ─────────────────────────────────────────── */
  {
    slug: "granite",
    name: "Premium Granite",
    category: "Industrial",
    group: "Industrial Products",
    image: granite,
    short: "Export-quality granite slabs & blocks.",
    description:
      "Export-quality granite sourced from the most reputable quarries in India. Available in a wide variety of colors and finishes, our granite is perfect for high-end construction projects, providing durability and timeless aesthetic appeal for global markets.",
    features: [
      "Superior durability and strength",
      "Wide range of colors and textures",
      "Precision cut and polished finishes",
      "Suitable for blocks, slabs, and tiles",
    ],
  },
];
