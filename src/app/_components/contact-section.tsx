import { CONTACTINFO } from "@/ressources/contact";

export const ContactSection = () => (
  <section id="contact">
    <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Contact
    </h2>
    <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
      {CONTACTINFO.map((contact, index) => (
        <div
          key={index}
          className="col-span-2 grid grid-cols-subgrid border-t border-t-[#d1e6d9] py-5"
        >
          <p className="text-[#51946b] text-sm font-normal leading-normal">
            {contact.label}
          </p>
          {contact.href ? (
            <a
              href={contact.href}
              className="text-[#0e1a13] text-sm font-normal leading-normal hover:text-[#51946b] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.value}
            </a>
          ) : (
            <p className="text-[#0e1a13] text-sm font-normal leading-normal">
              {contact.value}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
);
