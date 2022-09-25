<template>
    <header>
        <div class="header-inner">
            <a>
                <router-link to="/">
                    <img class="header-logoImg" src="./assets/HaCollectLogoText.png">
                </router-link>
            </a>

            <input type="text" v-model="input" v-on:keydown.enter="doAction" class="searchArea" placeholder="知りたい情報は何ですか？">
            <!-- <img class="searchButton" src="./assets/mushimegane.png"> -->

        </div>
    </header>
    
    <router-view></router-view>
    
</template>

<!-- vue.js:1735 Uncaught TypeError: Cannot read properties of undefined (reading 'push')
    at Proxy.doAction (C:\Users\midmi\OneDrive\ドキュメント\swift2022c\HaCollect\src\App.vue:37:25)
    at _createElementVNode.onClick._cache.<computed>._cache.<computed> (C:\Users\midmi\OneDrive\ドキュメント\swift2022c\HaCollect\src\App.vue:10:56)
    at callWithErrorHandling (vue.js:1672:22)
    at callWithAsyncErrorHandling (vue.js:1681:21)
    at HTMLInputElement.invoker (vue.js:9761:13) -->

<script>
import topPage from "./components/topPage.vue"
'use strict'
export default {
    components: {
        topPage,
    },
    data() {
        return {
            input: '',
            message: ''
        }
    },
    methods: {
        doAction() {
            console.log(this.$router)
            console.log(this.$router)
            this.message = this.input
            this.$router.push('/searchResult')
            console.log(this.$router)
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 80px;
}

body {
    display: block;
    margin: 8px 0;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

header {
    background-color: #ffffff;
    position: fixed;
    /* 要素を画面内で固定する */
    top: 0;
    /* 固定する基準を一番上に */
    left: 0;
    /* 固定する基準を一番左に */
    z-index: 100;
    /* 要素の重なりを指定 */
    width: 100%;
    /* 固定した要素は浮いた状態になるので、横幅100%にする */
    height: 70px;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    margin: 0 auto;
}

.header-logo {
    display: flex;
    align-items: center;
    text-decoration-line: none;
}

.header-logoImg {
    display: block;
    /* 扱いやすいようにblock要素にする */
    width: 250px;
    /* 横幅を任意の大きさに調整 */
    margin-top: 10px;
}

.searchButton {
    width: 50px;
    background-color: #fff;
    margin: 10px auto 0 auto;
    border-radius: 6px;
    border: 2px solid #000;
}

.searchButton:hover {
    opacity: 0.8;
    /* ホバーしたときに少し薄くなるようにアニメーションを付ける */
}

.searchArea {
    width: 350px;
    /* inputの幅           */
    height: 35px;
    background-repeat: no-repeat;
    /* 背景は繰り返さない  */
    background-position: 8px center;
    /* 背景の位置          */
    background-size: auto 60%;
    /* 背景のサイズ        */
    background-color: #fff;
    /* 背景色              */
    margin: 10px 30px 0 auto;
    /* サンプルは中央寄せ  */
    padding-left: 30px;
    /* 虫眼鏡分の左余白    */
    border-radius: 9999px;
    /* 角丸                */
    color: #555;
    /* 文字色              */
    font-size: 18px;
    /* フォントサイズ      */
    letter-spacing: 0.1em;
    /* 文字間隔            */
    font-weight: bold;
    /* 太字                */
    outline: 0;
    /* 入力薄枠を非表示    */
}

@media(max-width: 800px) {
    h1{
        font-size: 24px;
    }
    .header-inner {
        padding: 0 20px;
    }

    .header-logoImg {
        width: 150px;
        margin-top: 10px;
    }

    .searchButton {
        width: 35px;
        background-color: #fff;
        margin: 10px auto 0 auto;
        border-radius: 6px;
        border: 2px solid #000;
    }
}
</style>
    