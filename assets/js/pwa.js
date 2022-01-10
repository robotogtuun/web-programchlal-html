if("serviceWorker" in navigator){
    navigator.serviceWorker.register("../../service_worker.js").then(reg => {
        // console.log(reg);
    }).catch(err => {
        console.log(err);
    })
}