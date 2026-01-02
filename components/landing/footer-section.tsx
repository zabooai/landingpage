import Image from "next/image"

export function FooterSection() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/zaboo-20ai-20png-20-281-29-20-281-29.png"
            alt="Zaboo.ai"
            width={120}
            height={40}
            className="h-auto w-32 opacity-80"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Zaboo.ai works with service businesses worldwide to help them respond faster, convert more leads, and book
          more appointments — using AI that works quietly in the background.
        </p>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} ClearIdeas, LDA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
