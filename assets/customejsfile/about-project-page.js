
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

setTimeout(() => {
    var faqAboutprojects = [
    {
      "html": "about-project.html",
      "name": "I am unable to understand the concept of farm land or Agro Realty. Can you please explain it to me?",
      "description": "Agro Realty is an innovative solution where the land that you invest in, is used for professionally managed agriculture of profitable crops and plantations.<br>This ensures cash flow during the period of ownership apart from returns earned upon resale due to asset appreciation.<br>E.g., In Hindupur we i.e., SmartAgro is developing a 58 acre parcel of land. This 58 acre is divided into smaller land parcels of 1 acre, 2 acres, 3 acres, and 5 acres. As an investor you can purchase any parcel of land as per your investment requirement. Now on this 58 acres of land SmartAgro will construct all essential facilities like access road, generator room, guest room, provide fencing and gate for your land. In this 58 acre project, we will be planting Melia Dubia primarily, it will mature in 10 years time and sale of this timber will bring in returns for you. Over the 10 year period we will also plant cash crops which will be sold after every harvest and the profits from cash crop will be deposited in your bank account on a yearly basis. In this 58 acre project, 2 acre is set aside for sandalwood plantation. The profits earned by selling sandalwood will be distributed proportionally to all the  investors."
    },
    {
      "html": "about-project.html",
      "name": "Smart Agro’s project is in a different state and it’s quite far, can we get a similar type of project within Karnataka?",
      "description": "After detailed analysis, ground research, and taking into consideration the growth possibilities, we have selected Andhra Pradesh because the region around Hindupur is the next big thing. <br>The region where our project is located is experiencing rapid development, the land pricing is quite low when compared to Karnataka, and global firms like Berger Paints, Wipro, Super Spinning Mills, and Larsen & Toubro are setting up their base in and around Hindupur.<br>Additionally, in Andhra Pradesh any Indian citizen can get agricultural land registered in their name whereas in Karnataka only RTC holders can have an agricultural land registered in their name."
    },
    {
      "html": "about-project.html",
      "name": "Who will maintain the land for 365 days?",
      "description": "An experienced in-house team of Smart Agro will manage your land for 365 days * 10 years."
    },
    {
      "html": "about-project.html",
      "name": "Will 1 borewell be sufficient for 5 acres of land? Also, is Hindupur a dry region or does it have any water scarcity?",
      "description": "Yes, 1 borewell is enough to draw sufficient water for 5 acres of land. Additionally, Hindupur is in close proximity to Gollapalli Reservoir and this reservoir is filled to its capacity. Thus, there is no shortage of water in and around Hindupur area.<br><p>You can also read/view the following links:</p><ul><li><a href='https://www.deccanchronicle.com/nation/current-affairs/170119/anantapur-plans-afoot-to-revive-1183-irrigation-tanks.html'>  https://www.deccanchronicle.com/nation/current-affairs/170119/anantapur-plans-afoot-to-revive-1183-irrigation-tanks.html</a></li><li><a href=https://www.youtube.com/watch?v=gKZNaB3-QtU'>  https://www.youtube.com/watch?v=gKZNaB3-QtU</a></li><li><a href=https://getlink.pro/v/TMgcs14YdZE'>  https://getlink.pro/v/TMgcs14YdZE</a></li></ul>"
    },
    {
      "html": "about-project.html",
      "name": "Kindly brief me about the exact location of this project?",
      "description": "This project is located towards Bangalore-Hyderabad Highway. Our project is situated on Somandapalli Junction - Hindupur State Highway. "
    },
    {
      "html": "about-project.html",
      "name": "By when will you start planting the timber trees?",
      "description": "On our 58 acre project we have a Water Storage System built within the compound. We are also using Rain Water Harvesting Technology, and in addition to this, 1 borewell is provided for every 5 acres of land. With these many options, there will be abundant water throughout the year for entire project."
    },
    {
      "html": "about-project.html",
      "name": "What do you mean by cash crops?",
      "description": "Cash crops are crops grown with the intention of generating money. Most cash crops can either be consumed directly or processed into other final products.Cash crops have been an integral part of strategies set to improve food security levels mostly in developing countries. This is through the generation of income by agricultural households. Cash crops not only offer employment opportunities in the communities but also help farmers in the generation of capital. In addition to this, cash crops largely contribute to the buildup of institutions that enable more commercialization.<br><p>1. Why Melia Dubia Cav</p><ul><li><a>Melia Dubia is one of the fastest growing species among timber varieties on this planet. These trees can be cultivated in all types of soil and requires less management practices.</a></li><li><a>As the present scenario the timber demand in India is very high and the high-tech cultivation system under the management of expert agro professionals can fetch good amount of tax free income through Melia Dubia Plantations. It can fetch good income with assured buyback and it is low maintenance crop. This combines agricultural and forestry technologies to create more diverse, productive, profitable, healthy and sustainable land use system. In addition, these plantations are helpful to the planet in preventing raising temperature and checking gas emission into the atmosphere. Since many of the short term crops are risky, less remunerative and uncertain, it is time to cultivate medium to long term agro forestry crops like Melia Dubia, In addition, these trees also contribute in carbon sequestration and mitigation of climate change impacts.</a></li><li><a>Melia Dubia will grow up to 40 feet within two years of planting and has the potential of yielding up to 40 tons of biomass on an average per acre per annum of 10 year old plantation. Its high calorific value makes it a viable source of feedstock for biomass power plants.</a></li></ul><br><p>In view of the ever increasing timber demand for various commercial purposes and shortage in natural resources the importance for the fast growing Melia Dubia is gaining steadily.</p><p>Melia Dubia along with cash crops advantages:</p><span>A complementary sharing of plant resources, Soil fertility increases by using plants of leguminosae family in intercropping, due to the increasing amount of biological nitrogen fixation. Ecological balance, more utilization of resources, increases the quantity and quality of products and reduction damage by pests, diseases and weeds will increases with use of intercropping systems. This soil and more specifically the nutrients it is use, by the different varieties of crops. Intercropping also averts soil runoff and can prevent the growth of weeds. </span>"
    },
    {
      "html": "about-project.html",
      "name": "How is the Soil and will it support for cash crops:",
      "description": "The melia Dubia will grow in red soil in well manner and also the same will grow in rocky red soil with slight variation in growth and yield. An account of this we don’t expect the stipulated yield in stipulated period.<br>It grows in well drained red, red loam and black loam soils with pH ranging from 5.5 to 7.0 and depth 50‐150 cm, requires moderate soil fertility and can come up in soils with salinity of <4 dS/m. The species grows well in temperature ranges of 30‐45oC at an altitude of 650-1800 m. The species requires a mean annual rainfall of 750 – 2500 mm."
    },
    {
      "html": "about-project.html",
      "name": "Since this is an agricultural land, will electricity be free?",
      "description": "Yes, in Andhra Pradesh electricity is completely free for agricultural land."
    },
    {
      "html": "about-project.html",
      "name": "How much is 1 acre of land in Square Feet / Guntas / Cents?",
      "description": "<ul><li><a> 1 acre = 43560 square foot</a></li><li><a> 1 acre = 40 guntas</a></li></ul>"
    },
    {
      "html": "about-project.html",
      "name": "Will I get a borewell in my farm land?",
      "description": "No. It will come in a common area."
    }
  ];
    var selectedItem = localStorage.getItem("selectedItem");
    // console.log("faqAboutprojects >> ", faqAboutprojects)
    for (let index = 0; index < faqAboutprojects.length; index++) {
        var element = faqAboutprojects[index];
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
