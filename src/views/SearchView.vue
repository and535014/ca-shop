<template lang="pug">
.page.page-browse
    .section.section-top
        .wrapper
            .browse-header
                .title 
                    span "{{keywords.split('=')[1]}}" 搜尋結果
    Transition(name="fadeIn" mode="out-in")
        ProductsList(:products="fProducts" :key="fProducts")

</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ['keywords'],
    data(){
        return {
            currPage: 1,
            productNumInPage: 20,
            filterStockIsOpen: false,
            filterPriceIsOpen: false,
            sortPriceIsOpen: false,
            filters: {
                isSpot: false,
                isPreOrder: false,
                minPrice: null,
                maxPrice: null
            },
            sort: null,
            reactIsShow: {
                stock: false,
                price: false
            }
        }
    },
    computed: {
        ...mapState(['products']),
        fProducts(){
            let datas = this.products
            let keywords = this.keywords.split("=")[1]
            let products = datas.filter((d) => d.title.includes(keywords))

            return products
        }
    }
}
</script>

<style lang="scss">
.page.page-browse{
    text-align: left;

    .section-top{
        padding-bottom: 0;

        .browse-header{
            .title{
                margin-bottom: 16px;

                span{

                    &:before{
                        content: ">";
                        display: inline-block;
                        margin: 0 8px;
                    }

                    &:first-child:before{
                        display: none;
                    }

                }
            }
        }

        .options{
            display: flex;
            justify-content: space-between;
            align-items: center;

            span{
                line-height: 24px;
            }

            .filters{
                display: flex;
                margin-right: auto;
    
                .filter-item{
                    margin-right: 24px;
                    position: relative;

                    .filter-item_title{
                        cursor: pointer;

                        span{
                            padding: 0 8px;
                        }

                        &.active{
                            span{
                                text-decoration: underline;
                                text-underline-offset: 3px;
                            }
                        }
                    }

                    .filter-item_content{
                        position: absolute;
                        top: 36px;
                        left: 0;
                        background-color: #fff;
                        z-index: 10;
                        width: 200px;
                        padding: 16px 24px;
                        border: 1px solid $black-40;

                        .top{
                            display: flex;
                            border-bottom: 1px solid #000;
                            padding-bottom: 8px;
                            .content-title{
                                flex: 1 0;
                            }
                        }

                        .bottom{
                            padding-top: 12px;
                            label{
                                padding: 8px 4px;
                                display: flex;
                                flex-direction: row-reverse;
                                justify-content: flex-end;
                                align-items: center;
                                cursor: pointer;

                                input[type=checkbox]{
                                    margin-right: 8px;
                                }

                            }

                            input[type=text]{
                                max-width: 64px;
                                margin: 0 8px;
                            }
                        }
                    }
                }
            }
            .sort{
                display: flex;
                align-items: center;
                margin-right: 24px;

                .sort-options{
                    display: flex;

                    .btn{
                        padding: 2px 10px;
                        margin-right: 8px;
                        font-weight: normal;

                        &.active{
                            background-color: $brand-color;
                            color: white;
                        }
                    }

                    .select-wrap{
                        position: relative;

                        .select-title{
                            min-width: 100px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            span{
                                margin-right: auto;
                            }
                        }
                        .select-options_wrap{
                            position: absolute;
                            top: 30px;
                            left: 0;
                            background-color: #fff;
                            border: 1px solid $black-40;
                            z-index: 10;
                            padding: 12px;
                            min-width: 120px;

                            .select-options_option{
                                cursor: pointer;
                                padding: 4px 0;
                                text-align: center;

                                &:hover, &.active{
                                    color: lighten($brand-color,5);
                                    font-weight: bold;
                                }
                            }

                        }
                    }
                }
            }
        }
    } 


    .section-main{
        padding-top: 32px;

        .card-wrap{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            .card-container{
                margin-bottom: 32px;
                &:nth-child(5n+5){
                    border-color: red;
                    margin-right: 0;
                }
            }
        }

        .notFound{
            height: 50vh;
            display: flex;
            justify-content: center;

            .title{
                margin-top: 60px;
            }
        }

        .pages-wrap{
            .pages{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;

                .btn-icon-s{
                    padding-top: 4px;
                }

                .page{
                    font-size: 18px;
                    &.active{
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                }
            }
        }

    }
}
</style>