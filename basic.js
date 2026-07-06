document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.querySelector(".opencontact");
    const closeBtn = document.querySelector(".closecontact");
    const contact = document.getElementById("contact");

    openBtn.addEventListener("click", () => {
        contact.style.display = "block";
        openBtn.style.display = "none";
        closeBtn.style.display = "inline-block";
    });

    closeBtn.addEventListener("click", () => {
        contact.style.display = "none";
        closeBtn.style.display = "none";
        openBtn.style.display = "inline-block";
    });

    //profile

    const openprofilebtn = document.querySelector(".openprofile");
    const closeprofilebtn = document.querySelector(".closeprofile");
    const profile = document.getElementById("profile");

    openprofilebtn.addEventListener("click",()=>{
        openprofilebtn.style.display = "none";
        closeprofilebtn.style.display= "inline-block";
        profile.style.display = "block";

    })
    closeprofilebtn.addEventListener("click",()=>{
        openprofilebtn.style.display = "inline-block";
        closeprofilebtn.style.display= "none ";
        profile.style.display = "none";

    })

    //certification
    const opencertbtn = document.querySelector(".opencert")
    const closecertbtn = document.querySelector(".closecert")
    const cert = document.getElementById("cert");

    opencertbtn.addEventListener("click",()=>{
        opencertbtn.style.display = "none";
        closecertbtn.style.display= "inline-block";
        cert.style.display = "block";

    })
    closecertbtn.addEventListener("click",()=>{
        opencertbtn.style.display = "inline-block";
        closecertbtn.style.display= "none ";
        cert.style.display = "none";

    })
  // techincal skills 

    const opentechbtn = document.querySelector(".opentech")
    const closetechbtn = document.querySelector(".closetech")
    const tech = document.getElementById("tech");

    opentechbtn.addEventListener("click",()=>{
        opentechbtn.style.display = "none";
        closetechbtn.style.display= "inline-block";
        tech.style.display = "block";

    })
    closetechbtn.addEventListener("click",()=>{
        opentechbtn.style.display = "inline-block";
        closetechbtn.style.display= "none ";
        tech.style.display = "none";

    })
    // experience 
     const openexpbtn = document.querySelector(".openexp")
    const closeexpbtn = document.querySelector(".closeexp")
    const exp = document.getElementById("exp");

    openexpbtn.addEventListener("click",()=>{
        openexpbtn.style.display = "none";
        closeexpbtn.style.display= "inline-block";
        exp.style.display = "block";

    })
    closeexpbtn.addEventListener("click",()=>{
        openexpbtn.style.display = "inline-block";
        closeexpbtn.style.display= "none ";
        exp.style.display = "none";

    })
});