import { dietLabel, type Diet } from "@/lib/menu";

const marks: Record<Diet, { box: string; dot: string }> = {
  veg: {
    box: "border-[#1b7a2f]",
    dot: "bg-[#1b7a2f]",
  },
  egg: {
    box: "border-[#b45309]",
    dot: "bg-[#b45309]",
  },
  "non-veg": {
    box: "border-[#b42318]",
    dot: "bg-[#b42318]",
  },
};

export function DietMark({ diet }: { diet: Diet }) {
  const mark = marks[diet];

  return (
    <span
      className={`inline-flex h-[18px] w-[18px] items-center justify-center border-[1.5px] bg-white ${mark.box}`}
      title={dietLabel(diet)}
      aria-label={dietLabel(diet)}
    >
      <span className={`h-[8px] w-[8px] rounded-full ${mark.dot}`} />
    </span>
  );
}
