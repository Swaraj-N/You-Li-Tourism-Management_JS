var a=10 //global
let b=20 //Script
const c=30 //Script

function fname() 
{
var x=40 //Local
let y=50 //Local
const z=60 //Local
{
    var m=70 //Local
    let n=80 //Block
    const o=90 // Block
}
}
fname()

{
    var d=100 //global
    let e=110 //Block
    const f=120 //Block
    function fname2() {
        var i=130 //local
        let j=140 //local
        const k=150 //local
    }
    fname2()
}