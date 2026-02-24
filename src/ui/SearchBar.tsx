import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full">
      <div className="relative h-[60px] rounded-full border-2 border-[#FFFFFF33] shadow-[0px_8px_10px_-6px_#0000001A] bg-white/70 backdrop-blur-sm flex items-center px-6">
        
        <Search size={22} className="text-[#99A1AF]" />

        <input
          type="text"
          placeholder="Search for questions..."
          className="ml-4 w-full bg-transparent outline-none text-base placeholder:text-[#0A0A0A80]"
        />
      </div>
    </div>
  );
}