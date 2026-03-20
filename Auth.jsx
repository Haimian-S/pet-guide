export default function Auth() {
  const [tab, setTab] = React.useState('login')
  function Field({ label, type = 'text', name, placeholder }) {
    return (
      <label className="block">
        <div className="text-sm text-cocoa/80 mb-1">{label}</div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full rounded-lg border border-sand/60 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sage/30"
        />
      </label>
    )
  }
  return (
    <div className="max-w-md mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-forest">账号中心</h1>
      <div className="mt-6 grid grid-cols-2 p-1 rounded-xl bg-sage/20">
        <button onClick={() => setTab('login')} className={(tab==='login'?'bg-sage text-cream ':'text-forest ')+'rounded-lg py-2'}>登录</button>
        <button onClick={() => setTab('register')} className={(tab==='register'?'bg-sage text-cream ':'text-forest ')+'rounded-lg py-2'}>注册</button>
      </div>
      {tab === 'login' ? (
        <div className="mt-6 space-y-4 rounded-2xl border border-sand/60 bg-white p-6">
          <Field label="邮箱" type="email" name="email" placeholder="you@example.com" />
          <Field label="密码" type="password" name="password" placeholder="••••••••" />
          <button className="w-full rounded-lg bg-sage text-cream py-2">登录（占位）</button>
          <div className="text-xs text-cocoa/60">稍后连接 Supabase 实现注册与登录</div>
        </div>
      ) : (
        <div className="mt-6 space-y-4 rounded-2xl border border-sand/60 bg-white p-6">
          <Field label="昵称" name="name" placeholder="爱撸猫的我" />
          <Field label="邮箱" type="email" name="email" placeholder="you@example.com" />
          <Field label="密码" type="password" name="password" placeholder="至少 8 位" />
          <button className="w-full rounded-lg bg-sage text-cream py-2">注册（占位）</button>
          <div className="text-xs text-cocoa/60">稍后连接 Supabase 实现注册与登录</div>
        </div>
      )}
    </div>
  )
}

