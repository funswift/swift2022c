<template>
    <!-- <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <router-link to="/">ホーム</router-link>
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
                    <router-link class="nowPage" to="/news">ニュース</router-link>
                </li>
            </ul>
        </nav>
    </div> -->
    <div class="hello">
        <div class="infomation" v-for="(item, index) in fire_data">
            <div class="item">
                <!-- ツイッターの投稿の表示 -->
                <template v-if="item.SNS_type == 'Twitter'">
                    <div class="card_All">
                        <img class="card_Head" src="../assets/SNScolor_Twitter.png" />
                        <template v-if="item.media != NULL">
                            <!-- メディア情報がある場合 -->
                            <template v-for="(url) in item.media">
                                <!-- メディアキーの中にあるurlを取り出す -->
                                <img class="card_Image" v-bind:src=url.media_url> <!-- 画像のurl -->
                            </template>
                        </template>
                        <div class="ac-box">
                            <input :id="[index]" name="accordion-1" type="checkbox" />
                            <p class="card_Text">{{ item.text }}</p> <!-- テキスト(最初の文のみプレビュー) -->
                            <a v-bind:href=item.link target="_blank" class="card_Link" rel="noopener noreferrer"><img
                                    src="../assets/TwitterIcon.png" /></a>
                            <!-- リンク -->
                            <label :for="[index]"></label>
                        </div>
                    </div>
                </template>
                <!-- インスタグラムの投稿の表示 -->
                <template v-if="item.SNS_type == 'Instagram'">
                    <div class="card_All">
                        <img class="card_Head" src="../assets/SNScolor_Instagram.png" />
                        <template v-if="item.media_type == 'VIDEO'">
                            <!-- メディアの種類が動画だったら... -->
                            <iframe class="card_Movie" v-bind:src=item.media_url></iframe> <!-- 動画のurl -->
                        </template>
                        <template v-else>
                            <!-- メディアの種類が動画以外だったら... -->
                            <img class="card_Image" v-bind:src=item.media_url> <!-- 画像のurl -->
                        </template>
                        <div class="ac-box">
                            <input :id="[index]" name="accordion-1" type="checkbox" />
                            <p class="card_Text">{{ item.text }}</p> <!-- テキスト(最初の文のみプレビュー) -->
                            <a v-bind:href=item.link target="_blank" class="card_Link" rel="noopener noreferrer"><img
                                    src="../assets/InstagramIcon.png" /></a>
                            <!-- リンク -->
                            <label :for="[index]"></label>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>




<script>
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, get, query, orderByChild, equalTo } from "firebase/database";
// // ↑ realtime databaseが必要だったためインポートした {}の中に欲しい機能をかく
// //このコードではgetDatabase(realtime Database) と ref, getなどの機能をインポートしている


// // Firebaseの設定  (.envファイル作ってそこに自分のFIrebaseのAPI key貼ってください)
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
//     authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
//     databaseURL: import.meta.env.VITE_APP_FIREBASE__DATABASE_URL //DBのURLを追加
// };

// // Firebaseの初期化（initializeAppで自分のfirebaseに接続してる？）
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app)

export default {
    name: "newsPage",
    // data() {
    //     return {
    //         fire_data: null,  //firebaseのデータベースの中身を入れる変数
    //     }
    // },
    // methods: {
    //     getData() {  //firebaseのデータを持ってくる関数
    //         const que = query(ref(database, 'SNS_data/'), orderByChild('date'));  //SNS_dataを投稿日順に昇順でソートしたものを格納

    //         get(que).then((snapshot) => {   //snapshot->データ全体  childSnapshot->データ一つ

    //             var data = [];
    //             snapshot.forEach(childSnapshot => {
    //                 // ↓あるテキストが含まれていたら格納する処理
    //                 // let text = childSnapshot.val().text;
    //                 // let result = text.indexOf('大三坂');
    //                 // if(result == -1) {
    //                 //     data.push(childSnapshot.val());
    //                 // }

    //                 // ↓変数dataにデータベースのデータ一つを格納する処理
    //                 data.push(childSnapshot.val());

    //             });
    //             // console.log(data);  //確認用

    //             this.fire_data = data;
    //             console.log(this.fire_data);  //確認用

    //         });
    //     }
    // },
    computed: {
        fire_data: function () {
            return this.$store.state.news_fire_data
        },
    },
    mounted() {
        // this.getData()     
        // this.setData()   
        this.$store.dispatch('getNewsData')  //トップページで使うデータをstoreから参照
    }
};
</script>



<style scoped>
.infomation {
    display: inline-block;
    /* width: 30%; */
}

.item {
    display: flex;
    flex-wrap: wrap;
}

.hello {
    padding-top: 80px;
}


.card_All {
    position: relative;
    overflow: hidden;
    float: left;
    width: 375px;
    margin-bottom: 2px;
    height: auto;
    background: #ffffff;
    border-bottom: 1px solid #aaaaaa;
    /* border-radius: 10px; */
    text-align: center;
    z-index: 0;
}

.card_Head {
    width: 375px;
    height: 30px;
    margin-bottom: -4px;
    /* border-bottom: 2px solid #000000; */
}

.card_Image {
    width: 375px;
    height: auto;
    /* border-bottom: 1px solid #000; */
    /* margin-top: 20px; */
}

.card_Movie {
    width: 375px;
    height: auto;
    /* border: 1px solid #000; */
    /* margin-top: 20px; */
}

.ac-box {
    width: auto;
    margin: 20px auto;
}

.ac-box input {
    display: none;
}

.card_Text {
    width: 350px;
    /* 省略せずに表示するサイズを指定 */
    height: auto;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    /* 省略せずに表示する行数を指定 */
    -webkit-box-orient: vertical;
    margin: auto;
    /* border: 1px solid #000000; */
    /* background-color: #ffeeee; */
    /* border-radius: 10px; */
}

.ac-box label {
    width: 50px;
    height: 35px;
    font-size: 16px;
    text-align: center;
    margin: 0 auto;
    line-height: 50px;
    position: relative;
    display: block;
    cursor: pointer;
    background-image: url("../assets/button.png");
    background-repeat: no-repeat;
    background-size: 50px;
    background-position: center;
}

.ac-box label:hover {
    opacity: 0.7;
}

.ac-box input:checked~label {
    transform: rotateZ(180deg);
    margin-top: 25px;
}

.card_Link {
    height: 0px;
    padding: 0px;
    float: right;
    overflow: hidden;
    opacity: 0;
    transition: 0.5s;
}

.card_Link img {
    width: 50px;
    height: 50px;
}

.ac-box input:checked~.card_Text {
    display: block;
    /* displayをblockに変更することで表示制限を解除 */
    text-align: left;
}

.ac-box input:checked~.card_Link {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 25px;
    opacity: 1;
}

@media(max-width: 971px) {

    /* .item {
        謎
        
    } */

}

@media(max-width: 647px) {
    /* .item {
        謎
    } */
}

@media(min-width: 750px) {
    .card_All{
        border-left: 1px solid #aaaaaa;
        border-right: 1px solid #aaaaaa;
    }
    /* .item {
        謎
    } */
}
</style>
