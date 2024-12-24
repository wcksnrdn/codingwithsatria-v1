import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Muhammad Rifki",
    username: "@inward",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/rifki.png",
  },
  {
    name: "Maureen Gabriella",
    username: "@alice",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/alice.png",  // Ganti menjadi path lokal
  },
  {
    name: "Muhammad Handhika",
    username: "@handhika",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/handhika.png",
  },
  {
    name: "Nizar Lugatio",
    username: "@microboy",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/nizar.png",  // Ganti menjadi path lokal
  },
  {
    name: "Jisoo Sooya",
    username: "@jisoo",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/jisoo.png",  // Ganti menjadi path lokal
  },
  {
    name: "Lisa",
    username: "@lisa",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/lisa.png",  // Ganti menjadi path lokal
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={`Image of ${name}`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent mt-[-40px]">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f0f0f0] to-transparent dark:from-[#1a1a1a] dark:to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f0f0f0] to-transparent dark:from-[#1a1a1a] dark:to-transparent"></div>
    </div>
  );
}
