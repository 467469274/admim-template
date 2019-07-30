<template>
    <div id="wrapper">
        <span @click="open">
            dqowdqwdqw
        </span>
    </div>
</template>

<script>
    import {writeFile} from "../utility/writeFile";
    export default {
        name: 'landing-page',
        methods: {
            open (link) {
                writeFile(
                    {
                        template:'<div @click="kk">测试呢 嘿嘿嘿</div>',
                        name:'test02',
                        methods:{
                            kk:'()=>{\n' +
                                '                                console.log(2123)\n' +
                                '                            }'
                        }
                    },'',()=>{
                    console.log(arguments)
                })
            }
        },
        created(){

        }
    }
</script>

<style>
</style>
