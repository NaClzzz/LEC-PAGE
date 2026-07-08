import { useState, useCallback } from 'react'
import { X } from 'lucide-react'
import FlowingMenu from './FlowingMenu'

interface DirectionItem {
  link: string
  text: string
  image: string
  description: string
  detailImage: string
}

const items: DirectionItem[] = [
  {
    link: '#', text: '算法',
    image: '',
    description: '算法与数据结构是计算机科学的基石，也是许多技术方向的重要基础。在这里，你将学习如何分析问题、设计高效算法，并通过代码将思路转化为解决方案。我们会从基础的数据结构开始，逐步深入到图论、动态规划、搜索、字符串算法等经典内容，培养严谨的逻辑思维和问题分析能力。<br />除了日常学习，我们还会组织算法训练、经验分享和竞赛交流，鼓励成员参加蓝桥杯、CCPC、ICPC 等各类算法竞赛，在实践中不断提升自己。<br /><br /><b>你将学习</b><br />数据结构与算法基础<br />C++ 程序设计<br />图论、动态规划、贪心、搜索等经典算法<br />算法竞赛训练与解题思维<br /><br /><b>适合你</b><br />喜欢思考、热爱挑战，希望不断提升逻辑能力，对竞赛或技术研究感兴趣。',
    detailImage: '',
  },
  {
    link: '#', text: '前端开发',
    image: '',
    description: '前端开发负责构建用户能够直接看到和操作的界面，是连接设计与技术的重要桥梁。在这里，你将学习如何使用现代 Web 技术，将静态页面一步步变成交互丰富、体验流畅的应用。<br />从 HTML、CSS、JavaScript 开始，到 Vue、React 等主流框架，再到工程化、组件化开发，我们会通过真实项目帮助你建立完整的前端开发能力，让你真正参与网站和产品的开发。<br /><br /><b>你将学习</b><br />HTML、CSS、JavaScript<br />Vue / React 等现代框架<br />TypeScript<br />前端工程化、Git 协作<br />UI 实现与交互设计<br /><br /><b>适合你</b><br />喜欢设计界面、追求视觉效果，希望快速看到开发成果，享受创造产品的过程。',
    detailImage: '',
  },
  {
    link: '#', text: '后端开发',
    image: '',
    description: '后端开发负责支撑整个系统的运行，是软件背后的"大脑"。你将学习服务器开发、数据库设计、接口开发以及系统架构等知识，了解一款互联网产品是如何稳定运行的。<br />我们会带你从简单的接口开发开始，逐步学习数据库、缓存、中间件以及部署运维等内容，并参与实际项目，在实践中建立完整的后端开发思维。<br /><br /><b>你将学习</b><br />Java / Go / Node.js<br />MySQL、Redis<br />RESTful API 开发<br />Spring Boot 等开发框架<br />Linux 与服务器部署<br /><br /><b>适合你</b><br />喜欢研究系统运行原理，对程序架构和性能优化感兴趣，希望打造稳定可靠的软件。',
    detailImage: '',
  },
  {
    link: '#', text: '游戏开发',
    image: '',
    description: '游戏开发融合了程序、设计、图形学和创意，是最具综合性的技术方向之一。在这里，你将学习游戏逻辑、角色控制、场景搭建、动画系统等内容，并体验从零完成一款游戏的全过程。<br />无论是 2D 还是 3D 游戏，我们都鼓励成员参与 Game Jam、课程项目以及独立游戏开发，在实践中不断提升自己的开发能力。<br /><br /><b>你将学习</b><br />Unity / Unreal Engine<br />C# / C++<br />游戏逻辑开发<br />UI、动画与物理系统<br />游戏项目协作<br /><br /><b>适合你</b><br />热爱游戏，希望亲手创造游戏世界，对创意开发充满兴趣。',
    detailImage: '',
  },
  {
    link: '#', text: '机器学习',
    image: '',
    description: '机器学习是人工智能的重要基础，研究如何让计算机通过数据学习规律并完成预测、分类等任务。你将学习机器学习的基本原理、常见模型以及模型训练方法，并通过真实数据集完成实践项目。<br />课程会循序渐进，从 Python 基础到机器学习算法，再到深度学习，为后续 AI 方向打下坚实基础。<br /><br /><b>你将学习</b><br />Python 数据分析<br />NumPy、Pandas<br />Scikit-learn<br />PyTorch<br />模型训练与数据处理<br /><br /><b>适合你</b><br />喜欢数学和数据分析，希望通过模型解决实际问题，对 AI 技术充满兴趣。',
    detailImage: '',
  },
  {
    link: '#', text: '图形学',
    image: '',
    description: '图形学研究如何利用计算机生成和渲染图像，是游戏开发、数字孪生、AR/VR 等领域的重要基础。在这里，你将学习三维图形渲染、光照、材质、Shader 等知识，理解画面背后的实现原理。<br />如果你喜欢炫酷的视觉效果，或者希望深入了解 Three.js、OpenGL 等图形技术，这里会是一个非常有趣的方向。<br /><br /><b>你将学习</b><br />OpenGL<br />WebGL / Three.js<br />Shader 编程<br />三维数学基础<br />渲染管线原理<br /><br /><b>适合你</b><br />对图形、动画和三维世界感兴趣，希望创造具有视觉冲击力的作品。',
    detailImage: '',
  },
  {
    link: '#', text: '人工智能',
    image: '',
    description: '人工智能是当前最具活力的发展方向之一。从大语言模型到智能体（Agent），AI 正在改变软件开发的方式。在这里，你将学习计算机视觉、自然语言处理、大语言模型等前沿技术，并尝试将 AI 融入实际应用。<br />我们鼓励成员结合项目实践，开发 AI 工具、智能助手、视觉识别等应用，体验从模型到产品的完整开发流程。<br /><br /><b>你将学习</b><br />大语言模型（LLM）<br />AI Agent<br />自然语言处理（NLP）<br />计算机视觉（CV）<br />AI 应用开发<br /><br /><b>适合你</b><br />对前沿技术充满好奇，希望探索人工智能的发展方向，并尝试创造真正有价值的 AI 产品。',
    detailImage: '',
  },
]

