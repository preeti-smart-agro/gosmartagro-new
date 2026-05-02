$(document).ready(function() {
    var t = document.getElementsByTagName("body"),
        e = document.createElement("BUTTON");
    e.setAttribute("id", "fbdtbn"), e.setAttribute("title", "Feedback Button"), e.setAttribute("type", "button"), e.setAttribute("tabindex", "0"), e.onclick = function() {
        ! function() {
            document.getElementById("feedbackform").classList.remove("in-visible"), document.getElementById("main").classList.remove("in-visible"),
                function(e) {
                    var t = document.getElementById(e),
                        n = -500;
                    e = setInterval(function() { 0 <= n ? clearInterval(e) : (n += 10, t.style.left = n + "px") }, .1)
                }("feedbackform");
            try { document.getElementsByTagName("body")[0].classList.add("oveflow-hidden") } catch (e) {}
            try {
                ! function() {
                    var e = document.createElement("script");
                    e.onload = function() {}, e.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.0.4/popper.js", document.head.appendChild(e), (e = document.createElement("script")).src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js", document.head.appendChild(e), (e = document.createElement("script")).src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js", document.head.appendChild(e)
                }()
            } catch (e) {}
        }()
    }, e.style.opacity = 1, e.style.visibility = "visible", e.innerHTML = "Feedback";
    for (var n = ["btn-open-survey", "btn", "btn-primary", "tab", "tab-right", "survey-material-white", "allow-button"], a = 0; a < n.length; a++) {
        var l = n[a];
        e.classList.add(l)
    }
    var o = document.createElement("i");
    o.setAttribute("aria-hidden", !0), o.classList.add("fa"), o.classList.add("fa-commenting-o"), o.style.padding = "7px", e.appendChild(o), t[0].appendChild(e), i();
    var s = { firstname: "", mobilenum: "", email: "", category: "", subCategory: "", rating: "" },
        d = JSON.parse('{"list":[{"name":"Category One","subcategory":["Sub Category One","Sub Category Two","Sub Category Three","Sub Category Four"]},{"name":"Category Two","subcategory":["Sub Category Five","Sub Category Six","Sub Category Seven","Sub Category Eight"]},{"name":"Category Three","subcategory":["Sub Category Nine","Sub Category Ten","Sub Category Eleven","Sub Category Twelve"]},{"name":"Category Four","subcategory":["Sub Category thirteen","Sub Category Fourteen","Sub Category Fifteen","Sub Category Sixteen"]}]}').list;

    function i() {
        var e = document.createElement("div");
        e.classList.add("main"), e.classList.add("in-visible"), e.setAttribute("id", "main"), e.innerHTML = '<div id="feedbackform" class="feedback-block in-visible"><i id="close-btn" class="fa fa-times btn-close" aria-hidden="true" ></i><div class="heading"><h5 id="heading">How likely is it that you would recommend Eterno RR Nagar Project to a friend or colleague?</h5><span class="divider"></span></div><div id="feedbackicons" class="feedback-icon-set"><div class="row"><div class="column-6"><span class="notwilling-color">Not at all willing</span></div><div class="column-2"><span class="neutral-color"> Neutral</span></div><div class="column-2"><span class="willing-color"> Extremely Willing</span></div></div><div class="row"><div class="column-top-bordered notwilling-bordered"></div><div class="column-top-bordered notwilling-bordered"></div><div class="column-top-bordered notwilling-bordered"></div><div class="column-top-bordered notwilling-bordered"></div><div class="column-top-bordered notwilling-bordered"></div><div class="column-top-bordered notwilling-bordered"></div><div class="column-top-bordered neutral-bordered"></div><div class="column-top-bordered neutral-bordered"></div><div class="column-top-bordered willing-bordered"></div><div class="column-top-bordered willing-bordered"></div></div><div class="row"><div class="column"><img src="./notwilling.PNG" alt=""></div><div class="column"><img src="./notwilling.PNG" alt=""></div><div class="column"><img src="./notwilling.PNG" alt=""></div><div class="column"><img src="./notwilling.PNG" alt=""></div><div class="column"><img src="./notwilling.PNG" alt=""></div><div class="column"><img src="./notwilling.PNG" alt=""></div><div class="column"><img src="./neutral.PNG" alt=""></div><div class="column"><img src="./neutral.PNG" alt=""></div><div class="column"><img src="./Willing.PNG" alt=""></div><div class="column"><img src="./Willing.PNG" alt=""></div></div><div class="row" style="margin-top: 7px;"><div class="column-boxed notwilling-box" id="1"><span class="notwilling-bar bar"></span><span class="number">1</span></div><div id="2" class="column-boxed notwilling-box" ><span class="notwilling-bar bar"></span><span class="number">2</span></div><div class="column-boxed notwilling-box" id="3" ><span class="notwilling-bar bar"></span><span class="number">3</span></div><div class="column-boxed notwilling-box" id="4" ><span class="notwilling-bar bar"></span><span class="number">4</span></div><div class="column-boxed notwilling-box" id="5" ><span class="notwilling-bar bar"></span><span class="number">5</span></div><div class="column-boxed notwilling-box" id="6" ><span class="notwilling-bar bar"></span><span class="number">6</span></div><div class="column-boxed neutral-box" id="7" ><span class="neutral-bar bar"></span><span class="number">7</span></div><div class="column-boxed neutral-box" id="8" ><span class="neutral-bar bar"></span><span class="number">8</span></div><div class="column-boxed willing-box" id="9" ><span class="willing-bar bar"></span><span class="number">9</span></div><div class="column-boxed willing-box border-right" id="10" ><span class="willing-bar bar"></span><span class="number">10</span></div></div></div><div id="cetegory" class="feedback-icon-set"></div><div id="userinfoform" class="userinfoform"></form></div></<div>', t[0].appendChild(e), setTimeout(function() {
            for (var e = 1; e < 11; e++) { document.getElementById(e).onclick = function() { r(e) } }
            document.getElementById("close-btn").onclick = function() {
                ! function() {
                    try { document.getElementsByTagName("body")[0].classList.remove("oveflow-hidden") } catch (e) {}
                    document.getElementById("main").remove(), i();
                    try {! function() { for (var e = 0; e <= document.head.children.length; e++) { var t = document.head.children[e]; try { "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js" === t.src && t.remove(), "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" === t.src && t.remove(), "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.0.4/popper.js" === t.src && t.remove() } catch (e) {} } }() } catch (e) {}
                }()
            }
        }, 100)
    }

    function r(e) {
        var t = document.getElementById("heading");
        t.innerHTML = "Tell us the problem faced by you to improve customer satisfaction ?", t.style.padding = "27px";
        var n = document.getElementById("feedbackicons");
        try { n.remove() } catch (e) {}
        document.getElementById("cetegory").innerHTML = '<div class="dropdown categorydropdown"><button class="btn btn-default dropdown-toggle" type="button" id="selectcaegory" data-toggle="dropdown"><span id="categoryValue">Select Category</span><span class="caret"></span></button><ul id="categoryul" class="dropdown-menu category" role="menu" aria-labelledby="selectcaegory"></ul></div><div class="dropdown subcategorydropdown"><button class="btn btn-default dropdown-toggle" type="button" id="selectsubcaegory"  disabled="true" data-toggle="dropdown"><span id="subCategoryValue">Select Sub Category</span><span class="caret"></span></button><ul id="subcategoryul" class="dropdown-menu subcategory" role="menu" aria-labelledby="selectsubcaegory" ></ul></div><div class="btn-group"><button id="btn-next" type="button" class="btn btn-primary btn-next" disabled="true">Next</button></div>', e <= 6 ? console.log("cliked on below 7 items " + e) : 7 <= e && e <= 8 ? console.log("cliked on below 8 and above 6 items " + e) : 9 <= e && console.log("cliked on above 8 items " + e), s.rating = e, localStorage.setItem("rating", e), document.getElementById("categoryul").onclick = function() {
                ! function(e) {
                    var t = e.target.innerText;
                    if ("Select Category" !== t) {
                        document.getElementById("selectsubcaegory").disabled = !1;
                        for (var n = 0; n < d.length; n++) {
                            var a = d[n];
                            if (a.name === t) {
                                for (var l = document.getElementById("subcategoryul"), o = '<li role="presentation"> <a role="menuitem" tabindex="-1">' + a.subcategory[0] + "</a> </li>", i = 1; i < a.subcategory.length; i++) {
                                    var r = a.subcategory[i];
                                    o = o + '<li role="presentation"> <a role="menuitem" tabindex="-1">' + r + "</a> </li>"
                                }
                                l.innerHTML = o, n = d.length
                            }
                        }
                    }
                    document.getElementById("categoryValue").innerText = e.target.innerText, s.category = e.target.innerText, localStorage.setItem("category", e.target.innerText)
                }(event)
            }, document.getElementById("subcategoryul").onclick = function() {
                ! function(e) {
                    document.getElementById("subCategoryValue").innerText = e.target.innerText;
                    var t = document.getElementById("btn-next");
                    t.disabled = !1, s.subCategory = e.target.innerText, localStorage.setItem("subCategory", e.target.innerText), t.onclick = function() {
                        ! function() {
                            try { document.getElementById("cetegory").remove() } catch (e) {}
                            document.getElementById("heading").innerHTML = "Fill the personal information to call and understand your pain problem";
                            var e = document.getElementById("userinfoform");
                            e.innerHTML = '<form id="feedfackform" class="form-verticle" name="feedbackform"><div class="grid-container"><div class="form-group"><label class="control-label col-sm-6" for="firstname">First Name<span class="required-field">*</span></label><div class="col-sm-12"><input type="text" class="form-control" id="firstname" placeholder="Enter First Name" name="firstname" required></div></div><div class="form-group"><label class="control-label col-sm-6" for="email">Email<span class="required-field">*</span></label><div class="col-sm-12"><input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required></div></div><div class="form-group"><label class="control-label col-sm-6" for="email">Mobile Number<span class="required-field">*</span></label><div class="col-sm-12"><input type="number" class="form-control" id="mobilenum" placeholder="Enter Mobile Number" name="mobilenum" required></div></div></div><div class="btn-group-1"><button id="btn-submit" type="button" class="btn btn-primary btn-next">Submit</button></div></form>', document.getElementById("btn-submit").onclick = function() {
                                    ! function() {
                                        var e = document.forms.feedbackform;
                                        console.log(e);
                                        var t = $("#feedfackform"),
                                            n = !1;
                                        $.each(t[0].elements, function(e, t) {
                                            if ($(t).is("[required]") && !1 === n)
                                                if (void 0 === t.value || null === t.value || "" === t.value) { alert(t.placeholder), $(t).focus(), n = !0; try { throw new Error("Please fill mandatory fields") } catch (e) {} } else "email" === t.type ? n = function(e) { return !!e.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || (alert("You have entered an invalid email address!"), !1) }(t) ? (s[t.name] = t.value, !1) : ($(t).focus(), !0) : "tel" === t.type || "number" === t.type || "mobile" === t.type ? n = ! function(e) { return !!e.value.match(/^\d{10}$/) || (alert("Not a valid Mobile Number"), $(e).focus(), !1) }(t) || (s[t.name] = t.value, !1) : s[t.name] = t.value;
                                            else "" !== t.value && (s[t.name] = t.value)
                                        })
                                    }()
                                },
                                function(e) {
                                    var t = document.getElementById(e),
                                        n = -500;
                                    e = setInterval(function() { 0 <= n ? clearInterval(e) : (n += 10, t.style.right = n + "px") }, .1)
                                }("feedbackform")
                        }()
                    }
                }(event)
            },
            function() {
                console.log(d);
                for (var e = document.getElementById("categoryul"), t = '<li role="presentation"> <a role="menuitem" tabindex="-1">' + d[0].name + "</a> </li>", n = 1; n < d.length; n++) {
                    var a = d[n];
                    t = t + '<li role="presentation"> <a role="menuitem" tabindex="-1">' + a.name + "</a> </li>"
                }
                e.innerHTML = t
            }(),
            function(e) {
                var t = document.getElementById(e),
                    n = -500;
                e = setInterval(function() { 0 <= n ? clearInterval(e) : (n += 10, t.style.top = n + "px") }, .2)
            }("feedbackform")
    }
    document.addEventListener("dragstart", function(e) { e.dataTransfer.setData("Text/html", e.target.id), e.target.innerText, document.getElementById("demo").innerHTML = "Started to drag the p element." }), document.addEventListener("dragend", function(e) {
        document.getElementById("demo").innerHTML = "Finished dragging the p element.",
            function() {
                var e = "";
                try { e = document.getElementById("myForm") } catch (e) {}
                if ("" === e || null === e) {
                    var t = document.createElement("FORM");
                    t.setAttribute("id", "myForm"), document.getElementById("droptarget").appendChild(t)
                }
                e = document.getElementById("myForm");
                var n = document.createElement("INPUT");
                n.setAttribute("type", "text"), n.setAttribute("value", "Donald"), e.appendChild(n)
            }()
    }), document.addEventListener("dragover", function(e) { e.preventDefault() }), document.addEventListener("drop", function(e) {
        if (e.preventDefault(), "droptarget" == e.target.className) {
            var t = e.dataTransfer.getData("Text");
            e.target.appendChild(document.getElementById(t))
        }
    })
});