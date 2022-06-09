const userSocialMedia = {
    github: "Gusta-snt",
    youtube: "channel/UCgkgbE1_iUgCPFsWvlI9laQ",
    facebook: "#",
    twitter: "#",
    instagram: "gustavo_santosfr"
}

function changeSociaMediaLinks(links){
    userName.textContent = "Gustavo Ferreira";
    githubLink.href = `https://github.com/${userSocialMedia.github}`;

    for(let li of socialLinks.children){
        const social = li.getAttribute("class");
        li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
    }
}

changeSociaMediaLinks(userSocialMedia);