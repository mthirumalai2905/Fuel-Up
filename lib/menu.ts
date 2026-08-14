export type Diet = "veg" | "non-veg" | "egg";

export type Category =
  | "High Protein Salad bowl"
  | "Protein Rice Bowl"
  | "Smoothie Bowl"
  | "Breakfast";

export type Nutrition = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiberLabel: string;
};

export type Bowl = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  note?: string;
  image: string;
  category: Category;
  diet: Diet;
  tags: string[];
  nutrition: Nutrition | null;
  preview: boolean;
};

export const bowls: Bowl[] = [
  {
    id: "1",
    slug: "protein-soya-salad",
    name: "Protein Soya Salad, 100 g Dry Soya",
    shortName: "Protein Soya Salad",
    description:
      "100 g soya chunks tossed with fresh vegetables, herbs and flavourful spices. A hearty, protein-rich salad made for fitness-focused meals.",
    image: "/bowls/protein-soya-salad.png",
    category: "High Protein Salad bowl",
    diet: "veg",
    tags: ["Veg", "High Protein", "Salad"],
    nutrition: { calories: 280, protein: 14, carbs: 43, fat: 6, fiberLabel: "11g" },
    preview: true,
  },
  {
    id: "2",
    slug: "rajma-paneer",
    name: "Rajma Paneer",
    shortName: "Rajma Paneer",
    description:
      "Protein-rich rajma and soft paneer tossed with fresh vegetables and Indian spices. Wholesome, filling and delicious.",
    image: "/bowls/rajma-paneer.png",
    category: "High Protein Salad bowl",
    diet: "veg",
    tags: ["Veg", "High Protein"],
    nutrition: { calories: 350, protein: 32, carbs: 32, fat: 19, fiberLabel: "9g" },
    preview: true,
  },
  {
    id: "3",
    slug: "chicken-burrito-rice-bowl",
    name: "Chicken burrito Rice Bowl",
    shortName: "Chicken burrito Rice Bowl",
    description:
      "A wholesome, protein-packed bowl with juicy seasoned chicken, fluffy rice, fresh veggies, creamy dressing and zesty burrito-style flavours. Balanced, filling and perfect for a healthy yet delicious meal.",
    image: "/bowls/chicken-burrito-rice-bowl.png",
    category: "Protein Rice Bowl",
    diet: "non-veg",
    tags: ["Non-Veg", "High Protein", "Rice"],
    nutrition: { calories: 550, protein: 38, carbs: 65, fat: 15, fiberLabel: "8g" },
    preview: false,
  },
  {
    id: "4",
    slug: "creamy-grilled-chicken-rice-bowl",
    name: "Creamy Grilled Chicken Rice Bowl",
    shortName: "Creamy Grilled Chicken Rice Bowl",
    description:
      "Juicy grilled chicken with wholesome rice, fresh white sos cream and herbs. High-protein, filling and flavourful.",
    image: "/bowls/creamy-grilled-chicken-rice-bowl.png",
    category: "Protein Rice Bowl",
    diet: "non-veg",
    tags: ["Non-Veg", "High Protein", "Rice"],
    nutrition: { calories: 460, protein: 43, carbs: 48, fat: 11, fiberLabel: "4g" },
    preview: true,
  },
  {
    id: "5",
    slug: "grilled-paneer-salad-bowl",
    name: "Grilled paneer salad bowl",
    shortName: "Grilled paneer salad bowl",
    description:
      "Grilled paneer with fresh boiled vegetables, herbs and light seasoning. High-protein, fresh and filling.",
    image: "/bowls/grilled-paneer-salad-bowl.png",
    category: "High Protein Salad bowl",
    diet: "veg",
    tags: ["Veg", "High Protein", "Salad"],
    nutrition: { calories: 390, protein: 29, carbs: 13, fat: 27, fiberLabel: "4–9g" },
    preview: false,
  },
  {
    id: "6",
    slug: "creamy-paneer-rice-bowl",
    name: "Creamy Paneer Rice Bowl",
    shortName: "Creamy Paneer Rice Bowl",
    description:
      "Creamy paneer with rice, fresh white sos cream and mild spices. Rich, filling and delicious.",
    image: "/bowls/creamy-paneer-rice-bowl.png",
    category: "Protein Rice Bowl",
    diet: "veg",
    tags: ["Veg", "Rice"],
    nutrition: { calories: 500, protein: 24, carbs: 55, fat: 21, fiberLabel: "4–6g" },
    preview: false,
  },
  {
    id: "7",
    slug: "paneer-rajma-chawal",
    name: "Paneer Rajma Chawal",
    shortName: "Paneer Rajma Chawal",
    description:
      "Rajma and soft paneer served with wholesome rice. Hearty, flavourful and protein-rich.",
    image: "/bowls/paneer-rajma-chawal.png",
    category: "Protein Rice Bowl",
    diet: "veg",
    tags: ["Veg", "High Protein", "Rice"],
    nutrition: { calories: 460, protein: 43, carbs: 68, fat: 20, fiberLabel: "9g" },
    preview: false,
  },
  {
    id: "8",
    slug: "rajma-paneer-rice-bowl",
    name: "Rajma Paneer Rice Bowl",
    shortName: "Rajma Paneer Rice Bowl",
    description:
      "A wholesome vegetarian protein bowl made with flavorful rajma, soft paneer and perfectly cooked rice, seasoned with aromatic spices. Filling, nutritious and packed with plant-based protein for a satisfying healthy meal.",
    image: "/bowls/rajma-paneer-rice-bowl.png",
    category: "Protein Rice Bowl",
    diet: "veg",
    tags: ["Veg", "High Protein", "Rice"],
    nutrition: { calories: 550, protein: 38, carbs: 65, fat: 15, fiberLabel: "8g" },
    preview: false,
  },
  {
    id: "9",
    slug: "boiled-eggs-rice-bowl",
    name: "Boiled Eggs Rice Bowl",
    shortName: "Boiled Eggs Rice Bowl",
    description:
      "A wholesome, protein-packed bowl combining perfectly boiled eggs, nutritious rajma and fluffy seasoned rice, topped with fresh veggies and light spices. Filling, balanced and perfect for a healthy everyday meal.",
    image: "/bowls/boiled-eggs-rice-bowl.png",
    category: "Protein Rice Bowl",
    diet: "egg",
    tags: ["Egg", "High Protein", "Rice"],
    nutrition: { calories: 520, protein: 25, carbs: 72, fat: 14, fiberLabel: "11g" },
    preview: false,
  },
  {
    id: "10",
    slug: "banana-smoothie-bowl",
    name: "Banana Smoothie Bowl",
    shortName: "Banana Smoothie Bowl",
    description:
      "A thick and creamy banana smoothie bowl blended with wholesome ingredients and topped with crunchy nuts, seeds and fresh banana. Naturally delicious, filling and perfect for a healthy breakfast.",
    note: "Assuming 2 bananas + 150 ml milk/curd + 20 g oats + 10 g peanut butter + light toppings.",
    image: "/bowls/banana-smoothie-bowl.png",
    category: "Smoothie Bowl",
    diet: "veg",
    tags: ["Veg", "Breakfast", "Smoothie"],
    nutrition: { calories: 420, protein: 14, carbs: 65, fat: 13, fiberLabel: "8g" },
    preview: true,
  },
  {
    id: "11",
    slug: "banana-chocolate-smoothie-bowl",
    name: "Banana chocolate smoothie bowl",
    shortName: "Banana chocolate smoothie bowl",
    description:
      "A creamy banana smoothie bowl finished with dark chocolate drizzle, banana slices and a mix of seeds.",
    image: "/bowls/banana-chocolate-smoothie-bowl.png",
    category: "Smoothie Bowl",
    diet: "veg",
    tags: ["Veg", "Smoothie"],
    nutrition: null,
    preview: false,
  },
  {
    id: "12",
    slug: "banana-strawberry-smoothie-bowl",
    name: "Banana strawberry smoothie bowl",
    shortName: "Banana strawberry smoothie bowl",
    description:
      "A thick strawberry-banana smoothie bowl topped with banana coins, pumpkin seeds, sunflower seeds, chia and a strawberry drizzle.",
    image: "/bowls/banana-strawberry-smoothie-bowl.png",
    category: "Smoothie Bowl",
    diet: "veg",
    tags: ["Veg", "Smoothie"],
    nutrition: null,
    preview: false,
  },
  {
    id: "13",
    slug: "peanut-butter-bread",
    name: "Peanut butter bread (15 g Protein)",
    shortName: "Peanut butter bread",
    description:
      "Multigrain toast topped with creamy peanut butter. Wholesome, filling and perfect for a quick healthy breakfast.",
    image: "/bowls/peanut-butter-bread.png",
    category: "Breakfast",
    diet: "veg",
    tags: ["Veg", "Breakfast"],
    nutrition: { calories: 350, protein: 15, carbs: 40, fat: 17, fiberLabel: "6g" },
    preview: false,
  },
  {
    id: "14",
    slug: "multigrain-bread-omelette",
    name: "Multigrain bread omelette",
    shortName: "Multigrain bread omelette",
    description:
      "Fluffy masala omelette served with toasted multigrain bread. Wholesome, filling and protein-rich.",
    image: "/bowls/multigrain-bread-omelette.png",
    category: "Breakfast",
    diet: "egg",
    tags: ["Egg", "Breakfast"],
    nutrition: { calories: 320, protein: 18, carbs: 30, fat: 14, fiberLabel: "5g" },
    preview: false,
  },
  {
    id: "15",
    slug: "grilled-chicken-salad-bowl",
    name: "Grilled Chicken Salad Bowl",
    shortName: "Grilled Chicken Salad Bowl",
    description:
      "Juicy grilled chicken with fresh boiled vegetables, herbs and light seasoning. High-protein, fresh and filling.",
    image: "/bowls/grilled-chicken-salad-bowl.png",
    category: "High Protein Salad bowl",
    diet: "non-veg",
    tags: ["Non-Veg", "High Protein", "Salad"],
    nutrition: { calories: 300, protein: 39, carbs: 12, fat: 10, fiberLabel: "4g" },
    preview: false,
  },
  {
    id: "16",
    slug: "mixed-sprouts-power-chaat-bowl",
    name: "Mixed sprouts power chaat bowl",
    shortName: "Mixed sprouts power chaat bowl",
    description:
      "Mixed sprouts, chickpeas and fresh veggies tossed with zesty spices. A wholesome, protein-rich and fibre-packed power bowl.",
    image: "/bowls/mixed-sprouts-power-chaat-bowl.png",
    category: "High Protein Salad bowl",
    diet: "veg",
    tags: ["Veg", "High Protein", "Salad"],
    nutrition: { calories: 280, protein: 14, carbs: 43, fat: 6, fiberLabel: "11g" },
    preview: false,
  },
];

export const categories: Category[] = [
  "High Protein Salad bowl",
  "Protein Rice Bowl",
  "Smoothie Bowl",
  "Breakfast",
];

export function getPreviewBowls() {
  return bowls.filter((bowl) => bowl.preview);
}

export function getBowlBySlug(slug: string) {
  return bowls.find((bowl) => bowl.slug === slug);
}

export function dietLabel(diet: Diet) {
  if (diet === "veg") return "Veg";
  if (diet === "egg") return "Egg";
  return "Non-Veg";
}
