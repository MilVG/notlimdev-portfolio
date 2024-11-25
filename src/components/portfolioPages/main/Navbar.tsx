import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <nav >
      <div
        className="flex items-center justify-around p-5"
      >
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            priority={true}
            src="/logo/logo_portfolio.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>

        <Navigation />

      </div>

    </nav>
  )
}

