"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, Bot, BrainCircuit, BriefcaseBusiness, Check, ChevronDown,
  CircleCheck, Clock3, FileSearch, Menu, MessageSquareText, Search, ShieldCheck,
  Sparkles, Star, Users, X, Zap
} from "lucide-react";

const features = [
  { icon: BrainCircuit, title: "AI Candidate Matching", text: "Match candidates against skills, experience and role requirements with intelligent scoring." },
  { icon: FileSearch, title: "Automated Screening", text: "Turn hundreds of applications into a focused shortlist without hours of manual review." },
  { icon: Bot, title: "AI Recruiter", text: "Give your team an always-on recruiting copilot for sourcing, screening and follow-ups." },
  { icon: Users, title: "Recruitment CRM", text: "Manage candidates, jobs, applications and hiring pipelines from one workspace." },
  { icon: Clock3, title: "Interview Management", text: "Coordinate interviews, collect feedback and keep every stakeholder aligned." },
  { icon: BarChart3, title: "Recruitment Analytics", text: "See pipeline health, hiring velocity and candidate insights in real time." },
];

const steps = [
  ["01", "Create your job", "Add your requirements or let AI turn a brief into a complete job profile."],
  ["02", "Activate TalentFlow", "AI analyzes candidates, skills and experience against what the role really needs."],
  ["03", "Review your shortlist", "See match scores, strengths and potential gaps before you decide who moves forward."],
  ["04", "Hire with confidence", "Run interviews, collect feedback and move the right candidate into your hiring workflow."],
];

function Logo() {
  return <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight text-slate-950"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"><Zap size={19} fill="currentColor" /></span><span className="text-lg">TalentFlow<span className="text-blue-600"> AI</span></span></a>;
}

