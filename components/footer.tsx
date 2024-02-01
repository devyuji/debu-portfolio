import Link from "next/link";
import Container from "./container";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-800 p-4 grid place-items-center mt-4">
      <Container className="flex justify-between">
        <p className="text-gray-500">©️ Debojyoti Mahto - {year}</p>

        <p className="text-gray-500">
          Build by{" "}
          <Link href="https://devyuji.com" className="hover:text-orange-500">
            Yuji
          </Link>
        </p>
      </Container>
    </footer>
  );
}
