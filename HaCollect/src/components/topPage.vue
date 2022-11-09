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
        <div class="infomation" v-for="(item) in fire_data">
            <div class="item">
                <!-- ツイッターの投稿の表示 -->
                <template v-if="item.SNS_type == 'Twitter'">
                    <template v-if="item.media != NULL">   <!-- メディア情報がある場合 -->
                        <template v-for="(url) in item.media">  <!-- メディアキーの中にあるurlを取り出す -->
                            <img class="picture" v-bind:src=url.media_url>  <!-- 画像のurl -->
                        </template>
                    </template>
                    <a v-bind:href=item.link target="_blank" rel="noopener noreferrer">Twitterによる投稿</a>  <!-- リンク -->
                    <p>{{ item.text }}</p>  <!-- テキスト -->
                </template>
                <!-- インスタグラムの投稿の表示 -->
                <template v-if="item.SNS_type == 'Instagram'">
                    <template v-if="item.media_type == 'VIDEO'">  <!-- メディアの種類が動画だったら... -->
                        <iframe v-bind:src=item.media_url></iframe>  <!-- 動画のurl -->
                    </template>
                    <template v-else>  <!-- メディアの種類が動画以外だったら... -->
                        <img class="picture" v-bind:src=item.media_url>   <!-- 画像のurl -->
                    </template>
                    <a v-bind:href=item.link target="_blank" rel="noopener noreferrer">Instagramによる投稿</a>  <!-- リンク -->
                    <p>{{ item.text }}</p>  <!-- テキスト -->
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
    name: "topPage",
    data() {
        return {
            fire_data: null,  //firebaseのデータベースの中身を入れる変数
        }
    },
    methods: {
        getData() {  //firebaseのデータを持ってくる関数
            const que = query(ref(database, 'SNS_data/'), orderByChild('date'));  //SNS_dataを投稿日順に昇順でソートしたものを格納

            get(que).then( (snapshot) => {   //snapshot->データ全体  childSnapshot->データ一つ

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

.infomation {
    outline: 1px solid #FF0000;
    display: inline-block;
    width: 30%;
}

.item {
    display: flex;
    flex-wrap: wrap;
}

.picture {
    width: 50%;
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

    /* .item {
        謎
        
    } */

}

@media(max-width: 450px) {
    /* .item {
        謎
    } */
}
</style>
    