import { createStore } from 'vuex'

export default createStore({
  state: {
    header: {
      navigation: [
        {
          navFirst: '限時預購',
          navSecond: null,
          isOpen: false
        }, {
          navFirst: '所有商品',
          navSecond: null,
          isOpen: false
        }, {
          navFirst: '品牌',
          navSecond: [
            '桃子汽水',
            '貍木',
            'MELODY.C',
            'DearDoll'
          ],
          isOpen: false
        }, {
          navFirst: '尺寸',
          navSecond: [
            '四分 MSD/MDD',
            '六分 YOSD',
            '小寵'
          ],
          isOpen: false
        }, {
          navFirst: '服飾',
          navSecond: [
            '四分 MSD/MDD',
            '六分 YOSD',
            '小寵'
          ],
          isOpen: false
        }, {
          navFirst: '鞋子',
          navSecond: [
            '四分 MSD/MDD',
            '六分 YOSD',
            '小寵'
          ],
          isOpen: false
        }, {
          navFirst: '假髮',
          navSecond: [
            '6"',
            '7"'
          ],
          isOpen: false
        }, {
          navFirst: '眼珠',
          navSecond: [
            '8 mm',
            '10 mm',
            '14 mm',
            '16 mm'
          ],
          isOpen: false
        }, {
          navFirst: '配件',
          navSecond: null,
          isOpen: false
        }
      ]
    },
    banners: [
      {
        id: 1,
        title: '25時茶會',
        img: `/img/banner/pic01.png`
      }, {
        id: 2,
        title: '25時茶會',
        img: `/img/banner/pic02.png`
      }, {
        id: 3,
        title: '25時茶會',
        img: `/img/banner/pic03.png`
      }, {
        id: 4,
        title: '25時茶會',
        img: `/img/banner/pic04.png`
      }, {
        id: 5,
        title: '25時茶會',
        img: `/img/banner/pic05.png`
      }, {
        id: 6,
        title: '25時茶會',
        img: `/img/banner/pic06.png`
      }
    ],
    products: [
      {
        id: 0,
        title: '4 分 開襟毛衣',
        price: 1000,
        discount: 0.9,
        isDiscount: false,
        isPreorder: true,
        preorderDeadline: '2022/07/31',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: '25 時茶會',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['pre-order','25 時茶會','4 分 MSD/MDD', '服飾'],
        discription: ``,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product01/pic01.png`
          }, {
            name: '灰色',
            price: 1200,
            url: `/img/products/product01/pic06.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product01/pic02.png`
          }],
        imgCover: `/img/products/product01/cover.png`,
        imgs: {
          pic01: `/img/products/product01/pic01.png`,
          pic02: `/img/products/product01/pic02.png`,
          pic03: `/img/products/product01/pic03.png`,
          pic04: `/img/products/product01/pic04.png`,
          pic05: `/img/products/product01/pic05.png`,
          pic06: `/img/products/product01/pic06.png`,
          pic07: `/img/products/product01/pic07.png`
        }
      }, {
        id: 1,
        title: '短斗篷套組',
        price: 1610,
        discount: 0.9,
        isDiscount: false,
        isPreorder: true,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'sold-out',
        brand: 'Cocoriang',
        size: '小寵',
        cata: '服飾',
        tags: ['sold-out','Cocoriang','小寵', '服飾'],
        discription: ``,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product01/pic01.png`
          }, {
            name: '灰色',
            price: 1200,
            url: `/img/products/product01/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product01/pic01.png`
          }],
        imgCover: `/img/products/product02/cover.png`,
        imgs: {
          pic01: `/img/products/product02/pic01.png`,
          pic02: `/img/products/product02/pic02.png`
        }
      }, {
        id: 2,
        title: '鞋子',
        price: 1610,
        discount: 0.9,
        isDiscount: false,
        isPreorder: true,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'sold-out',
        brand: '腳尖上的小屍',
        size: '4 分 MSD/MDD',
        cata: '鞋子',
        tags: ['sold-out','腳尖上的小屍','4 分 MSD/MDD', '鞋子'],
        discription: ``,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product01/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product01/pic01.png`
          }],
        imgCover: `/img/products/product02/cover.png`,
        imgs: {
          pic01: `/img/products/product02/pic01.png`,
          pic02: `/img/products/product02/pic02.png`
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
    },
    filters: {
      firstFilter: '4 分 MSD/MDD',
      secondFilter: null
    }
  },
  getters: {
    filteredProducts(state){
      let products = state.products
      let firstFilteredProducts = products.filter((d) => d.tags.find(t=>t==state.filters.firstFilter))
      let secondFilteredProducts = null

      if(state.filters.secondFilter){
        secondFilteredProducts = firstFilteredProducts.filter((d) => d.tags.find(t=>t==state.filters.secondFilter))
      }
      return state.filters.secondFilter?secondFilteredProducts:firstFilteredProducts
    }
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
    },
    setFilters(state,payload){
      let target = state.filters
      target.firstFilter = payload.first
      target.secondFilter = payload.second
    }
  },
  actions: {
  },
  modules: {
  }
})
