import Link from "next/link"
import { MountainIcon as Mountains } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b border-forest/20 bg-forest/5">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <Mountains className="h-6 w-6 text-husker" />
          <span className="font-bold text-forest">Colorado Trip</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild variant="ghost" className="text-forest hover:text-husker hover:bg-forest/5">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="text-forest hover:text-husker hover:bg-forest/5">
            <Link href="/people">People</Link>
          </Button>
          <Button asChild variant="ghost" className="text-forest hover:text-husker hover:bg-forest/5">
            <Link href="/housing">Housing</Link>
          </Button>
          <Button asChild variant="ghost" className="text-forest hover:text-husker hover:bg-forest/5">
            <Link href="/schedule">Schedule</Link>
          </Button>
          <Button asChild variant="ghost" className="text-forest hover:text-husker hover:bg-forest/5">
            <Link href="/expenses">Expenses</Link>
          </Button>
          <Button asChild variant="ghost" className="text-forest hover:text-husker hover:bg-forest/5">
            <Link href="/packing">Packing</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
