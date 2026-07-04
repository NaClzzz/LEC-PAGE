import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
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
        <ScrollReveal
          baseOpacity={0}
          baseRotation={2}
          enableBlur={true}
          containerClassName="px-5 sm:px-8 lg:px-12 !my-0"
          textClassName="!text-[clamp(1.5rem,4vw,3.2rem)] !font-medium !leading-[1.12] !tracking-[-0.02em] !text-gray-900 !mb-12 sm:!mb-16 lg:!mb-28"
        >
          乐程，一个有付泽东的软件工作室
        </ScrollReveal>

        {/* Content area */}
        <div className="px-5 sm:px-8 lg:px-12">
          {/* Mobile / Tablet */}
          <div className="lg:hidden flex flex-col gap-6 sm:gap-8">
            <ScrollReveal
              baseOpacity={0}
              baseRotation={1}
              enableBlur={true}
              containerClassName="!my-0"
              textClassName="!text-[15px] sm:!text-[17px] !leading-[1.6] !font-medium !text-gray-900 !m-0"
            >
              乐程软件工作室自 2010 年 6 月创立以来，已在软件开发和作品开发领域深耕了十余年。我们是学生科研领域的佼佼者，专注于软件、网站和作品开发，技术方向广泛，涵盖泛前后端开发、算法竞赛、机器学习、游戏开发等多个领域。目前，工作室拥有 40 余名成员，大家因对技术的热爱相聚于此，在尊重和包容的团队氛围中，积极分享想法、大胆展现自我，携手攻克一个又一个技术难题。
            </ScrollReveal>
            <img src="/about1.jpg" alt="About LEC Studio" className="w-full aspect-[3/2] rounded-xl sm:rounded-2xl object-cover" />
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[1fr_48%] gap-6 xl:gap-8 items-start">
            <ScrollReveal
              baseOpacity={0}
              baseRotation={1}
              enableBlur={true}
              containerClassName="!my-0"
              textClassName="!text-[16px] sm:!text-[18px] !leading-[1.65] !font-medium !text-gray-900 !m-0"
            >
              乐程软件工作室自 2010 年 6 月创立以来，已在软件开发和作品开发领域深耕了十余年。我们是学生科研领域的佼佼者，专注于软件、网站和作品开发，技术方向广泛，涵盖泛前后端开发、算法竞赛、机器学习、游戏开发等多个领域。目前，工作室拥有 40 余名成员，大家因对技术的热爱相聚于此，在尊重和包容的团队氛围中，积极分享想法、大胆展现自我，携手攻克一个又一个技术难题。
            </ScrollReveal>
            <img src="/about1.jpg" alt="About LEC Studio" className="w-full aspect-[3/2] rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}