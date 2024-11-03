import { Header } from "@/components/header";
import SideNav from "@/components/sidebar-05";
import Sidenav7 from "@/components/ui/sidevar-07";
import { title } from "@/config.shared";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: title() },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="">
      <div>
        <Sidenav7 />
      </div>
    </main>
  );
}
