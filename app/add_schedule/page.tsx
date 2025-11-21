"use client";

import { Suspense } from "react";
import AddScheduleInner from "./AddScheduleInner";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <AddScheduleInner />
    </Suspense>
  );
}
