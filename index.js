function sendUser(){
    const userMedia = {
        github: document.getElementById("inputGithub").value,
        youtube: "channel/UCgkgbE1_iUgCPFsWvlI9laQ",
        facebook: "#",
        twitter: "#",
        instagram: "gustavo_santosfr"
    };
    return userMedia;
}

export default sendUser()

