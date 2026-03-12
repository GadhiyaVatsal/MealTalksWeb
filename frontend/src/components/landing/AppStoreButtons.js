export function AppStoreButtons({ size = "default" }) {
  const h = size === "small" ? "h-9" : "h-10";
  return (
    <div data-testid="app-store-buttons" className="flex items-center gap-3">
      {/* App Store */}
      <button
        data-testid="app-store-btn"
        className={`${h} px-4 bg-black rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors duration-200`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
        </svg>
        <div className="text-left">
          <div className="text-[7px] text-gray-300 leading-none">Download on the</div>
          <div className="text-white text-xs font-semibold leading-tight">App Store</div>
        </div>
      </button>

      {/* Google Play */}
      <button
        data-testid="google-play-btn"
        className={`${h} px-4 bg-black rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors duration-200`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.18 23.72C2.79 23.53 2.5 23.14 2.5 22.56V1.44C2.5 0.86 2.79 0.47 3.18 0.28L13.04 11.5L3.18 23.72Z" fill="#4285F4"/>
          <path d="M16.83 15.44L13.04 11.5L16.83 7.56L21.15 9.97C22.28 10.6 22.28 12.4 21.15 13.03L16.83 15.44Z" fill="#FBBC04"/>
          <path d="M16.83 7.56L13.04 11.5L3.18 0.28C3.64 0.05 4.22 0.1 4.86 0.46L16.83 7.56Z" fill="#34A853"/>
          <path d="M16.83 15.44L4.86 22.54C4.22 22.9 3.64 22.95 3.18 22.72L13.04 11.5L16.83 15.44Z" fill="#EA4335"/>
        </svg>
        <div className="text-left">
          <div className="text-[7px] text-gray-300 leading-none">GET IT ON</div>
          <div className="text-white text-xs font-semibold leading-tight">Google Play</div>
        </div>
      </button>
    </div>
  );
}
