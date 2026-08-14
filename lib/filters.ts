import { bowls, type Bowl, type Category, type Diet } from "@/lib/menu";

export type DietFilter = "all" | Diet;
export type ProteinFilter = "all" | "high" | "extra";
export type CalorieFilter = "all" | "light" | "mid" | "hearty";
export type SortKey = "featured" | "protein-desc" | "calories-asc" | "calories-desc";

export type MenuFilterState = {
  diet: DietFilter;
  protein: ProteinFilter;
  calories: CalorieFilter;
  highFiber: boolean;
  lowCarb: boolean;
  category: "all" | Category;
  sort: SortKey;
};

export const defaultMenuFilters: MenuFilterState = {
  diet: "all",
  protein: "all",
  calories: "all",
  highFiber: false,
  lowCarb: false,
  category: "all",
  sort: "featured",
};

function fiberGrams(bowl: Bowl) {
  if (!bowl.nutrition) return null;
  const match = bowl.nutrition.fiberLabel.match(/\d+/);
  return match ? Number(match[0]) : null;
}

function matchesProtein(bowl: Bowl, protein: ProteinFilter) {
  if (protein === "all") return true;
  if (!bowl.nutrition) return false;
  if (protein === "extra") return bowl.nutrition.protein >= 35;
  return bowl.nutrition.protein >= 25 || bowl.tags.includes("High Protein");
}

function matchesCalories(bowl: Bowl, calories: CalorieFilter) {
  if (calories === "all") return true;
  if (!bowl.nutrition) return false;
  const value = bowl.nutrition.calories;
  if (calories === "light") return value < 350;
  if (calories === "mid") return value >= 350 && value < 450;
  return value >= 450;
}

export function hasActiveFilters(filters: MenuFilterState) {
  return (
    filters.diet !== "all" ||
    filters.protein !== "all" ||
    filters.calories !== "all" ||
    filters.highFiber ||
    filters.lowCarb ||
    filters.category !== "all" ||
    filters.sort !== "featured"
  );
}

export function filterBowls(filters: MenuFilterState, source: Bowl[] = bowls) {
  const filtered = source.filter((bowl) => {
    if (filters.diet !== "all" && bowl.diet !== filters.diet) return false;
    if (filters.category !== "all" && bowl.category !== filters.category) return false;
    if (!matchesProtein(bowl, filters.protein)) return false;
    if (!matchesCalories(bowl, filters.calories)) return false;
    if (filters.highFiber) {
      const fiber = fiberGrams(bowl);
      if (fiber === null || fiber < 8) return false;
    }
    if (filters.lowCarb) {
      if (!bowl.nutrition || bowl.nutrition.carbs > 20) return false;
    }
    return true;
  });

  const sorted = [...filtered];
  if (filters.sort === "protein-desc") {
    sorted.sort((a, b) => (b.nutrition?.protein ?? -1) - (a.nutrition?.protein ?? -1));
  } else if (filters.sort === "calories-asc") {
    sorted.sort((a, b) => (a.nutrition?.calories ?? 9999) - (b.nutrition?.calories ?? 9999));
  } else if (filters.sort === "calories-desc") {
    sorted.sort((a, b) => (b.nutrition?.calories ?? -1) - (a.nutrition?.calories ?? -1));
  }

  return sorted;
}
