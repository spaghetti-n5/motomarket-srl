const kijiji = require("kijiji-scraper");

// Scrape using returned promise
kijiji.Ad.Get("https://www.kijiji.it/annunci/ricambi-moto/treviso-annunci-san-vendemiano/volano-completo-malaguti-f10-f12-f15-ciak-centro-50cc-2t/130284340").then(function(ad) {
    // Use the ad object
    console.log(ad.title);
    console.log("loggin")
}).catch(console.error);

// Scrape using optional callback paramater
kijiji.Ad.Get("https://www.kijiji.it/annunci/ricambi-moto/treviso-annunci-san-vendemiano/volano-completo-malaguti-f10-f12-f15-ciak-centro-50cc-2t/130284340", function(err, ad) {
    if (!err) {
        // Use the ad object
        console.log(ad.title);
    }
});