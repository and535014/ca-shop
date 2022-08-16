<template lang="pug">
ModalComp.photo-zoom-modal
    template(v-slot:mask)
        MaskCover(@click="isOpen=!isOpen")
    template(v-slot:header)
        .icon.icon-btn.icon-btn-l.photo-zoom-modal_close(@click="isOpen=!isOpen")
                i(class="fa-solid fa-xmark")
    template(v-slot:content)
        .pic-wrap(
            v-html="getImg(imgUrl)"
            @mousedown="mouseDown($event)"
            @mouseup="mouseUp($event)"
            )
        .ctrl.ctrl-l.icon.icon-l(@click="switchLeft")
            i(class="fa-solid fa-angle-left")
        .ctrl.ctrl-r.icon.icon-l(@click="switchRight")
            i(class="fa-solid fa-angle-right")

</template>

<script>
export default {
    props: ["currentImg", "currentImgId", "imgs", "isOpen"],
    data() {
        return {
            imgUrl: this.currentImg,
            imgId: this.currentImgId,
            mouse: {
                x: null,
                y: null
            }
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
        },
        mouseDown(evt){
            this.mouse.x = evt.pageX
            this.mouse.y = evt.pageY

            // console.log(this.mouse.x,this.mouse.y);
        },
        mouseUp(evt){
            let delta = {
                x: evt.pageX - this.mouse.x,
                y: evt.pageY - this.mouse.y
            }

            // console.log(delta.x);
            if(delta.x<0){
                this.switchRight()
            }else if (delta.x>0){
                this.switchLeft()
            }

        }
    },
    watch: {
        isOpen: {
            handler(val) {
                this.$emit("update", val);
            }
        }
    },
    created(){
        document.addEventListener('keydown', (evt)=>{
            let key = evt.key.replace("Arrow", '').toLowerCase()
            if(key=='right'){
                this.switchRight()
            }else if(key=='left'){
                this.switchLeft()
            }
        })
    }
}
</script>

<style lang="scss">
.photo-zoom-modal{
    .mask_cover{
        pointer-events: all;
    }
    .photo-zoom-modal_close{
        background-color: rgba(black,.5);
        color: white;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;

        &:hover{
            color: white;
        }
    }

    .modal-wrapper{
        pointer-events: none;
    }

    .modal-content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pic-wrap{
        width: 100%;
        padding-bottom: 100%;
        position: relative;
        overflow: hidden;
        pointer-events: all;
        
        img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
            height: inherit;
            pointer-events: none
        }
    }

    .ctrl{
        width: 40px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
    }

    @media screen and (max-width: 767px){
        .pic-wrap{
            img{
                width: 100%;
            }
        }
    }

}
</style>