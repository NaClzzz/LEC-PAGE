import GridMotion from './GridMotion'

const items = [
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336220.jpg',
  <div key="1" className="text-sm sm:text-2xl">全国大学生软件大赛</div>,
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336219.jpg',
  '省级奖项 100+',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336218.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336217.png',
  <div key="2" className="text-sm sm:text-2xl">挑战杯 金奖</div>,
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336216.jpg',
  'CCCC 团体程序设计天梯赛',
   'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/%E9%99%88%E6%98%B1%E7%92%8B%E7%9D%BF%E6%8A%97%E5%9B%BD%E8%B5%9B.webp',
   <div key="3" className="text-sm sm:text-2xl"> CCF CAT 全国算法精英大赛</div>,
   'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336213.jpg',
   'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/CCCC2025GPLT09064_%E5%85%A8%E5%9B%BD%E6%80%BB%E5%86%B3%E8%B5%9B_%E5%9B%A2%E9%98%9F%E4%BA%8C%E7%AD%89%E5%A5%96_%E8%A5%BF%E5%8D%97%E7%9F%B3%E6%B2%B9%E5%A4%A7%E5%AD%A6_swpu1_%E9%BE%9A%E4%BA%91%E9%A3%9E_00.webp',
   '省级奖项 100+',
   'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336212.jpg',
   <div key="4" className="text-sm sm:text-2xl">ACM-ICPC 区域赛</div>,
   'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336211.jpg',
   'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336215.jpg',
  '国家级奖项 50+',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336208.jpg',
  <div key="5" className="text-sm sm:text-2xl">期待你的加入</div>,
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336207.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336206.jpg',
  '毕业生去向：大厂 80%',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336205.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336204.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336203.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336201.jpg',
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