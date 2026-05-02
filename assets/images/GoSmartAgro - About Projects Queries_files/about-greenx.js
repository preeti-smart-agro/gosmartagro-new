
var scrollingIndex = 0;
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);
$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'assets/jsons/faqData.json', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     alert('read')
//     update_html(data)
//   }
// };
// xhr.send();

    setTimeout(() => {
        const aboutGreenxProject = [
            {
            "html": "about-greenx.html",
            "name": "Is growing sandalwood legal in India ?",
            "description": "Yes, growing sandalwood is legal in India. GreenX strictly follows all state, central government regulations, and local laws to ensure full compliance and sustainable farming practices."
            },
            {
            "html": "about-greenx.html",
            "name": "Who owns the plot at GreenX ?",
            "description": "The plot belongs to you, the investor. You have full ownership of your plot."
            },
            {
                "html": "about-greenx.html",
                "name": "Can I buy a plot at GreenX if I live in a different state ?",
                "description": "Yes, you can buy a plot at GreenX no matter which state you live in. It's open to investors from all over India."
            },
            {
                "html": "about-greenx.html",
                "name": "Does GreenX share its profits with investors?",
                "description": "Yes, GreenX shares the profits from sandalwood sales with investors. You will receive regular passive income. Your share is 70% for sandalwood and 60% for intercrop."
            },
            {
                "html": "about-greenx.html",
                "name": "Can I pay in installments (EMI) ?",
                "description": "Yes, GreenX offers EMI options for up to 36 months. You pay 60% upfront, and the rest can be paid in affordable monthly installments."
            },
            {
                "html": "about-greenx.html",
                "name": "What are the water sources and how good is the soil ?",
                "description": "Water is supplied through natural canals, drip irrigation, rainwater harvesting, bore-wells, and man-made pond. The soil is red with a pH level of 7.1, and we follow specific processes to keep the soil healthy."
            },
            {
                "html": "about-greenx.html",
                "name": "Can I build my own farmhouse on the plot ?",
                "description": "Yes, you can build a weekend home or farmhouse on 10% of your plot. It's a great way to enjoy your farm as a personal retreat."
            },
            {
                "html": "about-greenx.html",
                "name": "I manage the farm myself? Can I pick my own plants ?",
                "description": "GreenX offers a fully managed farming experience, so you don't need to manage the farm yourself. Our experts take care of the sandalwood and other crops for the best results."
            },
            {
                "html": "about-greenx.html",
                "name": "What happens to the plot after 15 years ?",
                "description": "After 15 years, you still own the plot. GreenX will help you decide whether to end or renew the contract."
            }
        ]
        var selectedItem = localStorage.getItem("selectedItem");
        // console.log("aboutGreenxProject >> ", aboutGreenxProject)
        for (let index = 0; index < aboutGreenxProject.length; index++) {
            var element = aboutGreenxProject[index];
            // alert(element.name);
            var show = "";
            var color = "button-blink-default";
            var ariaExpanded = false;
            var collapsed = "collapsed";
            // alert(element + ' name ' +  element.name );
            try {
                if (selectedItem !== null && element.name.toLowerCase().includes(selectedItem.toLowerCase())) {
                    show = "show";
                    collapsed = "";
                    ariaExpanded = true;
                    scrollingIndex = index;
                    color = "button-blink";
                }
            } catch (err) { }
            var parentElement = document.getElementById('accordion');
            var faqsingleitem = document.createElement('div');
            faqsingleitem.className = 'faq-single-item';
            faqsingleitem.id = 'item' + index;
    
            var cardbodycustom = "";
            var h4Class = "faq-question-h4-default";
            if (element.name.length >= 145) {
                h4Class = "faq-question-h4";
                cardbodycustom = 'card-body-custom';
            }
            if (element.name.length >= 220) {
                h4Class = "faq-question-h4-large";
                cardbodycustom = 'card-body-custom';
            }
            if (element.description.includes("<ul>")) {
                faqsingleitem.innerHTML = '<h4 id="heading' + index + '" class="' + h4Class + '">' +
                    '<button class="btn btn-link ' + collapsed + '" data-toggle="collapse" data-target="#collapse' + index + '" aria-expanded="' + ariaExpanded + '" aria-controls="collapse' + index + '"> <span class="icon icon-question-circle"></span><span class="btn-blink-span ' + color + '">' + element.name + '</span></button>' +
                    '</h4> <div id="collapse' + index + '" class="collapse ' + show + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                    '<div class="card-body ' + cardbodycustom + '"> <p class="accordian-conntent passmark">' + element.description + '</p> </div> </div>';
            } else {
                faqsingleitem.innerHTML = '<h4 id="heading' + index + '" class="' + h4Class + '">' +
                    '<button class="btn btn-link ' + collapsed + '" data-toggle="collapse" data-target="#collapse' + index + '" aria-expanded="' + ariaExpanded + '" aria-controls="collapse' + index + '"> <span class="icon icon-question-circle"></span><span class="btn-blink-span ' + color + '">' + element.name + '</span></button>' +
                    '</h4> <div id="collapse' + index + '" class="collapse ' + show + '" aria-labelledby="heading' + index + '" data-parent="#accordion">' +
                    '<div class="card-body ' + cardbodycustom + '"> <p class="accordian-conntent">' + element.description + '</p> </div> </div>';
            }
    
            // console.log(faqsingleitem.innerHTML);
            parentElement.appendChild(faqsingleitem);
        }
        var elmnt = document.getElementById("item" + scrollingIndex);
        elmnt.classList.add('show-item');
        // console.log(elmnt.getBoundingClientRect());
        elmnt.scrollIntoView();
        elmnt.click();
    }, 100)

