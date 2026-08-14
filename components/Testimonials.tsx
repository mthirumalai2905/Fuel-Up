type Testimonial = {
  name: string;
  handle: string;
  quote: string;
  initials: string;
  accent: string;
  time: string;
  verified?: boolean;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya Deshpande",
    handle: "@ananya.d",
    initials: "AD",
    accent: "bg-[#1f4d3a]",
    time: "Jul 28",
    verified: true,
    quote:
      "My post-gym stop on Cummins College Road. The high-protein bowl actually keeps me full through evening lectures. Chicken, greens, and no soggy rice. Feels like a proper meal, not cafe filler.",
  },
  {
    name: "Rohan Kulkarni",
    handle: "@rohan.eats",
    initials: "RK",
    accent: "bg-[#3f3a36]",
    time: "2h",
    quote: "Best protein bowl near Cummins. 🔥",
  },
  {
    name: "Meera Joshi",
    handle: "@meerajoshi",
    initials: "MJ",
    accent: "bg-[#0f4c5c]",
    time: "Jul 12",
    verified: true,
    quote:
      "Came in for a smoothie bowl, stayed for the salads. Everything tastes fresh. Fruit isn't watery, greens aren't wilted. For Karvenagar, the portions vs price is honestly surprising.",
  },
  {
    name: "Aditya Patil",
    handle: "@aditya.p",
    initials: "AP",
    accent: "bg-[#3f4a2e]",
    time: "Jun 30",
    quote:
      "Rice bowl + a side salad after class. Under ₹200 and I don't feel like I ate junk. Fuel Up gets the brief.",
  },
  {
    name: "Sneha Iyer",
    handle: "@sneha.bites",
    initials: "SI",
    accent: "bg-[#7a4b2a]",
    time: "Jul 4",
    verified: true,
    quote:
      "I work nearby and this is my weekday lunch. Staff remember the paneer protein bowl. Clean spot on Sahu Colony, easy walk from college. No fuss, just good food.",
  },
  {
    name: "Kabir Shah",
    handle: "@kabir.shah",
    initials: "KS",
    accent: "bg-[#3d5a1f]",
    time: "5h",
    quote: "Fresh, filling, and close enough that I stop in twice a week.",
  },
  {
    name: "Priya Nair",
    handle: "@priya.n",
    initials: "PN",
    accent: "bg-[#7a2e3a]",
    time: "Jun 18",
    verified: true,
    quote:
      "Tried the smoothie bowl on a Saturday and the peanut-butter drizzle was perfect. Not too sweet. My friend got a salad and we both left happy. Rare for a quick cafe lunch in this budget.",
  },
  {
    name: "Varun Bhosale",
    handle: "@varunb",
    initials: "VB",
    accent: "bg-[#155e63]",
    time: "Aug 2",
    quote:
      "High-protein without tasting like a supplement. The grilled toppings actually have flavour. 💪",
  },
  {
    name: "Isha Kulkarni",
    handle: "@isha.k",
    initials: "IK",
    accent: "bg-[#8a4b1f]",
    time: "May 22",
    verified: true,
    quote:
      "Parents were visiting Karvenagar and I took them here instead of a heavy thali. They liked that it felt healthy but still satisfying. We'll be back when I'm on campus.",
  },
  {
    name: "Tanmay Rao",
    handle: "@tanmay.rao",
    initials: "TR",
    accent: "bg-[#1e4d6b]",
    time: "1d",
    quote: "Quick counter, clean bowls, fair price. That's the whole review.",
  },
  {
    name: "Neha Kamble",
    handle: "@neha.k",
    initials: "NK",
    accent: "bg-[#6b2d5b]",
    time: "Jun 9",
    quote:
      "Salad was crisp, dressing on the side, and they didn't drown it. Small thing, but it matters. Fuel Up is my default when I want something light before tuitions.",
  },
  {
    name: "Arjun More",
    handle: "@arjunmore",
    initials: "AM",
    accent: "bg-[#2d5a27]",
    time: "Jul 19",
    verified: true,
    quote:
      "Walked over from Cummins with two friends. Three different bowls, all solid. If you live around Karvenagar and want protein without a fancy bill, this is the spot.",
  },
];

function splitColumns<T>(items: T[], count: number) {
  const columns = Array.from({ length: count }, () => [] as T[]);
  items.forEach((item, index) => {
    columns[index % count].push(item);
  });
  return columns;
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 22 22" className="h-4 w-4 shrink-0" aria-label="Verified" role="img">
      <path
        fill="#1d9bf0"
        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
      />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
    </svg>
  );
}

function RepostIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z" />
    </svg>
  );
}

function LikeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
      <path
        fill="#f91880"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

function ViewsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
    </svg>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="rounded-[20px] border border-[#16382c]/8 bg-white p-5 shadow-[0_12px_32px_rgba(15,36,28,0.07)] transition duration-300 hover:shadow-[0_18px_40px_rgba(15,36,28,0.11)]">
      <div className="flex gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white ${item.accent}`}
          aria-hidden
        >
          {item.initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <p className="truncate text-[15px] font-semibold text-[#16382c]">{item.name}</p>
            {item.verified ? <VerifiedBadge /> : null}
            <p className="truncate text-[14px] text-[#6a645a]">
              {item.handle}
              <span className="px-1 text-[#b8b2a8]">·</span>
              {item.time}
            </p>
          </div>

          <p className="mt-2 text-[15px] leading-6 text-[#2b2924]">{item.quote}</p>

          <div className="mt-4 flex max-w-[280px] items-center justify-between text-[#8a847a]">
            <span aria-hidden>
              <ReplyIcon />
            </span>
            <span aria-hidden>
              <RepostIcon />
            </span>
            <span aria-hidden>
              <LikeIcon />
            </span>
            <span aria-hidden>
              <ViewsIcon />
            </span>
            <span aria-hidden>
              <ShareIcon />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const mobile = splitColumns(TESTIMONIALS, 1);
  const tablet = splitColumns(TESTIMONIALS, 2);
  const desktop = splitColumns(TESTIMONIALS, 3);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full bg-[#f6f0e6] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1180px]">
        <header className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <p className="text-[11px] font-medium tracking-[0.28em] text-[#b8924a] uppercase">
            Regulars
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-[2.2rem] tracking-[-0.02em] text-[#16382c] sm:text-5xl"
          >
            Loved by Fuel Up regulars
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[#6a645a]">
            What neighbours around Cummins College and Karvenagar say about the
            bowls.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {mobile[0].map((item) => (
            <TestimonialCard key={item.handle} item={item} />
          ))}
        </div>
        <div className="hidden grid-cols-2 gap-4 sm:grid xl:hidden">
          {tablet.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column.map((item) => (
                <TestimonialCard key={item.handle} item={item} />
              ))}
            </div>
          ))}
        </div>
        <div className="hidden grid-cols-3 gap-4 xl:grid">
          {desktop.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column.map((item) => (
                <TestimonialCard key={item.handle} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
