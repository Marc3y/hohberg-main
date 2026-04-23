import { BottomBar } from "@/components/bottom-bar";
import DatenschutzSection from "@/components/datenschutz/datenschutz";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { TopBar } from "@/components/top-bar";

export default function Page() {
    return (
      <div className="min-h-screen bg-[#F8F6F1] flex flex-col">
        <TopBar />
        <Navigation />
        <main className="flex-1 flex flex-col">
          <DatenschutzSection />
          <Footer />
          <BottomBar />
        </main>
      </div>
    )
  }