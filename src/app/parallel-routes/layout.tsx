import Card from "@/components/card";
import { ReactNode } from "react";

type Layout = {
  children: ReactNode;
  notifications: ReactNode;
  analytics: ReactNode;
  revenue: ReactNode;
};

{
  /*
  Must define default.tsx for all slots or else if we navigate to some sub-route which is not defined by any one of the slots then the 404 page will be shown.
  */
}

export default function Layout({
  children,
  notifications,
  analytics,
  revenue,
}: Layout) {
  return (
    <main>
      <div className="flex items-center flex-col gap-4 justify-center max-w-5xl w-full mx-auto">
        {children}
        <div className="grid grid-cols-2 gap-5 w-full">
          <Card className="min-h-32">{analytics}</Card>
          <Card className="row-span-2">{notifications}</Card>
          <Card className="min-h-32">{revenue}</Card>
        </div>
      </div>
    </main>
  );
}
