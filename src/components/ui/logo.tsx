
import { Sparkles } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    {/* Animated gradient ring */}
    <div className="relative w-10 h-10 flex items-center justify-center ">
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-violet-600 opacity-60 blur-[6px] animate-pulse" />
      <span className="absolute inset-0 rounded-full border-2 border-primary animate-spin-slow" />
      <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-xl z-10">
        <span className="text-white text-2xl font-extrabold font-lato tracking-widest drop-shadow-lg ps-1">O</span>
      </div>
    </div>
     <h2 className="text-3xl ms-[-9px] font-extrabold bg-clip-text text-transparent font-[santoshi] bg-gradient-to-r from-white to-purple-500">
       mButani
        </h2>
    <Sparkles className="w-6 h-6 text-primary animate-bounce ml-1 drop-shadow" />
  </div>
);

export default Logo;