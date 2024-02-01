import Image from "next/image";

function About() {
  return (
    <section className="w-full" id="about">
      <div className="grid place-items-center gap-8">
        <h2 className="font-bold text-3xl">KNOW ABOUT ME</h2>

        <div className="flex gap-4 flex-col md:flex-row items-center rounded-2xl bg-zinc-800 max-w-full p-4">
          <div className="overflow-hidden w-full md:w-2/4 grid place-items-center">
            <Image
              src="/profile.avif"
              alt=""
              width={200}
              height={200}
              className="object-cover rounded-full w-96 h-96 "
            />
          </div>

          <div className=" w-full">
            <p className="font-medium text-lg text-gray-300 leading-8">
              I have cultivated my expertise as a software developer with a
              primary focus on Java, initially driven by a desire to create
              gaming applications. Recognizing the profound potential of
              software to effect meaningful change, I expanded my repertoire to
              include Rust. This transition enabled me to delve into advanced
              software concepts and backend frameworks, allowing me to
              contribute to various projects with tangible benefits for
              individuals and society at large. My commitment to professional
              growth and the application of software for societal betterment
              continues to drive my endeavors in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
