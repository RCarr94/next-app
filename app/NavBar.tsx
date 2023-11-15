import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Logo</Link>
      <ul>
        <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/issues">Issues</Link></li>
      </ul>
    </nav>
  )
}
