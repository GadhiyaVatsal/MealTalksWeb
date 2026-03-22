export default function PhoneMockup({ children, className = "", tilt = "" }) {
  return (
    <div className={`relative ${tilt} ${className}`}>
      <div className="w-[220px] md:w-[260px] bg-gray-900 rounded-[2.5rem] p-2 shadow-[0_20px_50px_-12px_rgba(61,40,27,0.2)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-20" />
        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden relative">
          {children}
        </div>
      </div>
    </div>
  );
}
