import { Sidebar } from "@/components/sidebar"

export default function NewsletterPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-1">
        <div className="flex min-h-screen items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-foreground">Newsletter</h1>
            <p className="mt-4 text-muted-foreground">
              Coming soon - Stay tuned for curated content delivered to your inbox
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
