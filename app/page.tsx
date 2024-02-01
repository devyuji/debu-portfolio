import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

export default function Home() {
  return (
    <main className="grid place-items-center relative overflow-hidden">
      <Container className="grid gap-16">
        {/* introduction  */}
        <section className="h-screen w-full flex gap-4 flex-col p-8 justify-center relative overflow-hidden">
          <div className="leading-8 grid gap-2 ">
            <div className="absolute top-5 left-0 z-20">
              <img src="/hi.svg" alt="" />
            </div>
            <p className="mt-8">Hello, {"I'm"}</p>
            <p className="font-bold text-4xl">Debojyoti Mahto</p>
            <p className="font-semibold text-2xl">Aspiring Software Engineer</p>

            <div>
              <button
                type="button"
                className="mt-4 bg-orange-600 px-4 py-2 rounded-lg"
              >
                Download Resume
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center mt-4">
            {/* github  */}
            <Link href="https://github.com/" aria-label="github">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>

            {/* linkedin  */}
            <Link href="https://linkedin.com/" aria-label="linkedin">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            {/* instagram  */}
            <Link href="https://instagram.com/" aria-label="instagram">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>

          {/* background wave  */}
          <div className="absolute -right-96 top-0 -z-10 opacity-80">
            <img src="/bg-wave.svg" alt="" />
          </div>
        </section>

        <About />

        {/* project  */}
        <Project />

        <Contact />
      </Container>
    </main>
  );
}
