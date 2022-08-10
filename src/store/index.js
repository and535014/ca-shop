import { createStore } from 'vuex'

export default createStore({
  state: {
    header: {
      navigation: [
        {
          navFirst: '所有商品',
          filter: null,
          isOpen: false,
          navSecond: null
        },{
          navFirst: '限時預購',
          filter: 'pre-order',
          isOpen: false,
          navSecond: null
        }, {
          navFirst: '品牌',
          filter: null,
          isOpen: false,
          navSecond: [
            '桃子汽水不加冰',
            'MELODY.C',
            'DearDolls',
            'Cocoriang',
            '25 時茶會',
            '腳尖上的小詩',
            '橘嶼',
            'BEARS',
            '麟 の 手工',
            'SALA'
          ]
        }, {
          navFirst: '尺寸',
          filter: null,
          isOpen: false,
          navSecond: [
            '4 分 MSD/MDD',
            '6 分 YOSD',
            '小寵'
          ]
        }, {
          navFirst: '服飾',
          filter: '服飾',
          isOpen: false,
          navSecond: [
            '4 分 MSD/MDD',
            '6 分 YOSD',
            '小寵'
          ]
        }, {
          navFirst: '鞋子',
          filter: '鞋子',
          isOpen: false,
          navSecond: [
            '4 分 MSD/MDD',
            '6 分 YOSD',
            '小寵'
          ]
        }, {
          navFirst: '假髮',
          filter: '假髮',
          isOpen: false,
          navSecond: [
            '6"',
            '7"'
          ]
        }, {
          navFirst: '眼珠',
          filter: '眼珠',
          isOpen: false,
          navSecond: [
            '14 mm',
            '16 mm'
          ]
        }, {
          navFirst: '配件',
          filter: '配件',
          isOpen: false,
          navSecond: null
        }
      ]
    },
    banners: [
      {
        id: 1,
        title: 'MELODY.C / 4分 / Holy Cross 高腰連身裙 - 限時預購  ~ 2022/7/31',
        imgs: {
          big: `./img/banner/pic01.png`,
          small: `./img/banner/pic01_small.png`
        }
      }, {
        id: 2,
        title: 'Cocoriang / 短斗篷套組 - 限時預購 2022/7/30',
        imgs: {
          big: `./img/banner/pic02.png`,
          small: `./img/banner/pic02_small.png`
        }
      }, {
        id: 3,
        title: '25 時茶會 / 4分 / 開襟毛衣外套 - 限時預購  ~ 2022/6/1',
        imgs: {
          big: `./img/banner/pic03.png`,
          small: `./img/banner/pic03_small.png`
        }
      }, {
        id: 4,
        title: '腳尖上的小詩/ 4分 / 雙釦帶黑色高跟鞋 - 限時預購 ~2022/8/1',
        imgs: {
          big: `./img/banner/pic04.png`,
          small: `./img/banner/pic04_small.png`
        }
      }, {
        id: 6,
        title: '桃子汽水不加冰 / 6分 / 晚安熊條紋睡衣 - 限時預購  ~ 2022/8/11',
        imgs: {
          big: `./img/banner/pic05.png`,
          small: `./img/banner/pic05_small.png`
        }
      }, {
        id: 12,
        title: '麟 の 手工 / 小寵 / 單人圓形沙發 - 限時預購  ~ 2022/8/20',
        imgs: {
          big: `./img/banner/pic06.png`,
          small: `./img/banner/pic06_small.png`
        }
      }
    ],
    products: [
      {
        id: 1,
        title: 'Holy Cross 高腰連身裙',
        price: 2110,
        preorderDeadline: '2022/07/31',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: 'MELODY.C',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['pre-order','MELODY.C','4 分 MSD/MDD', '服飾'],
        discription: ``,
        viewed: 80,
        specs: [
          {
            name: '白色',
            url: `./img/products/product01/pic02.png`
          }, {
            name: '黑色',
            url: `./img/products/product01/pic03.png`
          }],
        imgs: {
          pic01: `./img/products/product01/pic01.png`,
          pic02: `./img/products/product01/pic02.png`,
          pic03: `./img/products/product01/pic03.png`,
          pic04: `./img/products/product01/pic04.png`,
          pic05: `./img/products/product01/pic05.png`,
          pic06: `./img/products/product01/pic06.png`,
          pic07: `./img/products/product01/pic07.png`
        }
      }, {
        id: 2,
        title: '短斗篷套組',
        price: 1610,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: 'Cocoriang',
        size: '小寵',
        cata: '服飾',
        tags: ['pre-order','Cocoriang','小寵', '服飾'],
        discription: ``,
        viewed: 6,
        specs: [
          {
            name: '紅色',
            url: `./img/products/product02/pic03.png`
          }, {
            name: '藍色',
            url: `./img/products/product02/pic03.png`
          }],
        imgs: {
          pic01: `./img/products/product02/pic01.png`,
          pic02: `./img/products/product02/pic02.png`,
          pic03: `./img/products/product03/pic02.png`
        }
      }, {
        id: 3,
        title: '開襟毛衣外套',
        price: 600,
        preorderDeadline: '2022/6/1 晚上10點',
        deliveryDate: '2022/10',
        state: 'pre-order',
        brand: '25 時茶會',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['pre-order','25 時茶會','4 分 MSD/MDD', '服飾'],
        discription: ``,
        viewed: 7,
        specs: [
          {
            name: '駝色',
            url: `./img/products/product03/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product03/pic01.png`,
          pic02: `./img/products/product03/pic02.png`,
          pic03: `./img/products/product03/pic03.png`
        }
      },{
        id: 4,
        title: '雙釦帶黑色高跟鞋',
        price: 400,
        preorderDeadline: '2022/08/01',
        deliveryDate: '2022/11',
        state: 'pre-order',
        brand: '腳尖上的小詩',
        size: '4 分 MSD/MDD',
        cata: '鞋子',
        tags: ['pre-order','腳尖上的小詩','4 分 MSD/MDD', '鞋子'],
        discription: ``,
        viewed: 2,
        specs: [
          {
            name: '黑色',
            url: `./img/products/product04/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product04/pic01.png`,
          pic02: `./img/products/product04/pic02.png`
        }
      }, {
        id: 5,
        title: '綁帶小絲巾',
        price: 200,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: '橘嶼',
        size: '小寵',
        cata: '服飾',
        tags: ['spot-goods','橘嶼','小寵', '服飾'],
        discription: ``,
        viewed: 30,
        specs: [
          {
            name: '深藍-淺藍緞帶',
            url: `./img/products/product05/pic01.png`
          }, {
            name: '深藍-紫色緞帶',
            url: `./img/products/product05/pic01.png`
          }, {
            name: '淺綠-粉紅緞帶',
            url: `./img/products/product05/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product05/pic01.png`,
          pic02: `./img/products/product05/pic02.png`
        }
      }, {
        id: 6,
        title: '晚安熊條紋睡衣',
        price: 800,
        preorderDeadline: '2022/8/11 晚上10點',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: '桃子汽水不加冰',
        size: '6 分 YOSD',
        cata: '服飾',
        tags: ['pre-order','桃子汽水不加冰','6 分 YOSD', '服飾'],
        discription: ``,
        viewed: 1,
        specs: [
          {
            name: '藍色',
            url: `./img/products/product06/pic01.png`
          }, {
            name: '橘色',
            url: `./img/products/product06/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product06/pic01.png`,
          pic02: `./img/products/product06/pic02.png`,
          pic03: `./img/products/product06/pic03.png`,
          pic04: `./img/products/product06/pic04.png`,
        }
      },{
        id: 7,
        title: '格紋襯衫',
        price: 600,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: 'BEARS',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['spot-goods','BEARS','4 分 MSD/MDD', '服飾'],
        discription: ``,
        viewed: 11,
        specs: [
          {
            name: '橘藍配',
            url: `./img/products/product07/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product07/pic01.png`
        }
      }, {
        id: 8,
        title: '人魚套裝',
        price: 2400,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: 'DearDolls',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['spot-goods','DearDolls','4 分 MSD/MDD', '服飾'],
        discription: ``,
        viewed: 20,
        specs: [
          {
            name: '白色',
            url: `./img/products/product08/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product08/pic01.png`,
          pic02: `./img/products/product08/pic02.png`
        }
      }, {
        id: 9,
        title: '休閒套裝',
        price: 1200,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: '桃子汽水不加冰',
        size: '6 分 YOSD',
        cata: '服飾',
        tags: ['spot-goods','桃子汽水不加冰','6 分 YOSD', '服飾'],
        discription: ``,
        viewed: 10,
        specs: [
          {
            name: '藍色',
            url: `./img/products/product09/pic01.png`
          }, {
            name: '紫色',
            url: `./img/products/product09/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product09/pic01.png`
        }
      }, {
        id: 10,
        title: '兔兔套裝',
        price: 1360,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: '桃子汽水不加冰',
        size: '6 分 YOSD',
        cata: '服飾',
        tags: ['spot-goods','桃子汽水不加冰','6 分 YOSD', '服飾'],
        discription: ``,
        viewed: 10,
        specs: [
          {
            name: '駝色',
            url: `./img/products/product10/pic01.png`
          }, {
            name: '灰色',
            url: `./img/products/product10/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product10/pic01.png`
        }
      }, {
        id: 11,
        title: '獅子上衣',
        price: 400,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: '桃子汽水不加冰',
        size: '6 分 YOSD',
        cata: '服飾',
        tags: ['spot-goods','桃子汽水不加冰','6 分 YOSD', '服飾'],
        discription: ``,
        viewed: 10,
        specs: [
          {
            name: '棕色',
            url: `./img/products/product11/pic01.png`
          }, {
            name: '灰色',
            url: `./img/products/product11/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product11/pic01.png`
        }
      }, {
        id: 12,
        title: '單人圓形沙發',
        price: 350,
        preorderDeadline: '2022/8/20 晚上10點',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: '麟 の 手工',
        size: '小寵',
        cata: '配件',
        tags: ['pre-order','麟 の 手工','小寵', '配件'],
        discription: ``,
        viewed: 18,
        specs: [
          {
            name: '狐狸',
            url: `./img/products/product12/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product12/pic01.png`,
          pic02: `./img/products/product12/pic02.png`,
          pic03: `./img/products/product12/pic03.png`
        }
      }, {
        id: 13,
        title: '玻璃眼',
        price: 600,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: 'SALA',
        size: '16 mm',
        cata: '眼珠',
        tags: ['spot-goods','SALA','16 mm', '眼珠'],
        discription: ``,
        viewed: 6,
        specs: [
          {
            name: '仿真・淺灰綠',
            url: `./img/products/product13/pic01.png`
          }, {
            name: '仿真・少年棕',
            url: `./img/products/product13/pic02.png`
          }],
        imgs: {
          pic01: `./img/products/product13/pic01.png`,
          pic02: `./img/products/product13/pic02.png`
        }
      }, {
        id: 14,
        title: '中分長捲髮 牛奶絲',
        price: 500,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: 'SALA',
        size: '7"',
        cata: '假髮',
        tags: ['spot-goods','SALA','7"', '假髮'],
        discription: ``,
        viewed: 22,
        specs: [
          {
            name: '紅棕色',
            url: `./img/products/product14/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product14/pic01.png`
        }
      }, {
        id: 15,
        title: '旁分短鮑伯 牛奶絲',
        price: 400,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: 'SALA',
        size: '7"',
        cata: '假髮',
        tags: ['spot-goods','SALA','7"', '假髮'],
        discription: ``,
        viewed: 12,
        specs: [
          {
            name: '白金色',
            url: `./img/products/product15/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product15/pic01.png`
        }
      }, {
        id: 16,
        title: '馬尾 長捲髮',
        price: 700,
        preorderDeadline: '',
        deliveryDate: '',
        state: 'spot-goods',
        brand: 'SALA',
        size: '7"',
        cata: '假髮',
        tags: ['spot-goods','SALA','7"', '假髮'],
        discription: ``,
        viewed: 22,
        specs: [
          {
            name: '淺棕色',
            url: `./img/products/product16/pic01.png`
          }],
        imgs: {
          pic01: `./img/products/product16/pic01.png`
        }
      }
    ],
    cartList: [],
    footer: {
      links: [
        {
          title: '商品分類',
          content: [
            {
              title: '限時團購',
              url: ''
            }, {
              title: '所有商品',
              url: ''
            }, {
              title: '服飾',
              url: ''
            }, {
              title: '假髮',
              url: ''
            }, {
              title: '眼珠',
              url: ''
            }, {
              title: '鞋子',
              url: ''
            }, {
              title: '配件',
              url: ''
            }
          ]
        }, {
          title: '幫助 / 政策',
          content: [
            {
              title: '購物說明',
              url: ''
            }, {
              title: '運送須知',
              url: ''
            }, {
              title: '預購進度',
              url: ''
            }, {
              title: '訊息公告',
              url: ''
            }, {
              title: '隱私政策',
              url: ''
            }, {
              title: '服務條款',
              url: ''
            }
          ]
        }, {
          title: '關於我們',
          content: [
            {
              title: '公司資訊',
              url: ''
            }, {
              title: '聯絡我們',
              url: ''
            }, {
              title: '人才招募',
              url: ''
            }
          ]
        }
      ]
    }
  },
  getters: {
  },
  mutations: {
    addCart(state, payload){
      state.cartList.push(payload)
    },
    deleteCart(state,payload){
      state.cartList.splice(payload, 1)
    },
    setQuantity(state,payload){
      let id = payload.id
      let qty = payload.qty
      let target = state.cartList[id]
      target.qty = qty
    }
  },
  actions: {
  },
  modules: {
  }
})
