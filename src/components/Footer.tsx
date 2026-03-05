export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-muted text-xs font-body">
          © {new Date().getFullYear()} Okwuidegbe Emmanuel · Senior Frontend Engineer
        </p>
        <p className="text-muted text-xs font-body">
          Lagos, Nigeria · Open to Remote
        </p>
      </div>
    </footer>
  )
}
