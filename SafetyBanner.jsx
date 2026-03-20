export default function SafetyBanner() {
  const [hidden, setHidden] = React.useState(
    typeof window !== 'undefined' ? localStorage.getItem('safetyBanner') === 'dismissed' : false
  )
  if (hidden) return null
  return (
    <div className="w-full bg-sage text-cream text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <div>本网页的建议不能代替专业诊断</div>
        <button
          onClick={() => {
            localStorage.setItem('safetyBanner', 'dismissed')
            setHidden(true)
          }}
          className="bg-cream text-forest rounded px-3 py-1 text-xs"
        >
          我知道了
        </button>
      </div>
    </div>
  )
}

