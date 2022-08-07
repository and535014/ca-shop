<template lang="pug">
header.header
    .top-header
        .wrapper
            .left
                .btn.btn-l.btn-icon-m.btn-text.nav-menu-btn(
                    @click="navMenuIsOpen=!navMenuIsOpen"
                    )
                    i(class="fa-solid fa-bars")
                .search-bar-wrap
                    .search-icon.btn.btn-l.btn-icon-m.btn-text(
                        @click="searchIsActive=!searchIsActive"
                        :class="{active: searchIsActive}"
                        )
                        i(class="fa-solid fa-magnifying-glass")
                    input.keyword-input(
                        type="text" 
                        placeholder="商品搜尋"
                        :class="{active: searchIsActive}"
                        v-model="keywords"
                        @change="goSearch"
                        )
            .logo-wrap 
                router-link.logo(to="/") Crystal Apple
            .icons-wrap 
                .btn.btn-l.btn-icon-m.btn-text
                    i(class="fa-solid fa-user")
                .btn.btn-l.btn-icon-m.btn-text
                    i(class="fa-regular fa-heart")
                .btn.btn-l.btn-icon-m.btn-text
                    i(class="fa-solid fa-clipboard-list")
                .btn.btn-l.btn-icon-m.btn-text.btn-cart(@click="cartIsOpen=!cartIsOpen") 
                    i(class="fa-solid fa-cart-shopping")
                    .cart-count(v-if="cartList.length!=0") {{ cartList.length }}

    nav.navigation 
        .wrapper
            ul.nav-first(v-for='first in navigation')
                li.nav-first-li(
                    @mouseover="first.isOpen = true"
                    @mouseleave="first.isOpen = false"
                    :class="{isOpen: first.isOpen}"
                    )
                    template(v-if="!first.navSecond")
                        router-link.title(
                            :to="getPath(first,'')"
                            )
                            span {{ first.navFirst }}
                    template(v-if="first.navSecond")
                        .title
                            span {{ first.navFirst }}
                    transition(name="fadeIn")
                        .nav-second(
                            v-if="first.navSecond" 
                            v-show="first.isOpen"
                            ) 
                            router-link.topic-link(
                                href="#" 
                                v-for="second in first.navSecond"
                                :to="getPath(first, second)"
                                ) {{ second }}
    nav.navigation-menu(:class="{isOpen: navMenuIsOpen}")
        .close-wrap
            .search-icon.btn.btn-l.btn-icon-m.btn-text(@click="navMenuIsOpen=!navMenuIsOpen")
                i(class="fa-solid fa-xmark icon-l")
        .search-bar-wrap
            .search-icon.btn.btn-l.btn-icon-m.btn-text
                i(class="fa-solid fa-magnifying-glass")
            input.keyword-input(
                type="text" 
                placeholder="商品搜尋"
                :class="{active: searchIsActive}"
                v-model="keywords"
                @change="goSearch; navMenuIsOpen=!navMenuIsOpen"
                )
        ul.nav-first(v-for='first in navigation')
            li.nav-first-li(
                @click="first.isOpen = !first.isOpen"
                :class="{isOpen: first.isOpen}"
                )
                template(v-if="!first.navSecond")
                    router-link.title(
                        :to="getPath(first,'')"
                        @click="navMenuIsOpen=!navMenuIsOpen"
                        )
                        span {{ first.navFirst }}
                template(v-if="first.navSecond")
                    .title
                        span {{ first.navFirst }}
                        i(class="fa-solid fa-angle-right icon-s")
                    .nav-second(
                        v-if="first.navSecond" 
                        v-show="first.isOpen"
                        ) 
                        router-link.topic-link(
                            v-for="second in first.navSecond"
                            :to="getPath(first, second)"
                            @click="navMenuIsOpen=!navMenuIsOpen"
                            ) {{ second }}
    transition(name="fadeInOut")
        MaskCover(
            v-if="navMenuIsOpen"
            @click.once="navMenuIsOpen=!navMenuIsOpen"
            )
</template>

<script>
import { mapState } from 'vuex'
import MaskCover from './MaskCover.vue'
export default {
    props: ["cartIsOpen", "reactIsShow"],
    computed: {
        ...mapState({
            navigation: state => state.header.navigation,
            cartList: state => state.cartList
        })
    },
    data() {
        return {
            searchIsActive: false,
            keywords: "",
            navMenuIsOpen: false
        };
    },
    watch: {
        cartIsOpen: {
            handler(val) {
                this.$emit("update", { cartIsOpen: val });
            }
        }
    },
    methods: {
        getPath(first, second) {
            if (first.navSecond) {
                let result = second.split(" ").join("_").split("/").join("-");
                return `/browse/${first.navFirst}=${result}`;
            }
            else if (!first.navSecond) {
                return `/browse/${first.navFirst}`;
            }
        },
        getSearchPath() {
            if (this.keywords) {
                return `/search/${this.keywords}`;
            }
        },
        goSearch() {
            this.$router.push({ path: `/search/keywords=${this.keywords}` });
            this.keywords = null;
            this.searchIsActive = false;
        }
    },
    components: { MaskCover }
}
</script>

