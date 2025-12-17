import { Hero } from "./home-page/Hero";
import { Problem } from "./home-page/Problem";
import { Solution } from "./home-page/Solution";
import { TeacherRole } from "./home-page/TeacherRole";

function Home() {
  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <Problem />
      <Solution />
      <TeacherRole />
      {/*<div className="relative">
    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
    <LessonBuilder />
    <AIMentor />
    <StudyMode />
  </div>
  <GamifiedExamples onOpenLesson={setActiveLesson} />
  <Dashboards />
  <Architecture />
  <FutureXR />
  <Roadmap /> */}
    </main>
  );
}

export default Home;
