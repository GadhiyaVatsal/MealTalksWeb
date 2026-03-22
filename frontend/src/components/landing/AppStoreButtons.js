export function AppStoreButtons() {
  return (
    <div data-testid="app-store-buttons" className="flex items-center gap-3 flex-shrink-0">
      {/* App Store */}
      <a href="#" data-testid="app-store-btn">
        <img
          src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/dafn03pi_apple.png"
          alt="Download on the App Store"
          className="h-11 md:h-12 w-auto rounded-lg hover:opacity-90 transition-opacity duration-200"
        />
      </a>

      {/* Google Play */}
      <a href="#" data-testid="google-play-btn">
        <img
          src="https://customer-assets.emergentagent.com/job_mealtalks-react/artifacts/phy3qe2u_gpay%201.png"
          alt="Get it on Google Play"
          className="h-11 md:h-12 w-auto rounded-lg hover:opacity-90 transition-opacity duration-200"
        />
      </a>
    </div>
  );
}
