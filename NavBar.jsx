export default function NavBar({ cursor, onCursorChange }) {
  const [open, setOpen] = React.useState(false)
  function navTo(path) {
    window.location.hash = path
    setOpen(false)
  }
  return (
    <div className="sticky top-0 z-40 bg-cream/90 glass border-b border-sand/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sage/20 flex items-center justify-center text-forest drop-shadow-soft">🐾</div>
            <div className="font-semibold text-lg text-forest">新手养宠指南</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-cocoa">
            <button className="hover:text-forest" onClick={() => navTo('/')}>首页</button>
            <button className="hover:text-forest" onClick={() => navTo('/checklist')}>清单</button>
            <button className="hover:text-forest" onClick={() => navTo('/community')}>社区</button>
            <button className="hover:text-forest" onClick={() => navTo('/forbidden')}>禁食数据库</button>
            <button className="hover:text-forest" onClick={() => navTo('/reviews')}>粮测评</button>
            <button className="hover:text-forest" onClick={() => navTo('/auth')}>登录/注册</button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-cocoa/70">光标</span>
              <select
                value={cursor}
                onChange={(e) => onCursorChange(e.target.value)}
                className="text-sm bg-cream border border-sand/60 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sage/40"
              >
                <option value="default">默认</option>
                <option value="cat">小猫爪</option>
                <option value="dog">小狗头</option>
              </select>
            </div>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-sand/60"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Toggle</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-cocoa">
            <button className="text-left" onClick={() => navTo('/')}>首页</button>
            <button className="text-left" onClick={() => navTo('/checklist')}>清单</button>
            <button className="text-left" onClick={() => navTo('/community')}>社区</button>
            <button className="text-left" onClick={() => navTo('/forbidden')}>禁食数据库</button>
            <button className="text-left" onClick={() => navTo('/reviews')}>粮测评</button>
            <button className="text-left" onClick={() => navTo('/auth')}>登录/注册</button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-cocoa/70">光标</span>
              <select
                value={cursor}
                onChange={(e) => onCursorChange(e.target.value)}
                className="text-sm bg-cream border border-sand/60 rounded-md px-2 py-1"
              >
                <option value="default">默认</option>
                <option value="cat">小猫爪</option>
                <option value="dog">小狗头</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

