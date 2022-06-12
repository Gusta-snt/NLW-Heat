import userSocialMedia from './index.js';



function changeSociaMediaLinks(links){
    //userName.textContent = "Gustavo Ferreira";
    //githubLink.href = `https://github.com/${userSocialMedia.github}`;

    for(let li of socialLinks.children){
        const social = li.getAttribute("class");
        li.children[0].href = `https://${social}.com/${links[social]}`
    }
}

changeSociaMediaLinks(userSocialMedia);

function getGitHubProfileInfos(userGithub) {

    const url = `https://api.github.com/users/${userGithub.github}`;

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name;
        userLogin.textContent = data.login;
        githubLink.href = data.html_url;
        userImg.src = data.avatar_url;
        userImg.alt = `Foto de ${data.name}`;
        Bio.textContent = data.bio;
        tittleName.textContent = `${data.name} - DoWhile 2021`;
    });
    
}

getGitHubProfileInfos(userSocialMedia);


//arrow function

