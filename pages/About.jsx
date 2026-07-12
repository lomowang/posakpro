import React from "react";
import Cvexperience from "@/components/Cvexperience";
import Seo from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { portrait } from "@/lib/works";

const About = () => {
  return (
    <main className="bg-white px-5 pb-32 pt-20 text-black md:px-10 md:pt-28">
      <Seo
        title="About"
        description="POSAK JODIAN is a Pangcah/Amis artist based in Taipei whose practice spans moving image, documentary, and installation."
      />
      <section className="mx-auto max-w-[1600px]">
        <header className="border-b border-black/25 pb-12 md:pb-20">
          <div className="mb-12 flex justify-between text-[10px] uppercase tracking-[0.3em] md:mb-20">
            <span>Profile / About</span>
          </div>
          <div className="grid gap-8 md:grid-cols-[1fr_18rem] md:items-end lg:grid-cols-[1fr_22rem]">
            <h1 className="story-display max-w-full whitespace-nowrap text-[11.5vw] leading-[0.82] sm:text-[10vw] md:text-[7.2vw] lg:text-[8vw]">
              POSAK JODIAN
            </h1>
          </div>
        </header>

        <section className="grid gap-12 border-b border-black/20 py-16 md:grid-cols-12 md:gap-10 md:py-28">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
              <Image
                src={portrait}
                alt="POSAK JODIAN"
                fill
                className="object-cover grayscale"
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pl-10">
            <p className="mb-8 text-[10px] uppercase tracking-[0.35em]">
              About the artist
            </p>
            <div className="space-y-5 text-base leading-[1.85] md:text-xl md:leading-[1.75] lg:text-[1.45rem] lg:leading-[1.65]">
              <p>
                Posak Jodian is a Pangcah/Amis artist based in Taipei whose practice spans moving image, documentary, and installation. Her work explores the intersections of Indigenous culture, identity, and belonging, often engaging with activism and critical histories. Through various forms of lens-based media, she investigates the entangled relationships between colonization, power, and collective memory.
              </p>
              <p>
                Her projects include <em>Misafafahiyan Metamorphosis</em> (2022), featured in <em>Ocean and Interpreters</em> at Solid Art; <em>There is a white deer in the mountain</em>, part of <em>Another Continent</em> at National Human Rights Museum, Green Island Biennial 2025 “Duration of 149 Sea Miles: The Struggle of Memory against Forgetting”; and <em>Misafafahiyan - Teman dari Jauh</em>, participating in Biennale Jogja 18 “KAWRUH: Land of Rooted Practices”.
              </p>
              <p>
                Beyond her individual practice, Posak is an active member of OCAC (Open Contemporary Art Center) and P.M.S., through which she continues to expand collaborative frameworks and dialogues between Indigenous knowledge, contemporary art, and social movements.
              </p>
            </div>

            <div className="mt-12 grid gap-5 border-t border-black/20 pt-8 md:grid-cols-2">
              <a
                href="mailto:posak1987@gmail.com?subject=Website%20inquiry%20for%20Posak%20Jodian"
                className="group block border border-black/25 p-6 transition hover:border-black hover:bg-black hover:text-white"
              >
                <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-black/55 transition group-hover:text-white/60">
                  Email
                </p>
                <p className="break-all text-lg leading-none md:text-2xl">
                  posak1987@gmail.com
                </p>
                <p className="mt-5 text-[10px] uppercase tracking-[0.25em]">
                  Send mail ↗
                </p>
              </a>

              <div className="border border-black/25 p-6">
                <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-black/55">
                  Social
                </p>
                <div className="flex items-center gap-5">
                  <Link
                    href="https://www.facebook.com/posakjodian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border-b border-black pb-1 text-[10px] uppercase tracking-[0.25em]"
                  >
                    <FaFacebook size={18} />
                    Facebook
                  </Link>
                  <Link
                    href="https://www.instagram.com/posakjodian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border-b border-black pb-1 text-[10px] uppercase tracking-[0.25em]"
                  >
                    <FaInstagram size={18} />
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cvexperience />
      </section>
    </main>
  );
};

export default About;
