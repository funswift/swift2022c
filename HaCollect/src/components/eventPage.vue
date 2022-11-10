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
                    <router-link class="nowPage" to="/event">イベント</router-link>
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
    <div class="hello">
        <div class="infomation" v-for="(item, index) in fire_data">
            <div class="item">
                <!-- ツイッターの投稿の表示 -->
                <template v-if="item.SNS_type == 'Twitter'">
                    <div class="card_All">
                        <img class="card_Head" src="..\assets\SNScolor_Twitter.png" />
                        <template v-if="item.media != NULL">
                            <!-- メディア情報がある場合 -->
                            <template v-for="(url) in item.media">
                                <!-- メディアキーの中にあるurlを取り出す -->
                                <img class="picture card_Image" v-bind:src=url.media_url> <!-- 画像のurl -->
                            </template>
                        </template>
                        <div class="ac-box">
                            <input :id="[index]" name="accordion-1" type="checkbox" />
                            <label :for="[index]"></label>
                            <p class="firstText">{{ item.text }}</p> <!-- テキスト(最初の文のみプレビュー) -->
                            <a v-bind:href=item.link target="_blank" class="linkText"
                                rel="noopener noreferrer">Twitterによる投稿</a>
                            <!-- リンク -->
                            <div class="ac-small">
                                <p>{{ item.text }}</p> <!-- テキスト(ボタン押して確認できる全文) -->
                            </div>
                        </div>
                    </div>
                </template>
                <!-- インスタグラムの投稿の表示 -->
                <template v-if="item.SNS_type == 'Instagram'">
                    <div class="card_All">
                        <img class="card_Head" src="..\assets\SNScolor_Instagram.png" />
                        <template v-if="item.media_type == 'VIDEO'">
                            <!-- メディアの種類が動画だったら... -->
                            <iframe class="card_Movie" v-bind:src=item.media_url></iframe> <!-- 動画のurl -->
                        </template>
                        <template v-else>
                            <!-- メディアの種類が動画以外だったら... -->
                            <img class="picture card_Image" v-bind:src=item.media_url> <!-- 画像のurl -->
                        </template>
                        <div class="ac-box">
                            <input :id="[index]" name="accordion-1" type="checkbox" />
                            <label :for="[index]"></label>
                            <p class="firstText">{{ item.text }}</p> <!-- テキスト(最初の文のみプレビュー) -->
                            <a v-bind:href=item.link target="_blank" class="linkText"
                                rel="noopener noreferrer">Instagramによる投稿</a>
                            <!-- リンク -->
                            <div class="ac-small">
                                <p>{{ item.text }}</p> <!-- テキスト(ボタン押して確認できる全文) -->
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>



<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, query, orderByChild, equalTo } from "firebase/database";
// ↑ realtime databaseが必要だったためインポートした {}の中に欲しい機能をかく
//このコードではgetDatabase(realtime Database) と ref, getなどの機能をインポートしている


// Firebaseの設定  (.envファイル作ってそこに自分のFIrebaseのAPI key貼ってください)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    databaseURL: import.meta.env.VITE_APP_FIREBASE__DATABASE_URL //DBのURLを追加
};

// Firebaseの初期化（initializeAppで自分のfirebaseに接続してる？）
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export default {
    name: "eventPage",
    data() {
        return {
            fire_data: null,  //firebaseのデータベースの中身を入れる変数
        }
    },
    methods: {
        getData() {  //firebaseのデータを持ってくる関数
            const que = query(ref(database, 'SNS_data/'), orderByChild('date'));  //SNS_dataを投稿日順に昇順でソートしたものを格納

            get(que).then((snapshot) => {   //snapshot->データ全体  childSnapshot->データ一つ

                var data = [];
                snapshot.forEach(childSnapshot => {
                    // ↓あるテキストが含まれていたら格納する処理
                    // let text = childSnapshot.val().text;
                    // let result = text.indexOf('大三坂');
                    // if(result == -1) {
                    //     data.push(childSnapshot.val());
                    // }

                    // ↓変数dataにデータベースのデータ一つを格納する処理
                    data.push(childSnapshot.val());

                });
                // console.log(data);  //確認用

                this.fire_data = data;
                console.log(this.fire_data);  //確認用

            });
        }
    },
    mounted() {
        this.getData()
    }
};
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

.hello {
    padding-top: 100px;
}

.infomation {
    display: inline-block;
    /* width: 30%; */
}

.item {
    display: flex;
    flex-wrap: wrap;
}

.picture {
    width: 48%;
}

.hello {
    padding-top: 80px;
}


.card_All {
    position: relative;
    overflow: hidden;
    float: left;
    width: 300px;
    margin: 20px 10px;
    height: auto;
    background: #ffffff;
    border: 2px solid #000000;
    border-radius: 10px;
    text-align: center;
    z-index: 0;
}

.card_Head {
    width: 300px;
    height: 26px;
    border-bottom: 2px solid #000000;
}

.card_Image {
    width: 200px;
    height: auto;
    border: 1px solid #000;
    margin-top: 20px;
}
.card_Movie {
    width: 290px;
    height: 300px;
    border: 1px solid #000;
    margin-top: 20px;
}

.ac-box {
    width: auto;
    margin: 20px auto;
}

.ac-box label {
    float: left;
    width: 50px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background: #000000;
    margin: auto 10px;
    line-height: 50px;
    position: relative;
    display: block;
    height: 50px;
    border: 2px solid #000000;
    border-radius: 50%;
    cursor: pointer;
    background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="%23ffffff" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    transform: rotateZ(180deg);
}

.ac-box label:hover {
    opacity: 0.7;
}

.ac-box input {
    display: none;
}

.ac-box input:checked~label {
    transform: rotateZ(0deg);
}

.firstText {
    width: 210px;
    /* 省略せずに表示するサイズを指定 */
    border: 1px solid #000000;
    background-color: #ffeeee;
    border-radius: 10px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.linkText {
    display: none;
}

.ac-box div {
    height: 0px;
    padding: 0px;
    overflow: hidden;
    opacity: 0;
    transition: 0.5s;
}

.ac-box input:checked~.firstText {
    display: none;
}

.ac-box input:checked~.linkText {
    width: 210px;
    height: 50px;
    font-size: 20px;
    text-align: center;
    margin: 20px 0;
    border: 1px solid #000000;
    background-color: #eeeeee;
    border-radius: 10px;
    display: -webkit-box;
}

.ac-box input:checked~div {
    height: auto;
    padding: 5px;
    border: 1px solid #000000;
    background: #ffeeee;
    border-radius: 20px;
    opacity: 1;
}

.ac-box div p {
    color: #000;
    padding: 10px;
    text-align: left;
}

.ac-small p {
    margin: 0px auto;
}


@media(max-width: 971px) {
    .header-nav {
        padding-left: 0;
    }

    /* .item {
        謎
        
    } */

}

@media(max-width: 647px) {
    /* .item {
        謎
    } */
}
</style>
