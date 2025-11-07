import {
  ShieldCheck,
  Zap,
  Workflow,
  MessageCircle,
  Clock3,
  LineChart,
} from "lucide-react";

export const WhyChoose = () => {
  return (
    <section
      id="why-flexflow"
      className="relative overflow-hidden bg-background py-24 text-foreground sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.2),transparent_65%)]" />
      <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-32 right-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Why Choose FlexFlow AI
          </p>
          <h2 className="mt-4 text-3xl font-heading font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Enterprise-ready automations built for
            <span className="gradient-text ml-2">speed, trust, and scale.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            We combine voice intelligence, omnichannel chat, and workflow orchestration into one platform tailored to the pace of your business.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-card glow-border flex flex-col gap-6 rounded-3xl p-8 shadow-[0_0_30px_rgba(108,99,255,0.08)] dark:bg-white/5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                <Clock3 className="h-4 w-4 text-secondary" /> Always Available
              </span>
            </div>
            <div className="text-6xl font-heading font-semibold tracking-tight text-foreground dark:text-white">24/7</div>
            <p className="text-base text-muted-foreground">
              Autonomous voice and chat agents manage inquiries, bookings, and follow-ups across every channel—no downtime, no missed opportunities.
            </p>
          </div>

          <div className="glass-card glow-border flex flex-col gap-6 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,191,255,0.08)] dark:bg-white/5">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" /> Enterprise Security
            </div>
            <p className="text-xl font-heading font-semibold text-foreground">
              Hardened for regulated industries.
            </p>
            <p className="text-base text-muted-foreground">
              SOC2-ready processes, encrypted pipelines, and auditable automation ensure compliance while unlocking efficiency.
            </p>
          </div>

          <div className="glass-card glow-border flex flex-col gap-6 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,191,255,0.08)] dark:bg-white/5">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <Zap className="h-5 w-5 text-secondary" /> Lightning Fast
            </div>
            <p className="text-xl font-heading font-semibold text-foreground">
              Launch automations in days.
            </p>
            <p className="text-base text-muted-foreground">
              Pre-built playbooks, reusable agent templates, and managed integrations keep your roadmap shipping ahead of schedule.
            </p>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span>Build Speed</span>
                <span>Weeks, not quarters</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted/40">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-secondary" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-card glow-border col-span-1 flex flex-col gap-6 rounded-3xl p-8 shadow-[0_0_30px_rgba(108,99,255,0.08)] dark:bg-white/5">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <MessageCircle className="h-5 w-5 text-secondary" /> AI Voice Intelligence
            </div>
            <p className="text-base text-muted-foreground">
              Context-aware voice agents triage calls, capture intents, and book outcomes as if a human expert answered.
            </p>
            <div className="rounded-2xl border border-border bg-background/60 p-4 text-sm text-muted-foreground dark:border-white/10 dark:bg-black/40 dark:text-white/80">
              <div className="space-y-2">
                <div className="rounded-xl bg-muted/40 px-4 py-3 text-left dark:bg-white/5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary/80">Incoming Call</p>
                  <p className="mt-1 text-foreground dark:text-white/80">“Hi, I need to reschedule tomorrow’s consultation.”</p>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-muted/60 to-background px-4 py-3 text-left dark:from-[#14141E] dark:to-[#1C1C2A]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">FlexBot</p>
                  <p className="mt-1 text-foreground/80 dark:text-white/90">
                    “Absolutely. I’ve pulled up your file—would you like 3 PM on Thursday or Friday?”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card glow-border col-span-1 flex flex-col gap-6 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,191,255,0.08)] dark:bg-white/5">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <Workflow className="h-5 w-5 text-primary" /> Workflow Orchestration
            </div>
            <p className="text-base text-muted-foreground">
              Trigger downstream processes, sync CRMs, and launch analytics dashboards from a single automation spine.
            </p>
            <div className="flex h-full flex-col justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest dark:border-white/20 dark:bg-white/5">
                  Auth
                </span>
                <span className="h-1 flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest dark:border-white/20 dark:bg-white/5">
                  Billing
                </span>
                <span className="h-1 flex-1 bg-gradient-to-r from-secondary/60 to-transparent" />
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest dark:border-white/20 dark:bg-white/5">
                  Analytics
                </span>
                <span className="h-1 flex-1 bg-gradient-to-r from-primary/60 via-secondary/60 to-transparent" />
              </div>
            </div>
          </div>

          <div className="glass-card glow-border col-span-1 flex flex-col gap-6 rounded-3xl p-8 shadow-[0_0_30px_rgba(108,99,255,0.08)] dark:bg-white/5">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <LineChart className="h-5 w-5 text-secondary" /> MVP Excellence
            </div>
            <p className="text-base text-muted-foreground">
              Product-grade delivery with experimentation baked in—ship intelligent funnels, iterate with real data, and keep humans in the loop where it matters.
            </p>
            <div className="mt-auto rounded-2xl border border-border bg-background/70 p-6 text-foreground dark:border-white/10 dark:bg-black/40 dark:text-white">
              <p className="text-4xl font-heading font-semibold">+68%</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground dark:text-white/60">
                Faster go-live for FlexFlow clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

