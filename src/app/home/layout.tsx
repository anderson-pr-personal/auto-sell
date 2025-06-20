import { Navigation } from "@/components/Navigation";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <main className="relative">

            {/* <TopMenuHome /> */}
            <div className="min-h-screen">{children}</div>
            <Navigation />
        </main>
    );
}