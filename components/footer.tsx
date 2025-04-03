import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 to-violet-500 text-transparent bg-clip-text">
                Karamveer.dev
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Karamveer Singh Oberoi. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/karamveeroberoi"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/karamveersinghoberoi2648"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:karamoberoi19@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

