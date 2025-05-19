import {
  ClipboardList,
  Layers,
  BarChart2,
  LineChart,
  Upload,
  FolderPlus,
  Link,
  Brain,
} from "lucide-react";
import Panel1Image from "../assets/panel1.png";
import Panel2 from "../assets/panel2.png";
import Panel3 from "../assets/panel3.png";
import Panel4 from "../assets/panel4.png";
import FeatureSection from "../components/FeatureSection";
import CTASection from "../components/CTASection";

export default function HomePageExamli() {
  return (
    <div className="font-sans bg-gradient-to-b from-white to-orange-100">
      {/* Header Section */}
      <header className="bg-gradient-to-b from-[#f49c00] to-[#f8b645] text-white py-12 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl tracking-tight font-bold  mt-24 ">
            Examli transforms raw exam data
          </h1>
          <h1 className="text-6xl tracking-tight font-bold mb-6 ">
            into meaningful insights
          </h1>
          <p className="text-md max-w-3xl mx-auto mt-10 mb-6">
            Easily upload exam results, generate detailed reports, and get clear
            feedback at every level — from individual students to entire classes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-[#f49c00]  py-1.5 font-semibold rounded-md shadow transition-all hover:scale-105 w-44 h-12">
              Get Started
            </button>
            <button className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-[#f49c00]  py-1.5 font-semibold rounded-md shadow transition-all hover:scale-105 w-44 ">
              See How It Works
            </button>
          </div>
        </div>
      </header>

      {/* Why Examli Section */}
      <section className="mt-24  max-w-6xl mx-auto">
        <h2 className="text-4xl tracking-tight font-bold mb-3">Why Examli?</h2>
        <p className="text-md text-gray-700 mx-2">
          Accurate Assessments, Meaningful Insights. Examli transforms raw exam
          data into powerful reports for educators, administrators, and
          students. With AI-generated summaries, easy uploads, and class-wide
          analytics, schools can now understand student performance like never
          before.
        </p>
      </section>

      <section className="max-w-6xl  mx-auto space-y-24 mt-12">
        <FeatureSection
          title="Student-Level Reports"
          description="These reports give students and parents a clear view of academic performance across subjects and exams. Educators can use them to provide targeted support and track individual growth."
          points={[
            "Subject-wise marks and percentage",
            "Total score and overall percentage",
            "Grades per subject",
            "AI-generated summary highlighting strengths and areas of improvement",
            "Comparison with previous exams to understand progress",
            "Unique, secure link to access the report anytime",
          ]}
          isReversed={false}
          bgColor="bg-gradient-to-r from-transparent via-amber-100/40  to-amber-100/30"
          imgSrc={Panel1Image}
          icon={<ClipboardList size={48} className="text-orange-500" />}
        />

        <FeatureSection
          title="Section-Level Reports"
          description="Educators can get a full picture of how an entire section (e.g., Class 8A) is performing. This helps identify group trends, struggling areas, and exceptional students. It also guides teachers in adjusting lesson plans or extra help sessions."
          points={[
            "List of top 5 and bottom 5 performers",
            "Subject-wise performance analysis for the section",
            "Identify subjects most students are excelling in or finding difficult",
            "AI-generated textual summary of the section's performance",
            "Useful for PTMs, academic planning, and resource allocation",
          ]}
          isReversed={true}
          bgColor="bg-gradient-to-l from-transparent via-indigo-100/40  to-indigo-100/40"
          imgSrc={Panel2}
          icon={<Layers size={48} className="text-blue-500" />}
        />

        <FeatureSection
          title="Class-Level Reports"
          description="School administrators and academic heads can compare different sections within the same class (e.g., 8A vs 8B vs 8C) to evaluate teaching effectiveness and student learning outcomes across the board."
          points={[
            "Performance comparison of all sections in a class",
            "Identify which sections are doing well and which need support",
            "Compare subject-level performance across sections",
            "AI-generated summaries for class-level trends",
            "Insightful data to guide teacher training and academic interventions",
          ]}
          isReversed={false}
          bgColor="bg-gradient-to-r from-transparent via-emerald-100/40  to-emerald-100/40"
          imgSrc={Panel3}
          icon={<BarChart2 size={48} className="text-green-500" />}
        />

        <FeatureSection
          title="AI-Based Feedback"
          description="Instead of just showing numbers, Examli uses AI to interpret results and provide meaningful suggestions. This saves teachers time and gives students actionable insights on how to improve."
          points={[
            "Personalized feedback per student, per subject",
            "Text summaries highlighting areas of improvement",
            "Performance trends across exams",
            "Feedback at section and class levels to guide academic planning",
            "Helps teachers focus on mentoring rather than manual report writing",
          ]}
          isReversed={true}
          bgColor="bg-gradient-to-l from-transparent via-purple-100/40 to-purple-500/10"
          imgSrc={Panel4}
          icon={<LineChart size={48} className="text-purple-500" />}
        />
      </section>

      {/* How It Works */}
      <section className="py-8 px-8 mt-20">
        <div className="max-w-5xl mx-auto bg-white/70  text-gray-300 p-4 rounded-md shadow-lg shadow-zinc-400/10">
          <h2 className="text-4xl tracking-tight font-bold text-center mb-5 text-zinc-700">
            How Examli Works
          </h2>
          <div className="flex flex-col gap-2 justify-center max-w-4xl mx-auto">
            <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-100 p-3 rounded-lg shadow-md justify-start">
              <div className="bg-white/70 p-2 rounded-full shadow-sm flex items-center justify-center w-10 h-10">
                <FolderPlus className="h-6 w-6 text-[#f49c00]" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Educators add academic year, classes, and sections
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-100 p-3 rounded-lg shadow-md justify-start">
              <div className="bg-white/70 p-2 rounded-full shadow-sm flex items-center justify-center w-10 h-10">
                <Upload className="h-6 w-6 text-[#f49c00]" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Upload a spreadsheet with student marks
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-100 p-3 rounded-lg shadow-md justify-start">
              <div className="bg-white/70 p-2 rounded-full shadow-sm flex items-center justify-center w-10 h-10">
                <LineChart className="h-6 w-6 text-[#f49c00]" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Examli processes the data and generates reports instantly
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-100 p-3 rounded-lg shadow-md justify-start">
              <div className="bg-white/70 p-2 rounded-full shadow-sm flex items-center justify-center w-10 h-10">
                <Link className="h-6 w-6 text-[#f49c00]" />
              </div>
              <p className="text-base font-medium text-gray-800">
                Reports are accessible via secure links or downloadable
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-100 p-3 rounded-lg shadow-md justify-start">
              <div className="bg-white/70 p-2 rounded-full shadow-sm flex items-center justify-center w-10 h-10">
                <Brain className="h-6 w-6 text-[#f49c00]" />
              </div>
              <p className="text-base font-medium text-gray-800">
                AI interprets the results and creates summaries for easier
                understanding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-8 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote className="italic text-lg text-gray-700 mb-4">
            “Examli has made our assessment process seamless. Teachers can now
            focus on teaching, not compiling reports.”
          </blockquote>
          <p className="font-semibold text-gray-800">
            — Principal, The Sun School, Vizianagaram
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection/>
    </div>
  );
}
