
var scrollingIndex = 0;

// d3.json("assets/json/faq.json", function(error, faq) {
//     if (error)
//     throw error;
//     faqData=faq;

//     // console.log(faq);
// });
// console.log(faqData);
setTimeout(() => {
    var faqAboutleaseagreement = [
        {
          "html": "about-lease-agreement.html",
          "name": "Can I extend the lease period by another 10 years?",
          "description": "No, there will not be an extension of lease period as the Land Owner and Lease Holder contract will be valid only for 10 years time. Once the timber logging is over, land will be cleaned and will be returned back to the Land Owner in original condition. Post this, the contract between both the parties will end."
        },
        {
          "html": "about-lease-agreement.html",
          "name": "Do we have an owners association in Smart Agro project at present?",
          "description": "Currently there is no owners association at Smart Agro project."
        },
        {
          "html": "about-lease-agreement.html",
          "name": "The internal roads that belong to the farm land will be registered under? ",
          "description": "All internal roads, i.e., roads inside our 58 acre project will be registered to the Revenue Department."
        },
        {
          "html": "about-lease-agreement.html",
          "name": "From when can owners start residing/staying in the farm land?",
          "description": "Within One year from the date of holding the Property Title."
        },
        {
          "html": "about-lease-agreement.html",
          "name": "Can we discontinue in the middle of this project and sell our land or withdraw from this project in case if we have any emergency situation?",
          "description": "Yes, you can sell the Land and Change of Ownership can also be done. However, the new owner must not disturb the Lease Agreement. Before the Change of Ownership is implemented, you must take prior approval, and creation of all Supporting New Documents will need to be paid for by the Land Owner."
        },
        {
          "html": "about-lease-agreement.html",
          "name": "Can we get separate cottage facility or would you be providing a common cottage facility?",
          "description": "In our project we will be constructing 5 cottages which will be a common use infrastructure. These will be built on the concept of Village Like Living. A plot owner/investor can book a stay at these cottages in advance."
        }
      ]
    var selectedItem = localStorage.getItem("selectedItem");
    // console.log("faqAboutleaseagreement >> ", faqAboutleaseagreement)
    for (let index = 0; index < faqAboutleaseagreement.length; index++) {
        var element = faqAboutleaseagreement[index];
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
})
