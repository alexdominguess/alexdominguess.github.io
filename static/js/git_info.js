const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')

form.addEventListener('submit', (e) => {
    const gitHubUser = document.getElementById('search').value
    e.preventDefault()
    if (gitHubUser) {
        getUser(gitHubUser)
    }
})

async function getUser(username) {
    try {
        const res = await axios.get(APIURL + username)
        createUserCard(res.data)
    } catch (error) {
        createErrorCard()
    }

}

function createUserCard(user) {
    console.log(user)
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Folowers</strong></li>
                <li>${user.following} <strong>Folowing</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
        </div>
    </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard() {
    const cardHTML = `
    <div class="card">
        
        <div class="user-info">
            <h2>:-(</h2>
            <p>User not found.</p>
    </div>
    `
    main.innerHTML = cardHTML
}

function showModal() {
    document.querySelector('#modal').classList.add('show')
    document.querySelector('#modal').classList.remove('modal')
}

function closeModal() {
    document.querySelector('#modal').classList.remove('show')
    document.querySelector('#modal').classList.add('modal')
}