import NavBar from './components/NavBar.jsx'
import SafetyBanner from './components/SafetyBanner.jsx'
import Home from './pages/Home.jsx'
import Checklist from './pages/Checklist.jsx'
import Auth from './pages/Auth.jsx'
import Community from './pages/Community.jsx'
import Forbidden from './pages/Forbidden.jsx'
import Reviews from './pages/Reviews.jsx'

function getRoute() {
  const hash = window.location.hash || '#/'
  const path = hash.replace('#', '')
  return path
}

export default function App() {
  const [route, setRoute] = React.useState(getRoute())
  const [cursor, setCursor] = React.useState(
    typeof window !== 'undefined' ? localStorage.getItem('cursorStyle') || 'default' : 'default'
  )

  React.useEffect(() => {
    function onHash() {
      setRoute(getRoute())
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  React.useEffect(() => {
    if (cursor === 'cat') {
      document.documentElement.classList.add('cursor-cat')
      document.documentElement.classList.remove('cursor-dog')
    } else if (cursor === 'dog') {
      document.documentElement.classList.add('cursor-dog')
      document.documentElement.classList.remove('cursor-cat')
    } else {
      document.documentElement.classList.remove('cursor-cat')
      document.documentElement.classList.remove('cursor-dog')
    }
    localStorage.setItem('cursorStyle', cursor)
  }, [cursor])

  function renderPage() {
    if (route === '/' || route === '') return <Home />
    if (route === '/checklist') return <Checklist />
    if (route === '/auth') return <Auth />
    if (route === '/community') return <Community />
    if (route === '/forbidden') return <Forbidden />
    if (route === '/reviews') return <Reviews />
    return <Home />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <NavBar cursor={cursor} onCursorChange={setCursor} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <footer className="border-t border-sand/50 bg-cream px-6 py-8 text-sm text-cocoa/70">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div>© {new Date().getFullYear()} 新手养宠指南</div>
          <div className="text-cocoa/60">以温馨、高级、简约的人文关怀为设计理念</div>
        </div>
      </footer>
    </div>
  )
}

