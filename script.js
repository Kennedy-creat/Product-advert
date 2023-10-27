function showContent(contentId) {
    const contentDivs = document.querySelectorAll("#home-content, #about-content, #store-content, #aboutus-content");

    contentDivs.forEach((div) => {
        div.style.display = "none";
    });

    const contentDiv = document.getElementById(`${contentId}-content`);
    contentDiv.style.display = "block";
}
