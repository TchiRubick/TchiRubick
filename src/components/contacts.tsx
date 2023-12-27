import { Instagram, Mails, MessageCircleMore, Twitter } from "lucide-react";
import Link from "next/link";

export const Contacts = () => (
  <div className='flex gap-3 max-w-[80%] mx-auto flex-wrap justify-center'>
    <Link href='https://wa.me/+261344374803' target='_blank'><MessageCircleMore /></Link>
    <Link href='mailto:tchi.devica@gmail.com' target='_blank'><Mails /></Link>
    <Link href='https://www.instagram.com/moonlightlykos/' target='_blank'><Instagram /></Link>
    <Link href='https://twitter.com/MoonlightLykos' target='_blank'><Twitter /></Link>
  </div>
);
