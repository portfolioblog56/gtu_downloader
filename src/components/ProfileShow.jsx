export default function ProfileShow() {
    return (
        <div className="flex items-center p-6 bg-white/10 dark:bg-black/20 backdrop-blur-lg pb-4 rounded-2xl shadow-2xl border border-white/20 dark:border-black/30 max-w-md mx-auto font-[Ubuntu]">
        <img
          loading="lazy"
          src="https://avatars.githubusercontent.com/u/99108074?v=4"
          alt="Profile Picture"
          className="w-20 h-20 rounded-full object-cover border-2 border-white/30 dark:border-black/40 shadow-md"
        />
        <div className="w-px h-16 bg-white/30 dark:bg-black/40 mx-6"></div>
        <div className="text-black w-1/2">
          <h1 className="text-sm uppercase tracking-wide opacity-70 dark:opacity-80">
            Build & Design
          </h1>
          <h2 className="text-xl font-semibold mb-1">Maniya Devagn</h2>
          <p className="text-sm opacity-80 dark:opacity-90">
            devagnmaniya611@gmail.com
          </p>
        </div>
      </div>
      
      
    );
};
