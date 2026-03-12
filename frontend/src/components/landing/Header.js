export default function Header() {
  return (
    <header data-testid="header" className="w-full py-5 px-6 md:px-12 lg:px-20 flex items-center justify-between relative z-50">
      <div className="dot-pattern w-20 h-20 absolute top-0 left-0 pointer-events-none" />

      <a href="/" data-testid="logo" className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-[#FF7A45] tracking-tight relative z-10">
        Meal talks
      </a>

      <button
        data-testid="launch-app-btn-header"
        className="px-6 py-2.5 rounded-full border-2 border-[#FF7A45] text-[#FF7A45] font-semibold text-sm
                   hover:bg-[#FF7A45] hover:text-white transition-all duration-300 ease-out
                   hover:shadow-[0_4px_20px_rgba(255,122,69,0.3)]"
      >
        Launch app
      </button>
    </header>
  );
}
