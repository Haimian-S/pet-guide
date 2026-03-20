const posts = [
  {
    id: 1,
    user: '阿喵今天也很乖',
    time: '2 小时前',
    text: '第一次洗澡，紧张但勇敢。',
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    user: '遛狗去咯',
    time: '昨天',
    text: '新领养的狗狗在公园认识了小伙伴。',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    user: '撸猫大使',
    time: '3 天前',
    text: '晒太阳的午后时光。',
    img: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Community() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-forest">宠物日常社区</h1>
        <button className="rounded-lg bg-sage text-cream px-4 py-2">发布（占位）</button>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <div key={p.id} className="rounded-2xl border border-sand/60 bg-white overflow-hidden">
            <img src={p.img} alt="" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between text-sm text-cocoa/70">
                <div className="font-medium text-cocoa">{p.user}</div>
                <div>{p.time}</div>
              </div>
              <div className="mt-2 text-cocoa">{p.text}</div>
              <div className="mt-3 flex items-center gap-4 text-sm text-cocoa/70">
                <button className="hover:text-forest">👍 赞</button>
                <button className="hover:text-forest">💬 评论</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

