export default function SearchBar({ placeholder, onSearch }) {
  const [q, setQ] = React.useState('')
  React.useEffect(() => {
    const id = setTimeout(() => onSearch(q.trim()), 200)
    return () => clearTimeout(id)
  }, [q])
  return (
    <div className="w-full flex items-center gap-2 bg-white rounded-xl border border-sand/60 px-3 py-2 shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cocoa/60">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.5 5.5a7.5 7.5 0 0011.15 11.15z" />
      </svg>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="flex-1 outline-none bg-transparent text-cocoa"
      />
      {q && (
        <button onClick={() => setQ('')} className="text-sm text-cocoa/60 hover:text-cocoa">清除</button>
      )}
    </div>
  )
}

