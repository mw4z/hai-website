import Header from './Header'
import Footer from './Footer'

/** Standard page wrapper with header + footer */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