const menuProps = {
  textColor: '#111827',
  bgColor: '#f3f4f6',
  marqueeBgColor: '#5227ff',
  marqueeTextColor: '#ffffff',
  borderColor: '#d1d5db',
} as const

export default function Directions() {
  const [selectedItem, setSelectedItem] = useState<DirectionItem | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [closing, setClosing] = useState(false)

  const handleClose = useCallback(() => {
    setClosing(true)
    setSelectedIndex(null)
    setTimeout(() => {
      setSelectedItem(null)
      setClosing(false)
    }, 500)
  }, [])

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
            每一次选择，<br /><span className="whitespace-nowrap">都通向不同的未来</span>
          </h2>
        </div>
        <div className="px-5 sm:px-8 lg:px-12">
          <p className="text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-900">
            每一种热爱，都值得被认真对待。<br />无论你是第一次接触编程，还是已经开始尝试项目实践，都能在这里找到适合自己的方向。与伙伴协作、完成作品、不断成长，让每一行代码都成为探索未来的起点。
          </p>
        </div>
        <div className="hidden lg:block h-[30vh]"></div>
        <div className="mt-8 lg:hidden">
          <p className="text-center text-[11px] text-gray-400 pb-1 uppercase tracking-widest">CLICK THEM ↓</p>
          <div className="bg-[#f3f4f6]">
            <FlowingMenu items={items} {...menuProps} activeIndex={selectedIndex ?? -1} onItemClick={(item, index) => {
              setSelectedItem(item as DirectionItem)
              setSelectedIndex(index)
            }} />
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 left-1/2 bg-[#f3f4f6]">
        <span className="absolute -left-16 top-1/2 -translate-y-1/2 rotate-90 text-[11px] text-gray-400 whitespace-nowrap pointer-events-none select-none uppercase tracking-widest">click them ↑</span>
        <FlowingMenu items={items} {...menuProps} activeIndex={selectedIndex ?? -1} onItemClick={(item, index) => {
          setSelectedItem(item as DirectionItem)
          setSelectedIndex(index)
        }} />
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleClose}>
          <div
            className={`bg-white rounded-xl shadow-lg overflow-hidden flex w-[90vw] max-w-[1000px] h-auto max-h-[85vh] lg:h-[70vh] lg:max-h-[700px] relative ${closing ? 'animate-[slideOutLeft_0.5s_cubic-bezier(0.4,0,0.2,1)]' : 'animate-[slideInRight_0.8s_cubic-bezier(0.16,1,0.3,1)]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center z-10 transition-colors"
              onClick={handleClose}
            >
              <X size={20} className="text-[#111827]" />
            </button>

            <div className="flex-1 flex flex-col justify-center p-8 sm:p-12">
              <h3 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
                {selectedItem.text}
              </h3>
              <p className="text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
            </div>

            <div className="hidden sm:block w-[30%] bg-[#f3f4f6] ml-auto" />
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100vw);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100vw);
          }
        }
      `}</style>
    </section>
  )
}