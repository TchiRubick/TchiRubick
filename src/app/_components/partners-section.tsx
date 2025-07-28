import { PARTNERS } from "@/ressources/patners";
import Image from "next/image";
import Link from "next/link";

export const PartnersSection = () => (
  <section>
    <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      They trusted me
    </h2>
    <div className="flex flex-wrap gap-3">
      {PARTNERS.map((partner) => (
        <Link href={partner.url} target="_blank" key={partner.url}>
          <Image
            src={partner.logo}
            alt={partner.name}
            width={200}
            height={200}
            className=" aspect-square rounded hover:scale-105 transition-transform object-contain w-40 h-40  p-6"
          />
        </Link>
      ))}
    </div>
  </section>
);
