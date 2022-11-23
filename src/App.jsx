import React from "react";
import { ReactComponent as Projections } from "././assets/image/undraw_projections.svg";
import { ReactComponent as GoodTeam } from "././assets/image/undraw_good_team.svg";
import { ReactComponent as VersionControl } from "././assets/image/undraw_version_control.svg";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        {/* MENU */}
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

      {/* ABOUT */}
      <section id="about">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center p-5">
              <h2 className="title">
                Tentang <span>ERP House</span>
              </h2>
              <p className="desc">
                Kami adalah Perusahaan yang bergerak di bidang IT, kami hadir
                menawarkan sebuah Solusi dalam meningkatkan Produktifitas Proses
                Bisnis Perusahaan.
              </p>
            </div>
            <div className="service row">
              <div
                className="col-lg-4 col-sm-12 text-center p-3"
                style={{ backgroundColor: "torquise" }}
              >
                <Projections width="180" height="180" />
                <h3>Manajemen Data</h3>
                <p className="text-center">
                  Software ERP memberikan keamanan terbaik untuk seluruh data
                  perusahaan, baik data keuangan maupun data karyawan
                </p>
              </div>
              <div className="col-lg-4 col-sm-12 text-center p-3">
                <VersionControl width="180" height="180" />
                <h3>Sistem yang Terintegrasi</h3>
                <p className="text-center">
                  Software ERP yang mengintegrasikan seluruh modul akan membantu
                  menyederhanakan kolaborasi antar divisi dalam perusahaan
                </p>
              </div>
              <div className="col-lg-4 col-sm-12 text-center p-3">
                <GoodTeam width="180" height="180" />
                <h3>Konfigurasi Sistem</h3>
                <p className="text-center">
                  Software ERP dapat memudahkan segala validasi data sistem
                  untuk memaksimalkan pengolahan data perusahaan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center p-5">
              <h2 className="title">Tabel Harga</h2>
            </div>
          </div>

          <div className="row text-center align-items-end">
            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Basic
                </h1>
                <h2 className="h1 font-weight-bold">
                  IDR 149
                  <span className="text-small font-weight-normal ml-2">
                    / bulan
                  </span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-info"></div>

                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Mencatat
                    Barang Masuk & Keluar
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Mencatat
                    Hasil Keuntungan
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-times mr-2 text-danger"></i>&nbsp;
                    <del>Analisa Penjualan dengan Chart</del>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-times mr-2 text-danger"></i>&nbsp;
                    <del>Support 7x24 Jam</del>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-times mr-2 text-danger"></i>&nbsp;
                    <del>Export Data ke Excel</del>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-times mr-2 text-danger"></i>&nbsp;
                    <del>AI Prediksi Penghasilan</del>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-info btn-block p-2 shadow rounded-pill"
                >
                  Berlangganan
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Bussiness
                </h1>
                <h2 className="h1 font-weight-bold">
                  IDR 249
                  <span className="text-small font-weight-normal ml-2">
                    / bulan
                  </span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-info"></div>

                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Mencatat
                    Barang Masuk & Keluar
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Mencatat
                    Hasil Keuntungan
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Analisa
                    Penjualan dengan Chart
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Support 7x24
                    Jam
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-times mr-2 text-danger"></i>&nbsp;
                    <del>Export Data ke Excel</del>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-times mr-2 text-danger"></i>&nbsp;
                    <del>AI Prediksi Penghasilan</del>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-info btn-block p-2 shadow rounded-pill"
                >
                  Berlangganan
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Entrepreneur
                </h1>
                <h2 className="h1 font-weight-bold">
                  IDR 329
                  <span className="text-small font-weight-normal ml-2">
                    / bulan
                  </span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-info"></div>

                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Mencatat
                    Barang Masuk & Keluar
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Mencatat
                    Hasil Keuntungan
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Analisa
                    Penjualan dengan Chart
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Support 7x24
                    Jam
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> Export Data
                    ke Excel
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-info"></i> AI Prediksi
                    Penghasilan
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-info btn-block p-2 shadow rounded-pill"
                >
                  Berlangganan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
