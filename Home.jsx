import SearchBar from '../components/SearchBar.jsx'

const encyclopedia = [
  { title: '猫咪基础疫苗', desc: '三联疫苗、加强针时间与注意事项', tag: '健康' },
  { title: '狗狗体外驱虫', desc: '常见体外寄生虫与驱虫频率', tag: '驱虫' },
  { title: '幼猫换粮指南', desc: '循序渐进，观察呕吐与软便', tag: '饮食' },
  { title: '猫砂选择', desc: '矿砂、豆腐砂、混合砂的优劣', tag: '用品' },
  { title: '犬猫绝育前后', desc: '手术风险、术后护理与营养', tag: '健康' },
  { title: '日常梳理与洗护', desc: '梳毛、洗澡、剪指甲的正确方法', tag: '护理' }
]

export default function Home() {
  const [results, setResults] = React.useState(encyclopedia)
  function handleSearch(q) {
    if (!q) {
      setResults(encyclopedia)
      return
    }
    const lower = q.toLowerCase()
    setResults(
      encyclopedia.filter(i => (i.title + i.desc + i.tag).toLowerCase().includes(lower))
    )
  }
  return (
    <div className="bg-gradient-to-b from-cream to-cream/70">
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sage/20 text-forest text-sm px-3 py-1 rounded-full">
              <span>温馨 · 高级 · 简约</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-forest">新手养宠指南</h1>
            <p className="mt-3 text-cocoa/80">面向新手的系统化指引，涵盖准备清单、社区分享、禁食数据库与粮食测评。</p>
            <div className="mt-6 max-w-xl">
              <SearchBar placeholder="搜索宠物百科，例如：猫咪驱虫、狗狗疫苗、饮食" onSearch={handleSearch} />
            </div>
            <div className="mt-6 text-sm text-cocoa/70">试试搜索“驱虫”、“疫苗”等关键字</div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-2xl border border-sand/60 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-3">
                <div className="aspect-square rounded-xl bg-sage/30 flex items-center justify-center text-4xl">🐱</div>
                <div className="aspect-square rounded-xl bg-sand/30 flex items-center justify-center text-4xl">🐶</div>
                <div className="aspect-square rounded-xl bg-sage/30 flex items-center justify-center text-4xl">🫶</div>
              </div>
              <div className="mt-4 text-sm text-cocoa/70">以人文关怀为核心的宠物生活指南</div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-forest">百科检索结果</h2>
          <a href="#/forbidden" className="text-sm text-forest hover:underline">了解禁食数据库</a>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-sand/60 bg-white p-4 hover:shadow-md transition-shadow">
              <div className="text-xs text-forest/80">{it.tag}</div>
              <div className="mt-1 font-medium text-cocoa">{it.title}</div>
              <div className="mt-1 text-sm text-cocoa/70">{it.desc}</div>
            </div>
          ))}
          {results.length === 0 && (
            <div className="col-span-full text-cocoa/70 text-sm">未找到相关条目</div>
          )}
        </div>
      </section>
    </div>
  )
}

