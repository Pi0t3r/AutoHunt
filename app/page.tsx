import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Offers from "@/components/offers/Offers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="relative">
        <picture>
          <source
            media="(min-width:590px)"
            srcSet="https://c4.wallpaperflare.com/wallpaper/667/116/892/bmw-bmw-m8-blue-car-car-grand-tourer-hd-wallpaper-preview.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="https://c4.wallpaperflare.com/wallpaper/392/133/116/car-bmw-bmw-m4-wallpaper-preview.jpg"
          />
          <source media="(min-width:992px)" srcSet="" />
          <source media="(min-width:1200px)" srcSet="" />
          <source media="(min-width:1400px)" srcSet="" />
          <img
            src="https://i.pinimg.com/564x/1f/8b/00/1f8b00ced3443dd368d95471239d9444.jpg"
            alt=""
          />
        </picture>
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute top-1/2 left-1/2 z-10 text-white -translate-x-1/2 -translate-y-1/2">
          <p>
            Welcome to <span className="uppercase font-bold text-main">autohunt</span>
          </p>
          <p>The best site to find your dream car</p>
        </div>
      </header>
      <main>
        <section>
          <Offers />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
