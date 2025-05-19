import React from "react";

const CTASection = () => {
  return (
    <div className="text-center py-12 px-6 bg-[#f49c00] text-white">
      <h2 className="text-4xl tracking-tight font-bold mb-4">
        Ready to Get Started?
      </h2>
      <p className="mb-6 text-md">
        Transform your assessment workflow with Examli. Upload data, assess
        performance, generate insights — all in minutes.
      </p>
      <div className="space-x-4">
        <button className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-[#f49c00] px-6 py-1.5 font-semibold rounded-md shadow transition-all hover:scale-105 ">
          Schedule a Demo
        </button>
        <button className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-[#f49c00] px-6 py-1.5 font-semibold rounded-md shadow transition-all hover:scale-105 ">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};

export default CTASection;
