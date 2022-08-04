<template lang="pug">
.modal.photo-zoom-modal
    .modal-backdrop(@click="isOpen=!isOpen")
    .modal-wrapper
        .modal_header
            .btn.btn-icon-m.photo-zoom-modal_close(@click="isOpen=!isOpen")
                i(class="fa-solid fa-xmark icon-l")
        .modal-content
            .pic-wrap(v-html="getImg(imgUrl)")
            .ctrl.ctrl-l(@click="switchLeft")
                i(class="fa-solid fa-angle-left icon-l")
            .ctrl.ctrl-r(@click="switchRight")
                i(class="fa-solid fa-angle-right icon-l")

</template>

<script>
export default {
    props: ['currentImg', 'currentImgId', 'imgs', 'isOpen'],
    data(){
        return {
            imgUrl: this.currentImg,
            imgId: this.currentImgId
        }
    },
    computed: {
        imgsLength(){
            let target = this.imgs
            return Object.keys(target).length
        }
    },
    methods: {
        getImg(url){
            return `<img src="${url}">`
        },
        setImgUrl(i){
            this.imgUrl = this.imgs[i]
        },
        switchLeft(){
            if(this.imgId > 0){
                this.imgId--
            }else{
                this.imgId=this.imgsLength-1
            }
            let id = this.imgId
            let keys = Object.keys(this.imgs)
            let key = keys[id]
            let url = this.imgs[key]
            this.imgUrl = url
        },
        switchRight(){
            if(this.imgId < this.imgsLength-1){
                this.imgId++
            }else{
                this.imgId=0
            }
            let id = this.imgId
            let keys = Object.keys(this.imgs)
            let key = keys[id]
            let url = this.imgs[key]
            this.imgUrl = url
        }
    },
    watch: {
        isOpen: {
            handler(val){
                this.$emit('update', val)
            }
        }
    }

}
</script>

<style lang="scss">
.photo-zoom-modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;

    .modal-backdrop{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(black,.8);
        z-index: 0;
    }

    .modal-wrapper{
        @include flexCenter;
        z-index: 1;
        max-width: 800px;
        margin: 0 auto;
        width: 100vh;
        height: 100vh;
        background-color: #fff;
        position: relative;

        .modal_header{
            display: inline-block;
            position: absolute;
            z-index: 1;
            right: 0;
            top: 0;

            .photo-zoom-modal_close{
                background-color: rgba(black,.5);
                color: white;
                @include size(40px);
                @include flexCenter;
            }
        }

        .modal-content{
            width: 100%;
            height: 100%;
            position: relative;
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
}
</style>