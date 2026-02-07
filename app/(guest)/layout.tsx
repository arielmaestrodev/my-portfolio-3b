import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}