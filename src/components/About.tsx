import TiltedCard from './TiltedCard'

export default function About() {
  return (
    <section id="about" className="bg-white pt-16 sm:pt-20 lg:pt-52 pb-16 sm:pb-20 lg:pb-44 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            1
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            关于我们
          </span>
        </div>

        {/* Heading */}
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28">
            乐程，一个有付泽东的软件工作室
          </h2>
        </div>

        {/* Content area */}
        <div className="px-5 sm:px-8 lg:px-12">
          {/* Mobile / Tablet */}
          <div className="lg:hidden flex flex-col gap-6 sm:gap-8">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900">
              乐程软件工作室自 2010 年 6 月创立以来，已在软件开发和作品开发领域深耕了十余年。我们是学生科研领域的佼佼者，专注于软件、网站和作品开发，技术方向广泛，涵盖泛前后端开发、算法竞赛、机器学习、游戏开发等多个领域。<br /><br />
              目前，工作室拥有 40 余名成员，大家因对技术的热爱相聚于此，在尊重和包容的团队氛围中，积极分享想法、大胆展现自我，携手攻克一个又一个技术难题。
            </p>
            <div className="inline-flex items-center gap-2 bg-[#5227FF] text-white rounded-full px-6 py-3 text-sm font-medium self-end">
              <span>About our studio</span>
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center -rotate-45">
                <span className="text-[#5227FF] text-xs font-bold">&rarr;</span>
              </span>
            </div>
            <div className="aspect-[3/2] rounded-xl sm:rounded-2xl">
              <TiltedCard
                imageSrc="/about1.jpg"
                altText="About LEC Studio"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[1fr_48%] gap-6 xl:gap-8 items-stretch">
            <div className="flex flex-col justify-between">
              <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-gray-900">
                乐程软件工作室自 2010 年 6 月创立以来，已在软件开发和作品开发领域深耕了十余年。我们是学生科研领域的佼佼者，致力于多方向的技术学习与人才培养，涵盖前后端开发、算法竞赛、机器学习、游戏开发等多个领域。<br /><br />
                目前，工作室拥有 40 余名成员，大家因对技术的热爱相聚于此，在尊重和包容的团队氛围中，积极分享想法、大胆展现自我，携手攻克一个又一个技术难题。
              </p>
              <div className="inline-flex items-center gap-2 bg-[#5227FF] text-white rounded-full px-6 py-3 text-sm font-medium self-end mt-6">
                <span>ABOUT US</span>
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center -rotate-45">
                  <span className="text-[#5227FF] text-xs font-bold">&rarr;</span>
                </span>
              </div>
            </div>
            <div className="aspect-[3/2] rounded-2xl">
              <TiltedCard
                imageSrc="/about1.jpg"
                altText="About LEC Studio"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}