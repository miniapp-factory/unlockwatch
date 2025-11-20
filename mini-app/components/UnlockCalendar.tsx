"use client";

import { useEffect, useState } from "react";
import UnlockCard from "./UnlockCard";
import { getUnlocks } from "@/lib/unlocks";

export default function UnlockCalendar() {
  const [unlocks, setUnlocks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUnlocks();
      setUnlocks(data);
    }
    fetchData();
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Upcoming Unlocks (Next 7 Days)</h2>
      <div className="grid gap-4">
        {unlocks.map((unlock: any) => (
          <UnlockCard key={unlock.id} unlock={unlock} />
        ))}
      </div>
    </section>
  );
}
