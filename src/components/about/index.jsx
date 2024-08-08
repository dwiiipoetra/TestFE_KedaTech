import React from 'react'
import AboutBox from './aboutBox';

const About = ({datas}) => {
  return (
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
                <AboutBox datas={datas} />
            </div>
        </div>
        </div>
    </section>
  )
}

export default About