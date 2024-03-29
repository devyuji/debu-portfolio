import Link from "next/link";
import Container from "./container";

function Navbar() {
  return (
    <header className="flex justify-center w-full bg-zinc-800 h-20">
      <Container className="flex items-center p-8">
        <div>
          <Link href="/">
            <img src="/rusty.png" alt="debu" className="w-16" />
          </Link>
        </div>

        <nav className="ml-auto">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#project">Project</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
