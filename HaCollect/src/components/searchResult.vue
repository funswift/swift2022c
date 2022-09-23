<template>
    <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <a><span class="nowPage">{{ test }}</span>の検索結果</a>
                </li>
            </ul>
        </nav>

        <input type="text" v-model="test" class="searchArea" placeholder="知りたい情報は何ですか？">
    </div>
    <div class="header-inner3">
        <input type="text" v-model="test" class="searchAreaSmart" placeholder="知りたい情報は何ですか？">
    </div>

    <div class="hello">

        <img alt="Vue logo" src="../assets/logo.png">
        <h1>これは{{ test }}の検索結果ページです。</h1>
        <p>{{ test }}</p>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                    rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                    rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                    rel="noopener">vue-devtools</a>
            </li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                    rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                    rel="noopener">eslint</a></li>
        </ul>
        <h3>Essential Links</h3>
        <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
                    rel="noopener">vue-devtools</a>
            </li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>

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

<style scoped>
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

.header-inner2 {
    background-color: #f5af5a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    height: 60px;
}

.header-nav {
    padding-left: 36px;
}

.header-navList {
    display: flex;
    align-items: center;
}

.header-navList li {
    margin: 0 20px
        /* ナビゲーションに左右のスペースを付ける */
}

.header-navList li a {
    display: block;
    /* 扱いやすいようにblock要素にする */
    font-size: 20px;
    /* 任意のフォントサイズにする */
    font-weight: bold;
    /* 太字にする */
    color: #fff;
    text-decoration-line: none;
    padding: 0 30px;
}

.header-navList .nowPage {
    color: #4c9eeb;
    text-decoration-line: underline;
}

.searchArea {
    width: 350px;
    /* inputの幅           */
    height: 35px;
    background-image: url("../assets/mushimegane.png");
    /* 背景画像：虫眼鏡(*1)*/
    background-repeat: no-repeat;
    /* 背景は繰り返さない  */
    background-position: 8px center;
    /* 背景の位置          */
    background-size: auto 60%;
    /* 背景のサイズ        */
    background-color: #fff;
    /* 背景色              */
    margin: 0 30px 0 auto;
    /* サンプルは中央寄せ  */
    padding-left: 30px;
    /* 虫眼鏡分の左余白    */
    border-radius: 6px;
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

/*テキスト入力欄にフォーカスか来たとき*/
.searchArea:focus {
    background-color: #cfe7ff;
    /* フォーカス時背景色  */
}

.hello {
    padding-top: 80px;
}

@media(max-width: 800px) {
    .header-inner2 {
        height: 30px;
        margin: 30px auto 0 auto;
    }

    .header-nav {
        padding-left: 0;
    }

    .header-navList li {
        margin: 0 10px
    }

    .header-navList li a {
        padding: 0 5px;
        font-size: 16px;
    }

    .searchArea {
        display: none;
    }

    .header-inner3 {
        background-color: #f5af5a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        position: fixed;
        height: 30px;
    }

    .searchAreaSmart {
        width: 250px;
        /* inputの幅           */
        height: 20px;
        background-image: url("../assets/mushimegane.png");
        /* 背景画像：虫眼鏡(*1)*/
        background-repeat: no-repeat;
        /* 背景は繰り返さない  */
        background-position: 8px center;
        /* 背景の位置          */
        background-size: auto 60%;
        /* 背景のサイズ        */
        background-color: #fff;
        /* 背景色              */
        margin: 0 auto;
        /* サンプルは中央寄せ  */
        padding-left: 30px;
        /* 虫眼鏡分の左余白    */
        border-radius: 6px;
        /* 角丸                */
        color: #555;
        /* 文字色              */
        font-size: 14px;
        /* フォントサイズ      */
        letter-spacing: 0.1em;
        /* 文字間隔            */
        font-weight: bold;
        /* 太字                */
        outline: 0;
        /* 入力薄枠を非表示    */
    }

    /*テキスト入力欄にフォーカスか来たとき*/
    .searchAreaSmart:focus {
        background-color: #cfe7ff;
        /* フォーカス時背景色  */
    }
}
</style>