let result=0
//console.log(process.argv)
process.argv.slice(2).forEach((argumento)=>{
    result+=Number(argumento)
})
console.log(result)
