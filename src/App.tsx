import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GridMotion from './components/GridMotion'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <About />
      {/* Achievements */}
      <section id="achievements" className="relative">
        <div className="absolute top-16 sm:top-20 lg:top-52 inset-x-0 z-10 pointer-events-none">
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
          items={[
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
            '校企合作项目 15+',
            <div key="5" className="text-2xl font-bold">互联网+ 省赛一等奖</div>,
            'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            '毕业生去向：大厂 80%',
            <div key="6" className="text-2xl font-bold">阿里巴巴 / 腾讯 / 字节</div>,
            '技术分享会 100+ 场',
            <div key="7" className="text-2xl font-bold">GitHub 开源项目</div>,
            'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            '成员总数 40+',
            <div key="8" className="text-2xl font-bold">期待你的加入</div>,
          ]}
          gradientColor="#5227FF"
        />
      </section>
      {/* Directions */}
      <section id="directions" className="h-[600px] bg-[#E0E0E0]" />
      {/* Recruit */}
      <section id="recruit" className="h-[600px] bg-[#D6D6D6]" />
      {/* Footer */}
      <section className="h-[300px] bg-[#CCCCCC]" />
    </div>
  )
}