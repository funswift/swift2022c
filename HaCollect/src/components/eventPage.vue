<template>
    <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <a>
                        <router-link to="/">ホーム</router-link>
                    </a>
                </li>
                <li>
                    <a>
                        <router-link to="/eat">ごはん</router-link>
                    </a>
                </li>
                <li>
                    <a>
                        <router-link class="nowPage" to="/event">イベント</router-link>
                    </a>
                    <hr color="#4c9eeb" size="5px">
                </li>
                <li>
                    <a>
                        <router-link to="/tour">観光</router-link>
                    </a>
                </li>
                <li>
                    <a>
                        <router-link to="/news">災害</router-link>
                    </a>
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
export default {
    name: 'HelloWorld',
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
    font-size: 32px;
    /* 任意のフォントサイズにする */
    font-weight: bold;
    /* 太字にする */
    color: #fff;
    text-decoration-line: none;
    padding: 0 15px;
}

.header-navList .nowPage {
    color: #4c9eeb;
    margin-top: 29px;
}

hr {
    margin-top: 0;
    margin-bottom: 22px;
}

.header-navList li a:hover {
    opacity: 0.8;
    /* ホバーしたときに少し薄くなるようにアニメーションを付ける */
}

.infomation img {
    margin: 10px;
    width: 30%;
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
        font-size: 20px;
        padding: 0 5px;
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
        width: 45%;
    }
}

@media(max-width: 450px) {
    .infomation img {
        width: 90%;
    }
}
</style>
