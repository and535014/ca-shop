<template lang="pug">
.card-container
    .link-top
        router-link(:to="getPath(id)")
            .pic(v-html="getImg(imgCover,'')")
        .btn-wrap
            .btn.btn-l.btn-icon-m.btn-text.btn-heart(
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
    props: ['id', 'title', 'imgCover', 'state', 'brand', 'price', 'minPrice', 'maxPrice'],
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
    }
}
</script>

<style lang="scss">
.card-container{
    position: relative;
    margin-right: 24px;
    margin-bottom: 32px;
    flex-basis: calc((100% - 96px) / 5);
    min-width: 168px;
    box-sizing: border-box;

    &:nth-child(5n+5){
        margin-right: 0;
    }

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
            @include size(100%,100%);
            z-index: 1;
            pointer-events: none;

            &:before{
                content: "";
                display: block;
                @include size(100%,100%);
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

                .fa-regular{
                    color: white;
                    position: absolute;
                }

                .fa-solid{
                    opacity: .6;
                }
            }
        }

        .tag-wrap{
            position: absolute;
            top: 0;
            left: 0;

            .tag{
                background-color: lighten($brand-color,15);
            }
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
            margin-bottom: 16px;
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
                margin-top: 8px;
            }
        }
    }

    @media screen and (max-width: 1000px){
        flex-basis: calc((100% - 48px) / 3);

        &:nth-child(5n+5){
            margin-right: 24px;
        }

        &:nth-child(3n+3){
            margin-right: 0;
        }
    }

    @media screen and (max-width: 767px){
        flex-basis: calc((100% - 24px) / 2);

        &:nth-child(5n+5){
            margin-right: 0;
        }

        &:nth-child(3n+3){
            margin-right: 24px;
        }

        &:nth-child(2n+2){
            margin-right: 0px;
        }
    }

    @media screen and (max-width: 479px){
        flex-basis: 100%;

        &:nth-child(3n+3){
            margin-right: 0px;
        }

        margin-right: 0;
    }
}
</style>