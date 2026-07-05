import Stack from './ui/Stack'

const aboutImages = [
  { src: '/about3.jpg', alt: 'About LEC 0' },
  { src: '/about1.jpg', alt: 'About LEC 1' },
  { src: '/about0.jpg', alt: 'About LEC 2' },
  { src: '/about2.jpg', alt: 'About LEC 3' },
]

export default function About() {
  return (
    <section id="about" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-44 overflow-hidden min-h-screen"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(137, 137, 137, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(137, 137, 137, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '90px 90px'
      }}
    >
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
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14 lg:mb-20">
            乐程，乐在探索，程向未来
          </h2>
        </div>

        {/* Content area */}
        <div className="px-5 sm:px-8 lg:px-12 -translate-y-[10px]">
          {/* Mobile / Tablet */}
          <div className="lg:hidden flex flex-col gap-6 sm:gap-8">
            <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900">
              乐程软件工作室自 2010 年 6 月创立以来，已在软件开发和作品开发领域深耕了十余年。我们是学生科研领域的佼佼者，致力于多方向的技术学习与人才培养，涵盖前后端开发、算法竞赛、机器学习、游戏开发等多个领域。<br /><br />
              团队目前有成员30余人，采取每周28小时考勤制度，定期开展例会和学习交流促进团队发展，形成良好学风。同时也积极组织参与各级别比赛，团队项目曾多次成功获学院立项，更获省、国赛奖项十余项。大家因对技术的热爱相聚于此，在尊重和包容的团队氛围中，积极分享想法、大胆展现自我，携手攻克一个又一个技术难题。<br /><br />
              通过乐程的学习与培养，部分成员保研至电子科大、川大等知名大学继续深造。也有部分成员就职于字节、腾讯、阿里、美团等互联网行业领军企业。我们将本着"学以致用，服务学校，走向社会"的宗旨，用优秀的软件和细致的服务为我们的数字化生活提供便利，也为团队和每位成员带来更好的学习空间与成长机会。
            </p>
            <div className="inline-flex items-center gap-2 bg-[#5227FF] text-white rounded-full px-6 py-3 text-sm font-medium self-end">
              <span>DRUG IT</span>
              <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center -rotate-45">
                <span className="text-[#5227FF] text-xs font-bold">&rarr;</span>
              </span>
            </div>
            <div className="aspect-[3/2] rounded-xl sm:rounded-2xl">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={aboutImages.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} className="w-full h-full object-cover pointer-events-none" />
                ))}
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid grid-cols-[1fr_48%] gap-6 xl:gap-8 items-stretch">
            <div className="flex flex-col justify-between">
<p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-gray-900">
              乐程软件工作室自 2010 年 6 月创立以来，已在软件开发和作品开发领域深耕了十余年。我们是学生科研领域的佼佼者，致力于多方向的技术学习与人才培养，涵盖前后端开发、算法竞赛、机器学习、游戏开发等多个领域。<br /><br />
              团队目前有成员30余人，采取每周28小时考勤制度，定期开展例会和学习交流促进团队发展，形成良好学风。同时也积极组织参与各级别比赛，团队项目曾多次成功获学院立项，更获省、国赛奖项十余项。大家因对技术的热爱相聚于此，在尊重和包容的团队氛围中，积极分享想法、大胆展现自我，携手攻克一个又一个技术难题。<br /><br />
              通过乐程的学习与培养，部分成员保研至电子科大、川大等知名大学继续深造。也有部分成员就职于字节、腾讯、阿里、美团等互联网行业领军企业。我们将本着"学以致用，服务学校，走向社会"的宗旨，用优秀的软件和细致的服务为我们的数字化生活提供便利，也为团队和每位成员带来更好的学习空间与成长机会。
            </p>
              <div className="inline-flex items-center gap-2 bg-[#5227FF] text-white rounded-full px-6 py-3 text-sm font-medium self-end mt-6">
                <span>DRUG IT</span>
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center -rotate-45">
                  <span className="text-[#5227FF] text-xs font-bold">&rarr;</span>
                </span>
              </div>
            </div>
            <div className="aspect-[3/2] rounded-2xl translate-x-[10px] -translate-y-[5px]">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={aboutImages.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} className="w-full h-full object-cover pointer-events-none" />
                ))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}