import React from "react";

export default function AboutPageExamli() {
  return (
    <div className="font-sans text-gray-800">
      {/* Main Content */}
      <main className="px-6 py-10 max-w-5xl mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            At Examli, we believe that assessment should be more than just
            numbers. Our mission is to empower educators, students, and
            administrators with clear, actionable insights that help every
            learner reach their full potential.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p>
            Examli is built by a team passionate about education and technology.
            We understand the challenges schools face when managing exams,
            analyzing results, and providing meaningful feedback. Our platform
            combines simplicity and advanced AI technology to make assessment
            easy, transparent, and impactful.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            What Makes Examli Different
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>User-Friendly Design:</strong> We focus on making the
              platform intuitive for educators and students of all technical
              backgrounds.
            </li>
            <li>
              <strong>AI-Powered Insights:</strong> Beyond raw data, our AI
              interprets results to provide personalized feedback, helping
              teachers tailor their approach and students understand how to
              improve.
            </li>
            <li>
              <strong>Comprehensive Reporting:</strong> Examli delivers detailed
              reports at student, section, and class levels, enabling targeted
              interventions and academic planning.
            </li>
            <li>
              <strong>Data Security & Privacy:</strong> We prioritize the
              security of your data with encrypted storage and controlled
              access, ensuring trust and compliance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
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
