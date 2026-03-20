const initialItems = [
  { id: 'litter', text: '猫砂盆/狗厕所与吸水垫' },
  { id: 'food', text: '主粮与零食（循序换粮）' },
  { id: 'bowls', text: '食盆、水碗或饮水机' },
  { id: 'bed', text: '窝/笼与安置空间' },
  { id: 'care', text: '梳子、洗护、指甲剪、消毒用品' },
  { id: 'leash', text: '牵引绳、胸背与外出箱' },
  { id: 'health', text: '疫苗计划、驱虫药与体检预约' },
  { id: 'safety', text: '安全门窗、隐患清理、紧急联系人' }
]

function useChecklist() {
  const [items, setItems] = React.useState(() => {
    try {
      const raw = localStorage.getItem('checklist')
      if (raw) return JSON.parse(raw)
    } catch {}
    return initialItems.map(i => ({ ...i, done: false }))
  })
  React.useEffect(() => {
    localStorage.setItem('checklist', JSON.stringify(items))
  }, [items])
  function toggle(id) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i))
  }
  function reset() {
    setItems(initialItems.map(i => ({ ...i, done: false })))
  }
  return { items, toggle, reset }
}

export default function Checklist() {
  const { items, toggle, reset } = useChecklist()
  const doneCount = items.filter(i => i.done).length
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-forest">新手准备清单</h1>
      <div className="mt-2 text-cocoa/70 text-sm">已完成 {doneCount}/{items.length}</div>
      <div className="mt-6 space-y-3">
        {items.map(i => (
          <label key={i.id} className="flex items-start gap-3 rounded-xl border border-sand/60 bg-white p-4 hover:border-sage/60">
            <input
              type="checkbox"
              checked={!!i.done}
              onChange={() => toggle(i.id)}
              className="mt-1 w-5 h-5 accent-forest"
            />
            <span className={i.done ? 'text-cocoa/60 line-through' : 'text-cocoa'}>{i.text}</span>
          </label>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button onClick={reset} className="px-4 py-2 rounded-lg bg-sage text-cream">重置清单</button>
        <a href="#/" className="px-4 py-2 rounded-lg border border-sand/60 bg-white">返回首页</a>
      </div>
    </div>
  )
}

