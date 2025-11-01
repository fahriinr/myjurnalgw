import { Button } from "@/components/ui/button";
import { LuBookOpen } from "react-icons/lu";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <main className="flex flex-col items-center grow py-28">
        <div className="flex items-center gap-2">
          <span className="text-secondary-foreground ">
            <LuBookOpen size={55} className="text-primary" />
          </span>
          <h1 className="text-5xl text-secondary-foreground font-serif font-semibold transform scale-y-110">
            Daily Reflection
          </h1>
        </div>
        <p className="text-muted-foreground text-center text-xl mt-6 max-w-xl">
          Your personal space for mindful journaling. Start and end each day
          with intention.
        </p>
        <div className="flex items-center gap-4 mt-14">
          <Button
            variant="default"
            size="lg"
            className="text-md px-8 py-6 cursor-pointer"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-secondary-foreground px-8 py-6 text-md cursor-pointer"
          >
            Sign In
          </Button>
        </div>
        {/* 3 features */}
        <div className="flex  items-center gap-8 mt-27">
          <div className="flex flex-col items-center justify-center">
            <WiSunrise size={56} className="text-primary h-15" />
            <h2 className="text-xl font-semibold text-secondary-foreground">
              Morning Reflection
            </h2>
            <p className="text-muted-foreground text-center max-w-3xs text-sm mt-3">
              Set your intentions and express gratitude to start your day
              mindfully.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <TbSunset2 size={50} className="text-primary h-15" />
            <h2 className="text-xl font-semibold text-secondary-foreground">
              Morning Reflection
            </h2>
            <p className="text-muted-foreground text-center max-w-3xs text-sm mt-3">
              Review your day, celebrate wins, and learn from challenges.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <LuCalendarDays size={40} className="text-primary h-15" />
            <h2 className="text-xl font-semibold text-secondary-foreground">
              Morning Reflection
            </h2>
            <p className="text-muted-foreground text-center max-w-3xs text-sm mt-3">
              Build a meaningful archive of your thoughts and personal growth.
            </p>
          </div>
        </div>
      </main>
      <footer className="py-4 text-center border-muted">
        <p className="text-sm text-muted-foreground">
          Made by: Lokira Production
        </p>
      </footer>
    </div>
  );
}
