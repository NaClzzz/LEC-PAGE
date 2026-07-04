import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GridMotion from './components/GridMotion'
import FlowingMenu from './components/FlowingMenu'
import Lanyard from './components/Lanyard'

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
            <FlowingMenu
              items={[
                { link: '#', text: '算法', image: 'https://picsum.photos/600/400?random=1' },
                { link: '#', text: '前端开发', image: 'https://picsum.photos/600/400?random=2' },
                { link: '#', text: '后端开发', image: 'https://picsum.photos/600/400?random=3' },
                { link: '#', text: '游戏开发', image: 'https://picsum.photos/600/400?random=4' },
                { link: '#', text: '机器学习', image: 'https://picsum.photos/600/400?random=5' },
                { link: '#', text: '图形学', image: 'https://picsum.photos/600/400?random=6' },
                { link: '#', text: '人工智能', image: 'https://picsum.photos/600/400?random=7' },
              ]}
              textColor="#111827"
              bgColor="#f3f4f6"
              marqueeBgColor="#111827"
              marqueeTextColor="#ffffff"
              borderColor="#d1d5db"
            />
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 left-1/2 bg-[#f3f4f6]">
          <FlowingMenu
            items={[
              { link: '#', text: '算法', image: 'https://picsum.photos/600/400?random=1' },
              { link: '#', text: '前端开发', image: 'https://picsum.photos/600/400?random=2' },
              { link: '#', text: '后端开发', image: 'https://picsum.photos/600/400?random=3' },
              { link: '#', text: '游戏开发', image: 'https://picsum.photos/600/400?random=4' },
              { link: '#', text: '机器学习', image: 'https://picsum.photos/600/400?random=5' },
              { link: '#', text: '图形学', image: 'https://picsum.photos/600/400?random=6' },
              { link: '#', text: '人工智能', image: 'https://picsum.photos/600/400?random=7' },
            ]}
            textColor="#111827"
            bgColor="#f3f4f6"
            marqueeBgColor="#111827"
            marqueeTextColor="#ffffff"
            borderColor="#d1d5db"
          />
        </div>
      </section>
      {/* Recruit */}
      <section id="recruit" className="bg-white pt-8 sm:pt-10 lg:pt-20 pb-16 sm:pb-20 lg:pb-44 overflow-hidden relative">
        <div className="hidden lg:block absolute top-0 right-[40%] bottom-0 left-0">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        <div className="lg:hidden h-[60vh]">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </div>
        <div className="max-w-[1440px] mx-auto">
          <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
              4
            </div>
            <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
              招新报名
            </span>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto lg:pl-[40%]">
          <div className="px-5 sm:px-8 lg:px-12">
            <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-8 sm:mb-12">
              加入我们,<br />一起用代码创造<br />{'{世界}'}
            </h2>
            <span className="text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-900 mb-6">
              {'乐程软件工作室将持续秉持学术创新和项目实践双轮驱动的理念，不断追求卓越。在这里，无论你是技术小白，还是已有一定编程基础的潜力股，都能找到属于自己的舞台。我们为成员提供积极向上、充满挑战与成长机会的平台，鼓励大家相互学习、共同进步。'}
              <br />
              <br />
              {'如果你渴望在大学期间提升编程技能，参与实际项目开发，结交志同道合的朋友，为未来的职业发展或学术深造打下坚实基础，那么，不要犹豫，加入乐程软件工作室吧！'}
              {'我们期待与你一起，在代码的海洋中遨游，用技术创造无限可能，让青春在团队中绽放最耀眼的光芒！'}
            </span>
            <div className="space-y-3">
              <p className="text-[15px] sm:text-[17px] leading-[1.65] text-gray-500">
                联系方式待定
              </p>
              <p className="text-[15px] sm:text-[17px] leading-[1.65] text-gray-500">
                邮箱：待定
              </p>
              <p className="text-[15px] sm:text-[17px] leading-[1.65] text-gray-500">
                地址：待定
              </p>
            </div>
            <div className="hidden lg:block h-[30vh]"></div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#2a2a2a] text-gray-300 pt-12 pb-6">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">乐程软件工作室</h3>
              <p className="text-gray-500 text-sm">LEC Software Studio</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-400">导航</h4>
                <ul className="space-y-1.5 text-sm text-gray-500">
                  <li><a href="#hero" className="hover:text-gray-300 transition-colors">首页</a></li>
                  <li><a href="#about" className="hover:text-gray-300 transition-colors">关于我们</a></li>
                  <li><a href="#achievements" className="hover:text-gray-300 transition-colors">团队成就</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2 text-gray-400">更多</h4>
                <ul className="space-y-1.5 text-sm text-gray-500">
                  <li><a href="#directions" className="hover:text-gray-300 transition-colors">技术方向</a></li>
                  <li><a href="#recruit" className="hover:text-gray-300 transition-colors">招新报名</a></li>
                  <li><span>联系我们</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-500">&copy; 2025 乐程软件工作室. All rights reserved.</p>
            <p className="text-sm text-gray-600">Made with love by LEC Team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}