import type { Bowl } from "@/lib/menu";

export function MacroRow({
  bowl,
  compact = false,
  dense = false,
}: {
  bowl: Bowl;
  compact?: boolean;
  dense?: boolean;
}) {
  if (!bowl.nutrition) {
    return (
      <p className="text-[10px] tracking-[0.14em] text-[#6a645a] uppercase">
        Nutrition not listed
      </p>
    );
  }

  const items = dense
    ? [
        { label: "Kcal", value: `${bowl.nutrition.calories}` },
        { label: "P", value: `${bowl.nutrition.protein}g` },
        { label: "C", value: `${bowl.nutrition.carbs}g` },
        { label: "F", value: `${bowl.nutrition.fat}g` },
      ]
    : [
        { label: "Calories", value: `${bowl.nutrition.calories}` },
        { label: "Protein", value: `${bowl.nutrition.protein}G` },
        { label: "Carbs", value: `${bowl.nutrition.carbs}G` },
        { label: "Fat", value: `${bowl.nutrition.fat}G` },
      ];

  return (
    <dl
      className={`grid grid-cols-4 ${
        dense ? "gap-1.5 text-[8px]" : compact ? "gap-3 text-[9px]" : "gap-3 text-[10px]"
      }`}
    >
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dd
            className={`font-semibold tracking-tight text-[#16382c] ${
              dense ? "text-[13px]" : compact ? "text-sm" : "text-base"
            }`}
          >
            {item.value}
          </dd>
          <dt className="mt-0.5 tracking-[0.12em] text-[#6a645a] uppercase">{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}
