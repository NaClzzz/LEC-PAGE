export default function Footer() {
  return (
    <footer id="footer" className="bg-[#2a2a2a] text-gray-300 pt-12 pb-6">
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
  )
}