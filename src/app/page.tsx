import { Lato } from 'next/font/google'
const lato = Lato({
  weight: ["700","900"],
  subsets: ["latin"],
  style: "normal"
})


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#edf1f9] text-[#1db3cc]">
      <div className="container max-w-xl flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className={`text-8xl font-bold `.concat(lato.className)}>
          TOGETHER
        </div>
        <img src="/lark-temp.png" alt="Lark Advertising Agency" className="w-full" />
      </div>
    </main>
  );
}
