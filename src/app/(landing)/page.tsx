import { Heading } from "@/components/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {Check} from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { MockDiscordUI } from "@/components/mock-discord-ui";
import { AnimatedList, AnimatedListItem } from "@/components/magicui/animated-list";
import { DiscordMessage } from "@/components/discord-message";

const page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto items-center flex flex-col gap-10">
            <div className="">
              <Heading>
                <span>Real-Time Saas Insight</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">Delivered to Your Discord</span>
              </Heading>
            </div>
            <p className="text-base/7 max-w-prose text-center text-gray-600 text-pretty">PingPanda is the easiest way to monitor your SaaS. Get instant notification for <span className="font-semibold text-gray-700">sales, new users, or any other event</span>{" "}sent directly to ur Discord</p>
            <ul className="flex flex-col space-y-2 text-base/7 text-gray-600 text-left items-start">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once use forever",
                "Track sales, new users, or any other event",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-brand-700"/>
                  {item}
                </li>
              )) }
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton href="/sign-up" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">Start For Free Today</ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700"/>
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI> 
                <AnimatedList>
                  <AnimatedListItem>
                    <DiscordMessage avatarSrc="/brand-asset-profile-picture.png" 
                      avaterAlt="PingPanda"
                      username="PingPanda"
                      timestamp="Today 12:30PM"
                      badgeText="Sign Up"
                      badgeColor="#43b582"
                      title="👤 New user signed up"
                      content={{
                        name: "Mateo Ortiz",
                        email: "m.ortix.example.com"
                      }}
                    />
                    <DiscordMessage avatarSrc="/brand-asset-profile-picture.png" 
                      avaterAlt="PingPanda"
                      username="PingPanda"
                      timestamp="Today 1:30PM"
                      badgeText="Sign Up"
                      badgeColor="#faa61a"
                      title="💰 Payment received"
                      content={{
                        amount: "$49.00",
                        email: "zoe.ortix.example.com",
                        plan: "PRO"
                      }}
                    />
                    <DiscordMessage avatarSrc="/brand-asset-profile-picture.png" 
                      avaterAlt="PingPanda"
                      username="PingPanda"
                      timestamp="Today 6:30PM"
                      badgeText="Milestone"
                      badgeColor="#5865f2"
                      title="🚀 Revenue Milestone Achieved"
                      content={{
                        recurringRevenue: "$5.0000 USD",
                        growth: "+8.2%",
                      }}
                    />
                  </AnimatedListItem>
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default page;