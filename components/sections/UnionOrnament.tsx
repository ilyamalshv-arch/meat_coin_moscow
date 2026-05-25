import union from "@/public/ornament-union.png";
import { clsx } from "clsx";
import Image from "next/image";

type UnionOrnamentProps = {
  className?: string;
};

export default function UnionOrnament({ className = "" }: UnionOrnamentProps) {
  return (
    <div
      className={clsx(
        "flex justify-center md:relative md:mx-0 md:block md:h-[252px] md:w-[66px] md:shrink-0",
        className,
      )}
    >
      <Image
        src={union}
        alt="Union"
        className="md:absolute md:top-1/2 md:left-1/2 md:w-[252px] md:max-w-none md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-90"
      />
    </div>
  );
}
