const LinksSocialMedia = {
  github: 'mateusmedeir',
  linkedin: 'in/mateusmedeir',
  facebook: 'profile.php?id=100074307061196',
  instagram: 'mateusloop',
  twitter: 'MateusMLopes12'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      description.textContent = data.bio
      userLink.href = data.html_url
      userPicture.src = data.avatar_url
      userNameGitHub.textContent = data.login
    })
}
getGitHubProfileInfos()
