import React from "react";
import AboutImage from "../assets/features.png";
export default function AboutPageExamli() {
  return (
    <div className="font-sans text-gray-800">
      {/* Main Content */}
      <main className=" py-10 max-w-6xl mx-auto">
        <section className="mb-10">
          <h2 className="text-3xl tracking-tight font-semibold mb-2">
            Our Mission
          </h2>
          <p className="mx-2">
            At Examli, we believe that assessment should be more than just
            numbers. Our mission is to empower educators, students, and
            administrators with clear, actionable insights that help every
            learner reach their full potential.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl tracking-tight font-semibold mb-2">
            Who We Are
          </h2>
          <p className="mx-2">
            Examli is built by a team passionate about education and technology.
            We understand the challenges schools face when managing exams,
            analyzing results, and providing meaningful feedback. Our platform
            combines simplicity and advanced AI technology to make assessment
            easy, transparent, and impactful.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl tracking-tight font-semibold mb-4">
            What Makes Examli Different
          </h2>
          <ul className="list-disc list-inside space-y-0.5 mx-2">
            <li>
              <span className="font-bold text-lg">User-Friendly Design:</span>{" "}
              We focus on making the platform intuitive for educators and
              students of all technical backgrounds.
            </li>
            <li>
              <span className="font-bold text-lg">AI-Powered Insights:</span>{" "}
              Beyond raw data, our AI interprets results to provide personalized
              feedback, helping teachers tailor their approach and students
              understand how to improve.
            </li>
            <li>
              <span className="font-bold text-lg">
                Comprehensive Reporting:
              </span>{" "}
              Examli delivers detailed reports at student, section, and class
              levels, enabling targeted interventions and academic planning.
            </li>
            <li>
              <span className="font-bold text-lg">
                Data Security & Privacy:
              </span>{" "}
              We prioritize the security of your data with encrypted storage and
              controlled access, ensuring trust and compliance.
            </li>
          </ul>
        </section>

        {/* Trying new  */}
        <section className="mb-10">
  <div
    className="h-full w-full bg-[#f49c00] rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 flex flex-col items-center"
  >
    <div className="w-full rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
        <div className="w-full rounded-md flex flex-col items-center justify-center bg-zinc-700/60 shadow-lg shadow-zinc-900/50">
          <img
            src={AboutImage}
            alt="Examli panel"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl text-zinc-800/90 tracking-tight font-semibold mb-4">
            What Makes Examli Different
          </h3>
          <ul className="list-disc list-inside space-y-2 mx-2 text-stone-800">
            <li>
              <span className="font-bold text-lg">User-Friendly Design:</span>{' '}
              We focus on making the platform intuitive for educators and
              students of all technical backgrounds.
            </li>
            <li>
              <span className="font-bold text-lg">AI-Powered Insights:</span>{' '}
              Beyond raw data, our AI interprets results to provide
              personalized feedback, helping teachers tailor their approach
              and students understand how to improve.
            </li>
            <li>
              <span className="font-bold text-lg">Comprehensive Reporting:</span>{' '}
              Examli delivers detailed reports at student, section, and
              class levels, enabling targeted interventions and academic
              planning.
            </li>
            <li>
              <span className="font-bold text-lg">Data Security & Privacy:</span>{' '}
              We prioritize the security of your data with encrypted
              storage and controlled access, ensuring trust and compliance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        <section>
          <h2 className="text-3xl tracking-tight font-semibold mb-2">
            Our Vision
          </h2>
          <p className="mx-2">
            We envision a future where every student receives personalized
            guidance based on data-driven insights, and every educator has the
            tools to unlock their students’ potential efficiently.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f49c00] text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Examli. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
