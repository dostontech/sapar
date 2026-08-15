import Image from 'next/image';
import Link from 'next/link';
import {
    Users,
    ShieldCheck,
    Landmark,
    Code,
    Calculator,
    FileSpreadsheet,
    Sparkles,
    CheckCircle2,
    ArrowLeft,
    Building2,
    Lock,
    Award,
    Check,
    Send,
} from 'lucide-react';

export const metadata = {
    title: "Biz haqimizda | SaparERP Jamoasi",
    description: "Local Fintech Team with Banking, Software Engineering, and Accounting Expertise — SaparERP",
};

const fullTeam = [
    {
        name: 'Doston Abdulboriev',
        role: 'Product & Technology Lead',
        subtitle: 'Banking & Fintech Software Engineer',
        image: '/assets/doston.png',
        bio: 'Fintech dasturchi (6+ yil tajriba). OCBC Bank va Bank of Singapore kabi yirik xalqaro banklar uchun kredit va raqamli bank platformalarini ishlab chiqqan.',
        saparContribution: 'Sapar mahsulot ko‘rinishi, texnik arxitekturasi, xavfsiz bank integratsiyalari va frontend dasturlashiga rahbarlik qiladi.',
        strengths: [
            'Real banking va kredit tizimlari tajribasi',
            'Xavfsiz fintech frontend arxitekturasi (React, Next.js, TypeScript)',
            'Maker/checker va bank ichki jarayonlari meʼmorchiligi',
            'PostgreSQL, Node.js, NestJS va korporativ xavfsizlik',
        ],
        telegram: 'https://t.me/doston_abdulboriev',
        telegramUser: '@doston_abdulboriev',
        icon: Landmark,
    },
    {
        name: 'Zoirbek Tukhtasinov',
        role: 'Backend & Financial Automation',
        subtitle: 'Economics & Python/Django Developer',
        image: '/assets/Zoirbek.png',
        bio: 'Iqtisodiyot va backend dasturlash uyg‘unlashgan mutaxassis. Python, Django, SQL va Telegram botlar orqali moliyaviy hisobotlarni avtomatlashtirish tajribasiga ega.',
        saparContribution: 'Backend arxitekturasi, ma’lumotlar bazasi, skoring mantiqi va moliyaviy hisob-kitoblarni avtomatlashtirishga javobgar.',
        strengths: [
            'Python va Django backend tizimlari',
            'SQL maʼlumotlar bazasi loyihalash va optimallashtirish',
            'Milliy hisob standartlari va moliyaviy hisobot mantiqi',
            'Biznes jarayonlarni avtomatlashtirish',
        ],
        telegram: 'https://t.me/zoirbek_tukhtasinov',
        telegramUser: '@zoirbek_tukhtasinov',
        icon: Code,
    },
    {
        name: 'Ulugbek Sharofiddinov',
        role: 'Accounting & Financial Analysis',
        subtitle: 'Auditor, Bosh buxgalter & ACCA O‘qituvchisi',
        image: '/assets/ulugbek.png',
        bio: 'ANQO LLC bosh buxgalteri va Fermodern o‘quv markazida 1C hamda ACCA bo‘yicha o‘qituvchi. Moliyaviy hisobotlar, soliq qonunchiligi va audit bo‘yicha chuqur amaliyotchi.',
        saparContribution: 'Moliyaviy tahlil, risk baholash metodologiyasi, 1C maʼlumotlar ko‘chiruvi va banklar bilan muloqot mantiqini taʼminlaydi.',
        strengths: [
            'Buxgalteriya, audit va soliq komplayens',
            'O‘zbekiston Milliy hisob standartlari (BHMS)',
            'ACCA Financial Reporting tajribasi',
            '1C dasturiy taʼminoti amaliyoti',
        ],
        telegram: 'https://t.me/ulugbek_sharofiddinov',
        telegramUser: '@ulugbek_sharofiddinov',
        icon: Calculator,
    },
    {
        name: 'Javoxir Qodirov',
        role: 'Financial Operations & Docs',
        subtitle: 'Buxgalteriya & ACCA Talabasi',
        image: '/assets/javohir.png',
        bio: 'Buxgalteriya yordamchisi va ACCA talabasi. Hujjatlar oqimi, kadrlar va moliyaviy operatsiyalar bilan birga web frontend ko‘nikmalariga ega.',
        saparContribution: 'Moliyaviy hujjatlar oqimi, buxgalteriya jadvallari va mijozlar moliyaviy maʼlumotlarini tizimlashtirishga hissa qo‘shadi.',
        strengths: [
            'Buxgalteriya hujjatlari oqimi va hisoboti',
            'ACCA taʼlimi va moliyaviy mantiq',
            'Microsoft 365 / Kengaytirilgan Excel',
            'Frontend web integratsiyasi',
        ],
        telegram: 'https://t.me/javoxir_qodirov',
        telegramUser: '@javoxir_qodirov',
        icon: FileSpreadsheet,
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen py-10 md:py-16 px-4 max-w-7xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#028090] hover:text-[#0B2B33] transition"
                >
                    <ArrowLeft className="size-4" />
                    <span>Bosh sahifaga qaytish</span>
                </Link>
            </div>

            {/* Page Header */}
            <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5F2] border border-[#DCE9E5] text-[#028090] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    <Sparkles className="size-3.5 text-[#02C39A]" />
                    <span>Sapar Team · Pitch Deck</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
                    Local Fintech Team with Banking, Software Engineering, and Accounting Expertise
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 leading-relaxed max-w-3xl mx-auto">
                    A Uzbekistan-focused team combining secure fintech engineering, accounting knowledge, backend automation, and local financial workflow understanding.
                </p>
            </div>

            {/* Why Our Team Can Build This - Banner */}
            <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#0B2B33] via-[#10404B] to-[#0B2B33] text-white p-6 sm:p-8 md:p-10 border border-[#02C39A]/20 shadow-xl">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#02C39A] text-xs font-bold tracking-wide mb-3">
                        <ShieldCheck className="size-4" />
                        Why Our Team Can Build This
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                        We combine real banking software experience with Uzbekistan financial and accounting knowledge.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 text-xs sm:text-sm">
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                            <span className="font-bold text-[#02C39A]">Doston:</span> Banking & fintech software, loan workflows, product architecture.
                        </div>
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                            <span className="font-bold text-[#02C39A]">Zoirbek:</span> Backend systems, Python/Django, SQL, process automation.
                        </div>
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                            <span className="font-bold text-[#02C39A]">Ulugbek:</span> Accounting, tax compliance, risk assessment, 1C, ACCA.
                        </div>
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                            <span className="font-bold text-[#02C39A]">Javoxir:</span> Financial documentation, accounting workflows, ACCA study.
                        </div>
                    </div>
                    <p className="mt-5 text-xs sm:text-sm text-slate-300 italic border-t border-white/10 pt-3.5">
                        &ldquo;Our team understands both sides: how banks need secure, reliable software and how Uzbekistan financial data must be interpreted for credit and affordability decisions.&rdquo;
                    </p>
                </div>
            </div>

            {/* Team Members Detailed Profiles */}
            <div className="mt-12 space-y-6 sm:space-y-8">
                {fullTeam.map((member, idx) => {
                    const Icon = member.icon;
                    return (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
                        >
                            {/* Left: Photo & Quick Meta */}
                            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className="relative size-40 sm:size-48 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200/80 shadow-md">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="200px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="mt-3.5">
                                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#EAF5F2] text-[#028090] text-xs font-bold uppercase tracking-wider">
                                        {member.role}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1.5">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                                        {member.subtitle}
                                    </p>

                                    {/* Telegram button */}
                                    <a
                                        href={member.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-[#028090] hover:bg-[#0B2B33] text-white transition-all text-xs font-semibold"
                                    >
                                        <Send className="size-3.5" />
                                        <span>Telegram</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right: Detailed Experience & Strengths */}
                            <div className="lg:col-span-8 space-y-3.5">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Tajriba va Maʼlumot
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>

                                <div className="pt-2.5 border-t border-slate-100">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#028090]">
                                        Loyihadagi Asosiy Vazifasi
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                                        {member.saparContribution}
                                    </p>
                                </div>

                                <div className="pt-2.5 border-t border-slate-100">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                        Asosiy Ko‘nikmalar (Relevant Strengths)
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {member.strengths.map((strength, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700"
                                            >
                                                <Check className="size-3.5 text-[#028090] shrink-0 mt-0.5" />
                                                <span>{strength}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center bg-[#F4FAF8] rounded-3xl p-8 sm:p-10 border border-[#DCE9E5]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2B33]">
                    Biz bilan bog&apos;laning yoki demo oling
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                    SaparERP jamoasi sizning biznes jarayonlaringizni to‘liq raqamlashtirishga tayyor.
                </p>
                <div className="mt-5 flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-6 py-2.5 rounded-xl font-bold text-sm bg-[#028090] text-white hover:bg-[#10404B] transition shadow-md"
                    >
                        Bosh sahifaga qaytish
                    </Link>
                </div>
            </div>
        </main>
    );
}
