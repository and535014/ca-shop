<template lang="pug">
ModalComp.photo-zoom-modal
    template(v-slot:mask)
        MaskCover(@click="isOpen=!isOpen")
    template(v-slot:header)
        .btn.btn-icon-m.photo-zoom-modal_close(@click="isOpen=!isOpen")
                i(class="fa-solid fa-xmark icon-l")
    template(v-slot:content)
        .pic-wrap(v-html="getImg(imgUrl)")
        .ctrl.ctrl-l(@click="switchLeft")
            i(class="fa-solid fa-angle-left icon-l")
        .ctrl.ctrl-r(@click="switchRight")
            i(class="fa-solid fa-angle-right icon-l")

</template>

<script>
import MaskCover from './MaskCover.vue'
export default {
    props: ["currentImg", "currentImgId", "imgs", "isOpen"],
    data() {
        return {
            imgUrl: this.currentImg,
            imgId: this.currentImgId
        };
    },
    computed: {
        imgsLength() {
            let target = this.imgs;
            return Object.keys(target).length;
        }
    },
    methods: {
        getImg(url) {
            return `<img src="${url}">`;
        },
        setImgUrl(i) {
            this.imgUrl = this.imgs[i];
        },
        switchLeft() {
            if (this.imgId > 0) {
                this.imgId--;
            }
            else {
                this.imgId = this.imgsLength - 1;
            }
            let id = this.imgId;
            let keys = Object.keys(this.imgs);
            let key = keys[id];
            let url = this.imgs[key];
            this.imgUrl = url;
        },
        switchRight() {
            if (this.imgId < this.imgsLength - 1) {
                this.imgId++;
            }
            else {
                this.imgId = 0;
            }
            let id = this.imgId;
            let keys = Object.keys(this.imgs);
            let key = keys[id];
            let url = this.imgs[key];
            this.imgUrl = url;
        }
    },
    watch: {
        isOpen: {
            handler(val) {
                this.$emit("update", val);
            }
        }
    },
    components: { MaskCover }
}
</script>

<style lang="scss">
.photo-zoom-modal{
    .photo-zoom-modal_close{
        background-color: rgba(black,.5);
        color: white;
        @include size(40px);
        @include flexCenter;
    }

    .modal-content{
        height: 100%;
    }

    .pic-wrap{
        height: 100%;
        width: 100%;
        
        img{
            height: 100%;
            margin: 0 auto;
            display: block;
        }
    }

    .ctrl{
        @include size(40px,64px);
        @include flexCenter;
    }

}
</style>