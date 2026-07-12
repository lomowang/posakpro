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
        description="POSAK JODIAN is an Amis artist, filmmaker and field researcher based in Taipei, Taiwan."
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
            <div className="space-y-8 text-base leading-[1.75] md:text-xl md:leading-[1.65] lg:text-2xl lg:leading-[1.55]">
              <p>
                POSAK JODIAN, an Amis who lives in Taipei. Posak is the given
                name and Jodian is the father’s name. Posak has a background in
                ethnolinguistics and Communication studies. She mainly uses video
                as a method and her own ethnic identity as a starting point, to
                observe the traditional field formulation of tribes and the urban
                life of the aborigines who left their hometown through long-term
                field research.
              </p>
              <p>
                Meanwhile, she participates in the scenes of various mass
                movements, and the various actions of young people in between the
                gaps of cities. Trying to use the ethnic and cultural actions as a
                fulcrum to open the boundaries between identity and recognition.
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
