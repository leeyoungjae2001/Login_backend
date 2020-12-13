window.onload = () => {
    document.getElementsByTagName("section")[1].style.display = "none"

    let id = document.getElementById("userID");
    let id_c_btn = id.getElementsByClassName("clearBtn")[0];
    id_c_btn.addEventListener("click", () => {
        let id_input = id.getElementsByTagName("input")[0];
        id_input.value = "";
    })
    
    let pw = document.getElementById("userPW");
    let pw_c_btn = pw.getElementsByClassName("clearBtn")[0];
    pw_c_btn.addEventListener("click", () => {
        let pw_input = pw.getElementsByTagName("input")[0];
        pw_input.value = "";
    })
    
    let a = document.getElementsByClassName("footer-article")[0];
    let b = a.getElementsByTagName("a")[0]
    b.onclick = () => {
        let sections = document.getElementsByTagName("section");
        sections[0].style.display = "none";
        sections[1].style.display = "block";
    }

    let login_btn = document.getElementById("btn-signin");
    login_btn.onclick = () => {
        let sections = document.getElementsByTagName("section");
        sections[0].style.display = "none";
        sections[1].style.display = "block";
    }
}