<template>
    <header>
        <div class="header-inner">
            <a>
                <router-link to="/">
                    <img class="header-logoImg" src="./assets/HaCollectLogoText.png">
                </router-link>
            </a>

            <router-link to="/searchResult">
                <img class="searchButton" src="./assets/mushimegane.png">
            </router-link>

        </div>
    </header>
    <router-view></router-view>
</template>

<script>
'use strict'
export default {
    data() {
        return {
            test: '',
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
    background-color: #f5af5a;
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
    width: 200px;
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
    