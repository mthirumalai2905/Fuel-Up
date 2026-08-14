"use client";

import { useMemo, useState } from "react";
import { BowlCard } from "@/components/BowlCard";
import {
  defaultMenuFilters,
  filterBowls,
  hasActiveFilters,
  type CalorieFilter,
  type DietFilter,
  type MenuFilterState,
  type ProteinFilter,
  type SortKey,
} from "@/lib/filters";
import { categories, type Category } from "@/lib/menu";
import { site } from "@/lib/site";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.14em] uppercase transition ${
        active
          ? "bg-[#16382c] text-[#f6f0e6]"
          : "border border-[#16382c]/15 bg-white/50 text-[#1a1916] hover:border-[#16382c]/40"
      }`}
    >
      {children}
    </button>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <p className="w-24 shrink-0 text-[10px] font-medium tracking-[0.18em] text-[#6a645a] uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function MenuExplorer({ signedIn = true }: { signedIn?: boolean }) {
  const [filters, setFilters] = useState<MenuFilterState>(defaultMenuFilters);
  const items = useMemo(() => filterBowls(filters), [filters]);
  const active = hasActiveFilters(filters);

  const grouped = useMemo(() => {
    if (filters.sort !== "featured") {
      return [{ title: null as string | null, bowls: items }];
    }
    const visibleCategories =
      filters.category === "all" ? categories : categories.filter((c) => c === filters.category);
    return visibleCategories
      .map((category) => ({
        title: category,
        bowls: items.filter((bowl) => bowl.category === category),
      }))
      .filter((group) => group.bowls.length > 0);
  }, [filters.category, filters.sort, items]);

  return (
    <div>
      <div className="rounded-[28px] border border-[#16382c]/8 bg-white/60 p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-[#b8924a] uppercase">
              Filter the menu
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6a645a]">
              Bowl prices are confirmed at the cafe. Typical spend {site.typicalSpend}.
            </p>
          </div>
          {active ? (
            <button
              type="button"
              onClick={() => setFilters(defaultMenuFilters)}
              className="text-[11px] font-medium tracking-[0.16em] text-[#16382c] uppercase underline-offset-4 hover:underline"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        <div className="mt-6 space-y-4">
          <FilterRow label="Diet">
            {(
              [
                ["all", "All"],
                ["veg", "Veg"],
                ["egg", "Egg"],
                ["non-veg", "Non-veg"],
              ] as const
            ).map(([value, label]) => (
              <Chip
                key={value}
                active={filters.diet === value}
                onClick={() => setFilters((current) => ({ ...current, diet: value as DietFilter }))}
              >
                {label}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Protein">
            {(
              [
                ["all", "All"],
                ["high", "High protein"],
                ["extra", "35g+ protein"],
              ] as const
            ).map(([value, label]) => (
              <Chip
                key={value}
                active={filters.protein === value}
                onClick={() =>
                  setFilters((current) => ({ ...current, protein: value as ProteinFilter }))
                }
              >
                {label}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Calories">
            {(
              [
                ["all", "All"],
                ["light", "Light · under 350"],
                ["mid", "Mid · 350–449"],
                ["hearty", "Hearty · 450+"],
              ] as const
            ).map(([value, label]) => (
              <Chip
                key={value}
                active={filters.calories === value}
                onClick={() =>
                  setFilters((current) => ({ ...current, calories: value as CalorieFilter }))
                }
              >
                {label}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="More">
            <Chip
              active={filters.highFiber}
              onClick={() =>
                setFilters((current) => ({ ...current, highFiber: !current.highFiber }))
              }
            >
              High fibre
            </Chip>
            <Chip
              active={filters.lowCarb}
              onClick={() => setFilters((current) => ({ ...current, lowCarb: !current.lowCarb }))}
            >
              Low carb
            </Chip>
          </FilterRow>

          <FilterRow label="Type">
            <Chip
              active={filters.category === "all"}
              onClick={() => setFilters((current) => ({ ...current, category: "all" }))}
            >
              All
            </Chip>
            {categories.map((category) => (
              <Chip
                key={category}
                active={filters.category === category}
                onClick={() =>
                  setFilters((current) => ({
                    ...current,
                    category: current.category === category ? "all" : (category as Category),
                  }))
                }
              >
                {category}
              </Chip>
            ))}
          </FilterRow>

          <FilterRow label="Sort">
            {(
              [
                ["featured", "Featured"],
                ["protein-desc", "Highest protein"],
                ["calories-asc", "Lowest calories"],
                ["calories-desc", "Highest calories"],
              ] as const
            ).map(([value, label]) => (
              <Chip
                key={value}
                active={filters.sort === value}
                onClick={() => setFilters((current) => ({ ...current, sort: value as SortKey }))}
              >
                {label}
              </Chip>
            ))}
          </FilterRow>
        </div>
      </div>

      <p className="mt-8 text-[13px] tracking-wide text-[#6a645a]">
        {items.length} {items.length === 1 ? "bowl" : "bowls"}
      </p>

      {items.length === 0 ? (
        <div className="mt-8 rounded-[22px] bg-[#ebe2d2] px-6 py-10 text-center">
          <p className="font-serif text-2xl text-[#16382c]">No bowls match these filters</p>
          <button
            type="button"
            onClick={() => setFilters(defaultMenuFilters)}
            className="mt-4 text-[11px] font-medium tracking-[0.16em] text-[#16382c] uppercase underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        grouped.map((group) => (
          <section key={group.title ?? "sorted"} className="mt-10">
            {group.title ? (
              <h2 className="font-serif text-3xl tracking-[-0.02em] text-[#16382c] sm:text-4xl">
                {group.title}
              </h2>
            ) : null}
            <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {group.bowls.map((bowl) => (
                <BowlCard key={bowl.id} bowl={bowl} signedIn={signedIn} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
