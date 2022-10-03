<template>
    <header>
        <div class="header-inner">
            <!-- ロゴ -->
            <router-link to="/">
                <img class="header-logoImg" src="./assets/HaCollectLogoText.png">
            </router-link>

            <!-- 検索バー -->
            <input type="text" v-model="input" v-on:keydown.enter="doSearch" class="searchArea" placeholder="キーワード検索">

        </div>
        <div class="header-inner-smart">
            <!-- スマホキーボード用キャンセルボタン -->
            <div class="cancel" v-on:click="deleteText">×</div>
            <!-- スマホサイズ用検索バー -->
            <input type="text" v-model="input" v-on:keydown.enter="doSearch" class="searchAreaSmart"
                placeholder="キーワード検索">

        </div>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.4/css/all.css">


    </header>

    <!-- 現在のリンクごとに表示するコンポーネント -->
    <router-view></router-view>

    <!-- スクロールボタンのテンプレ読み込みとトップに戻る処理 -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.4/css/all.css">
    <div id="page_top"><a href="#"></a></div>
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
        },
        deleteText() {
            this.search_text = this.input
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
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    margin: 0 auto;
}

.header-logoImg {
    display: block;
    /* 扱いやすいようにblock要素にする */
    width: 250px;
    /* 横幅を任意の大きさに調整 */
    margin-top: 10px;
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
    margin: 10px auto 0 auto;
    /* サンプルは中央寄せ  */
    padding-left: 10px;
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

.header-inner-smart {
    display: none;
}

@media(max-width: 800px) {
    .header-inner {
        padding: 0 20px;
    }

    .header-logoImg {
        width: 150px;
        margin-top: 10px;
    }

}

@media(max-width: 450px) {
    .header-inner {
        display: block;
        height: 35px;
    }

    .header-logoImg {
        margin: 0 auto;
    }

    .searchArea {
        display: none;
    }

    .header-inner-smart {
        display: flex;
        height: 35px;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin: 0 auto;
    }

    .cancel {
        font-size: 250%;
        font-weight: bold;
    }

    .searchAreaSmart {
        width: 350px;
        /* inputの幅           */
        height: 25px;
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
        border-radius: 9999px;
        /* 角丸                */
        color: #555;
        /* 文字色              */
        font-size: 16px;
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
        background-color: #e6f2ff;
        /* フォーカス時背景色  */
    }
}

/*スクロールボタンのCSS*/
#page_top{
  width: 50px;
  height: 50px;
  position: fixed;
  right: 0;
  bottom: 0;
  background: #dbe924;
  opacity: 0.6;
  border-radius: 50%;
}
#page_top a{
  position: relative;
  display: block;
  width: 50px;
  height: 50px;
  text-decoration: none;
}
#page_top a::before{
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\f102';
  font-size: 25px;
  color: #fff;
  position: absolute;
  width: 25px;
  height: 25px;
  top: -5px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
}
</style>
    