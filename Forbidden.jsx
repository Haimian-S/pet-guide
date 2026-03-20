const data = [
  { id: 'chocolate', type: '食物', name: '巧克力', risk: '高', note: '含可可碱，可能导致心律失常与中毒' },
  { id: 'grape', type: '食物', name: '葡萄/葡萄干', risk: '高', note: '可能引起急性肾衰竭' },
  { id: 'onion', type: '食物', name: '洋葱/大葱/蒜', risk: '中', note: '破坏红细胞，引发溶血性贫血' },
  { id: 'xylitol', type: '食物', name: '木糖醇', risk: '高', note: '致低血糖与肝损伤，狗尤其危险' },
  { id: 'ibuprofen', type: '药品', name: '布洛芬', risk: '高', note: '可能造成胃肠出血、肾损伤，禁用' },
  { id: 'acetaminophen', type: '药品', name: '对乙酰氨基酚', risk: '高', note: '对猫极其危险，可能致命' },
  { id: 'alcohol', type: '食物', name: '酒精', risk: '高', note: '中枢抑制与低血糖风险' },
  { id: 'bones', type: '食物', name: '熟骨头', risk: '中', note: '易碎刺伤消化道，窒息风险' }
]

export default function Forbidden() {
  const [q, setQ] = React.useState('')
  const [type, setType] = React.useState('全部')
  const filtered = data.filter(i => {
    const text = (i.name + i.type + i.note).toLowerCase()
    const okType = type === '全部' || i.type === type
    return okType && text.includes(q.toLowerCase())
  })
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-forest">禁食食物/药品数据库</h1>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜索食物或药品，如：巧克力、布洛芬"
          className="flex-1 min-w-[220px] rounded-lg border border-sand/60 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sage/30"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-lg border border-sand/60 bg-white px-3 py-2"
        >
          <option>全部</option>
          <option>食物</option>
          <option>药品</option>
        </select>
      </div>
      <div className="mt-6 rounded-2xl border border-sand/60 overflow-hidden">
        <div className="grid grid-cols-12 bg-sage/20 text-cocoa/80 text-sm">
          <div className="col-span-3 p-3">名称</div>
          <div className="col-span-2 p-3">类别</div>
          <div className="col-span-2 p-3">风险级别</div>
          <div className="col-span-5 p-3">说明</div>
        </div>
        {filtered.map(i => (
          <div key={i.id} className="grid grid-cols-12 border-t border-sand/50 bg-white">
            <div className="col-span-3 p-3">{i.name}</div>
            <div className="col-span-2 p-3">{i.type}</div>
            <div className={"col-span-2 p-3 font-medium "+(i.risk==='高'?'text-red-600':i.risk==='中'?'text-amber-600':'text-forest')}>{i.risk}</div>
            <div className="col-span-5 p-3 text-cocoa/80">{i.note}</div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="p-6 text-sm text-cocoa/70 bg-white">暂无匹配项</div>
        )}
      </div>
      <div className="mt-4 text-xs text-cocoa/60">信息仅供科普参考，若出现中毒风险应联系专业兽医</div>
    </div>
  )
}

