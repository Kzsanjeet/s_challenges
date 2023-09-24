setInterval(()=>{
    let d = new Date()
    console.log(d)
    console.log("mdkcd")
    htime = d.getHours()
    mtime = d.getMinutes()
    stime = d.getSeconds()
    hrotation = 30*htime + mtime/2
    mrotation = 6*mtime
    srotation = 6*stime

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${hrotation}deg)`
    second.style.transform = `rotate(${hrotation}deg)`
},2000)