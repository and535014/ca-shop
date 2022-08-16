<template lang="pug">
.modal_comp
    slot(name="mask")
    .modal-wrapper.flex-center
        .modal_header
            slot(name="header")
        .modal-msg.p-3.p-md-4(v-if="msg")
            slot(name="msg")
                template(v-if="icon=='success'")
                    .icon.icon-l
                        i(class="fa-solid fa-circle-check success")
                template(v-if="icon=='error'")
                    .icon.icon-l
                        i(class="fa-solid fa-circle-xmark error")
                template(v-if="icon=='notice'")
                    .icon.icon-l
                        i(class="fa-solid fa-triangle-exclamation notice")
                p.m-0 {{msg}}
        .modal-content(v-else)
            slot(name="content")

</template>

<script>
export default {
    props: ['msg', 'icon']
}
</script>

<style lang="scss">
.modal_comp{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1055;

    .modal-wrapper{
        z-index: 5;
        max-width: 800px;
        height: 100%;
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
        }
        
        .modal-msg{
            position: relative;
            background-color: $white;
            color: $gray-800;
            border-radius: 24px;
            font-size: 24px;
            font-weight: 500;
            min-width: 300px;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon{
                margin-right: 8px;
            }

            .success{
                color: green;
            }

            .error{
                color: rgb(188, 0, 0);
            }

            .notice{
                color: rgb(188, 0, 0);;
            }

            
        }

    }

    @media screen and (max-width: 767.98px){
        .modal-wrapper{
            max-width: 100%;
        }
    }

    @media screen and (max-width: 575.98px){
        .modal-wrapper{
            .modal-msg{
                font-size: 16px;
                padding: 12px;
                i{
                    margin-right: 4px;
                }
            }
        }
    }

}
</style>