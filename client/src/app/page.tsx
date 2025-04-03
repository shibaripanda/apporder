import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle"
import { HeaderBlock } from "../components/HeaderBlock/HeaderBlock"
import { Welcome } from "../components/Welcome/Welcome"

export default function HomePage() {
  return (
    <>
      <header>
        <HeaderBlock/>
      </header>
      <main>
        <Welcome />
        <ColorSchemeToggle />
      </main>
      <footer>
        ffvfvf
      </footer>
    </>
  )
}
