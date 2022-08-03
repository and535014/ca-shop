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
        tags: ['4 分 MSD/MDD', '服飾'],
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
        state: 'pre-order',
        brand: 'Cocoriang',
        size: '小寵',
        cata: '服飾',
        tags: ['小寵', '服飾'],
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
      }
    ],
    cartList: []
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
