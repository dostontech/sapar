'use client';

import {
    TrendingDown,
    DollarSign,
    Layers,
    Check,
    X,
    AlertCircle,
    Sparkles,
    ShieldAlert,
    ArrowRight,
} from 'lucide-react';

const costItems = [
    {
        tool: '1C:Buxgalteriya',
        category: 'Buxgalteriya',
        cost: '~1,800,000 so\'m',
        note: 'Litsenziya, server va dasturchi xizmati',
    },
    {
        tool: 'Didox / Faktura.uz',
        category: 'EDO',
        cost: '~600,000 so\'m',
        note: 'Hujjatlar oqimi va tarif paketlari',
    },
    {
        tool: 'HR jadval + qo\'shimcha vaqt',
        category: 'HR',
        cost: '~1,200,000 so\'m',
        note: 'Qo\'lda hisoblash va yo\'qotilgan ish soatlari',
    },
    {
        tool: 'CRM yo\'qligi tufayli yo\'qotilgan lidlar',
        category: 'Savdo',
        cost: '~2,000,000 so\'m',
        note: 'E&apos;tibordan chetda qolgan mijozlar yo\'qotishi',
    },
];

export default function CostComparisonSection() {
    return (
        <section id="pricing-cost" className="w-full py-10 md:py-16 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5F2] border border-[#DCE9E5] text-[#028090] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    <TrendingDown className="size-3.5 text-[#02C39A]" />
                    <span>Haqiqiy xarajat</span>
                    <span className="text-slate-400 font-normal">|</span>
                    <span className="text-slate-500 font-normal">The Real Cost</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 tracking-tight">
                    Alohida dasturlar qanchaga tushadi?
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 leading-relaxed">
                    Quyidagi raqamlar — 15 kishilik jamoa uchun taxminiy misol. SaparERP narxlari yakunlangach yangilanadi.
                </p>
            </div>

            {/* High Contrast Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-8 sm:mt-12 items-stretch">
                {/* Left Card: Tarqoq Dasturlar (Breakdown Table) */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                            <div className="flex items-center gap-2.5">
                                <div className="size-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                                    <ShieldAlert className="size-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">
                                        Tarqoq dasturlar xarajatlari
                                    </h3>
                                    <p className="text-xs text-slate-500">15 kishilik jamoa uchun oylik chiqim</p>
                                </div>
                            </div>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100">
                                Qimmat & Tarqoq
                            </span>
                        </div>

                        {/* Breakdown Rows */}
                        <div className="mt-6 space-y-3">
                            {costItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition"
                                >
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-slate-800">
                                                {item.tool}
                                            </span>
                                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-medium">
                                                {item.category}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
                                    </div>
                                    <div className="text-sm font-bold text-rose-600 sm:text-right shrink-0">
                                        {item.cost}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Total & Note */}
                    <div className="mt-8 pt-5 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm font-semibold text-slate-900">Jami oylik xarajat</div>
                                <div className="text-[11px] text-slate-400 mt-0.5">
                                    * Namunaviy misol — real narxlar bilan almashtiriladi
                                </div>
                            </div>
                            <div className="text-2xl font-black text-rose-600">
                                ~5,600,000 so&apos;m
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Card: High Contrast SaparERP Solution */}
                <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2B33] via-[#10404B] to-[#0B2B33] text-white p-6 md:p-8 shadow-2xl flex flex-col justify-between border border-[#02C39A]/20">
                    {/* Decorative radial glows */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 size-60 rounded-full bg-[#02C39A]/20 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-60 rounded-full bg-[#028090]/25 blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#02C39A]/15 border border-[#02C39A]/30 text-[#02C39A] text-xs font-bold tracking-wide">
                            <Sparkles className="size-3.5" />
                            SaparERP Yagona Obunasi
                        </div>

                        <h3 className="text-2xl font-bold text-white mt-4">
                            Barcha 8 ta modul — bitta hisobda
                        </h3>

                        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                            Ortiqcha litsenziyalar, qo&apos;shimcha integratsiya xarajatlari va yo&apos;qotilgan lidlarsiz yagona unifikatsiyalangan yechim.
                        </p>

                        {/* Price Display */}
                        <div className="mt-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
                            <span className="text-xs font-semibold text-[#02C39A] uppercase tracking-wider">
                                Maxsus start narxi
                            </span>
                            <div className="text-4xl md:text-5xl font-black text-white mt-1 tracking-tight">
                                ??? <span className="text-lg font-normal text-slate-300">so&apos;m/oy</span>
                            </div>
                            <p className="text-xs text-slate-300 mt-2">
                                SaparERP narxi joriy etilmoqda — bir subscription, barcha modullar.
                            </p>
                        </div>

                        {/* Value checklist */}
                        <ul className="mt-6 space-y-2.5">
                            <li className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                                <div className="size-4.5 rounded-full bg-[#02C39A] text-[#0B2B33] flex items-center justify-center shrink-0">
                                    <Check className="size-3 stroke-[3]" />
                                </div>
                                <span>Barcha 8 modul (CRM, HR, Buxgalteriya, EDO, POS...)</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                                <div className="size-4.5 rounded-full bg-[#02C39A] text-[#0B2B33] flex items-center justify-center shrink-0">
                                    <Check className="size-3 stroke-[3]" />
                                </div>
                                <span>E-IMZO va DSQ to&apos;g&apos;ridan-to&apos;g&apos;ri integratsiyasi</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-xs md:text-sm text-slate-200">
                                <div className="size-4.5 rounded-full bg-[#02C39A] text-[#0B2B33] flex items-center justify-center shrink-0">
                                    <Check className="size-3 stroke-[3]" />
                                </div>
                                <span>Cheklovsiz yangilanishlar va texnik yordam</span>
                            </li>
                        </ul>
                    </div>

                    {/* Action */}
                    <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                        <a
                            href="#contact"
                            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#02C39A] text-[#0B2B33] hover:bg-[#028090] hover:text-white transition-all shadow-lg shadow-[#02C39A]/20"
                        >
                            <span>Kutish ro&apos;yxatiga qo&apos;shiling</span>
                            <ArrowRight className="size-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
