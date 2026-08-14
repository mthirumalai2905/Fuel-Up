"use client";

import { useMemo, useState } from "react";
import { BowlCard } from "@/components/BowlCard";
import { DietMark } from "@/components/DietMark";
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
import { categories, type Category, type Diet } from "@/lib/menu";

const categoryLabel: Record<Category, string> = {
  "High Protein Salad bowl": "Salad",
  "Protein Rice Bowl": "Rice",
  "Smoothie Bowl": "Smoothie",
  Breakfast: "Breakfast",
};

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
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] leading-none transition ${
        active
          ? "bg-[#16382c] text-[#f6f0e6]"
          : "bg-[#f6f0e6] text-[#3d3a34] hover:bg-[#e4d9c6]"
      }`}
    >
      {children}
    </button>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2.5 text-[10px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

export function MenuExplorer({ signedIn = true }: { signedIn?: boolean }) {
  const [filters, setFilters] = useState<MenuFilterState>(defaultMenuFilters);
  const [showFilters, setShowFilters] = useState(false);
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

  const dietChips = (
    <>
      {(
        [
          ["veg", "Veg", "veg"],
          ["egg", "Egg", "egg"],
          ["non-veg", "Non-veg", "non-veg"],
        ] as const
      ).map(([value, label, diet]) => (
        <Chip
          key={value}
          active={filters.diet === value}
          onClick={() =>
            setFilters((current) => ({
              ...current,
              diet: current.diet === value ? "all" : (value as DietFilter),
            }))
          }
        >
          <DietMark diet={diet as Diet} />
          {label}
        </Chip>
      ))}
    </>
  );

  const filtersBody = (
    <div className="flex flex-col gap-6 px-6 py-6">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#16382c] uppercase">
          Refine
        </p>
        {active ? (
          <button
            type="button"
            onClick={() => setFilters(defaultMenuFilters)}
            className="text-[11px] tracking-[0.12em] text-[#6a645a] uppercase underline-offset-4 hover:text-[#16382c] hover:underline"
          >
            Clear
          </button>
        ) : null}
      </div>

      <Group label="Diet">{dietChips}</Group>

      <Group label="Protein">
        {(
          [
            ["high", "High"],
            ["extra", "35g+"],
          ] as const
        ).map(([value, label]) => (
          <Chip
            key={value}
            active={filters.protein === value}
            onClick={() =>
              setFilters((current) => ({
                ...current,
                protein: current.protein === value ? "all" : (value as ProteinFilter),
              }))
            }
          >
            {label}
          </Chip>
        ))}
      </Group>

      <Group label="Calories">
        {(
          [
            ["light", "Under 350"],
            ["mid", "350 to 449"],
            ["hearty", "450+"],
          ] as const
        ).map(([value, label]) => (
          <Chip
            key={value}
            active={filters.calories === value}
            onClick={() =>
              setFilters((current) => ({
                ...current,
                calories: current.calories === value ? "all" : (value as CalorieFilter),
              }))
            }
          >
            {label}
          </Chip>
        ))}
      </Group>

      <Group label="More">
        <Chip
          active={filters.highFiber}
          onClick={() => setFilters((current) => ({ ...current, highFiber: !current.highFiber }))}
        >
          High fibre
        </Chip>
        <Chip
          active={filters.lowCarb}
          onClick={() => setFilters((current) => ({ ...current, lowCarb: !current.lowCarb }))}
        >
          Low carb
        </Chip>
      </Group>

      <Group label="Type">
        {categories.map((category) => (
          <Chip
            key={category}
            active={filters.category === category}
            onClick={() =>
              setFilters((current) => ({
                ...current,
                category: current.category === category ? "all" : category,
              }))
            }
          >
            {categoryLabel[category]}
          </Chip>
        ))}
      </Group>

      <div>
        <p className="mb-2.5 text-[10px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
          Sort
        </p>
        <label className="sr-only" htmlFor="menu-sort">
          Sort bowls
        </label>
        <select
          id="menu-sort"
          value={filters.sort}
          onChange={(event) =>
            setFilters((current) => ({ ...current, sort: event.target.value as SortKey }))
          }
          className="w-full appearance-none rounded-full border border-[#16382c]/12 bg-[#f6f0e6] px-4 py-2.5 text-[12px] text-[#16382c] outline-none"
        >
          <option value="featured">Featured</option>
          <option value="protein-desc">Highest protein</option>
          <option value="calories-asc">Lowest calories</option>
          <option value="calories-desc">Highest calories</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="flex h-full min-h-0 bg-[#f6f0e6]">
      <aside className="hide-scrollbar hidden h-full w-[240px] shrink-0 overflow-y-auto border-r border-[#16382c]/10 bg-[#ebe2d2] lg:block">
        {filtersBody}
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="border-b border-[#16382c]/10 px-3 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-[#b8924a] uppercase sm:text-[11px]">
                Full menu
              </p>
              <h1 className="mt-0.5 font-serif text-[26px] leading-none tracking-[-0.03em] text-[#16382c] sm:text-[34px]">
                {items.length} {items.length === 1 ? "bowl" : "bowls"}
              </h1>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <label className="sr-only" htmlFor="menu-sort-mobile">
                Sort bowls
              </label>
              <select
                id="menu-sort-mobile"
                value={filters.sort}
                onChange={(event) =>
                  setFilters((current) => ({ ...current, sort: event.target.value as SortKey }))
                }
                className="max-w-[132px] appearance-none rounded-full border border-[#16382c]/12 bg-white px-3 py-2 text-[11px] text-[#16382c] outline-none"
              >
                <option value="featured">Featured</option>
                <option value="protein-desc">Protein</option>
                <option value="calories-asc">Low cal</option>
                <option value="calories-desc">High cal</option>
              </select>
              <button
                type="button"
                className="rounded-full bg-[#16382c] px-3.5 py-2 text-[11px] font-medium tracking-[0.14em] text-[#f6f0e6] uppercase"
                onClick={() => setShowFilters(true)}
              >
                {active ? "Filters on" : "Filters"}
              </button>
            </div>
          </div>

          <div className="hide-scrollbar mt-3 flex gap-1.5 overflow-x-auto pb-0.5 lg:hidden">
            {dietChips}
          </div>
        </div>

        {showFilters ? (
          <div className="lg:hidden">
            <button
              type="button"
              className="fixed inset-0 z-50 bg-[#0f241c]/40"
              aria-label="Close filters"
              onClick={() => setShowFilters(false)}
            />
            <div className="fixed inset-x-0 bottom-0 z-50 max-h-[82dvh] overflow-hidden rounded-t-[24px] bg-[#ebe2d2] shadow-[0_-16px_40px_rgba(15,36,28,0.16)]">
              <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#16382c]/15" />
              <div className="hide-scrollbar max-h-[calc(82dvh-5.5rem)] overflow-y-auto">
                {filtersBody}
              </div>
              <div className="border-t border-[#16382c]/10 px-6 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <button
                  type="button"
                  className="w-full rounded-full bg-[#16382c] py-3 text-[11px] font-medium tracking-[0.16em] text-[#f6f0e6] uppercase"
                  onClick={() => setShowFilters(false)}
                >
                  Show {items.length} {items.length === 1 ? "bowl" : "bowls"}
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="menu-scroll min-h-0 flex-1 overflow-y-auto px-3 py-5 sm:px-6 sm:py-7">
          {items.length === 0 ? (
            <div className="mx-auto max-w-md rounded-[22px] bg-[#ebe2d2] px-6 py-12 text-center">
              <p className="font-serif text-3xl text-[#16382c]">No bowls match</p>
              <p className="mt-2 text-[15px] leading-6 text-[#6a645a]">
                Try clearing a filter or two. The kitchen list is short on purpose.
              </p>
              <button
                type="button"
                onClick={() => setFilters(defaultMenuFilters)}
                className="mt-5 text-[11px] font-medium tracking-[0.16em] text-[#16382c] uppercase underline-offset-4 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            grouped.map((group) => (
              <section key={group.title ?? "sorted"} className="mb-10 last:mb-6 sm:mb-14">
                {group.title ? (
                  <h2 className="font-serif text-[22px] tracking-[-0.02em] text-[#16382c] sm:text-[26px]">
                    {group.title}
                  </h2>
                ) : null}
                <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-7 sm:mt-6 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 xl:grid-cols-4">
                  {group.bowls.map((bowl) => (
                    <BowlCard key={bowl.id} bowl={bowl} signedIn={signedIn} dense />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
