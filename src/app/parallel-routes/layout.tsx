import Card from "@/components/card";
import { ReactNode } from "react";

type Layout = {
  children: ReactNode;
  notifications: ReactNode;
  analytics: ReactNode;
  revenue: ReactNode;
};

export default function Layout({
  children,
  notifications,
  analytics,
  revenue,
}: Layout) {
  return (
    <main>
      {children}
      <div className="grid grid-cols-2 gap-5">
        <Card className="min-h-32">{notifications}</Card>
        <Card className="row-span-2">{analytics}</Card>
        <Card className="min-h-32">{revenue}</Card>
      </div>
    </main>
  );
}
