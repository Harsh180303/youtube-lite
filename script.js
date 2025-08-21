

const cardSection = document.querySelector(".cards_section")
// let img = document.createElement('img')
// let image = document.getElementById('image0')

async function getUser() {
    try {
        let response = await fetch(API_KEY)
        console.log(response)
        let result =  await response.json()
        console.log(result)
        console.log(result.items[0].snippet.thumbnails.default.url)

        console.log(result.items[0].snippet.localized.title)

        console.log(result.items[0].snippet.localized.description)

        console.log(result.items[0].statistics.viewCount)

        console.log(result.items[0].statistics.likeCount)

        // image.innerHTML=''

        // WORKING CODE
        // img.src=`${result.items[0].snippet.thumbnails.default.url}`
        // document.body.appendChild(img)


        // TESTING CODE
        image.src=`${result.items[0].snippet.thumbnails.default.url}`

    }
    catch (error){
        console.log(error, "something went wrong")
    }
}

// getUser()

// =================================================================================
//            Fresh Logic

// async function getCards() {
//     try {
//         let response = await fetch(API_KEY)
//         let result = await response.json()
//         const items = result.items
//         let i = 0
//         for (const item of items) {
            
//             card.className='each_card'
//             let newImage = document.createElement('img')
//             newImage.id=`cardImage${i}`
//             newImage.src=`${item.snippet.thumbnails.default.url}`
//             cardSection.appendChild(newImage)
//             i += 1
//         }
//     } catch (error) {
//         console.error(error)
//         console.log('Something Went Wrong!')
//     }
// }

// getCards()



// async function getCards() {
//     try {
//         let response = await fetch(API_KEY)
//         let result = await response.json()
//         const items = result.items
//         let i = 0
//         for (const item of items) {
            
//             card.className='each_card'
//             let newImage = document.createElement('img')
//             newImage.id=`cardImage${i}`
//             newImage.src=`${item.snippet.thumbnails.default.url}`
//             cardSection.appendChild(newImage)
//             i += 1
//         }
//     } catch (error) {
//         console.error(error)
//         console.log('Something Went Wrong!')
//     }
// }

// getCards()


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









// https://console.cloud.google.com/welcome?pli=1&inv=1&invt=Ab591Q&project=streaming-pro-h