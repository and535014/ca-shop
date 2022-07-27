<template lang="pug">
header.header
    .top-header
        .wrapper
            .search-bar-wrap
                .search-icon.btn.btn-l.btn-icon 
                    i(class="fa-solid fa-magnifying-glass")
            .logo-wrap 
                .logo 
            .icons-wrap 
                a.btn.btn-l.btn-icon(href="#") 
                    i(class="fa-solid fa-user")
                a.btn.btn-l.btn-icon(href="#") 
                    i(class="fa-regular fa-heart")
                a.btn.btn-l.btn-icon(href="#") 
                    i(class="fa-solid fa-clipboard-list")
                a.btn.btn-l.btn-icon(href="#") 
                    i(class="fa-solid fa-cart-shopping")
    nav.navigation 
        .wrapper
            ul.nav-first(v-for='first in navigation')
                li.nav-first-li(
                    @mouseover="first.isOpen = true"
                    @mouseleave="first.isOpen = false"
                    :class="{isOpen: first.isOpen}"
                    )
                    .title
                        span {{ first.navFirst }}
                    transition(name="fadeIn")
                        .nav-second(
                            v-if="first.navSecond" 
                            v-show="first.isOpen"
                            ) 
                            a.topic-link(href="#" v-for="second in first.navSecond") {{ second }}

</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            navigation: state => state.header.navigation
        })
    }
}
</script>

<style lang="scss">
.header{
    padding: 0 24px;
    border-bottom: 1px solid #000;
    *{
        // border: 1px solid #000;
    }

    .top-header{
        max-width: 1280px;
        margin: 0 auto;
        padding: 20px 0 14px;
        .wrapper{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas: ' search logo icons';

        }
        .search-bar-wrap {
            grid-area: 'search';
            display: flex;
            align-items: center;
        }
        .logo-wrap{
            @include flexCenter;
            .logo{
                grid-area: 'logo';
                @include size(60px);
                background-color: #333;
            }
        }

        .icons-wrap{
            grid-area: 'icons';
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .btn{
                margin-left: 12px;
            }
        }

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
                    padding: 14px 0 10px;
                    font-size: 16px;
                    margin: 0;
                    font-weight: normal;
                }

            }

        }

        .nav-second{
            width: auto;
            min-width: 100%;
            position: absolute;
            top: 40px;
            left: 0;
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            border: 1px solid #000;
            box-sizing: border-box;
            z-index: 1;

            a{
                padding: 14px 10px;
                opacity: 0;
                transition: .5s .5s;
            }
        }
    }
}
</style>