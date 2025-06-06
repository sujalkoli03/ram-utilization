import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6 px-14">
      {/* Heading */}
      <h1 className="leading-none text-4xl text-center mb-6 font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        About Smart RAM Utilization
      </h1>

      {/* Problem Section */}
      <section className="mb-8 flex items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">The Problem</h2>
          <p className="text-lg text-gray-900 leading-relaxed text-justify">
            In today’s fast-paced digital world, we rely on software to work seamlessly, without delays. One of the key factors
            influencing system performance is the Windows built-in service <strong>SysMain</strong> (formerly known as <strong>Superfetch</strong>),
            responsible for preloading frequently used applications into memory for faster access. However, while SysMain can improve
            app launch times, it can also place a significant strain on system resources, particularly on devices with limited RAM and CPU capacity.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img src="problem.jpg" alt="Problem illustration" className="w-[250px] h-[250px] object-cover" />
        </div>
      </section>

      {/* Solution Section */}
      <section className="mb-8 flex items-center flex-row-reverse">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">The Solution</h2>
          <p className="text-lg text-gray-900 leading-relaxed text-justify">
            This project aims to optimize <strong>SysMain</strong> by using <strong>machine learning</strong> to predict which applications
            need to be preloaded based on usage patterns. By prioritizing the most relevant apps, we avoid unnecessary resource consumption
            and improve system performance without sacrificing speed. Instead of disabling <strong>SysMain</strong>, we enhance its functionality,
            ensuring that your applications launch faster, while your system remains responsive and resource-efficient.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img src="solution.jpg" alt="Problem illustration" className="w-[250px] h-[250px] object-cover" />          
        </div>
      </section>

      {/* How it Works Section */}
      <section className="mb-8 flex items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">How it Works</h2>
          <p className="text-lg text-gray-900 leading-relaxed text-justify">
            Our system leverages <strong>machine learning algorithms</strong> to analyze the user’s behavior and identify patterns in application
            usage. Based on this data, it intelligently prioritizes the preloading of the most important apps and optimizes the resource management
            of <strong>SysMain</strong>. As a result, your computer will be able to run efficiently even under heavy workloads, with applications
            ready to launch instantly.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
            <img src="works.jpg" alt="Problem illustration" className="w-[250px] h-[250px] object-cover" />          
        </div>
      </section>

      {/* Why it Matters Section */}
      <section className="mb-8 flex items-center flex-row-reverse">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Why it Matters</h2>
          <ul className="list-disc pl-6 text-lg text-gray-900 text-justify">
            <li><strong>Improved App Launch Speed:</strong> Get your apps ready faster without the usual trade-offs between system performance and speed.</li>
            <li><strong>Optimized Resource Usage:</strong> By reducing the load on CPU and RAM, our solution ensures your system runs more smoothly, especially on lower-end devices.</li>
            <li><strong>No Need to Disable SysMain:</strong> Instead of turning off <strong>SysMain</strong>, which results in slower apps, our approach optimizes its performance, giving you the best of both worlds.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
            <img src="matters.jpg" alt="Problem illustration" className="w-[250px] h-[250px] object-cover" />          
        </div>
      </section>

      {/* Closing Section */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-900 leading-relaxed text-justify">
          This project is the first step toward a smarter, more responsive Windows experience, making your daily tasks more efficient and your computing experience more enjoyable.
        </p>
      </section>
    </div>
  );
}

export default About;
