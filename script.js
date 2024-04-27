// const header = React.createElement("h1", {}, "hello siddu")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(header);

// console.log(header)
 
const nested=React.createElement('div',{id:"div1"},
    React.createElement('div',{id:"div2"},
    [React.createElement('h1',{id:"h1"},"is nested heading"),
    React.createElement('h1',{id:"h1"},"is nested heading")],));

const nes =ReactDOM.createRoot(document.getElementById("root"))
nes.render(nested)

