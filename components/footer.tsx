import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">© 2025 BetterQs. All rights reserved.</p>
      </div>
    </footer>
  )
}
