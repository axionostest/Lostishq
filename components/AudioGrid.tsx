import AudioPlayer from "./AudioPlayer"
export default function AudioGrid({ tracks }: any) {
  return (<section id="tracks" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">{tracks.map((t:any) => <AudioPlayer key={t.id} track={t} />)}</section>)
}
