import { ArrowRightIcon } from 'lucide-react';

export default function CallToActionSection() {
    return (
        <section id="contact" className="w-full py-10 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="relative mx-auto w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B2B33] via-[#10404B] to-[#0B2B33] border border-[#02C39A]/20 px-6 py-12 sm:px-10 sm:py-16 text-center shadow-2xl">

                {/* Subtle glow */}
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#02C39A]/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">

                    <span className="mb-4 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#02C39A]">
                        Sapar bilan boshlang
                    </span>

                    <h2 className="max-w-2xl text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
                        Biznesingizni bitta tizimda boshqaring.
                    </h2>

                    <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
                        Buxgalteriya, savdo, HR va ombor — barchasi yagona platformada.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">

                        <button
                            className="
                                group flex items-center gap-3
                                rounded-xl bg-[#02C39A]
                                px-7 py-3.5
                                text-sm font-bold text-[#0B2B33]
                                transition-all duration-300
                                hover:bg-[#00D8A8]
                                hover:shadow-[0_0_30px_rgba(2,195,154,0.35)]
                                active:scale-95 cursor-pointer
                            "
                        >
                            Erta kirish so‘rash

                            <span className="flex size-6 items-center justify-center rounded-full bg-[#0B2B33]/10 transition-transform duration-300 group-hover:translate-x-0.5">
                                <ArrowRightIcon size={14} />
                            </span>
                        </button>

                        <div className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#02C39A]" />
                                <span className="relative inline-flex size-2 rounded-full bg-[#02C39A]" />
                            </span>

                            Hozir onlaynmiz
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}