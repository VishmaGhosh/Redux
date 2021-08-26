import React from 'react'

function Test({data}) {
    return (
        <div>
            {/* {data.map((item)=><p>{item.pic}</p>)} */}
            {/* {data.pic} */}
            {/* <img src={require({path}).default} alt="" /> */}
            {/* <img src={require({path}).default} alt="" /> */}
            <img src={data}  alt=""/>
            <h1>ok</h1>
            {/* <h1>{data}</h1> */}
        </div>
    )
}

export default Test
