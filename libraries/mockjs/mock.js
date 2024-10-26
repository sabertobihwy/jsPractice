const fakeData = Mock.mock(
    {
        code: 0,
        msg: "",
        "data|1-20": [
            {
                "productName|1-4": "iphone",
                productUrl: "@image(200x100)",
                "unitPrice|500-10000": 0,
                "count|1-10": 0
            }
        ]
    })

Mock.mock('https://study.duyiedu.com/api/cart', 'get', fakeData)