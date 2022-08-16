<template lang="pug">
footer.footer
    .container-xl
        .row.top-section.py-5
            .col-12.col-md-5.col-lg-3.mb-4.p-0
                .logo.logo-s Crystal Apple
            .col-12.col-md-7.col-lg-5.links
                ul.footer-links_wrap.ps-0(v-for="link in links")
                    li.footer-links_item
                        .footer-links_title {{ link.title }}
                    li.footer-links_item(v-for="content in link.content")
                        a.footer-links_link(href="#") {{ content.title }}
            .col-12.col-md-7.col-lg-4.offset-md-5.offset-lg-0
                .social-links-wrap
                    .social-links_title 追蹤我們
                    .social-links_item.d-flex
                        .icon.icon-btn.icon-btn-l.me-3.social-links_link
                            i(class="fa-brands fa-instagram")
                        .icon.icon-btn.icon-btn-l.me-3.social-links_link
                            i(class="fa-brands fa-line")
                        .icon.icon-btn.icon-btn-l.me-3.social-links_link
                            i(class="fa-brands fa-facebook-f")
                        .icon.icon-btn.icon-btn-l.me-3.social-links_link
                            i(class="fa-brands fa-twitter")
                .subscribe-wrap
                    .subscribe_title 訂閱電子報
                    .subscribe_input
                        input(type="email")
                        .btn.btn-s.btn-primary 訂閱
        .row.bottom-section
            .col-12.col-sm-9.col-md-10.md-2.md-sm-0
                p.copyright.caption Copyright © Our Mori Co., Ltd. All rights reserved.
            .col-12.col-sm-3.col-md-2
                .lang-switch.d-flex.justify-content-end.align-items-center
                    .icon.icon-s
                        i(class="fa-solid fa-earth-americas")
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
        border-bottom: 1px solid #eee;

        .logo{
            display: inline-block;
        }

        .links{
            display: flex;
            justify-content: space-between;

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
                border-radius: 100px;
                background-color: rgba(black, .6);
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

    .bottom-section{
        padding: 12px 0 32px;

        .lang-switch{
            cursor: pointer;
            i{
                margin-right: 4px;
            }
        }
    }

}

</style>