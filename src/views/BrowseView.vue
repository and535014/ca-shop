<template lang="pug">
.page.page-browse
    .section.section-top
        .wrapper
            .browse-header
                .title
                    span {{ cataFirst }}
                    span(v-if="cataSecond") {{ cataSecond }}
    Transition(name="fadeIn" mode="out-in")
        ProductsList(:products="fProducts" :key="fProducts")

</template>

<script>
import { mapState } from 'vuex'
export default {
    props: ["cata"],
    computed: {
        ...mapState(["products"]),
        fProducts() {
            let datas = [...this.products];
            let products = null;
            if (this.cataFirst == "所有商品") {
                products = datas;
            }
            if (this.cataFirst == "限時預購") {
                products = datas.filter((d) => d.state == "pre-order");
            }
            if (this.cataFirst == "品牌" && this.cataSecond) {
                products = datas.filter((d) => d.brand == this.cataSecond);
            }
            if (this.cataFirst == "尺寸" && this.cataSecond) {
                products = datas.filter((d) => d.size == this.cataSecond);
            }
            if (this.cataFirst == "服飾" && this.cataSecond) {
                let middle = datas.filter((d) => d.cata == "服飾");
                products = middle.filter((d) => d.size == this.cataSecond);
            }
            if (this.cataFirst == "鞋子" && this.cataSecond) {
                let middle = datas.filter((d) => d.cata == "鞋子");
                products = middle.filter((d) => d.size == this.cataSecond);
            }
            if (this.cataFirst == "假髮" && this.cataSecond) {
                let middle = datas.filter((d) => d.cata == "假髮");
                products = middle.filter((d) => d.size == this.cataSecond);
            }
            if (this.cataFirst == "眼珠" && this.cataSecond) {
                let middle = datas.filter((d) => d.cata == "眼珠");
                products = middle.filter((d) => d.size == this.cataSecond);
            }
            if (this.cataFirst == "配件" && this.cataSecond) {
                products = datas.filter((d) => d.cata == "眼珠");
            }
            return products;
        },
        cataFirst() {
            let result = this.cata.split("=")[0];
            return result;
        },
        cataSecond() {
            let target = this.cata.split("=")[1];
            let result = null;
            if (target) {
                result = target.split("_").join(" ").split("-").join("/");
            }
            return target ? result : null;
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

    } 

}
</style>