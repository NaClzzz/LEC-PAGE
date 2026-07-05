import Lanyard from './Lanyard'

export default function Recruit() {
  return (
    <section id="recruit" className="bg-white pt-8 sm:pt-10 lg:pt-20 pb-12 sm:pb-16 lg:pb-24 overflow-hidden relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(137, 137, 137, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(137, 137, 137, 0.1) 1px, transparent 1px)
        `,
        backgroundPosition: '0 25px',
        backgroundSize: '90px 90px'
      }}
    >
<div className="hidden lg:block absolute top-0 right-[40%] bottom-0 left-0 [transform:translateY(-80px)_translateX(20px)]">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        <p className="absolute bottom-50 left-1/2 -translate-x-1/2 text-xs text-gray-400">↑ DRUG IT</p>
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
            <br />
            <br />
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
          <div className="hidden lg:block h-[15vh]"></div>
        </div>
      </div>
      <div className="lg:hidden h-[40vh] relative [transform:translateY(40px)]">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-gray-400">↑ DRUG IT</p>
      </div>
    </section>
  )
}