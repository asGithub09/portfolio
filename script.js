// ================= ELEMENTS =================

const mainTitle =
    document.getElementById("mainTitle");

const subTitle =
    document.getElementById("subTitle");

const description =
    document.getElementById("description");

// ================= TEXT CONTENT =================

const titleText =
    "I'm Akash Srivastava";

const roleText =
    "Senior Executive Customer Service Operations";

const descText =
    "5+ Years Experience in Customer Service Operations, Technical Support, CRM Management, Frontend Development, PC Troubleshooting, Network Troubleshooting, Xbox & PSN Console Support and AI Assisted Solutions.";

// ================= TYPE WRITER FUNCTION =================

function typeWriter(element, text, speed, callback){

    let index = 0;

    function type(){

        if(index < text.length){

            element.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, speed);

        } else {

            if(callback){

                callback();
            }
        }
    }

    type();
}

// ================= START ANIMATION =================

window.onload = function(){

    typeWriter(mainTitle, titleText, 50, function(){

        typeWriter(subTitle, roleText, 30, function(){

            typeWriter(description, descText, 10);

        });

    });

};

// ================= BUTTON EVENTS =================

const hireBtn =
    document.getElementById("hireBtn");

hireBtn.addEventListener("click", function(){

    alert("Thank you for visiting Akash Srivastava's Portfolio!");

});

const contactBtn =
    document.getElementById("contactBtn");

contactBtn.addEventListener("click", function(){

    alert("Let's Connect!");

});