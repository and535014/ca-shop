<template lang="pug">
.card-container.col-6.col-sm-4.col-lg-3.mb-4.mb-lg-5.px-1.px-sm-2
    .link-top
        router-link(:to="getPath(id)")
            .pic(v-html="getImg(imgs.pic01,'')")
        .btn-wrap
            .icon.icon-btn.icon-btn-l.btn-heart(
                @click.stop="addWishList()"
                :class="{liked: isLiked}"
            )
                i(class="fa-solid fa-heart")
                i(class="fa-regular fa-heart")
        .tag-wrap
            span.tag.pre-order-tag(v-if="state=='pre-order'") 預購
    .info
        router-link.link-bottom(:to="getPath(id)") {{ title }}
        .details 
            a.brand(href="#") {{ brand }}
            .price
                span.unit NT$ 
                span.num(v-if="price") {{ addCommaToNum(price) }}
                span.num(v-if="!price") {{ addCommaToNum(minPrice) }} ~ {{ addCommaToNum(maxPrice) }}
    Transition(name="fadeIn" mode="out-in")
        ModalComp(
            v-if="isAdded"
            :msg="msg"
            :icon="msgIcon"
            )
            template(v-slot:mask)
                MaskCover
            template(v-slot:msg)

</template>

<script>
export default {
    props: ['id', 'title','imgs', 'state', 'brand', 'price', 'minPrice', 'maxPrice'],
    inject: ['provideBodyIsOVH'],
    data(){
        return {
            isAdded: false,
            isLiked: false,
            msg: '',
            msgIcon: ''
        }
    },
    methods: {
        getImg(url, alt){
            return `<img src="${url}" alt="${alt}">`
        },
        getPath(id){
            return `/product/${id}`
        },
        addCommaToNum(num){
            let number = num.toString()
            let result = number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")
            return result
        },
        addWishList(){
            if(!this.isLiked){
                this.msg = '商品已加入心願清單。'
                this.msgIcon = 'success'
                this.isAdded=true
                this.isLiked=true
    
                setTimeout(()=>{
                    this.isAdded=false
                    this.msg = ''
                    this.msgIcon = ''
                },1200)
            }else if(this.isLiked){
                this.msg = '商品已從心願清單移除。'
                this.msgIcon = 'success'
                this.isAdded=true
                this.isLiked=false
    
                setTimeout(()=>{
                    this.isAdded=false
                    this.msg = ''
                    this.msgIcon = ''
                },1200)
            }
        }
    },
    watch: {
        isAdded: {
            handler(val){
                this.provideBodyIsOVH(val)
            }
        }
    }
}
</script>

<style lang="scss">
.card-container{
    position: relative;

    .link-top{
        display: block;
        width: 100%;
        padding-bottom: 100%;
        background-color: #eee;
        position: relative;

        .pic{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            img{
                width: 100%;
            }
        }

        &:hover{
            .btn-wrap{
                
                &:before{
                    opacity: 1;
                }

                .btn-heart{
                    opacity: 1;
                }
            }
        }

        .btn-wrap{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;

            &:before{
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                background-color: rgba(white,.2);
                opacity: 0;
            }

            .btn-heart{
                position: absolute;
                right: 0;
                bottom: 0;
                background-color: transparent;
                z-index: 10;
                pointer-events: all;
                opacity: 0;

                .fa-regular{
                    color: white;
                    position: absolute;
                    left: 0;
                }

                .fa-solid{
                    opacity: .6;
                }

                &:hover{
                    .fa-regular{
                        color: white;
                    }
                    .fa-solid{
                        color: black;
                        opacity: 1;
                    }
                }

                &.liked{
                    opacity: 1;
                    .fa-solid{
                        color: #e63249;
                        opacity: 1;
                    }
                }

                
            }
        }

        .tag-wrap{
            position: absolute;
            top: 0;
            left: 0;
        }

    }

    .info{
        display: block;
        padding-top: 8px;
        background-color: #fff;
        letter-spacing: normal;

        .link-bottom{
            font-size: 16px;
            font-weight: bold;
            display: block;
            margin-bottom: 12px;
        }

        .details{
            .brand{
                font-size: 14px;

                &:hover{
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }
            }
    
            .price{
                font-size: 18px;
                font-weight: bold;
                margin-top: 4px;
            }
        }
    }

}

</style>