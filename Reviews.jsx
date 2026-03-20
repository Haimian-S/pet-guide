const reviews = [
  {
    id: 'brand-a',
    name: 'A 品牌全价猫粮',
    img: 'https://images.unsplash.com/photo-1604908554027-6d2709b65703?q=80&w=1200&auto=format&fit=crop',
    rating: 4.5,
    pros: ['配方均衡', '颗粒适中', '适口性好'],
    cons: ['价格略高']
  },
  {
    id: 'brand-b',
    name: 'B 品牌无谷狗粮',
    img: 'https://images.unsplash.com/photo-1612538490058-4f33405b9a7a?q=80&w=1200&auto=format&fit=crop',
    rating: 4.0,
    pros: ['高蛋白', '成分透明'],
    cons: ['对部分肠胃偏敏感']
  }
]

function Stars({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className="flex items-center">
      {[...Array(full)].map((_, i) => <span key={i} className="text-amber-500">★</span>)}
      {half && <span className="text-amber-500">☆</span>}
      {[...Array(5 - full - (half ? 1 : 0))].map((_, i) => <span key={'e'+i} className="text-sand/60">★</span>)}
    </div>
  )
}

export default function Reviews() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-forest">宠物粮测评</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map(r => (
          <div key={r.id} className="rounded-2xl border border-sand/60 bg-white overflow-hidden">
            <img src={r.img} alt="" className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="font-medium text-cocoa">{r.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <Stars value={r.rating} />
                <span className="text-sm text-cocoa/70">{r.rating.toFixed(1)}</span>
              </div>
              <div className="mt-3 text-sm">
                <div className="text-cocoa/70">优点</div>
                <ul className="list-disc pl-5 text-cocoa">
                  {r.pros.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <div className="mt-2 text-sm">
                <div className="text-cocoa/70">注意</div>
                <ul className="list-disc pl-5 text-cocoa">
                  {r.cons.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

