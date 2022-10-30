import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b-2 border-gray-900 bg-gray-100 text-gray-900">
      <nav className="flex container mx-auto justify-between font-semibold antialiased">
        <Link href="/" className="p-4">
          Shahzada Ali Hassan
        </Link>
        <div className="space-x-4 p-4">
          <Link href="/how-we-work">How we work</Link>
          <Link href="/our-work">Our Work</Link>
          <Link href="/price">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <Link href="/lets-talk" className="p-4 border-l-2 border-gray-900">
          Let's Talk
        </Link>
      </nav>
    </header>
  );
}
