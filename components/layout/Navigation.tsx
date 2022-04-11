export const Navigation = () => (
  <>
    <div className="flex flex-row items-center justify-between py-6 border-b-2 px-8 ">
      <div className="flex flex-row gap-8 items-center font-medium">
        <div className="w-16">
          <img src="./ableton-logo.png" alt="" className="object-contain" />
        </div>
        <span className="text-lg">Live</span>
        <span className="text-lg">Push</span>
        <span className="text-lg">Link</span>
        <span className="text-lg">Shop</span>
        <span className="text-lg">Packs</span>
        <span className="text-lg">Help</span>
        <span className="text-lg text-brand">More +</span>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <span className="text-lg text-blue-700">Try Live for free</span>
        <span className="text-sm">Log in or register</span>
      </div>
    </div>
    <div className="flex flex-row gap-8 py-6 px-8 font-medium">
      <span className="text-sm text-brand">About</span>
      <span className="text-sm">Jobs</span>
      <span className="text-sm">Apprenticeship</span>
    </div>
  </>
);
