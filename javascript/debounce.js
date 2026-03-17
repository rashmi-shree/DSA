let counter = 0
const getData = () => {
    console.log("fetching...", counter++)
}

const debounce= function(fn, delay){
    let timer ;
    return function(){
        const context = this;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            getData.apply(context, arguments)
        }, delay)
    }
}
const debouncefuncall = debounce(getData, 300) 