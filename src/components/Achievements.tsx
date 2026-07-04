import GridMotion from './GridMotion'

const items = [
  '国家级奖项 20+',
  <div key="1" className="text-2xl font-bold">全国大学生软件大赛</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  '省级奖项 50+',
  <div key="2" className="text-2xl font-bold">挑战杯 金奖</div>,
  '学术论文 30+ 篇',
  <div key="3" className="text-2xl font-bold">CCF 推荐会议</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  '软件著作权 40+',
  <div key="4" className="text-2xl font-bold">ACM-ICPC 区域赛</div>,
  '！！！这里都是占位符！！！',
  <div key="5" className="text-2xl font-bold">互联网+ 省赛一等奖</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  '毕业生去向：大厂 80%',
  <div key="6" className="text-2xl font-bold">阿里巴巴 / 腾讯 / 字节</div>,
  '技术分享会 100+ 场',
  <div key="7" className="text-2xl font-bold">GitHub 开源项目</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  '成员总数 40+',
  <div key="8" className="text-2xl font-bold">期待你的加入</div>,
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
        gradientColor="#f3f4f6"
      />
    </section>
  )
}