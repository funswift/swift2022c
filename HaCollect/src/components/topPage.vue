<template>
    <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <router-link class="nowPage" to="/">ホーム</router-link>
                    <hr color="#4c9eeb" size="5px">
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
                    <router-link to="/news">ニュース</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <div class="hello">
        
            <div class="tweet">
            <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【撮影】北海道函館市の夜空に8本の「光の柱」突如出現、その正体は？<a href="https://t.co/H9sugD0or7">https://t.co/H9sugD0or7</a><br><br>「光の護封剣」「多分エヴァ」との反応も寄せられた。気象学者によると、漁船の漁火が夜間に上空の氷でできた雲にあたることで発生する「漁火光柱(いさりびこうちゅう)」の可能性が高いという。 <a href="https://t.co/nKYkWLYJ87">pic.twitter.com/nKYkWLYJ87</a></p>&mdash; ライブドアニュース (@livedoornews) <a href="https://twitter.com/livedoornews/status/1577641000062681089?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote>
            <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">残らない贈り物が、心に残る。<a href="https://twitter.com/hashtag/%E5%A4%95%E7%84%BC%E3%81%91%E7%A9%BA?src=hash&amp;ref_src=twsrc%5Etfw">#夕焼け空</a>　<a href="https://twitter.com/hashtag/%E5%87%BD%E9%A4%A8?src=hash&amp;ref_src=twsrc%5Etfw">#函館</a>　<a href="https://twitter.com/hashtag/%E3%82%AB%E3%83%A1%E3%83%A9?src=hash&amp;ref_src=twsrc%5Etfw">#カメラ</a> <a href="https://t.co/Rl7hbSH3Nc">pic.twitter.com/Rl7hbSH3Nc</a></p>&mdash; hanamaru (@hanamar79700561) <a href="https://twitter.com/hanamar79700561/status/1577974089888587779?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote>
            <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">新函館北斗駅の乗換改札がすごい<a href="https://twitter.com/hashtag/%E3%82%AD%E3%83%8F281%E7%B3%BB?src=hash&amp;ref_src=twsrc%5Etfw">#キハ281系</a> <a href="https://twitter.com/hashtag/%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E3%82%AD%E3%83%8F281?src=hash&amp;ref_src=twsrc%5Etfw">#ありがとうキハ281</a> <a href="https://twitter.com/hashtag/%E3%83%A9%E3%82%B9%E3%83%88%E3%83%A9%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ラストラン</a> <a href="https://t.co/YIDv08Oxgv">pic.twitter.com/YIDv08Oxgv</a></p>&mdash; Ahira activity (@ActivityAhira) <a href="https://twitter.com/ActivityAhira/status/1575637406325215232?ref_src=twsrc%5Etfw">September 30, 2022</a></blockquote>

            </div>
            <div class="infomation">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">

            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">

            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">

            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">

            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">

            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
            <img src="../assets/emptyInfo/emptyInfo_1.png">
        </div>
    </div>
</template>



<script>
export default {
    name: "topPage",
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
    margin-top: 15px;
}

hr {
    margin-top: 10px;
    margin-bottom: 0;
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
        padding: 0 10px;
    }

    .header-navList .nowPage {
        color: #4c9eeb;
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

.tweet {
    display:flex;
    margin-right: 30px;
    margin-left: 30px;
}
</style>
    