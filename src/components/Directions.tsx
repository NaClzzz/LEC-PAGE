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
    image: '/direction-algorithm-item.jpg',
    description: '算法与数据结构是计算机科学的基石。我们深入研究各类经典算法，参与算法竞赛，培养严谨的逻辑思维和高效的问题解决能力。',
    detailImage: '/direction-algorithm-detail.jpg',
  },
  {
    link: '#', text: '前端开发',
    image: 'https://picsum.photos/600/400?random=2',
    description: '从网页设计到交互体验，前端开发是技术与美学的结合。我们使用现代前端框架构建流畅、美观的用户界面，注重用户体验与性能优化。',
    detailImage: 'https://picsum.photos/800/600?random=2',
  },
  {
    link: '#', text: '后端开发',
    image: 'https://picsum.photos/600/400?random=3',
    description: '后端开发是应用的骨架与心脏。我们设计高可用架构，优化数据库性能，构建稳定可靠的 API 服务，为前端提供坚实的数据支撑。',
    detailImage: 'https://picsum.photos/800/600?random=3',
  },
  {
    link: '#', text: '游戏开发',
    image: '/direction-game-item.jpg',
    description: '游戏开发融合了创意、技术与艺术。我们使用 Unity 和 Unreal 等引擎，从游戏机制到视觉效果，打造沉浸式的互动体验。',
    detailImage: '/direction-game-detail.jpg',
  },
  {
    link: '#', text: '机器学习',
    image: 'https://picsum.photos/600/400?random=5',
    description: '机器学习是人工智能的核心驱动力。我们探索深度学习、自然语言处理、计算机视觉等前沿领域，用数据驱动智能决策。',
    detailImage: 'https://picsum.photos/800/600?random=5',
  },
  {
    link: '#', text: '图形学',
    image: 'https://picsum.photos/600/400?random=6',
    description: '计算机图形学连接虚拟与现实。我们研究渲染管线、光线追踪、几何处理等技术，用数学与代码创造视觉奇观。',
    detailImage: 'https://picsum.photos/800/600?random=6',
  },
  {
    link: '#', text: '人工智能',
    image: 'https://picsum.photos/600/400?random=7',
    description: '人工智能正在重塑世界。我们研究大语言模型、智能体、多模态 AI 等方向，探索 AI 技术在各领域的创新应用。',
    detailImage: 'https://picsum.photos/800/600?random=7',
  },
]

const menuProps = {
  textColor: '#111827',
  bgColor: '#f3f4f6',
  marqueeBgColor: '#1b1b1b',
  marqueeTextColor: '#ffffff',
  borderColor: '#d1d5db',
} as const

export default function Directions() {
  const [selectedItem, setSelectedItem] = useState<DirectionItem | null>(null)
  const [closing, setClosing] = useState(false)

  const handleClose = useCallback(() => {
    setClosing(true)
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
          <FlowingMenu items={items} {...menuProps} onItemClick={(item) => setSelectedItem(item as DirectionItem)} />
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 left-1/2 bg-[#f3f4f6]">
        <span className="absolute -left-16 top-1/2 -translate-y-1/2 rotate-90 text-[11px] text-gray-400 whitespace-nowrap pointer-events-none select-none uppercase tracking-widest">click them ↑</span>
        <FlowingMenu items={items} {...menuProps} onItemClick={(item) => setSelectedItem(item as DirectionItem)} />
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleClose}>
          <div
            className={`bg-white rounded-xl shadow-lg overflow-hidden flex w-[90vw] max-w-[1000px] h-[70vh] max-h-[700px] relative ${closing ? 'animate-[slideOutLeft_0.5s_cubic-bezier(0.4,0,0.2,1)]' : 'animate-[slideInRight_0.8s_cubic-bezier(0.16,1,0.3,1)]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center z-10 transition-colors"
              onClick={handleClose}
            >
              <X size={16} className="text-gray-600" />
            </button>

            <div className="flex-1 flex flex-col justify-center p-8 sm:p-12">
              <h3 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
                {selectedItem.text}
              </h3>
              <p className="text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-900">
                {selectedItem.description}
              </p>
            </div>

            <div className="hidden sm:block w-[45%] bg-gray-100">
              <img
                src={selectedItem.detailImage}
                alt={selectedItem.text}
                className="w-full h-full object-cover"
              />
            </div>
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