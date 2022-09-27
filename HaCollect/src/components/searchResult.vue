<template>
    <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <a><span style="color: #4c9eeb;">{{ search }}</span>の検索結果</a>
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
    overflow-x: auto;
    white-space: nowrap;
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
    padding-top: 80px;
}

@media(max-width: 800px) {
    .header-nav {
        padding-left: 0;
    }

    .header-navList li {
        margin: 0 10px
    }

    .header-navList li a {
        padding: 0 10px;
    }

    .infomation img {
        width: 40%;
    }
}

@media(max-width: 450px) {
    .infomation img {
        width: 80%;
    }

    .header-navList li a {
        font-size: 16px;
    }
}
</style>