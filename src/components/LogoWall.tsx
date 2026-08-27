import { clients } from "@/lib/content";
import Marquee from "./Marquee";

export default function LogoWall() {
  return (
    <section className="border-y border-paper/10 bg-ink py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="label text-center text-paper/45">Printed for</p>
      </div>
      <Marquee items={clients} className="mt-8 text-paper/35" duration={45} />
      <p className="mt-8 text-center text-sm text-paper/25">
        Placeholder names — swap in real clients you have permission to list.
      </p>
    </section>
  );
}
