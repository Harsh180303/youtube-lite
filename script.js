

const cardSection = document.querySelector(".cards_section")

async function getCards() {
    try {
        let response = await fetch(API_KEY)
        let result = await response.json()
        console.log(result)
        const items = result.items
        let i = 0
        for (const item of items) {
            // created card
            const card = document.createElement('div')
            card.className='each_card'
            // attached a single card in card section
            cardSection.appendChild(card)

            // created + class name provided --- image -> title -> likes_count -> views_count
            const newImage = document.createElement('img')
            newImage.className="card_image"
            // setting attribute videoId to open the video
            newImage.dataset.videoId = `${item.id}`
            
            // open video onClick of card image
            newImage.addEventListener('click', () => {openVideo(newImage.dataset.videoId)})

            const title = document.createElement('div')
            title.className='video_title'

            const likes_count = document.createElement('div')
            likes_count.className="likes_no"

            const views_count = document.createElement('div')
            views_count.className="views_no"

            // fetched and stored data into variables --- image, title, likes_count, views_count
            newImage.src=`${item.snippet.thumbnails.high.url}`
            title.innerText=`${item.snippet.localized.title}`
            likes_count.innerHTML=`<i class="bi bi-hand-thumbs-up-fill"></i> ${item.statistics.likeCount}`
            views_count.innerText=`views ${item.statistics.viewCount}`

            // attached image, title, likes, views in the card
            card.appendChild(newImage)
            card.appendChild(title)
            card.appendChild(likes_count)
            card.appendChild(views_count)
            i += 1
        }
    } catch (error) {
        console.error(error)
        console.log('Something Went Wrong!')
    }
}


getCards()


async function openVideo(id) {
    // let frame = document.createElement('iframe')
    // frame.src=`https://www.youtube.com/embed/${id}`
    // frame.href="/video.html"

    // document.body.appendChild(frame)


    let iframe_id = document.getElementById('iframe_id')
    iframe_id.src=`https://www.youtube.com/embed/${id}`
}









// https://console.cloud.google.com/welcome?pli=1&inv=1&invt=Ab591Q&project=streaming-pro-h