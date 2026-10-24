\'use client\'
import { useRef, useState } from \'react\'
import { Play, Pause } from \'lucide-react\'
export default function AudioPlayer({ track }: any) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const toggle = () => {
    if(!audioRef.current) return
    if(playing) audioRef.current.pause()
    else audioRef.current.play().catch(()=> alert("Tap again to play"))
    setPlaying(!playing)
  }
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 hover:border-violet-500/30 transition">
      <audio ref={audioRef} src={track.audio_url} crossOrigin="anonymous" preload="metadata" onEnded={()=>setPlaying(false)} />
      <div className="flex items-center gap-4">
        <img src={track.cover_url} alt={track.title} className="w-16 h-16 rounded-xl object-cover"/>
        <div className="flex-1"><h3 className="font-semibold">{track.title}</h3><p className="text-sm text-neutral-500">{track.artist}</p></div>
        <button onClick={toggle} className="w-11 h-11 rounded-full bg-white text-black grid place-items-center shrink-0">{playing ? <Pause size={18}/> : <Play size={18} className="ml-0.5"/>}</button>
      </div>
    </div>
  )
}
