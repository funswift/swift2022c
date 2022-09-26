<template>
    <header>
        <div class="header-inner">
            <!-- ロゴ -->
            <router-link to="/">
                <img class="header-logoImg" src="./assets/HaCollectLogoText.png">
            </router-link>

            <!-- 検索バー -->
            <input type="text" v-model="input" v-on:keydown.enter="doSearch" class="searchArea"
                placeholder="知りたい情報は何ですか？">

        </div>
    </header>

    <!-- 現在のリンクごとに表示するコンポーネント -->
    <router-view></router-view>
</template>



<script>
'use strict'
export default {
    data() {
        return {
            input: '',    //検索バーに打ち込んだのをリアルタイムに格納
            search_text: ''  //実際にsearchResultコンポーネントに渡すもの
        }
    },
    methods: {
        doSearch() {
            this.search_text = this.input
            // this.$router.push('/searchResult') <-これはただ、リンク変えるだけ
            this.$router.push({ name: 'searchResult', params: { search: this.input } }) //<- これはリンク先に検索したのを渡すことができる
            this.input = '' //検索バーに検索した文字を残さないための処理
        }
    }
}
</script>



<style>
/* PC用スタイル */

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

/*テキスト入力欄にフォーカスか来たとき*/
.searchArea:focus {
    background-color: #e6f2ff;
    /* フォーカス時背景色  */
}

@media(max-width: 800px) {
    h1 {
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
    