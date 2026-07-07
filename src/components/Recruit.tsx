import { useEffect, useRef, useState, type ComponentType } from 'react'

export default function Recruit() {
  const sectionRef = useRef<HTMLElement>(null)
  const [LanyardComp, setLanyardComp] = useState<ComponentType<Record<string, unknown>> | null>(null)
  const [lanyardLoading, setLanyardLoading] = useState(false)
  const retryCount = useRef(0)

  function loadLanyard() {
    setLanyardLoading(true)
    import('./Lanyard').then(mod => { setLanyardComp(() => mod.default); setLanyardLoading(false) }).catch(() => {
      if (retryCount.current < 3) {
        retryCount.current++
        setTimeout(loadLanyard, 2000)
      } else {
        setLanyardLoading(false)
      }
    })
  }

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && window.innerWidth >= 1024) {
        loadLanyard()
        observer.disconnect()
      }
    }, { rootMargin: '300px' })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <section ref={sectionRef} id="recruit" className="bg-white pt-8 sm:pt-10 lg:pt-20 pb-20 sm:pb-16 lg:pb-24 overflow-hidden relative min-h-screen lg:min-h-0 flex flex-col lg:block"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(137, 137, 137, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(137, 137, 137, 0.1) 1px, transparent 1px)
        `,
        backgroundPosition: '0 0',
        backgroundSize: '90px 90px'
      }}
    >
<div className="hidden lg:block absolute top-0 right-[40%] bottom-0 left-0 [transform:translateY(-80px)_translateX(20px)]">
        {lanyardLoading && <div className="w-full h-full flex items-center justify-center"><span className="text-xs text-gray-400">Loading...</span></div>}
        {LanyardComp && <LanyardComp position={[0, 0, 20]} gravity={[0, -40, 0]} frontImage="https://ziro.oss-cn-shanghai.aliyuncs.com/card/222.webp" backImage="https://ziro.oss-cn-shanghai.aliyuncs.com/card/111.webp" />}
        <p className="absolute bottom-50 left-1/2 -translate-x-1/2 text-xs text-gray-400">↑ DRAG IT</p>
      </div>
      <div className="flex-1 flex flex-col justify-center lg:block">
      <div className="max-w-[1440px] mx-auto w-full lg:w-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            4
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            招新报名
          </span>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto lg:pl-[40%] -mt-[10px] lg:-mt-[60px]">
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-8 sm:mb-12">
            加入我们,<br />一起用代码创造<br className="hidden sm:inline" />{'{世界}'}
          </h2>
          <span className="text-[15px] sm:text-[17px] leading-[1.65] font-medium text-gray-900 mb-6">
            {'乐程软件工作室将持续秉持学术创新和项目实践双轮驱动的理念，不断追求卓越。在这里，无论你是技术小白，还是已有一定编程基础的潜力股，都能找到属于自己的舞台。我们为成员提供积极向上、充满挑战与成长机会的平台，鼓励大家相互学习、共同进步。'}
            <br />
            <br />
            {'如果你渴望在大学期间提升编程技能，参与实际项目开发，结交志同道合的朋友，为未来的职业发展或学术深造打下坚实基础，那么，不要犹豫，加入乐程软件工作室吧！'}
            <br />
            <br />
            {'我们期待与你一起，在代码的海洋中遨游，用技术创造无限可能，让青春在团队中绽放最耀眼的光芒！'}
          </span>
          <div className="space-y-3 mt-8 sm:mt-12">
            <div className="flex items-start gap-4 flex-col sm:flex-row">
              <div className="flex-1 space-y-3">
                <p className="text-[15px] sm:text-[17px] leading-[1.65] text-gray-500">
                  招新时间：2026年8月至10月
                </p>
                <p className="text-[15px] sm:text-[17px] leading-[1.65] text-gray-500">
                  招新对象：全体大一新生
                </p>
                <p className="text-[15px] sm:text-[17px] leading-[1.65] text-gray-500">
                  团队地址：明理楼C栋 10楼 C1010
                </p>
                <p className="text-[15px] sm:text-[17px] leading-[1.65] text-gray-500">
                  招新Q群：674764635
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src="https://ziro.oss-cn-shanghai.aliyuncs.com/two/Snipaste_2026-05-28_17-32-57.webp" alt="QQ群二维码" loading="lazy" className="w-[120px] sm:w-[140px] rounded-lg" />
                <p className="text-xs text-gray-400">乐程官方招新群</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block h-[15vh]"></div>
        </div>
      </div>
      </div>
    </section>
  )
}