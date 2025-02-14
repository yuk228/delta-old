import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleCheck, DatabaseBackup, Logs, ShieldCheck, UserCheck } from "lucide-react";
export default function Home() {
  return (
    <main className="px-5 md:px-10 lg:px-[300px]">
      <section className="pt-28 pb-20 text-center ">
        <div className="mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl">Recover Your Server <br />in Just One Click</h1>
          <p className="py-6 text-xl text-muted-foreground">Create the only Discord Bot that can get all the user data and even recover the server!</p>
          <div className="mx-auto flex justify-center gap-4">
            <Button><Link href="/login">Get Started Now</Link></Button>
            <Button variant="ghost"><Link href="/pricing">See Pricing</Link></Button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 mx-auto" >
        <div className="m-5 p-10 rounded-xl border text-card-foreground shadow border-border/0 bg-white dark:bg-zinc-900 hover:border-border transition-colors">
          <div className="flex gap-5 font-bold text-2xl">
            <DatabaseBackup size="30"/>
            <h2>Instant Server Backup / Recover</h2>
          </div>
          <div className="pt-5">
            <p className="text-xl text-muted-foreground ">You can backup and recover the server in just one click</p>
          </div>
        </div>
        <div className="m-5 p-10 rounded-xl border text-card-foreground shadow border-border/0 bg-white dark:bg-zinc-900 hover:border-border transition-colors">
          <div className="flex gap-5 font-bold text-2xl">
            <Logs size="30"/>
            <h2>Advanced Logging</h2>
          </div>
          <div className="pt-5">
            <p className="text-xl text-muted-foreground ">You can get user&apos;s gps location, ip address, useragent, and more</p>
          </div>
        </div>
        <div className="m-5 p-10 rounded-xl border text-card-foreground shadow border-border/0 bg-white dark:bg-zinc-900 hover:border-border transition-colors">
          <div className="flex gap-5 font-bold text-2xl">
            <ShieldCheck size="30"/>
            <h2>Security</h2>
          </div>
          <div className="pt-5">
            <p className="text-xl text-muted-foreground ">VPN / Proxy Blocker, Captcha, </p>
            <p className="flex pt-3 text-xl"><span className="pr-3"><CircleCheck color="#00ff80" /></span>Block VPN / Proxy</p>
            <p className="flex pt-3 text-xl"><span className="pr-3"><CircleCheck color="#00ff80" /></span>Captcha for Block Bots</p>
            <p className="flex pt-3 text-xl"><span className="pr-3"><CircleCheck color="#00ff80" /></span>Global ban to prevent abuse</p>
          </div>
        </div>
        <div className="m-5 p-10 rounded-xl border text-card-foreground shadow border-border/0 bg-white dark:bg-zinc-900 hover:border-border transition-colors">
          <div className="flex gap-5 font-bold text-2xl">
            <UserCheck size="30"/>
            <h2>Instant User Backup / Restore</h2>
          </div>
          <div className="pt-5">
            <p className="text-xl text-muted-foreground">You can also backup discord users and restore them in just minutes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
