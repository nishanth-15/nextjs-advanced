import Card from "@/components/card";
import { ReactNode } from "react";

type Layout = {
  children: ReactNode;
  notifications: ReactNode;
  analytics: ReactNode;
  revenue: ReactNode;
  login: ReactNode;
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
  login,
}: Layout) {
  const isLoggedIn = Math.floor(Math.random() * 2) ? true : false;
  if (!isLoggedIn)
    return (
      <main className="h-screen flex">
        <Card className="min-h-96 aspect-square max-w-5xl mx-auto self-center">
          {login}
        </Card>
      </main>
    );

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



