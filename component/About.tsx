const STATS = [
  {
    value: "11",
    suffix: "+",
    label: "Original Shows",
  },
  {
    value: "142",
    suffix: "K+",
    label: "Active Users",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-[120px] bg-black px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        
        <div className="relative rounded-3xl overflow-hidden bg-white/5">
          <video
            src="/Phone scroll.mp4"
            className="w-full h-[300px] md:h-[480px] object-cover block brightness-90"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#df4119]/10 to-transparent pointer-events-none" />
        </div>

        
        <div className="flex flex-col">
          <header>
            <span className="inline-block bg-white/5 border border-white/15 px-[18px] py-[7px] rounded-full text-xs font-semibold tracking-widest uppercase text-white/50 mb-7">
              About Gutargoo+
            </span>
            <h2 className="sr-only">About Our Platform</h2>
          </header>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-white/90 font-medium mb-5">
            Experience stories that feel close to home.{" "}
            <strong className="text-[#df4119] font-bold">Original Series</strong>{" "}
            in your language.
          </p>

          <p className="text-[17px] leading-relaxed text-white/60 mb-8">
            We bring you high-quality, addictive short series tailored for your
            phone. Whether you have 5 minutes or 5 hours, dive into a world of
            endless entertainment.
          </p>


          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mt-2 p-8 bg-white/5 border border-white/10 rounded-2xl">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="font-extrabold text-[40px] text-white leading-none">
                    {stat.value}
                    <span className="text-[#df4119] text-[22px]">
                      {stat.suffix}
                    </span>
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>


                {index !== STATS.length - 1 && (
                  <div
                    className="h-[1px] w-[50px] md:w-[1px] md:h-[50px] bg-white/10"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}