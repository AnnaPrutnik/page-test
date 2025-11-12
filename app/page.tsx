import { Hero } from "@/src/components/hero/Hero";
import { Profile } from "@/src/components/profile/Profile";
import { Team } from "@/src/components/team/Team";
import { Benefits } from "@/src/components/benefits/Benefits";
import { Testimonials } from "@/src/components/testimonials/Testimonials";

export default function Home() {
    return (
        <>
            <Hero />
            <Profile />
            <Team />
            <Benefits />
            <Testimonials />
        </>
    );
}
