<template>
    <header>
        <div class="header-inner">
            <!-- ロゴ -->
            <router-link to="/">
                <img class="header-logoImg" src="./assets/HaCollectLogo.png">
            </router-link>

            <!-- 検索バー -->
            <input type="text" v-model="input" v-on:keydown.enter="doSearch" class="searchArea" placeholder="キーワード検索">
        </div>
        <!-- <div class="header-inner-smart"> -->
            <!-- スマホキーボード用キャンセルボタン -->
            <!-- <div class="cancel" v-on:click="deleteText">×</div> -->
            <!-- スマホサイズ用検索バー -->
            <!-- <input type="text" v-model="input" v-on:keydown.enter="doSearch" class="searchAreaSmart" -->
                <!-- placeholder="キーワード検索"> -->
        <!-- </div> -->

        <div class="header-inner2">
            <nav class="header-nav">
                <ul class="header-navList">
                    <li>
                        <router-link class="nowPage" to="/">ホーム</router-link>
                    </li>
                    <li>
                        <router-link to="/eat">ごはん</router-link>
                    </li>
                    <li>
                        <router-link to="/spa">温泉</router-link>
                    </li>
                    <li>
                        <router-link to="/tour">観光</router-link>
                    </li>
                    <li>
                        <router-link to="/news">ニュース</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- 現在のリンクごとに表示するコンポーネント -->
    <router-view></router-view>

    <!-- スクロールボタンのトップに戻る処理 -->
    <div>
        <transition name="button">
            <button v-show="buttonActive" class="button" @click="scrollTop"></button>
        </transition>
    </div>
</template>



<script>
'use strict'
export default {
    data() {
        return {
            input: '',    //検索バーに打ち込んだのをリアルタイムに格納
            search_text: '',  //実際にsearchResultコンポーネントに渡すもの
            buttonActive: false,//ボタンを非表示にしておく
            scroll: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollWindow)   //スクロールすると関数が察知してくれる
    },
    methods: {
        doSearch() {
            try{
                this.search_text = this.input
                // this.$router.push('/searchResult') <-これはただ、リンク変えるだけ
                this.$router.push({ name: 'searchResult', params: { search: this.input } }) //<- これはリンク先に検索したのを渡すことができる
                this.$store.dispatch('getSearchData', this.input)    //検索結果ページで使うデータ(search_fire_data)をstoreから参照 -> searchResult.vueのcomputedのfire_dataに反映
                this.input = '' //検索バーに検索した文字を残さないための処理
            } catch(e) {
                console.log('error')
                //エラーは無視（inputに何も入力してない時怒られるから書いた）
            }

        },
        deleteText() {
            this.search_text = this.input
            this.input = '' //検索バーに検索した文字を残さないための処理
        }, 
        // ページのトップに移動する関数
        scrollTop() {
            window.scrollTo({
                top: 0,  //どこに移動するか
                behavior: 'smooth'  //ここでどのように移動するか決める smoothでゆっくり移動する
            });
        },
        // ボタンが現れる関数
        scrollWindow() {
            const top = 100 //topから100pxスクロールしたらボタン登場
            this.scroll = window.scrollY //垂直方向
            if (top <= this.scroll) {
                this.buttonActive = true   //ボタン見えるようになる
            } else {
                this.buttonActive = false  //ボタン見えない
            }
        }
    },
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
    width: 60px;
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
    background-color: #eeeeee;
    /* 背景色              */
    margin-top: 10px;
    /* サンプルは中央寄せ  */
    margin-left: 10px;
    /* アイコン間の左余白    */
    border-radius: 9999px;
    /* 角丸                */
    color: #687684;
    /* 文字色              */
    font-size: 18px;
    /* フォントサイズ      */
    letter-spacing: 0.1em;
    /* 文字間隔            */
    font-weight: bold;
    /* 太字                */
    outline: 0;
    /* 入力薄枠を非表示    */
    border: 1px solid #CCCCCC;
    font-family: 'ABeeZee';
    font-style: normal;
    text-align: center;
}

/*テキスト入力欄にフォーカスか来たとき*/
.searchArea:focus {
    background-color: #e6f2ff;
    /* フォーカス時背景色  */
}

.header-inner-smart {
    display: none;
}

/* ページトップへ自動スクロールするボタンのスタイル */
.button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: orange;
    border-radius: 50%;
    background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23ffffff" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    cursor: pointer;
    opacity: 0.7;
    /* ボタンにカーソルを合わせるとポインターになる */
}

/* アニメーション中のスタイル */
.button-enter-active,
.button-leave-active {
    transition: opacity 0.5s;
    /* 何秒かけて変わるのか */
}

/* 表示するアニメーション */
.button-enter-from {
    opacity: 0;
}

.button-enter-to {
    opacity: 0.7;
}

/* 非表示にするアニメーション */
.button-leave-from {
    opacity: 0.7;
}

.button-leave-to {
    opacity: 0;
}

.header-inner2 {
    background-color: #ffffee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    height: 60px;
    z-index: 1;
}

.header-nav {
    padding-left: 36px;
    overflow-x: auto;
    white-space: nowrap;
}

.header-navList {
    display: flex;
    align-items: center;
    margin: 0 17px;
}

.header-navList li {
    margin: 0 3px
        /* ナビゲーションに左右のスペースを付ける */
}

.header-navList li a {
    display: block;
    /* 扱いやすいようにblock要素にする */
    font-size: 20px;
    /* 任意のフォントサイズにする */
    font-weight: bold;
    /* 太字にする */
    color: #000;
    text-decoration-line: none;
    padding: 5px 15px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    width: 82px;
}

.header-navList .nowPage {
    color: #4C79EB;
    background: rgba(76, 197, 235, 0.25);
    border: 1px solid rgba(76, 197, 235, 0.25);
}

.header-navList li .searchWord {
    background: none;
    border: none;
}

.header-navList li a:hover {
    opacity: 0.8;
    /* ホバーしたときに少し薄くなるようにアニメーションを付ける */
}


/* タブレット・スマートフォン用スタイル */
@media(max-width: 971px) {
    .header-nav {
        padding-left: 0;
    }

    /* .header-logoImg {
        width: 150px;
        margin-top: 10px;
    } */

    /* .searchArea {
    width: 225px;
    height: 30px;
    } */
}


/* スマートフォン用スタイル */
@media(max-width: 647px) {
    .header-inner {
        padding: 0 5px;
    }

    .searchArea {
    width: 225px;
    height: 30px;
    }

    /* .header-inner {
        display: block;
        height: 35px;
    }

    .header-logoImg {
        margin: 0 auto;
    }

    .searchArea {
        display: none;
    } */

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
</style>