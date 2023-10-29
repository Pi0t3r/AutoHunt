import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Offers from "@/components/offers/Offers";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      <header className="relative">
        <picture>
          <source
            media="(min-width:740px)"
            srcSet="https://img.freepik.com/free-photo/beautiful-milky-way-night-sky_53876-139825.jpg?w=996&t=st=1697659362~exp=1697659962~hmac=376b829111308614822e6e92c7de9c5da8f3986c0a5f77398eae92689d5306bb"
          />
          <source media="(min-width:1015px)" srcSet="" />

          <img
            src="https://img.freepik.com/premium-photo/abstract-black-textured-background-with-scratches_130265-12474.jpg?w=740"
            alt=""
          />
          <div className="bg-gradient-to-r from-[#020024] via-[#0b0101] to-[#10505d] hidden absolute inset-0 z-50 min-[1015px]:block" />
        </picture>
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute top-1/2 left-1/2 z-10 text-white -translate-x-1/2 -translate-y-1/2 z-[51] lg:text-3xl lg:text-center">
          <p>
            Welcome to{" "}
            <span className="uppercase font-bold text-main">autohunt</span>
          </p>
          <p>The best site to find your dream car</p>
        </div>
      </header>
      <section>
        <Offers />
      </section>
    </main>
  );
}
