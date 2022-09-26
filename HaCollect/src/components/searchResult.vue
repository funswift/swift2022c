<template>
    <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <a><span class="nowPage">{{ search }}</span>の検索結果</a>
                </li>
            </ul>
        </nav>
    </div>

    <div class="hello">
        <div class="infomation">
            <img src="../assets/emptyInfo_Insta.png">
            <img src="../assets/emptyInfo_Twi.png">
            <img src="../assets/emptyInfo_Insta.png">

            <img src="../assets/emptyInfo_Twi.png">
            <img src="../assets/emptyInfo_Insta.png">
            <img src="../assets/emptyInfo_Twi.png">

            <img src="../assets/emptyInfo_Insta.png">
            <img src="../assets/emptyInfo_Twi.png">
            <img src="../assets/emptyInfo_Insta.png">

            <img src="../assets/emptyInfo_Twi.png">
            <img src="../assets/emptyInfo_Insta.png">
            <img src="../assets/emptyInfo_Twi.png">

            <img src="../assets/emptyInfo_Insta.png">
            <img src="../assets/emptyInfo_Twi.png">
            <img src="../assets/emptyInfo_Insta.png">
        </div>
    </div>
</template>



<script>
'use strict'
export default {
    props: {
        search: String
    },
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
    font-size: 24px;
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
    background-color: #cfe7ff;
    /* フォーカス時背景色  */
}

.hello {
    padding-top: 80px;
}

.infomation img {
    margin: 10px;
    width: 30%;
    height: auto;
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

    .infomation img {
        width: 45%;
    }
}





@media(max-width: 450px) {
    .infomation img {
        width: 90%;
    }
}
</style>