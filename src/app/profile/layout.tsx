import React, { ReactNode } from "react";
import { Base } from "@/views/profile/Base";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6">
        <Base 
          children={children}
        />
      </div>
    </section>
  );
}
