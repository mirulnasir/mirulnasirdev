import PepeFollower from '@/components/PepeFollower'

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <PepeFollower />
      <span className="text-white monospace text-sm absolute bottom-0 right-0 p-4">(c) {new Date().getFullYear()} Mirul Nasir</span>
    </div>
  )
}