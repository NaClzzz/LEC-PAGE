import { useState, useEffect } from 'react'
import StaggeredMenu from './ui/StaggeredMenu'

const menuItems = [
  { label: 'Home', ariaLabel: '回到首页', link: '#hero' },
  { label: 'About', ariaLabel: '了解我们', link: '#about' },
  { label: 'Achievements', ariaLabel: '查看成就', link: '#achievements' },
  { label: 'Directions', ariaLabel: '技术方向', link: '#directions' },
  { label: 'Recruit', ariaLabel: '招新信息', link: '#recruit' },
]

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/NaClzzz/LEC-PAGE' },
]

export default function Navbar() {
  const base = import.meta.env.BASE_URL
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      logoUrl={`${base}favicon.svg`}
      logoText="乐程软件工作室"
      menuButtonColor="#111827"
      openMenuButtonColor="#111827"
      changeMenuColorOnOpen={!isMobile}
      colors={['#B497CF', '#5227FF']}
      accentColor="#5227FF"
      isFixed
    />
  )
}