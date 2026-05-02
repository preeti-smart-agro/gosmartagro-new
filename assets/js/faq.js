$(function () {

    const loadFaqJsonData = (file, options = {method:'get'}) => 
    new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onload = resolve;
        request.onerror = reject;
        request.overrideMimeType("application/json");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");
        request.open(options.method, file, true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === "200") {
                resolve(request.responseText);
            }
        };
        request.send(null);
    });

    loadFaqJsonData('./assets/json/faq.json').then(d => {
        console.log(d);
    });
});