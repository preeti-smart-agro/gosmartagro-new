
function renderServiceDropDowns(event) {
    var selectedItem = event.target.value;
    if (selectedItem === 'I want to buy agricultural land / I want to invest') {

        try {
            var locationInput = document.getElementById('location');
            var acresInput = document.getElementById('landinacres');
            var commentsInput = document.getElementById('comments');

            locationInput.innerHTML = "";
            acresInput.innerHTML = "";
            commentsInput.innerHTML = "";
            locationInput.classList.add('in-visible');
            acresInput.classList.add('in-visible');
            commentsInput.classList.add('in-visible');
        } catch (error) {}

        var serviceDropdownOne = document.getElementById('service-dropdown-one');
        try {
            serviceDropdownOne.classList.remove('in-visible');
        } catch (error) {}
        var serviceDropdownTwo = document.getElementById('service-dropdown-two');
        try {
            serviceDropdownTwo.classList.remove('in-visible');
        } catch (error) {}

        var dropDownOne = '<span style="line-height: 3.5;" class="mbl-line-height label-input100">How much are you looking to invest?</span>' +
            '<select id="readytoinvest" type="input" value="" class="select-ready-to-invest" required>' +
            '<option value="---Select---">---Select---</option>' +
            '<option value="15 Lakhs - 20 Lakhs">15 Lakhs - 20 Lakhs</option>' +
            '<option value="30 Lakhs - 40 Lakhs ">30 Lakhs - 40 Lakhs </option>' +
            '<option value="Above 50 Lakhs">Above 50 Lakhs</option>' +
            ' </select>' +
            '<span class="focus-input100"></span>';
        var dropDownTwo = '<span style="line-height: 7;" class="label-input100">When do you want to visit the site?</span>' +
            '<select id="freesitevisit" type="input" value="" class="select-ready-to-invest" required>' +
            '<option value="---Select---">---Select---</option>' +
            '<option value="Immediately">Immediately</option>' +
            '<option value="7-15 days">7-15 days</option>' +
            '<option value="15-30 days">15-30 days</option>' +
            '<option value="After One month">After One month</option>' +
            '</select>' +
            '<span class="focus-input100"></span>';
        serviceDropdownOne.innerHTML = dropDownOne;
        serviceDropdownTwo.innerHTML = dropDownTwo;
    } else if (selectedItem === 'I have my own agricultural land / I own farmland') {

        try {
            var serviceDropdownOne = document.getElementById('service-dropdown-one');
            serviceDropdownOne.innerHTML = "";
            var serviceDropdownTwo = document.getElementById('service-dropdown-two');
            serviceDropdownTwo.innerHTML = "";

            serviceDropdownOne.classList.add('in-visible');
            serviceDropdownTwo.classList.add('in-visible');
        } catch (error) {}

        var locationInput = document.getElementById('location');
        var acresInput = document.getElementById('landinacres');
        var commentsInput = document.getElementById('comments');
        try {
            locationInput.classList.remove('in-visible');
        } catch (error) {}
        try {
            acresInput.classList.remove('in-visible');
        } catch (error) {}
        try {
            commentsInput.classList.remove('in-visible');
        } catch (error) {}


        var location = '<span class="label-input100">Where is your agricultural land located?</span>' +
            '<input id="enq-land-location" class="input100" type="text" name="landlocation" title="Please Eneter Land Location" placeholder="Please Eneter Land Location" required>' +
            '<span class="focus-input100"></span>';

        var landAcres = '<span class="label-input100">How many acres of agricultural land do you own?</span>' +
            '<input id="enq-acres" class="input100" type="text" name="numberOfAcres" title="Please provide how many acres of agricultural land do you own" placeholder="Please provide how many acres of agricultural land do you own" required>' +
            '<span class="focus-input100"></span>';

        var comments = '<span class="label-input100">Any other details you wish to specify</span>' +
            '<input id="enq-comment" class="input100" type="text" name="message" title="Please provide your comment" placeholder="Enter provide your comment">' +
            '<span class="focus-input100"></span>';

        locationInput.innerHTML = location;
        acresInput.innerHTML = landAcres;
        commentsInput.innerHTML = comments;
    }

}
