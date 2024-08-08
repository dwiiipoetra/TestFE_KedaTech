import React from "react";
import { about, pricing } from "./data";
import Menu from "./components/menu";
import About from "./components/about";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>

        <Menu />
        
        <div id="intro" className="p-5 text-center bg-image">
          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">
                  Solusi Otomatisasi Operasional Proses Bisnis Anda!
                </h1>
                <h4 className="mb-4">
                  Otomatisasi dan efektifkan proses operasional perusahaan
                  menggunakan software ERP terbaik.
                </h4>
                <a
                  className="myBtn-2 m-2"
                  href="#"
                  role="button"
                  rel="nofollow"
                >
                  SELENGKAPNYA
                </a>
                <a
                  className="myBtn-3 m-2"
                  href="#"
                  role="button"
                  rel="nofollow"
                >
                  TENTANG KAMI
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <About datas={about} />

      <Pricing datas={pricing} />

      <Footer />
    </>
  );
}

export default App;
