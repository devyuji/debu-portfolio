import Image from "next/image";

export default function Project() {
  return (
    <section className="w-full" id="project">
      <div className="grid place-items-center gap-4">
        <div>
          <h2 className="font-bold text-3xl ">PROJECTS</h2>
        </div>

        {/* project card container  */}
        <div className="grid gap-4 mt-8">
          {/* project card  */}
          <div className="flex gap-4 bg-zinc-800 p-4 rounded-2xl flex-col md:flex-row md:gap-2">
            <div className="w-full flex flex-col gap-4">
              <h2 className="font-bold text-2xl">
                CLINEWS - Rust cli which provide latest news.
              </h2>

              <p className="text-gray-400">
                This Rust code integrates a NewsAPI client with a graphical Egui
                interface for fetching and displaying top news articles. Users
                can configure the app, toggle dark mode, and read headlines in a
                visually appealing manner. The modular structure ensures
                flexibility and ease of maintenance.
              </p>
            </div>

            <div className="md:w-3/4 w-full">
              <Image
                src="/clinews/darkmode.png"
                alt="CLI News"
                width={200}
                height={200}
                quality={100}
                className="aspect-video w-full"
              />
            </div>
          </div>

          <div className="flex gap-4 bg-zinc-800 p-4 rounded-2xl flex-col md:flex-row md:gap-2">
            <div className="w-full flex flex-col gap-4">
              <h2 className="font-bold text-2xl">Car rental system</h2>

              <p className="text-gray-400">
                This Java code implements a minimalistic Car Rental System with
                classes for cars, customers, and rentals, managed by the
                CarRentalSystem. Users can interact with a simple menu to rent
                or return cars. The program displays relevant rental information
                and handles basic operations such as checking availability and
                calculating rental costs. The system is designed for simplicity,
                with room for expansion and improvement based on specific needs.
              </p>
            </div>

            <div className="md:w-3/4 w-full">
              <Image
                src="/car-rental-system/rent-a-car.png"
                width={200}
                height={200}
                alt="car rental system"
                quality={100}
                className="w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
