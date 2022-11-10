<template>
    <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <router-link to="/">ホーム</router-link>
                </li>
                <li>
                    <router-link to="/eat">ごはん</router-link>
                </li>
                <li>
                    <router-link to="/tour">観光</router-link>
                </li>
                <li>
                    <router-link to="/event">イベント</router-link>
                </li>
                <li>
                    <router-link to="/life">くらし</router-link>
                </li>
                <li>
                    <router-link to="/spa">温泉</router-link>
                </li>
                <li>
                    <router-link to="/news">ニュース</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <div class="header-inner3">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <a class="searchWord"><span style="color: #4c9eeb;">{{ search }}</span>の検索結果</a>
                </li>
            </ul>
        </nav>
    </div>

    <div class="hello">
        <div class="infomation">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">

            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">

            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">

            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">

            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">

            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
            <img src="../assets/emptyInfo/emptyInfo_s.png">
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

.header-inner3 {
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    height: 30px;
    margin-top: 60px;
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
    width: auto;
}

.header-navList li a:hover {
    opacity: 0.8;
    /* ホバーしたときに少し薄くなるようにアニメーションを付ける */
}

.infomation img {
    margin: 10px;
    width: 25%;
    height: auto;
}

.hello {
    padding-top: 110px;
}

@media(max-width: 800px) {
    .header-nav {
        padding-left: 0;
    }

    .infomation img {
        width: 40%;
    }
}

@media(max-width: 450px) {
    .infomation img {
        width: 80%;
    }

    /* .header-navList li a {
        font-size: 16px;
    } */
}
</style>