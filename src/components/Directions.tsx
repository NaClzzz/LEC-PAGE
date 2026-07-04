import FlowingMenu from './FlowingMenu'

const items = [
  { link: '#', text: '算法', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: '前端开发', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: '后端开发', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: '游戏开发', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: '机器学习', image: 'https://picsum.photos/600/400?random=5' },
  { link: '#', text: '图形学', image: 'https://picsum.photos/600/400?random=6' },
  { link: '#', text: '人工智能', image: 'https://picsum.photos/600/400?random=7' },
]

const menuProps = {
  textColor: '#111827',
  bgColor: '#f3f4f6',
  marqueeBgColor: '#111827',
  marqueeTextColor: '#ffffff',
  borderColor: '#d1d5db',
} as const

export default function Directions() {
  return (
    <section id="directions" className="bg-white pt-16 sm:pt-20 lg:pt-52 pb-16 sm:pb-20 lg:pb-44 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto lg:pr-[50%]">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            3
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            技术方向
          </span>
        </div>
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-8 sm:mb-12">
            多元技术方向，<br />总有一个适合你
          </h2>
        </div>
        <div className="px-5 sm:px-8 lg:px-12">
          <p className="text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-900">
            工作室覆盖多个技术领域，无论你对哪个方向感兴趣，都能在这里找到志同道合的伙伴和丰富的学习资源。从底层算法到上层应用，从传统开发到前沿 AI，我们共同探索技术的无限可能。
          </p>
        </div>
        <div className="hidden lg:block h-[30vh]"></div>
        <div className="mt-8 lg:hidden bg-[#f3f4f6]">
          <FlowingMenu items={items} {...menuProps} />
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 left-1/2 bg-[#f3f4f6]">
        <span className="absolute -left-16 top-1/2 -translate-y-1/2 rotate-90 text-[11px] text-gray-400 whitespace-nowrap pointer-events-none select-none uppercase tracking-widest">click them ↑</span>
        <FlowingMenu items={items} {...menuProps} />
      </div>
    </section>
  )
}