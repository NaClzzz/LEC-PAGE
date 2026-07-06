import GridMotion from './GridMotion'

const items = [
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336219.webp',
  <div key="1" className="text-sm sm:text-2xl">全国大学生软件大赛</div>,
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336211.webp',
  '省级奖项 50+',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336212.webp',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336213.webp',
  <div key="2" className="text-sm sm:text-2xl">挑战杯 金奖</div>,
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336214.webp',
  '学术论文 30+ 篇',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336208.webp',
  <div key="3" className="text-sm sm:text-2xl">CCF 推荐会议</div>,
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336205.webp',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336210.webp',
  '软件著作权 40+',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336203.webp',
  <div key="4" className="text-sm sm:text-2xl">ACM-ICPC 区域赛</div>,
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336206.webp',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336215.webp',
  '国家级奖项 20+',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336218.webp',
  <div key="5" className="text-sm sm:text-2xl">期待你的加入</div>,
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336201.webp',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336216.webp',
  '毕业生去向：大厂 80%',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336204.webp',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336217.webp',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336207.webp',
  'https://ik.imagekit.io/Ziro/LEC-PAGE/achievements/202407172336220.webp',
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="absolute top-8 sm:top-10 lg:top-20 inset-x-0 z-10 pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 border border-gray-200 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-5 py-1.5 sm:py-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
              2
            </div>
            <span className="text-[13px] sm:text-[15px] font-medium">团队成就</span>
          </div>
        </div>
      </div>
      <GridMotion
        items={items}
        gradientColor="#ffffff"
      />
    </section>
  )
}