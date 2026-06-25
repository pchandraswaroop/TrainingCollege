import { Zap } from "lucide-react";
const Hero = () => {
  return (
    <main className="bg-[#f6f6f4] h-screen flex flex-col justify-center items-center gap-12 p-4">
      <div className="flex gap-2 rounded-3xl border border-emerald-800 px-2 py-1">
        <Zap size={20} className="fill-[#064431] stroke-[#064431]" />
        <div className="text-[#27473d] drop-shadow-lg">Create For Fast</div>
      </div>

      <div className="max-w-4xl text-[#103e2e] text-center text-6xl font-bold">
        One Team to Manage your Tools and Teams
      </div>
      <div className="max-w-3xl text-center text-lg text-[#103e2e]">
        Clause helps legal teams work faster, smarter and more efficiently,
        delivering the visibility and data-driven insights to mitigate risk and
        ensure compliance.
      </div>
      <div className="flex gap-10">
        <button className="bg-[#004635] px-6 py-4.5 rounded-2xl text-[#d1ed7e]">
          Start for Free
        </button>
        <button className="bg-[#ffffff] px-6 py-4.5 rounded-2xl text-[#103e2e]">
          Get a Demo
        </button>
      </div>
    </main>
  );
};

export default Hero;
