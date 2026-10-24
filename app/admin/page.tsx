\'use client\'
import { useState } from \'react\'
export default function Admin() {
  const [title, setTitle] = useState(\'\')
  return (<div className="p-8 max-w-5xl mx-auto"><h1 className="text-3xl font-bold mb-6">Admin Dashboard /admin</h1><div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800"><h2 className="font-semibold mb-4">Add New Track (Supabase connected)</h2><div className="flex gap-2"><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Track Title" className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2 flex-1"/><button className="bg-violet-600 px-6 py-2 rounded-lg min-h-[44px]">Add</button></div><p className="text-sm text-neutral-500 mt-4">Connect Supabase keys in .env to enable CRUD.</p></div></div>)
}
