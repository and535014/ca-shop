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
        img: `img/banner/pic01.png`
      }, {
        id: 2,
        title: '25時茶會',
        img: `img/banner/pic02.png`
      }, {
        id: 3,
        title: '25時茶會',
        img: `img/banner/pic03.png`
      }, {
        id: 4,
        title: '25時茶會',
        img: `img/banner/pic03.png`
      }, {
        id: 5,
        title: '25時茶會',
        img: `img/banner/pic03.png`
      }, {
        id: 6,
        title: '25時茶會',
        img: `img/banner/pic03.png`
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
        state: 'pre-order',
        brand: '25 時茶會',
        size: '4 分 MSD/MDD',
        cata: '服飾',
        tags: ['4 分 MSD/MDD', '服飾'],
        discription: ``,
        spec: ['棕色', '灰色', '粉色']
      }, {
        id: 1,
        title: '短斗篷套組',
        price: 1610,
        discount: 0.9,
        isDiscount: false,
        isPreorder: true,
        preorderDeadline: '2022/07/31',
        state: 'pre-order',
        brand: 'Cocoriang',
        size: '小寵',
        cata: '服飾',
        tags: ['小寵', '服飾'],
        discription: ``,
        spec: ['藍色', '紅色']
      }, {
        id: 2,
        title: '雙釦帶黑色高跟鞋',
        price: 400,
        discount: 0.9,
        isDiscount: false,
        isPreorder: true,
        preorderDeadline: '2022/07/31',
        state: 'pre-order',
        brand: '腳尖上的小詩',
        size: '4 分 MSD/MDD',
        cata: '鞋子',
        tags: ['4 分 MSD/MDD', '鞋子'],
        discription: ``,
        spec: ['黑色']
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
