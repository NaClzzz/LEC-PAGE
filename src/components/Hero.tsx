import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#EFEFEF] flex flex-col pt-20">
      <Shader className="absolute inset-0 pointer-events-none">
        <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow baseColor="#ffffff" downColor="#5227FF" leftColor="#5227FF" rightColor="#5227FF" upColor="#5227FF" momentum={13} radius={3.5} />
        <FlutedGlass aberration={0.61} angle={31} frequency={8} highlight={0.12} highlightSoftness={0} lightAngle={-90} refraction={4} shape="rounded" softness={1} speed={0.15} />
        <FilmGrain strength={0.05} />
      </Shader>

      <div className="absolute top-20 right-5 sm:right-8 lg:right-12 text-right select-none pointer-events-none">
        <span className="text-[clamp(2.5rem,10vw,7rem)] font-medium leading-[1.08] tracking-tight text-gray-900 whitespace-nowrap [-webkit-text-stroke:0.2px_currentColor] sm:[-webkit-text-stroke:0px]">
          乐程软件工作室
        </span>
        <p className="text-[13px] font-medium sm:text-[14px] text-gray-900 tracking-wide mt-3">
          &lt; JOIN US /&gt;
        </p>
      </div>

      <div className="flex-1" />

      <div className="relative max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p className="text-[13px] font-medium sm:text-[14px] text-gray-900 tracking-wide mb-2 sm:mb-2">
          LEC SOFTWARE STUDIO
        </p>

        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-medium leading-[1.08] tracking-tight text-gray-900 [-webkit-text-stroke:0.2px_currentColor] sm:[-webkit-text-stroke:0px]">
          加入我们<br />
          一起用代码创造<br className="sm:hidden" />{'{世界}'}
        </h1>
      </div>
    </section>
  )
}