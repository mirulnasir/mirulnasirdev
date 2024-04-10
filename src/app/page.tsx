import { Button } from "@/components/ui/button";
import Image from "next/image";
import HelloDisplay from "./_components/hello-display";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HelloDisplay />
    </main>
  );
}
