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
                    <router-link to="/event">イベント</router-link>
                </li>
                <li>
                    <router-link to="/tour">観光</router-link>
                </li>
                <li>
                    <router-link class="nowPage" to="/news">災害</router-link>
                    <hr color="#4c9eeb" size="5px">
                </li>
            </ul>
        </nav>
    </div>
    <div class="hello">
        <div class="infomation">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">

            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">

            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">

            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">

            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">

            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
            <img src="../assets/emptyInfo/emptyInfo_5.png">
        </div>
    </div>
</template>



<script>
export default {
    name: "newsPage",
};
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

/* 下のaは実際はrouter-link要素に機能している */
.header-navList li a {
    display: block;
    /* 扱いやすいようにblock要素にする */
    font-size: 32px;
    /* 任意のフォントサイズにする */
    font-weight: bold;
    /* 太字にする */
    color: #fff;
    text-decoration-line: none;
    padding: 0 30px;
}

.header-navList .nowPage {
    color: #4c9eeb;
    margin-top: 29px;
}

hr {
    margin-top: 0;
    margin-bottom: 22px;
}

/* 下のaは実際はrouter-link要素に機能している */
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

    /* 下のaは実際はrouter-link要素に機能している */
    .header-navList li a {
        font-size: 20px;
        padding: 0 10px;
    }

    .header-navList .nowPage {
        color: #4c9eeb;
        margin-top: 15px;
    }

    hr {
        margin-top: 10px;
        margin-bottom: 0;
    }

    .infomation img {
        width: 40%;
    }
}

@media(max-width: 450px) {
    .infomation img {
        width: 80%;
    }
}
</style>
