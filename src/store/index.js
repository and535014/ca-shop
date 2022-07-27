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
    }
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
