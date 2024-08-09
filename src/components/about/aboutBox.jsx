import React from 'react'

const AboutBox = ({datas}) => {
  return (
    <>
      { datas.map(data => (
        <div key={data.title} className="col-lg-4 col-sm-12 text-center p-3">
          {data.image && <data.image width="180" height="180" />}
          <h3>{data.title}</h3>
          <p className="text-center">{data.subtitle}</p>
        </div>
      ))}
    </>
  )
}

export default AboutBox