<style lang="scss">
.header{
    padding: 0 24px;
    border-bottom: 1px solid $black-40;

    .top-header{
        padding: 16px 0;
        .wrapper{
            display: grid;
            grid-template-columns: 1fr 250px 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: 'left logo icons';
        }

        .left{
            grid-area: 'left';
            display: flex;
            align-items: center;
        }
        .search-bar-wrap {
            display: flex;
            align-items: center;

            .search-icon{

                &.active{
                    color: lighten($brand-color,10);
                }
            }

            .keyword-input{
                border: none;
                border-bottom: 1px solid $black-60;
                transition: width .3s;
                border-radius: 0;
                padding: 0;
                width: 0;
                line-height: 30px;
                text-indent: 8px;

                &.active{
                    width: 200px;
                }

            }
        }
        .logo-wrap{
            @include flexCenter;
            grid-area: 'logo';
        }

        .icons-wrap{
            grid-area: 'icons';
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .btn{
                margin-left: 12px;
            }

            .btn-cart{
                position: relative;
                .cart-count{
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    width: 20px;
                    line-height: 20px;
                    font-size: 10px;
                    background-color: lighten($brand-color,20);
                    border-radius: 100px;
                    color: white;
                    font-weight: bold;
                }
            }

        }

    }

    .nav-menu-btn{
        display: none;
    }

    .navigation{
        .wrapper{
            display: flex;
        }
        .nav-first{
            flex: 1 0 100px;
            position: relative;


            .nav-first-li{
                cursor: pointer;
                z-index: 10;
                &.isOpen{
                    .title{
                        font-weight: bold;
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                    .nav-second{
                        a{
                            opacity: 1;
                        }
                    }
                }
                .title{
                    background-color: #fff;
                    padding: 14px 0;
                    font-size: 16px;
                    margin: 0;
                    font-weight: normal;
                    display: block;
                }

            }

        }

        .nav-second{
            position: absolute;
            min-width: 100%;
            top: 47px;
            left: 0;
            border: 1px solid $black-40;
            z-index: 10;
            background-color: #fff;
            padding: 8px 12px;

            .topic-link{
                line-height: 40px;
                transition: .3s;
                display: block;
                color: $black-60;

                &:hover{
                    color: lighten($brand-color,10);
                }
            }
        }
    }

    .navigation-menu{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: #fff;
        width: 300px;
        height: 100vh;
        padding: 24px;
        padding-right: 16px;
        overflow: scroll;
        box-sizing: border-box;
        transition: .5s;
        transform: translateX(-100%);

        &.isOpen{
            transform: translateX(0);
        }

        .close-wrap{
            position: absolute;
            top: 0;
            left: 0;
        }

        .search-bar-wrap{
            display: flex;
            padding: 20px 24px;
            border-bottom: 1px solid #eee;
            .search-icon{
                margin-right: 8px;
            }
            .keyword-input{
                flex: 1;
            }
        }

        .nav-first{
            text-align: left;

            .nav-first-li{
                .title{
                    cursor: pointer;
                    display: block;
                    font-size: 18px;
                    line-height: 48px;
                    box-sizing: border-box;
                    transition: .5s;
                    padding: 0 16px;
                    padding-left: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .fa-angle-right{
                        transition: .5s;
                        transform: rotate(0);
                    }

                    &:hover{
                        background-color: rgba(#eee,.8);
                    }
                }

                .nav-second{
                    padding-left: 24px;
                    border-bottom: 1px solid rgba(#eee,.8);
                    .topic-link{
                        display: block;
                        line-height: 44px;
                        cursor: pointer;

                        &:hover{
                            color: lighten($brand-color,10);
                        }
                    }
                }

                &.isOpen{
                    .title{
                        background-color: rgba(#eee,.8);

                        .fa-angle-right{
                            transform: rotate(90deg);
                        }
                    }
                }
            }

        }
    }

    @media screen and (max-width: 1000px){
        .top-header{
            .search-bar-wrap{
                display: none;
            }

            .logo{
                font-size: 32px;
            }
        }
        .navigation{
            display: none;
        }
        .nav-menu-btn{
            display: inline-flex;
        }

        .navigation-menu{
            display: block;
        }
    }

    @media screen and (max-width: 1000px){
        .top-header{
            .icons-wrap{
                .btn{
                    margin-left: 0;
                }

                .btn:nth-child(3){
                    display: none;
                }
            }
        }
    }
    @media screen and (max-width: 767px){
        .top-header{
            .icons-wrap{
                .btn{
                    margin-left: 0;
                }

                .btn:nth-child(2){
                    display: none;
                }
            }
        }
    }

    @media screen and (max-width: 479px){
        .top-header{
            .wrapper{
                grid-template-columns: 1fr 100px 1fr;
            }

            .logo{
                font-size: 18px;
            }

            .icons-wrap{
                .btn{
                    @include size(24px);
                    font-size: 16px;
                }
            }
        }
    }
}

</style>