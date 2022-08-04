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
            '桃子汽水',
            '貍木',
            'MELODY.C',
            'DearDoll',
            'Cocoriang'
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
            '8 mm',
            '10 mm',
            '14 mm',
            '16 mm'
          ]
        }, {
          navFirst: '配件',
          filter: '假髮',
          isOpen: false,
          navSecond: null
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
        id: 1,
        title: '4 分 開襟毛衣',
        price: null,
        minPrice: 1000,
        maxPrice: 1000,
        preorderDeadline: '2022/07/31',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: '25 時茶會',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['pre-order','25 時茶會','4 分 MSD/MDD', '服飾'],
        discription: ``,
        viewed: 8,
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
        id: 2,
        title: '短斗篷套組',
        price: null,
        minPrice: 1700,
        maxPrice: 1700,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'sold-out',
        brand: 'Cocoriang',
        size: '小寵',
        cata: '服飾',
        tags: ['sold-out','Cocoriang','小寵', '服飾'],
        discription: ``,
        viewed: 6,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product02/pic01.png`
          }, {
            name: '灰色',
            price: 1200,
            url: `/img/products/product02/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product02/pic02.png`
          }],
        imgCover: `/img/products/product02/cover.png`,
        imgs: {
          pic01: `/img/products/product02/pic01.png`,
          pic02: `/img/products/product02/pic02.png`
        }
      }, {
        id: 3,
        title: '鞋子',
        price: null,
        minPrice: 100,
        maxPrice: 700,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'spot-goods',
        brand: '腳尖上的小屍',
        size: '4 分 MSD/MDD',
        cata: '鞋子',
        tags: ['spot-goods','腳尖上的小屍','4 分 MSD/MDD', '鞋子'],
        discription: ``,
        viewed: 7,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product03/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product03/pic02.png`
          }],
        imgCover: `/img/products/product03/cover.png`,
        imgs: {
          pic01: `/img/products/product03/pic01.png`,
          pic02: `/img/products/product03/pic02.png`
        }
      },{
        id: 1,
        title: '4 分 開襟毛衣',
        price: null,
        minPrice: 3000,
        maxPrice: 3600,
        preorderDeadline: '2022/07/31',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: '25 時茶會',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['pre-order','25 時茶會','4 分 MSD/MDD', '服飾'],
        discription: ``,
        viewed: 2,
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
        id: 2,
        title: '短斗篷套組',
        price: null,
        minPrice: 1000,
        maxPrice: 1700,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'sold-out',
        brand: 'Cocoriang',
        size: '小寵',
        cata: '服飾',
        tags: ['sold-out','Cocoriang','小寵', '服飾'],
        discription: ``,
        viewed: 30,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product02/pic01.png`
          }, {
            name: '灰色',
            price: 1200,
            url: `/img/products/product02/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product02/pic02.png`
          }],
        imgCover: `/img/products/product02/cover.png`,
        imgs: {
          pic01: `/img/products/product02/pic01.png`,
          pic02: `/img/products/product02/pic02.png`
        }
      }, {
        id: 3,
        title: '鞋子',
        price: null,
        minPrice: 1000,
        maxPrice: 1700,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'spot-goods',
        brand: '腳尖上的小屍',
        size: '4 分 MSD/MDD',
        cata: '鞋子',
        tags: ['spot-goods','腳尖上的小屍','4 分 MSD/MDD', '鞋子'],
        discription: ``,
        viewed: 1,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product03/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product03/pic02.png`
          }],
        imgCover: `/img/products/product03/cover.png`,
        imgs: {
          pic01: `/img/products/product03/pic01.png`,
          pic02: `/img/products/product03/pic02.png`
        }
      },{
        id: 1,
        title: '4 分 開襟毛衣',
        price: null,
        minPrice: 1000,
        maxPrice: 1700,
        preorderDeadline: '2022/07/31',
        deliveryDate: '2022/12',
        state: 'pre-order',
        brand: '25 時茶會',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['pre-order','25 時茶會','4 分 MSD/MDD', '服飾'],
        discription: ``,
        viewed: 11,
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
        id: 2,
        title: '短斗篷套組',
        price: null,
        minPrice: 1000,
        maxPrice: 1700,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'sold-out',
        brand: 'Cocoriang',
        size: '小寵',
        cata: '服飾',
        tags: ['sold-out','Cocoriang','小寵', '服飾'],
        discription: ``,
        viewed: 20,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product02/pic01.png`
          }, {
            name: '灰色',
            price: 1200,
            url: `/img/products/product02/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product02/pic02.png`
          }],
        imgCover: `/img/products/product02/cover.png`,
        imgs: {
          pic01: `/img/products/product02/pic01.png`,
          pic02: `/img/products/product02/pic02.png`
        }
      }, {
        id: 3,
        title: '鞋子',
        price: null,
        minPrice: 1000,
        maxPrice: 1700,
        preorderDeadline: '2022/7/30 晚上10點',
        deliveryDate: '2022/12',
        state: 'spot-goods',
        brand: '腳尖上的小屍',
        size: '4 分 MSD/MDD',
        cata: '鞋子',
        tags: ['spot-goods','腳尖上的小屍','4 分 MSD/MDD', '鞋子'],
        discription: ``,
        viewed: 10,
        specs: [
          {
            name: '棕色',
            price: 1000,
            url: `/img/products/product03/pic01.png`
          }, {
            name: '粉色',
            price: 1700,
            url: `/img/products/product03/pic02.png`
          }],
        imgCover: `/img/products/product03/cover.png`,
        imgs: {
          pic01: `/img/products/product03/pic01.png`,
          pic02: `/img/products/product03/pic02.png`
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
      firstFilter: null,
      secondFilter: null
    }
  },
  getters: {
    filteredProducts(state){
      let products = state.products
      let first = state.filters.firstFilter
      let second = state.filters.secondFilter
      let filteredproducts

      if(first && !second){
        filteredproducts = products.filter((d) => d.tags.find(t=>t===first))
      }else if (!first && second){
        filteredproducts = products.filter((d) => d.tags.find(t=>t===second))
      }else if(first && second){
        let firstfiltered = products.filter((d) => d.tags.find(t=>t===first))
        filteredproducts = firstfiltered.filter((d) => d.tags.find(t=>t===second))
      }else if(!first && !second){
        filteredproducts = products
      }

      return filteredproducts
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
