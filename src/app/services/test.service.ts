import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return of(
      [
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Jack Baer",
          "title": "Conor McGregor withdraws from UFC 303 main event vs. Michael Chandler due to injury, Dana White announces - Yahoo Sports",
          "description": "Conor McGregor's three-year layoff from the UFC is getting even longer.",
          "url": "https://sports.yahoo.com/conor-mcgregor-withdraws-from-ufc-303-main-event-vs-michael-chandler-due-to-injury-dana-white-announces-024313850.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/EwTx.0QG7H69jYDbnp_pkw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Njg-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/4f213940-22e4-11ef-b3d6-2db5299825e3",
          "publishedAt": "2024-06-14T12:31:28Z",
          "content": "Conor McGregor has appeared in more Hollywood films than UFC fights since the summer of 2022. (Photo by Samir Hussein/WireImage)\r\nConor McGregor's nearly three-year layoff from the UFC will become ev… [+4813 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Ronny Reyes",
          "title": "Southwest Airlines Boeing flight experienced terrifying 'Dutch roll' with 175 passengers on board - New York Post ",
          "description": "Southwest flight N8825Q, a Boeing 737 carrying 175 passengers, was traveling from Phoenix to Oakland on May 25 when its tail began to wag left and right.",
          "url": "https://nypost.com/2024/06/14/us-news/southwest-airlines-boeing-flight-experienced-dutch-roll-midair/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/06/boeing-737-dutch-roll-comp-2.jpg?quality=75&strip=all&w=1024",
          "publishedAt": "2024-06-14T12:03:00Z",
          "content": "A Southwest Airlines Boeing plane experienced a rare Dutch roll at 32,000 feet in the air that resulted in significant damage to the aircraft that left it out of service, officials said.\r\nSouthwest f… [+2284 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "What next for Sunak and Starmer as poll race enters second half? - BBC.com",
          "description": "Chris Mason and Henry Zeffman find Sunak supporters downbeat and Starmer's team buoyant as polls fail to narrow.",
          "url": "https://www.bbc.com/news/articles/c4nn8k23zlqo",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e69f/live/6b515a40-2a3d-11ef-9749-cd6cde939cc7.png",
          "publishedAt": "2024-06-14T11:46:22Z",
          "content": "By Chris Mason, Political editor  Henry Zeffman, Chief political correspondent\r\nThe moods of the two main parties general election campaigns do not tell us what will happen on 4 July. \r\nBut as we pas… [+7098 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WDSU New Orleans"
          },
          "author": "Erin Lowrey",
          "title": "Louisiana Amber Alert ends with mother, 1 child dead - WDSU New Orleans",
          "description": "The Tangipahoa Parish Sheriff's Office was notified by U.S. Marshals in Mississippi that they arrested Daniel Callihan in Jackson, Mississippi in connection with a homicide and statewide Amber Alert issued Thursday.",
          "url": "https://www.wdsu.com/article/louisiana-mother-dead-children-missing/61096749",
          "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/img-8048-1-666b727fed7b6.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
          "publishedAt": "2024-06-14T11:45:00Z",
          "content": "LORANGER, La. —A search for two missing Louisiana children has tragically ended. \r\nThe Tangipahoa Parish Sheriff's Office was notified by U.S. Marshals in Mississippi that they arrested Daniel Callih… [+3239 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Michele Luhn",
          "title": "5 things to know before the stock market opens Friday - CNBC",
          "description": "Here are five key things investors need to know to start the trading day.",
          "url": "https://www.cnbc.com/2024/06/14/5-things-to-know-before-the-stock-market-opens-friday-june-14.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107428547-1718281928779-gettyimages-2156692119-AFP_34WG4VZ.jpeg?v=1718281971&w=1920&h=1080",
          "publishedAt": "2024-06-14T11:27:40Z",
          "content": "Here are five key things investors need to know to start the trading day:\r\n1. Four-peat\r\nThe S&amp;P 500 and the Nasdaq Composite rallied to record highs Thursday for the fourth day in a row. The S&a… [+4029 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Amarachi Orie",
          "title": "Taylor Swift says ‘most wonderful’ Eras Tour will end in December - CNN",
          "description": "Taylor Swift knows that all good things must come to an end – and that includes her Eras Tour.",
          "url": "https://www.cnn.com/2024/06/14/entertainment/taylor-swift-eras-tour-end-intl-scli/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2157509459.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-06-14T11:21:00Z",
          "content": "Taylor Swift knows that all good things must come to an end and that includes her Eras Tour.\r\nIn an emotional speech during the 100th show of her record-breaking tour on Thursday night, the megastar … [+2838 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "CNBC",
          "title": "Russia's Putin sets out conditions for peace talks with Ukraine - CNBC",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDYvMTQvcnVzc2lhcy1wdXRpbi1vdXRsaW5lcy1jb25kaXRpb25zLWZvci1wZWFjZS10YWxrcy13aXRoLXVrcmFpbmUuaHRtbNIBZ2h0dHBzOi8vd3d3LmNuYmMuY29tL2FtcC8yMDI0LzA2LzE0L3J1c3NpYXMtcHV0aW4tb3V0bGluZXMtY29uZGl0aW9ucy1mb3ItcGVhY2UtdGFsa3Mtd2l0aC11a3JhaW5lLmh0bWw?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-14T11:07:54Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": null,
          "title": "Exclusive-Vanguard vote switch helped pass Tesla CEO Elon Musk's $56 billion pay package - Yahoo Finance",
          "description": null,
          "url": "https://finance.yahoo.com/news/exclusive-vanguard-vote-switch-helped-110537366.html",
          "urlToImage": null,
          "publishedAt": "2024-06-14T11:05:37Z",
          "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
          "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
          },
          "author": "Beth Mole",
          "title": "Mod Easy: A retro e-bike with a sidecar perfect for Indiana Jones cosplay - Ars Technica",
          "description": "It's not the most practical option for passengers, but my son had a blast.",
          "url": "https://arstechnica.com/cars/2024/06/mod-easy-a-retro-e-bike-with-a-sidecar-perfect-for-indiana-jones-cosplay/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/06/MOD_Easy_Sidecar_Section_2_1600x-760x380.webp",
          "publishedAt": "2024-06-14T11:00:39Z",
          "content": "Enlarge/ The Mod Easy Sidecar\r\n18\r\nAs some Ars readers may recall, I reviewed The Maven Cargo e-bike earlier this year as a complete newb to e-bikes. For my second foray into the world of e-bikes, I … [+3350 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Fox News",
          "title": "CDC warns of ‘dual mutant’ flu strain that could evade antiviral drugs: ‘Need to closely monitor’ - Fox News",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LmZveG5ld3MuY29tL2hlYWx0aC9jZGMtd2FybnMtZHVhbC1tdXRhbnQtZmx1LXN0cmFpbi1jb3VsZC1ldmFkZS1hbnRpdmlyYWwtZHJ1Z3MtY2xvc2VseS1tb25pdG9y0gFvaHR0cHM6Ly93d3cuZm94bmV3cy5jb20vaGVhbHRoL2NkYy13YXJucy1kdWFsLW11dGFudC1mbHUtc3RyYWluLWNvdWxkLWV2YWRlLWFudGl2aXJhbC1kcnVncy1jbG9zZWx5LW1vbml0b3IuYW1w?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-14T10:44:00Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Ben Wedeman",
          "title": "CNN asks Hamas official why group hasn’t agreed to US-backed ceasefire proposal - CNN",
          "description": "In a rare interview, CNN’s Ben Wedeman questioned senior Hamas official Osama Hamdan in Beirut, Lebanon. The interview comes amid increasingly distant hopes of reaching a ceasefire agreement between Hamas and Israel.",
          "url": "https://www.cnn.com/2024/06/13/world/video/hamas-official-gaza-israel-ceasefire-wedeman-pkg-ac360-digvid",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-20709922-32777-822-still.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-06-14T10:38:00Z",
          "content": "In a rare interview, CNNs Ben Wedeman questioned senior Hamas official Osama Hamdan in Beirut, Lebanon. The interview comes amid increasingly distant hopes of reaching a ceasefire agreement between H… [+15 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MarketWatch"
          },
          "author": "MarketWatch",
          "title": "When stock markets are a mess, this asset is a great guide to risk appetite - MarketWatch",
          "description": null,
          "url": "https://www.marketwatch.com/story/when-stock-markets-are-a-mess-this-asset-is-a-great-guide-to-risk-appetite-29326b60",
          "urlToImage": null,
          "publishedAt": "2024-06-14T10:35:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "EL PAÍS"
          },
          "author": "Francisco Doménech",
          "title": "Apple's new artificial intelligence leaves out more than 90% of current iPhone users - EL PAÍS USA",
          "description": "Siri’s big improvements will also not reach HomePod speakers or the Apple Watch, the devices that most depend on voice control",
          "url": "https://english.elpais.com/technology/2024-06-14/apples-new-artificial-intelligence-leaves-out-more-than-90-of-current-iphone-users.html",
          "urlToImage": "https://imagenes.elpais.com/resizer/v2/54OZVTWI6FEXHIOTH3NOYHVAU4.jpg?auth=81b9e042387b7358ad06275432fc63f38065fb862da0b7138f16a9cc6659d84a&width=1200",
          "publishedAt": "2024-06-14T10:02:32Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Thao Nguyen",
          "title": "Parkland school building demolished 6 years after massacre - USA TODAY",
          "description": "The 1200 building at Marjory Stoneman Douglas High School has remained untouched since the deadly Valentine's Day shooting in 2018.",
          "url": "https://www.usatoday.com/story/news/nation/2024/06/14/parkland-school-builidng-demolition-victims-families/74092616007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/06/14/USAT/74094329007-1247141394.jpg?crop=3899,2193,x0,y203&width=3200&height=1800&format=pjpg&auto=webp",
          "publishedAt": "2024-06-14T09:19:18Z",
          "content": "The 1200 building at Marjory Stoneman Douglas High School in Parkland, Florida, has served as a lingering reminder of one of the worst mass shootings in U.S. history for more than six years.\r\nThe bui… [+4846 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Eduardo Cuevas, Doyle Rice",
          "title": "Heat wave in forecast for USA: Cities try to keep residents safe - USA TODAY",
          "description": "Forecasters say a heat wave will spread across much of the central and eastern U.S. next week, a moment health officials have been preparing for.",
          "url": "https://www.usatoday.com/story/news/health/2024/06/14/heat-wave-in-forecast-for-usa-cities-try-to-keep-residents-safe/74004274007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/11/USAT/70828033007-gty-1570310289.jpg?crop=3962,2238,x0,y222&width=3200&height=1808&format=pjpg&auto=webp",
          "publishedAt": "2024-06-14T09:07:06Z",
          "content": "Forecasters warn a dangerous and potentially record-breaking heat wave will spread across much of the central and eastern U.S. next week, a moment health officials have been dreading and preparing fo… [+7165 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Reuters",
          "title": "China #MeToo activist Huang sentenced to five years for subversion, supporters say - Reuters",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMifWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2NoaW5hL2NoaW5hLW1ldG9vLWFjdGl2aXN0LWh1YW5nLWV4cGVjdGVkLWJlLXNlbnRlbmNlZC1zdWJ2ZXJzaW9uLWZyaWRheS1zdXBwb3J0ZXJzLTIwMjQtMDYtMTQv0gEA?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-14T07:39:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "SamMobile - Samsung news",
          "title": "Galaxy Z Fold 6 design revealed through close-up dummy unit shots - SamMobile - Samsung news",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiSGh0dHBzOi8vd3d3LnNhbW1vYmlsZS5jb20vbmV3cy9nYWxheHktei1mb2xkLTYtZHVtbXktdW5pdC1pbWFnZXMtbGVha2VkL9IBAA?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-06-14T07:32:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        }
      ]
    )
    // return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=90c0790781ae4e6eb2411a6ab87dbddf').pipe(map((e:any) =>e.articles))
  }
}
