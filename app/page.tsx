import Hero from "@/components/Hero"
import AudioGrid from "@/components/AudioGrid"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
export default function Home() {
  const tracks = [
    { id: "1", title: "Adhoori Raat", artist: "Lost Ishq", audio_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover_url: "https://picsum.photos/300/300?random=1" },
    { id: "2", title: "Khoya Dil", artist: "Lost Ishq", audio_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover_url: "https://picsum.photos/300/300?random=2" },
    { id: "3", title: "Ishq Lost", artist: "Lost Ishq", audio_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover_url: "https://picsum.photos/300/300?random=3" },
  ]
  return (<main><Navbar /><Hero /><AudioGrid tracks={tracks} /><About /><Footer /></main>)
}
