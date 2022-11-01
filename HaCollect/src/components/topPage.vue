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
        <div class="infomation" v-for="(item, key) in fire_data">
            <div class="item">
                <template v-if="item.media_type == 'VIDEO'">
                    <iframe v-bind:src=item.link></iframe>
                    <!-- <video controls src="https://www.instagram.com/reel/CkKioTbDKKq/"></video> -->
                </template>
                <template v-else>
                    <img class="picture" v-bind:src=item.media_url>
                </template>
                <p>{{ item.text }}</p>
                <!-- <p>{{key}}</p> -->
            </div>
        </div>

    </div>
</template>




<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
// ↑ realtime databaseが必要だったためインポートした {}の中に欲しい機能をかく
//このコードではgetDatabase(realtime Database) と ref, get, childの機能をインポートしている


// Firebaseの設定  (.envファイル作ってそこに自分のFIrebaseのAPI key貼ってください)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    //デフォルトはここまで
    databaseURL: import.meta.env.VITE_APP_FIREBASE__DATABASE_URL //DBのURLを追加
};

// Firebaseの初期化appの変数に自分のfirebaseのデータ？を入れてる
const app = initializeApp(firebaseConfig);

// Realtime databaseの初期化　自分のデータベースの中身をdbRefに参照させてる
const dbRef = ref(getDatabase(app));


export default {
    name: "topPage",
    data() {
        return {
            fire_data: null,  //firebaseのデータベースの中身を入れる変数
        }
    },
    methods: {
        getData() {  //firebaseのデータを持ってくる関数
            get(child(dbRef, 'Instagram')).then((snapshot) => {
                if (snapshot.exists()) {  //firebaseのデータを取ってこれたら....
                    this.fire_data = snapshot.val()   //firebaseのDBの中身をfire_dataに代入
                    console.log(snapshot.val());
                } else {  //firebaseのデータが無ければ....
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
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
    