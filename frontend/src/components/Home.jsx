import React from 'react';

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center pt-12 pl-12 text-wrap text-white">
        <div className="space-y-6 text-center leading-relaxed">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r pb-4 from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Facing sluggish app launches?
          </h1>

          <h1 className="leading-none text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            We know the culprit— 
            <span className="bg-gradient-to-br from-red-600 to-orange-600 text-transparent text-3xl font-bold bg-clip-text"> SysMain </span> 
            <br />and now, you do too.
          </h1>

          <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Worried about your system's performance? 
          </p>

          <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Relax, Coz we've caught, fixed, and optimized it for you.
          </p>
        </div>
      </div>

      <div className="flex py-10 "> 
        <div className="w-1/3 flex justify-center items-center pl-12">
          <img src="/darkblue.jpg" alt="SysMain optimization" className="w-full h-auto p-4 rounded-lg" />
        </div>
        <div className="w-2/3 text-justify text-lg font-semibold text-blue-800 p-12">
          Our solution uses extensive machine learning methods to improve the efficiency of Windows' built-in SysMain (sometimes called Superfetch), which is in charge of preloading commonly used apps. Our optimization methodology automatically analyzes program usage trends and prioritizes prefetching just the most important apps, eliminating unimportant load, whereas SysMain frequently slows down systems with limited resources owing to excessive memory and CPU utilization. As a result, the system is quicker, more effective, and more adept at striking a balance between resource needs and performance. Our enhanced SysMain guarantees that your programs are ready to run immediately without sacrificing system responsiveness, so you can wave goodbye to the typical trade-offs between speed and efficiency.
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
};

export default Home;
