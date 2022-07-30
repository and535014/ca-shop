<template lang="pug">
footer.footer
    .wrapper
        .top-section
            .logo
            .links
                ul.footer-links_wrap
                    li.footer-links_item
                        .footer-links_title 商品分類
                    li.footer-links_item(v-for="i in 4")
                        a.footer-links_link(href="#") 4分 MSD/MDD
                ul.footer-links_wrap
                    li.footer-links_item
                        .footer-links_title 幫助政策
                    li.footer-links_item(v-for="i in 4")
                        a.footer-links_link(href="#") 4分 MSD/MDD
                ul.footer-links_wrap
                    li.footer-links_item
                        .footer-links_title 關於我們
                    li.footer-links_item(v-for="i in 4")
                        a.footer-links_link(href="#") 4分 MSD/MDD
            .right
                .social-links-wrap
                    .social-links_item
                        .social-links_title 追蹤我們
                    .social-links_item
                        .btn.btn-icon.btn-l
                            i(class="fa-brands fa-instagram")
                        .btn.btn-icon.btn-l
                            i(class="fa-brands fa-facebook")
                        .btn.btn-icon.btn-l
                            i(class="fa-brands fa-twitter")
                .subscribe-wrap
                    .subscribe_item
                        .subscribe_title 訂閱電子報
                    .subscribe_input
                        input(type="email")
                        .btn.btn-s.btn-primary 訂閱
        .bottom-section
            .left 
                p.copyright.caption Copyright © Our Mori Co., Ltd. All rights reserved.
            .right
                .lang-switch
                    i(class="fa-solid fa-earth-americas")
                    span 繁體中文


</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer{
    border-top: 1px solid #eee;
    padding: 32px 24px;
    font-size: 14px;
    .top-section{
        display: flex;
        justify-content: space-between;
        text-align: left;
        font-size: 13px;
        border-bottom: 1px solid #eee;
        padding: 32px 0;

        .logo{
            @include size(100px);
            background-color: #333;
            margin-right: 64px;
        }

        .links{
            display: flex;
            flex: 1;

            .footer-links_wrap{
                margin-right: 48px;
            }
            .footer-links_item{
                margin-bottom: 8px;
            }
            .footer-links_title{
                font-weight: 500;
            }
            .footer-links_link{
                &:hover{
                    text-decoration: underline;
                }
            }
        }

        .right{
            flex-basis: 400px;
            .social-links-wrap{
                margin-bottom: 24px;
                .social-links_title{
                    font-weight: bold;
                    font-size: 16px;
                }
                .social-links_item{
                    margin-bottom: 12px;
                }

            }
            .subscribe-wrap{
                margin-bottom: 24px;
                .subscribe_title{
                    font-weight: bold;
                    font-size: 16px;
                }
                .subscribe_item{
                    margin-bottom: 24px;
                }

                .subscribe_input{
                    border: 2px solid #eee;
                    display: flex;
                    input{
                        flex: 1;
                        border: none;
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

        .left{
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
}
</style>