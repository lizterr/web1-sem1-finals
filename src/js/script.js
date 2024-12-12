let currentTab = 0;
function onLoad() {
    window.load = $("#content-div").load("src/pages/home.html");
}


function sidebarButton(id) {
    if (currentTab != id) {
        document.getElementById('content-div').style.cssText = "transition: all ease-in 0.1s; transform: translateY(30px); opacity: 0";
    
        setTimeout(() => {
            if (id == 0) {
                $("#content-div").load("src/pages/home.html");
                currentTab = 0
            }
            else if (id == 1) {
                $("#content-div").load("src/pages/about.html");
                currentTab = 1
            }
            else if (id == 2) {
                $("#content-div").load("src/pages/portfolio.html");
                currentTab = 2
            }
            else if (id == 3) {
                $("#content-div").load("src/pages/contact.html");
                currentTab = 3
            }
            document.getElementById('content-div').style.cssText = "transition: all ease-out 0.5s; transform: translateY(0px); opacity: 100; transition-delay: 1s";
        }, 140);
    } else {
        document.getElement
    }
}


// $("#content-div").load("src/js/home.html");