import { useState } from "react";
import { AIMentor } from "./home-page/AIMentor";
import { Hero } from "./home-page/Hero";
import { LessonBuilder } from "./home-page/LessonBuilder";
import { Problem } from "./home-page/Problem";
import { Solution } from "./home-page/Solution";
import { StudyMode } from "./home-page/StudyMode";
import { TeacherRole } from "./home-page/TeacherRole";
import { GamifiedExamples } from "./home-page/GamifiedExamples";
import { DemoModal } from "@/components/demo/DemoModal";
import { Dashboards } from "./home-page/DashBoards";
import { Architecture } from "./home-page/Architecture";
import { FutureXR } from "./home-page/FutureXR";
import { Roadmap } from "./home-page/Roadmap";

function Home() {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  return (
    <>
      <main className="flex flex-col gap-0">
        <Hero />
        <Problem />
        <Solution />
        <TeacherRole />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <LessonBuilder />
          <AIMentor />
          <StudyMode />
        </div>
        <GamifiedExamples onOpenLesson={setActiveLesson} />
        <Dashboards />
        <Architecture />
        <FutureXR />
        <Roadmap />
      </main>
      {activeLesson && (
        <DemoModal
          lessonId={activeLesson}
          onClose={() => setActiveLesson(null)}
        />
      )}
    </>
  );
}

export default Home;
