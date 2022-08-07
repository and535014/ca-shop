<template lang="pug">
footer.footer
    .wrapper
        .top-section
            .left
                .logo.logo-s Crystal Apple
            .content
                .links
                    ul.footer-links_wrap(v-for="link in links")
                        li.footer-links_item
                            .footer-links_title {{ link.title }}
                        li.footer-links_item(v-for="content in link.content")
                            a.footer-links_link(href="#") {{ content.title }}
                .right
                    .social-links-wrap
                        .social-links_title 追蹤我們
                        .social-links_item
                            .btn.social-links_link
                                i(class="fa-brands fa-instagram")
                            .btn.social-links_link
                                i(class="fa-brands fa-line")
                            .btn.social-links_link
                                i(class="fa-brands fa-facebook-f")
                            .btn.social-links_link
                                i(class="fa-brands fa-twitter")
                    .subscribe-wrap
                        .subscribe_title 訂閱電子報
                        .subscribe_input
                            input(type="email")
                            .btn.btn-s.btn-primary 訂閱
        .bottom-section
            .left 
                p.copyright.caption Copyright © Our Mori Co., Ltd. All rights reserved.
            .right
                .lang-switch
                    i(class="fa-solid fa-earth-americas icon-s")
                    span 繁體中文


</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            links: state => state.footer.links
        })
    }
}
</script>

<style lang="scss">
.footer{
    border-top: 1px solid #eee;
    padding: 32px 24px;
    font-size: 14px;
    text-align: left;
    .top-section{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid #eee;
        padding: 32px 0;

        .logo{
            margin-right: 32px;
            display: inline-block;
        }

        .content{
            flex: 1;
            display: flex;

            .links{
                display: flex;
                justify-content: space-between;
                margin-right: 32px;
                flex: 1;

                .footer-links_wrap{
                    margin-right: 32px;
                }
                .footer-links_item{
                    margin-bottom: 8px;
                }
                .footer-links_title{
                    font-weight: 500;
                    font-size: 15px;
                }
                .footer-links_link{
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }

            .right{
                min-width: 320px;
                flex: 1;
            }

            .social-links-wrap{
                margin-bottom: 32px;

                .social-links_title{
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 16px;
                }
                .social-links_item{
                    margin-bottom: 12px;
                }
                .social-links_link{
                    margin-right: 36px;
                    border-radius: 100px;
                    font-size: 20px;
                    @include size(40px);
                    background-color: $black-60;
                    color: white;

                    &:nth-child(3){
                        font-size: 18px;
                    }
                }

            }
            .subscribe-wrap{
                margin-bottom: 24px;
                max-width: 320px;

                .subscribe_title{
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 16px;
                }

                .subscribe_input{
                    // border: 2px solid #eee;
                    display: flex;

                    input{
                        flex: 1;
                        border: 2px solid #eee;
                        border-radius: 2px 0 0 2px;
                    }
                    .btn{
                        border: none;
                        border-radius: 0;
                    }
                }

            }
        }
    }

    .bottom-section{
        display: flex;
        justify-content: space-between;
        padding: 12px 0 32px;
        flex-wrap: wrap;

        .left{
            margin-right: 12px;
        }

        .right{
            .lang-switch{
                cursor: pointer;
                i{
                    margin-right: 4px;
                }
            }
        }
    }

    @media screen and (max-width: 1000px){
        .top-section{
            padding: 24px 0;
            .left{
                flex: 2; 
            }

            .content{
                flex-direction: column;
                flex: 3;

                .links{
                    margin-bottom: 32px;
                }

            }
        }
    }

    @media screen and (max-width: 767px){
        .top-section{
            flex-wrap: wrap;
            .left{
                flex-basis: 100%;
                margin-bottom: 32px;
                margin-right: 0;

                .logo{
                    font-size: 28px;
                }
            }

            .content{
                .links{
                    margin-right: 0;
                    justify-content: flex-start;
                    .footer-links_wrap{
                        margin-right: 24px;
                    }
                }

                .social-links-wrap{
                    .social-links_link{
                        margin-right: 24px;
                    }
                }
            }

        }
    }

    @media screen and (max-width: 479px){
        .top-section{
            .content{
                .subscribe-wrap{
                    margin-right: 0;
                    max-width: 250px;
                }

                .right{
                    min-width: 300px;
                }

            }
        }
        .bottom-section{
            .left{
                margin-bottom: 12px;
            }
        }
    }
}
</style>