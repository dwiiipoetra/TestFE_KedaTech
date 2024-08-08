import React from 'react'

const PricingBox = ({datas}) => {
  return (
    <>
        { datas.map((data, index) => (
        <div key={index} className="col-lg-4">
            <div className="bg-white p-5 rounded-lg shadow">
            <h1 className="h6 text-uppercase font-weight-bold mb-4">
                {data.package}
            </h1>
            <h2 className="h1 font-weight-bold">
                IDR {data.price/1000}
                <span className="text-small font-weight-normal ml-2">
                / bulan
                </span>
            </h2>

            <div className="custom-separator my-4 mx-auto bg-info"></div>

            <ul className="list-unstyled my-5 text-small text-left">
                { data.packageDetail.map((pkgdata, index) => (
                <li key={index} className="mb-3">
                    <i className={ pkgdata.status ? 'fa fa-check mr-2 text-info' : 'fa fa-times mr-2 text-danger'}></i>
                    { pkgdata.status ? pkgdata.text : <del>{pkgdata.text}</del> }
                </li>
                ))}
            </ul>
            <a
                href="#"
                className="btn btn-info btn-block p-2 shadow rounded-pill"
            >
                Berlangganan
            </a>
            </div>
        </div>
        ))}
    </>
  )
}

export default PricingBox