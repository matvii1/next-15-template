import Header from './header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}

      <footer>footer</footer>
    </div>
  )
}
