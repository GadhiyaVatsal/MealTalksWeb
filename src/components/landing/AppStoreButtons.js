export function AppStoreButtons() {
  return (
    <div data-testid="app-store-buttons" className="flex items-center gap-3 flex-shrink-0">
      {/* App Store */}
      <a href="#" data-testid="app-store-btn" aria-label="Download on the App Store">
        <img
          src="/apple.svg"
          alt="Download on the App Store"
          width={146}
          height={44}
          style={{ display: "block", imageRendering: "crisp-edges" }}
          className="hover:opacity-90 transition-opacity duration-200"
        />
      </a>

      {/* Google Play */}
      <a href="#" data-testid="google-play-btn" aria-label="Get it on Google Play">
        <img
          src="/gpay.svg"
          alt="Get it on Google Play"
          width={146}
          height={44}
          style={{ display: "block", imageRendering: "crisp-edges" }}
          className="hover:opacity-90 transition-opacity duration-200"
        />
      </a>
    </div>
  );
}
