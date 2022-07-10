const dynamicLabelSPEED = 100
let elems = document.getElementsByClassName("dynamicLabelCounter")
var observer = new IntersectionObserver(function(entries) {
	if(entries[0]['isIntersecting'] === true) {
		if(entries[0]['intersectionRatio'] === 1){
            for (let elem of elems){
                let params = {}
                elem.classList.forEach((el)=> {
                    if (el.includes("parts-"))
                        params["parts"] = +el.slice(6);
                    else if (el.includes("value-"))
                        params["value"] = +el.slice(6)
                 });

                animLable(elem, params.value, params.parts, dynamicLabelSPEED);
            }
        }
	else {
        for (let elem of elems){
            clearTimeout(elem.timeout_id)
        }
        
	}
}}, { threshold: [0, 0.5, 1] });

for (let elem of elems){
    observer.observe(elem)
}

function animLable(elem, value, deep, interval){
    let max_deep = deep;

    function intervalRecursion(elem, value, deep, interval){
        let current_value = Math.round(value / max_deep * (max_deep - deep));
        elem.innerHTML = current_value.toLocaleString('eng')
        if (deep > 0){
            elem.timeout_id = setTimeout(() => { intervalRecursion(elem, value, deep - 1, interval); }, interval);
        }
    }
    return intervalRecursion(elem, value, deep, interval);
}   