function DashboardMockup() {
  const candidates = [
    ["SJ", "Sarah Johnson", "Senior Product Designer", "96%", "bg-violet-100 text-violet-700"],
    ["DM", "David Morgan", "Senior Product Designer", "93%", "bg-blue-100 text-blue-700"],
    ["AK", "Amina Khan", "Product Designer", "89%", "bg-emerald-100 text-emerald-700"],
  ];
  return <div className="dashboard-shadow overflow-hidden rounded-3xl border border-white/70 bg-white">
    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
      <div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white"><Zap size={15} fill="currentColor" /></span><span className="text-sm font-semibold">TalentFlow AI</span></div>
      <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /><span className="text-xs text-slate-500">AI active</span><div className="ml-3 h-7 w-7 rounded-full bg-slate-200" /></div>
    </div>
    <div className="grid min-h-[390px] grid-cols-[145px_1fr]">
      <aside className="hidden border-r border-slate-100 bg-slate-50/70 p-4 sm:block">
        <div className="space-y-1 text-xs font-medium">
          {["Dashboard", "Jobs", "Candidates", "Applications", "Interviews", "Analytics"].map((item, i) => <div key={item} className={`rounded-lg px-3 py-2.5 ${i === 0 ? "bg-blue-50 text-blue-700" : "text-slate-500"}`}>{item}</div>)}
        </div>
        <div className="mt-20 rounded-xl bg-slate-900 p-3 text-white"><Sparkles size={14} /><p className="mt-2 text-[10px] leading-4 text-slate-300">AI found 14 high-fit candidates today.</p></div>
      </aside>
      <main className="min-w-0 p-5 sm:p-6">
        <div className="flex items-start justify-between"><div><p className="text-xs text-slate-400">Open position</p><h3 className="mt-1 text-base font-bold">Senior Product Designer</h3></div><button className="rounded-lg bg-slate-950 px-3 py-2 text-[10px] font-semibold text-white">View job</button></div>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">{[["128", "Candidates"], ["14", "Shortlisted"], ["5", "Interviews"]].map(([n,l]) => <div key={l} className="rounded-xl border border-slate-100 bg-slate-50 p-3"><p className="text-lg font-bold">{n}</p><p className="text-[9px] text-slate-400">{l}</p></div>)}</div>
        <div className="mt-5 rounded-2xl border border-slate-100 p-4">
          <div className="mb-3 flex items-center justify-between"><p className="text-xs font-semibold">Top AI matches</p><span className="text-[10px] text-blue-600">View all</span></div>
          <div className="space-y-2">{candidates.map(([initials, name, role, score, cls]) => <div key={name} className="flex items-center gap-3 rounded-xl bg-slate-50 p-2.5"><span className={`grid h-9 w-9 place-items-center rounded-full text-[10px] font-bold ${cls}`}>{initials}</span><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-semibold">{name}</p><p className="truncate text-[9px] text-slate-400">{role}</p></div><div className="text-right"><p className="text-[11px] font-bold text-emerald-600">{score}</p><p className="text-[8px] text-slate-400">match</p></div></div>)}</div>
        </div>
      </main>
    </div>
  </div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const faqs = [
    ["What is TalentFlow AI?", "TalentFlow AI is an intelligent recruitment platform that helps teams source, screen, match and manage candidates from one workspace."],
    ["Can I use TalentFlow with my existing hiring process?", "Yes. TalentFlow is designed to complement your workflow. You can use AI assistance where it saves time while keeping hiring decisions with your team."],
    ["Does AI make the hiring decision?", "No. TalentFlow provides structured insights and recommendations. Your recruiters and hiring managers remain in control of final decisions."],
    ["Is TalentFlow suitable for recruitment agencies?", "Yes. The platform can support internal talent teams, growing companies and agencies managing multiple roles and candidate pipelines."],
  ];

  return <div id="top" className="overflow-hidden">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-500 md:flex"><a href="#platform" className="hover:text-slate-950">Platform</a><a href="#how-it-works" className="hover:text-slate-950">How it works</a><a href="#features" className="hover:text-slate-950">Features</a><a href="#pricing" className="hover:text-slate-950">Pricing</a></nav>
        <div className="hidden items-center gap-3 md:flex"><a href="#contact" className="px-3 py-2 text-sm font-semibold text-slate-600">Sign in</a><a href="#contact" className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5">Get started <ArrowRight className="ml-1 inline" size={15} /></a></div>
        <button aria-label="Open menu" className="md:hidden" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </div>
      {menu && <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-medium"><a href="#platform" onClick={() => setMenu(false)}>Platform</a><a href="#how-it-works" onClick={() => setMenu(false)}>How it works</a><a href="#features" onClick={() => setMenu(false)}>Features</a><a href="#pricing" onClick={() => setMenu(false)}>Pricing</a><a href="#contact" className="rounded-xl bg-slate-950 px-4 py-3 text-center text-white">Get started</a></div></div>}
    </header>

    <main>
      <section className="grid-bg relative px-5 pb-20 pt-32 lg:pb-28 lg:pt-40"><div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl"><div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-blue-700 shadow-sm"><Sparkles size={14} /> AI-powered recruitment, reimagined <ArrowRight size={13} /></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 }} className="text-5xl font-black tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">Hire smarter.<br /><span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Build stronger teams.</span></motion.h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">TalentFlow AI transforms recruitment with intelligent candidate sourcing, screening, matching and hiring automation—so your team can focus on people, not paperwork.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#contact" className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">Start hiring with AI <ArrowRight className="ml-1 inline" size={16} /></a><a href="#platform" className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50">Explore the platform</a></div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-400"><span>✓ AI matching</span><span>✓ Automated screening</span><span>✓ Recruitment CRM</span><span>✓ Human-in-the-loop</span></div>
        </div>
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }} className="mx-auto mt-14 max-w-5xl lg:mt-18"><DashboardMockup /></motion.div></div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-10"><div className="mx-auto max-w-5xl"><p className="text-center text-xs font-semibold uppercase tracking-[.18em] text-slate-400">Built for modern hiring teams</p><div className="mt-6 grid grid-cols-2 gap-6 text-center sm:grid-cols-4"><div><p className="text-3xl font-black">3×</p><p className="mt-1 text-xs text-slate-400">faster workflows</p></div><div><p className="text-3xl font-black">85%</p><p className="mt-1 text-xs text-slate-400">less manual screening</p></div><div><p className="text-3xl font-black">24/7</p><p className="mt-1 text-xs text-slate-400">AI assistance</p></div><div><p className="text-3xl font-black">1</p><p className="mt-1 text-xs text-slate-400">hiring workspace</p></div></div></div></section>

      <section id="platform" className="px-5 py-24 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2"><div><span className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">The problem</span><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Recruiting shouldn't feel like searching for a needle in a haystack.</h2><p className="mt-5 max-w-xl leading-7 text-slate-500">Too many applications, too much manual work and too little visibility. TalentFlow AI turns a fragmented hiring process into an intelligent, measurable workflow.</p><div className="mt-8 space-y-4">{[[Search,"Too many candidates","Find the people who actually match the role."],[Clock3,"Too much manual work","Automate repetitive screening and follow-ups."],[CircleCheck,"Hard to find the right fit","Understand strengths, gaps and fit at a glance."]].map(([Icon,title,text]) => { const I=Icon as typeof Search; return <div key={title as string} className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600"><I size={18}/></span><div><h3 className="font-bold">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text as string}</p></div></div>})}</div></div><div className="glow relative rounded-3xl border border-slate-200 bg-white p-5"><div className="rounded-2xl bg-slate-950 p-6 text-white"><div className="flex items-center justify-between"><div><p className="text-xs text-slate-400">AI recruitment command center</p><h3 className="mt-1 text-xl font-bold">Your hiring, in one view.</h3></div><div className="rounded-lg bg-white/10 p-2"><BrainCircuit size={19}/></div></div><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/5 p-4"><p className="text-xs text-slate-400">Match quality</p><p className="mt-2 text-3xl font-black">94%</p><div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full w-[94%] rounded-full bg-blue-400" /></div></div><div className="rounded-2xl bg-white/5 p-4"><p className="text-xs text-slate-400">Hiring velocity</p><p className="mt-2 text-3xl font-black">+38%</p><p className="mt-2 text-[10px] text-emerald-300">↑ vs last month</p></div></div><div className="mt-3 rounded-2xl bg-white/5 p-4"><div className="flex justify-between text-xs"><span className="text-slate-300">Candidate pipeline</span><span className="text-blue-300">Live</span></div><div className="mt-5 flex items-end gap-2">{[42,62,51,78,67,88,74,96,82,100].map((h,i)=><div key={i} className="flex-1 rounded-t bg-blue-400/80" style={{height:`${h}px`}} />)}</div></div></div></div></div></section>

      <section id="features" className="bg-white px-5 py-24 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">One intelligent platform</span><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Everything your recruitment team needs.</h2><p className="mt-4 text-slate-500">From the first search to the final interview, TalentFlow brings your hiring workflow into one intelligent workspace.</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map((f,i)=>{const I=f.icon; return <motion.div key={f.title} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-800 transition group-hover:bg-blue-600 group-hover:text-white"><I size={20}/></span><h3 className="mt-5 font-bold">{f.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{f.text}</p><a href="#contact" className="mt-5 inline-flex items-center text-xs font-bold text-blue-600 opacity-0 transition group-hover:opacity-100">Learn more <ArrowRight className="ml-1" size={13}/></a></motion.div>})}</div></div></section>

      <section id="how-it-works" className="px-5 py-24 lg:py-32"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><span className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">How it works</span><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">From job description to hire in minutes.</h2></div><div className="mt-14 grid gap-4 md:grid-cols-4">{steps.map(([n,title,text])=><div key={n} className="relative rounded-2xl border border-slate-200 bg-white p-6"><span className="text-xs font-black text-blue-600">{n}</span><h3 className="mt-12 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></section>

      <section className="px-5 py-10"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white sm:px-12"><div className="mx-auto max-w-3xl"><Sparkles className="mx-auto text-blue-400" size={26}/><h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Meet your AI recruiting copilot.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">Ask TalentFlow to find your best candidates, explain a match, summarize interviews or surface what your pipeline needs next.</p><div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur"><div className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 text-sm text-slate-500"><MessageSquareText size={17} className="text-blue-600"/><span>Find the 10 strongest candidates for our Python role...</span><span className="ml-auto grid h-8 w-8 place-items-center rounded-lg bg-slate-950 text-white"><ArrowRight size={14}/></span></div><div className="mt-3 flex items-center gap-2 px-2 text-[10px] text-slate-500"><Sparkles size={12} className="text-blue-400"/> TalentFlow AI is analyzing 128 candidates...</div></div></div></div></section>

      <section id="pricing" className="px-5 py-24 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">Simple pricing</span><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Start small. Scale when you’re ready.</h2></div><div className="mx-auto mt-12 grid max-w-5xl gap-4 lg:grid-cols-3">{[["Starter","$49","For small teams",["3 active jobs","AI candidate matching","Resume screening","Candidate management"]],["Growth","$149","For growing teams",["15 active jobs","AI recruitment agent","Automated screening","Advanced analytics","Interview management"]],["Enterprise","Custom","For larger organizations",["Unlimited jobs","Custom workflows","API & integrations","SSO & advanced controls","Dedicated support"]]].map(([name,price,desc,items],i)=><div key={name} className={`rounded-2xl border p-7 ${i===1?"border-blue-500 bg-slate-950 text-white shadow-2xl shadow-blue-500/10":"border-slate-200 bg-white"}`}><div className="flex items-center justify-between"><h3 className="font-bold">{name}</h3>{i===1&&<span className="rounded-full bg-blue-500/20 px-2.5 py-1 text-[10px] font-bold text-blue-300">POPULAR</span>}</div><p className={`mt-2 text-sm ${i===1?"text-slate-400":"text-slate-500"}`}>{desc}</p><p className="mt-6 text-4xl font-black">{price}<span className={`text-sm font-medium ${i===1?"text-slate-500":"text-slate-400"}`}>{price!=="Custom"&&" / month"}</span></p><ul className="mt-7 space-y-3">{(items as string[]).map(x=><li key={x} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-blue-500"/>{x}</li>)}</ul><a href="#contact" className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-bold ${i===1?"bg-blue-600 text-white hover:bg-blue-500":"bg-slate-950 text-white hover:bg-slate-800"}`}>{i===2?"Talk to sales":"Get started"}</a></div>)}</div></div></section>

      <section className="border-y border-slate-200 bg-white px-5 py-24"><div className="mx-auto max-w-3xl"><div className="text-center"><span className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">FAQ</span><h2 className="mt-4 text-4xl font-black tracking-tight">Questions, answered.</h2></div><div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">{faqs.map(([q,a],i)=><div key={q}><button onClick={()=>setFaq(faq===i?null:i)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-bold sm:px-6"><span>{q}</span><ChevronDown size={17} className={`shrink-0 transition ${faq===i?"rotate-180":""}`}/></button>{faq===i&&<div className="px-5 pb-5 text-sm leading-6 text-slate-500 sm:px-6">{a}</div>}</div>)}</div></div></section>

      <section id="contact" className="px-5 py-20"><div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-16 text-center text-white sm:px-12"><h2 className="text-4xl font-black tracking-tight sm:text-5xl">Your next great hire is already out there.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">TalentFlow AI helps your team find them faster, with less manual work and more confidence.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="mailto:hello@talentflow.ai" className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-xl">Book a demo <ArrowRight className="ml-1 inline" size={15}/></a><a href="#pricing" className="rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white">View pricing</a></div></div></section>
    </main>

    <footer className="border-t border-slate-200 bg-white px-5 py-12"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]"><div><Logo/><p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">AI-powered recruitment for modern teams. Hire smarter. Build stronger teams.</p></div><div><p className="text-xs font-bold uppercase tracking-wider">Platform</p><div className="mt-4 space-y-3 text-sm text-slate-500"><a className="block hover:text-slate-950" href="#features">AI Matching</a><a className="block hover:text-slate-950" href="#features">Screening</a><a className="block hover:text-slate-950" href="#features">Recruitment CRM</a></div></div><div><p className="text-xs font-bold uppercase tracking-wider">Company</p><div className="mt-4 space-y-3 text-sm text-slate-500"><a className="block hover:text-slate-950" href="#contact">About</a><a className="block hover:text-slate-950" href="#contact">Contact</a><a className="block hover:text-slate-950" href="#contact">Careers</a></div></div><div><p className="text-xs font-bold uppercase tracking-wider">Resources</p><div className="mt-4 space-y-3 text-sm text-slate-500"><a className="block hover:text-slate-950" href="#how-it-works">How it works</a><a className="block hover:text-slate-950" href="#pricing">Pricing</a><a className="block hover:text-slate-950" href="#contact">Book a demo</a></div></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row"><span>© 2026 TalentFlow AI. All rights reserved.</span><span>AI-assisted. Human-led.</span></div></footer>
  </div>;
}
