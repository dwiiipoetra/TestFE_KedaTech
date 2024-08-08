import React from 'react'
import PricingBox from './pricingBox'

const Pricing = ({datas}) => {
  return (
    <section id="pricing">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center p-5">
              <h2 className="title">Tabel Harga</h2>
            </div>
          </div>

          <div className="row text-center align-items-end">
            <PricingBox datas={datas} />
          </div>
        </div>
      </section>
  )
}

export default Pricing