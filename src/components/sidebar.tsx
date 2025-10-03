import { Link } from "@tanstack/react-router"
import { Plus, Home, FolderOpen, Mail, Compass } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-sidebar-border px-6">
          <h1 className="text-xl font-semibold text-sidebar-foreground">Mindstash</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&.active]:bg-sidebar-accent [&.active]:text-sidebar-accent-foreground"
          >
            <Plus className="h-5 w-5" />
            <span className="font-medium">Capture</span>
          </Link>
          <Link
            to="/home"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&.active]:bg-sidebar-accent [&.active]:text-sidebar-accent-foreground"
          >
            <Home className="h-5 w-5" />
            <span className="font-medium">Home</span>
          </Link>
          <Link
            to="/collection"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&.active]:bg-sidebar-accent [&.active]:text-sidebar-accent-foreground"
          >
            <FolderOpen className="h-5 w-5" />
            <span className="font-medium">Collection</span>
          </Link>
          <Link
            to="/newsletter"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&.active]:bg-sidebar-accent [&.active]:text-sidebar-accent-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="font-medium">Newsletter</span>
          </Link>
          <Link
            to="/explore"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&.active]:bg-sidebar-accent [&.active]:text-sidebar-accent-foreground"
          >
            <Compass className="h-5 w-5" />
            <span className="font-medium">Explore</span>
          </Link>
        </nav>

        {/* User Profile */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
              <span className="text-sm font-semibold">C</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-sidebar-foreground">Coismo</p>
              <p className="truncate text-xs text-sidebar-foreground/60">Coismo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
