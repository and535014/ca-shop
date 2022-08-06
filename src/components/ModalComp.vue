<template lang="pug">
.modal
    slot(name="mask")
    .modal-wrapper
        .modal_header
            slot(name="header")
        .modal-msg(v-if="msg")
            slot(name="msg")
                template(v-if="icon=='success'")
                    i(class="fa-solid fa-circle-check icon-l success")
                template(v-if="icon=='error'")
                    i(class="fa-solid fa-circle-xmark icon-l error")
                template(v-if="icon=='alert'")
                    i(class="fa-solid fa-triangle-exclamation icon-l alert")
                span {{msg}}
        .modal-content(v-else)
            slot(name="content")

</template>

<script>
export default {
    props: ['msg', 'icon']
}
</script>

<style lang="scss">
.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    .modal-wrapper{
        @include flexCenter;
        z-index: 1;
        max-width: 800px;
        height: 100vh;
        margin: 0 auto;
        position: relative;

        .modal_header{
            position: absolute;
            z-index: 1;
            right: 0;
            top: 0;
        }

        .modal-content{
            width: 100%;
            position: relative;
            background-color: #fff;

        }
        
        .modal-msg{
            position: relative;
            background-color: #fff;
            color: $black-80;
            border-radius: 24px;
            font-size: 24px;
            font-weight: 500;
            padding: 24px;

            i{
                margin-right: 12px;
            }

            .success{
                color: green;
            }

            .error{
                color: rgb(188, 0, 0);
            }

            .alert{
                color: rgb(188, 0, 0);;
            }

            
        }

    }

}
</style>