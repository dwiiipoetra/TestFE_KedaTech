import React from "react";
import Button from "../shared/Button";
import ColumnMenu from "./columnMenu";

const Footer = () => {
  const handleSubmit = () => {
    alert('tes')
  }
  return (
    <footer id="contact">
      <div className="footer-contactform" style={{ paddingTop: "25px" }}>
        <div className="container text-center py-5">
          <div className="row">
            <div className="col-12 py-5">
              <h2 className="title">
                coba trial gratis software manajemen bisnis dari erp house
                sekarang!
              </h2>
            </div>
          </div>
          <div className="card p-5">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <input
                      type="text"
                      placeholder="Nama"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <input
                      type="text"
                      placeholder="Nama Perusahaan"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <select name="industry" className="form-select" required>
                      <option>Jenis Industri</option>
                      <option defaultValue="32">Retail</option>
                      <option defaultValue="33">
                        Trading, Wholesale, Distribution
                      </option>
                      <option defaultValue="35">
                        Produksi &amp; Manufaktur
                      </option>
                      <option defaultValue="36">Edukasi</option>
                      <option defaultValue="37">
                        Konstruksi &amp; Infrastuktur
                      </option>
                      <option defaultValue="40">
                        F&amp;B (Restaurant, Catering, Fast Food, Etc)
                      </option>
                      <option defaultValue="41">Pemerintahan</option>
                      <option defaultValue="42">Logistik</option>
                      <option defaultValue="47">Rumah Sakit</option>63
                      <option defaultValue="49">Penerbangan</option>
                      <option defaultValue="51">Pertambangan</option>
                      <option defaultValue="54">
                        Perkebunan &amp; Peternakan
                      </option>
                      <option defaultValue="62">Lainnya</option>
                      <option defaultValue="63">Perhotelan</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mt-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Pesan"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="send-button mt-4">
                  <Button
                    title="Kirim Pesan"
                    icon="fa-paper-plane"
                    clickBtn={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-company">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Menu</h4>
              <ColumnMenu />
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Layanan</h4>
              <ul>
                <li>
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  <a href="#">ERP</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  <a href="#">HRIS</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  <a href="#">CRM</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  <a href="#">Akuntansi</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Jalan Damarsari 1 no 3 <br /> Jakarta Selatan, 12540
                <br /> DKI Jakarta, Indonesia <br />
                <br /> <strong>Phone:</strong> +62-853-7510-0222
                <br /> <strong>Email:</strong> admin@erphouse.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>ERP House</h3>
              <p>
                Kami adalah Perusahaan yang bergerak di bidang IT, kami hadir
                menawarkan sebuah Solusi dalam meningkatkan Produktifitas Proses
                Bisnis Perusahaan.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; &nbsp;
          <strong>
            <span>ERP House</span>
          </strong>
          . Designed by Dwi Waluyo Putranto
        </div>
      </div>
    </footer>
  );
};

export default Footer;
