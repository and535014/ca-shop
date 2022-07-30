<template lang="pug">
.modal.photo-zoom-modal
    .modal-backdrop
    .modal-wrapper
        .modal-holder
            .modal_header
                .photo-zoom-modal_close
                    span X
            .modal-content
                .pic-wrap
                    img(src="https://cdn01.pinkoi.com/product/ZW4fi4zF/0/22/800x0.jpg")
                .ctrl-wrap.ctrl-l-wrap
                    i(class="fa-solid fa-angle-left")
                .ctrl-wrap.ctrl-r-wrap
                    i(class="fa-solid fa-angle-right")

</template>

<script>
export default {

}
</script>

<style lang="scss">
.photo-zoom-modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    z-index: 100;

    &.isOpen{
        display: block;
    }

    .modal-backdrop{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(black,.6);
        z-index: 0;
    }

    .modal-wrapper{
        @include flexCenter;
        position: relative;
        z-index: 1;

        .modal-holder{
            max-width: 800px;
            width: 100vh;
            height: 100vh;
            background-color: #fff;
            position: relative;
            border: 1px solid #eee;
            box-sizing: border-box;

            .modal_header{
                display: inline-block;
                position: absolute;
                z-index: 1;
                right: 0;
                top: 0;
                cursor: pointer;

                .photo-zoom-modal_close{
                    @include size(24px);
                }
            }

            .modal-content{
                width: 100%;
                height: 100%;
                background-color: #fff;
                position: relative;
            }

            .pic-wrap{
                height: 100%;
                img{
                    height: 100%;
                }
            }

            .ctrl-wrap{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                @include size(40px,50px);
                background-color: rgba(black,.1);
            }
            .ctrl-l-wrap{
                left: 0;
            }
            .ctrl-r-wrap{
                right: 0;
            }
        }
    }
}
</style>