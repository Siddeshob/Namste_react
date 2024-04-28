// const header = React.createElement("h1", {}, "hello siddu")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(header);

// console.log(header)


import React from "react"
import ReactDOM from 'react-dom';

//this jsx code transpaling(bable (is a translater)) before traching js Engine using *parcel*
const jsx=<h1>hello siddu</h1>
const root=ReactDOM.createRoot(document.getElementById("root"))

const Title=()=>(
    <div>
        <h2>is title component</h2>
    </div>
)

const num=1000;
const HeadingComponent=()=>(
    <div>
        {num}
    <h1><Title/>hemmo is siddesha</h1>
    </div>
     
);

root.render(<HeadingComponent/>)



