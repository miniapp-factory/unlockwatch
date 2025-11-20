"use client";

import { formatDistanceToNowStrict, parseISO } from "date-fns";

export default function UnlockCard({ unlock }: { unlock: any }) {
  const unlockDate = parseISO(unlock.date);
  const countdown = formatDistanceToNowStrict(unlockDate, { addSuffix: true });

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{unlock.token}</span>
        <span className="text-sm text-muted-foreground">{unlock.percent}%</span>
      </div>
      <div className="text-sm text-muted-foreground mb-2">
        {unlock.dollarValue} USD
      </div>
      <div className="text-sm text-muted-foreground mb-2">
        Impact Score: {unlock.impactScore}
      </div>
      <div className="text-sm text-muted-foreground">
        Unlocks in {countdown}
      </div>
    </div>
  );
}
