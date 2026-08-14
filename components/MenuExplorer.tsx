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

function Option({
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
      className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-[14px] leading-5 transition ${
        active ? "bg-[#16382c] text-[#f6f0e6]" : "text-[#3d3a34] hover:bg-[#e4d9c6]"
      }`}
    >
      {children}
    </button>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-4 py-5">
      <p className="mb-2 px-3 text-[10px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
        {label}
      </p>
      <div className="space-y-0.5">{children}</div>
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

  const filtersBody = (
    <>
      <div className="flex items-center justify-between border-b border-[#16382c]/10 px-7 py-5">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#16382c] uppercase">
          Filters
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

      <Group label="Diet">
        {(
          [
            ["all", "All", null],
            ["veg", "Veg", "veg"],
            ["egg", "Egg", "egg"],
            ["non-veg", "Non-veg", "non-veg"],
          ] as const
        ).map(([value, label, diet]) => (
          <Option
            key={value}
            active={filters.diet === value}
            onClick={() => setFilters((current) => ({ ...current, diet: value as DietFilter }))}
          >
            {diet ? <DietMark diet={diet as Diet} /> : <span className="w-[18px]" />}
            {label}
          </Option>
        ))}
      </Group>

      <div className="mx-7 h-px bg-[#16382c]/10" />

      <Group label="Protein">
        {(
          [
            ["all", "All"],
            ["high", "High protein"],
            ["extra", "35g+ protein"],
          ] as const
        ).map(([value, label]) => (
          <Option
            key={value}
            active={filters.protein === value}
            onClick={() =>
              setFilters((current) => ({ ...current, protein: value as ProteinFilter }))
            }
          >
            {label}
          </Option>
        ))}
      </Group>

      <div className="mx-7 h-px bg-[#16382c]/10" />

      <Group label="Calories">
        {(
          [
            ["all", "All"],
            ["light", "Under 350"],
            ["mid", "350 to 449"],
            ["hearty", "450+"],
          ] as const
        ).map(([value, label]) => (
          <Option
            key={value}
            active={filters.calories === value}
            onClick={() =>
              setFilters((current) => ({ ...current, calories: value as CalorieFilter }))
            }
          >
            {label}
          </Option>
        ))}
      </Group>

      <div className="mx-7 h-px bg-[#16382c]/10" />

      <Group label="More">
        <Option
          active={filters.highFiber}
          onClick={() => setFilters((current) => ({ ...current, highFiber: !current.highFiber }))}
        >
          High fibre
        </Option>
        <Option
          active={filters.lowCarb}
          onClick={() => setFilters((current) => ({ ...current, lowCarb: !current.lowCarb }))}
        >
          Low carb
        </Option>
      </Group>

      <div className="mx-7 h-px bg-[#16382c]/10" />

      <Group label="Type">
        <Option
          active={filters.category === "all"}
          onClick={() => setFilters((current) => ({ ...current, category: "all" }))}
        >
          All bowls
        </Option>
        {categories.map((category) => (
          <Option
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
          </Option>
        ))}
      </Group>

      <div className="mx-7 h-px bg-[#16382c]/10" />

      <Group label="Sort">
        {(
          [
            ["featured", "Featured"],
            ["protein-desc", "Highest protein"],
            ["calories-asc", "Lowest calories"],
            ["calories-desc", "Highest calories"],
          ] as const
        ).map(([value, label]) => (
          <Option
            key={value}
            active={filters.sort === value}
            onClick={() => setFilters((current) => ({ ...current, sort: value as SortKey }))}
          >
            {label}
          </Option>
        ))}
      </Group>
    </>
  );

  return (
    <div className="flex h-full min-h-0 bg-[#f6f0e6]">
      <aside className="hidden h-full w-[280px] shrink-0 flex-col overflow-y-auto border-r border-[#16382c]/10 bg-[#ebe2d2] lg:flex">
        {filtersBody}
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-[#16382c]/10 px-4 py-4 sm:px-8">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#b8924a] uppercase">
              Menu
            </p>
            <h1 className="mt-1 font-serif text-2xl tracking-[-0.02em] text-[#16382c] sm:text-3xl">
              {items.length} {items.length === 1 ? "bowl" : "bowls"}
            </h1>
          </div>
          <button
            type="button"
            className="rounded-full border border-[#16382c]/15 bg-white px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase lg:hidden"
            onClick={() => setShowFilters((value) => !value)}
          >
            {showFilters ? "Hide filters" : "Filters"}
          </button>
        </div>

        {showFilters ? (
          <div className="max-h-[50vh] overflow-y-auto border-b border-[#16382c]/10 bg-[#ebe2d2] lg:hidden">
            {filtersBody}
          </div>
        ) : null}

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-8 sm:px-8">
          {items.length === 0 ? (
            <div className="rounded-[22px] bg-[#ebe2d2] px-6 py-10 text-center">
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
              <section key={group.title ?? "sorted"} className="mb-14 last:mb-0">
                {group.title ? (
                  <h2 className="font-serif text-3xl tracking-[-0.02em] text-[#16382c]">
                    {group.title}
                  </h2>
                ) : null}
                <div className="mt-8 grid gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                  {group.bowls.map((bowl) => (
                    <BowlCard key={bowl.id} bowl={bowl} signedIn={signedIn} />
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
