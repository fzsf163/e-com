import {title} from "@/config.shared";
import type {MetaFunction} from "@remix-run/node";
import SideNav from "@/components/sidebar-05";

export const meta: MetaFunction = () => {
    return [
        {title: title()},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <main className="">
            <div>
                <SideNav></SideNav>
            </div>
        </main>
    );
}
