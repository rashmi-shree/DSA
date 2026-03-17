window.addEventListener("resize",callthrottlefunc)

const resizeFunction = () =>{
    console.log("resize")
}

const callthrottlefunc = throttlefunc(resizeFunction, limit)

const throttlefunc = (func, limit)=>{
    let flag = true;
    return function(){
        let context = this;
        if(flag){
            func.apply(context, arguments)
            flag = false
            setTimeout(()=>{
                flag=true
            }, limit)
        }
    }
}