window.onload = () => {
    const params = new URLSearchParams(window.location.search)
    const videoId = params.get("id")

    if (videoId) {
        const attach_iframe = document.getElementById('attach_iframe')
        const frame = document.createElement('iframe')
        frame.className="iframe_video"
        frame.width = '560'
        frame.height = '315'
        frame.src=`https://www.youtube.com/embed/${videoId}`
        frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        frame.allowFullscreen = true

        attach_iframe.appendChild(frame)
    }
}

async function randomChat() {
    const container = document.getElementById("live_chat_container")

    const userNames = ["Subhanshu", "Adarsh", "Ravi", "Krishna", "Rudra"];
    const messages = [
        "Hello there!",
        "How are you?",
        "This is awesome!",
        "Learning JavaScript",
        "Random chat going on...",
        "What's up?",
        "Coding is fun!"
    ];

    setInterval(() => {
        const randomUser = userNames[Math.floor(Math.random() * userNames.length)];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        // creating a new divison and putting username + message inside it.
        const newChat = document.createElement('div')
        newChat.className="newChat"
        const userName = document.createElement('strong')
        userName.className="userName"
        // userName.innerText="Harsh"    //testing
        userName.innerText= randomUser + ': '
        const message = document.createElement('span')
        message.className="message"
        // message.innerText="dkfjhalk"    //testing
        message.innerText= randomMsg
        newChat.appendChild(userName)
        newChat.appendChild(message)
        // attached newChat inside contianer (live_chat_container)
        container.prepend(newChat)

        if (container.children.length > 15) {
            container.removeChild(container.lastElementChild)
        }
    }, 2000)  // after every 1 sec i.e. 1000ms
}

randomChat()

async function getDescription() {
    let descriptionText = document.getElementById('description')
    let comments = document.getElementById('comment_section')
    let title = document.getElementById('title')
    let data = localStorage.getItem('myApiData')
    const storedData = JSON.parse(data)
    console.log(storedData)
    
    for (let i = 0; i <= 50; i++) {
        const params = new URLSearchParams(window.location.search)
        if (params.get('id') == storedData[i].id) {
            // console.log("id found: ", storedData[i].id)
            const description = storedData[i].snippet.description
            const titleContent = storedData[i].snippet.title
            const comment_count = storedData[i].statistics.commentCount
            console.log(description)
            descriptionText.innerText= description
            title.innerText = titleContent
            comments.innerText = comment_count
        }
    }
}

getDescription()

async function getComments() {

}