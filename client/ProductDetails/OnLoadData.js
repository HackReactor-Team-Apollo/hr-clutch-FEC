let productDetailsSorter = function (data) {
    let newState = [];

    data.results.map(style => {
        let stylePhotos = [];
        style.photos.map(photo => {
            stylePhotos.push({
                original: photo.url,
                thumbnail: photo.thumbnail_url
            })
        })
        return newState.push({
            style_id: style.style_id,
            style_specs: {
                name: style.name,
                original_price: style.original_price,
                sale_price: style.sale_price,
            },
            style_photos: stylePhotos,
            style_skus: style.skus
        })
    })
}


let onloadState = [
    {
        "style_id": 221027,
        "style_specs": {
            "name": "White",
            "original_price": "89.00",
            "sale_price": null
        },
        "style_photos": [
            {
                "original": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            }
        ],
        "style_skus": {
            "1281202": {
                "quantity": 14,
                "size": "7"
            },
            "1281203": {
                "quantity": 25,
                "size": "7.5"
            },
            "1281204": {
                "quantity": 9,
                "size": "8"
            },
            "1281205": {
                "quantity": 2,
                "size": "8.5"
            },
            "1281206": {
                "quantity": 18,
                "size": "9"
            },
            "1281207": {
                "quantity": 12,
                "size": "9.5"
            },
            "1281208": {
                "quantity": 10,
                "size": "10"
            },
            "1281209": {
                "quantity": 18,
                "size": "10.5"
            },
            "1281210": {
                "quantity": 11,
                "size": "11"
            },
            "1281211": {
                "quantity": 35,
                "size": "11.5"
            },
            "1281212": {
                "quantity": 25,
                "size": "12"
            }
        }
    },
    {
        "style_id": 221028,
        "style_specs": {
            "name": "Black",
            "original_price": "89.00",
            "sale_price": null
        },
        "style_photos": [
            {
                "original": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80",
                "thumbnail": "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
                "original": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80",
                "thumbnail": "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            }
        ],
        "style_skus": {
            "1281213": {
                "quantity": 14,
                "size": "7"
            },
            "1281214": {
                "quantity": 25,
                "size": "7.5"
            },
            "1281215": {
                "quantity": 9,
                "size": "8"
            },
            "1281216": {
                "quantity": 2,
                "size": "8.5"
            },
            "1281217": {
                "quantity": 18,
                "size": "9"
            },
            "1281218": {
                "quantity": 12,
                "size": "9.5"
            },
            "1281219": {
                "quantity": 10,
                "size": "10"
            },
            "1281220": {
                "quantity": 18,
                "size": "10.5"
            },
            "1281221": {
                "quantity": 11,
                "size": "11"
            },
            "1281222": {
                "quantity": 35,
                "size": "11.5"
            },
            "1281223": {
                "quantity": 25,
                "size": "12"
            }
        }
    }
]

let onLoadImages = [
    {
        thumbnail: "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
    },
    {
        thumbnail: "uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
    },
    {
        thumbnail: "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        original: "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
    }
  ]

  let returnID = function(data) {
      let value = data.product_id;
      return value
  }


  let productSorter = function (data) {
    let newState = [];

    data.results.map(style => {
        let stylePhotos = [];
        style.photos.map(photo => {
            stylePhotos.push({
                original: photo.url,
                thumbnail: photo.thumbnail_url
            })
        })
        return newState.push({
            style_id: style.style_id,
            style_specs: {
                name: style.name,
                original_price: style.original_price,
                sale_price: style.sale_price,
            },
            style_photos: stylePhotos,
            style_skus: style.skus
        })
    })
    return newState
}



  module.exports.onLoadImages = onLoadImages;
  module.exports.productDetailsSorter = productDetailsSorter;
  module.exports.returnID = returnID;
  module.exports.productSorter = productSorter;
  module.exports.onloadState = onloadState;