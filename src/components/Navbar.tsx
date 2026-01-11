import { ChevronDown, Apple } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-background">
      <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-nav border border-border">
        <span className="text-2xl">👩</span>
        <span className="font-semibold text-foreground">妈妈闹钟</span>
      </div>

      <div className="hidden md:flex items-center gap-1 px-2 py-2 bg-card rounded-xl shadow-nav border border-border">
        <NavLink>主页</NavLink>
        <NavLink>功能</NavLink>
        <NavLink>帮助</NavLink>
        <NavLink>博客</NavLink>
        <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors">
          中文
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <button className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity shadow-nav">
        下载 App
      </button>
    </nav>
  );
};

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors">
    {children}
  </a>
);

export default Navbar;
