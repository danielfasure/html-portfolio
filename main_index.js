/* =====================================================
   BACKGROUND VIDEO
===================================================== */

const video = document.getElementById("myVideo");

if (video) {
    video.playbackRate = 0.5;
}


/* =====================================================
   EXPERIENCE
===================================================== */

const experienceButtons =
    document.querySelectorAll(".experience-button");

const experienceSections =
    document.querySelectorAll(".experience-details");


experienceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.target;

        experienceSections.forEach(section => {
            section.classList.remove("active");
        });

        const target =
            document.getElementById(targetId);

        if (target) {
            target.classList.add("active");

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* =====================================================
   SKILLS
===================================================== */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach(card => {

    card.addEventListener("click", () => {

        const description =
            card.querySelector(".skill-description");

        if (description) {
            description.classList.toggle("d-none");
        }

    });

});