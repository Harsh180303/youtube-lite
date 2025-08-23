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
        frame.allow = "accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        frame.allowFullscreen = true

        attach_iframe.appendChild(frame)
    }
}

async function randomChat() {
    const continer = document.getElementById("live_chat_container")
    setInterval(() => {
        // creating a new divison and putting username + message inside it.
        const newChat = document.createElement('div')
        newChat.className="newChat"
        const userName = document.createElement('strong')
        userName.className="userName"
        userName.innerText="Harsh"    //testing
        const message = document.createElement('span')
        message.className="message"
        message.innerText="dkfjhalk"    //testing
        newChat.appendChild(userName)
        newChat.appendChild(message)
        // attached newChat inside contianer (live_chat_container)
        continer.prepend(newChat)
    }, 1000)  // after every 1 sec i.e. 1000ms
}

randomChat()