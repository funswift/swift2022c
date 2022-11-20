import { createStore } from 'vuex'
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


export const store = createStore({
    state() {
        return {
            fire_data: null,
            search_fire_data: null,
        }
    },
    mutations: {
        setData: (state, data) => {
            state.fire_data = data
        },
        setSearchData: (state, data) => {
            state.search_fire_data = data
        }
    },
    actions: {
        getData: (context) => {
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
                console.log(data);  //確認用

                context.commit('setData', data)
            });
        },
        searchData: (context, search) => {
            // const que = query(ref(database, 'SNS_data/'), orderByChild('date'));  //SNS_dataを投稿日順に昇順でソートしたものを格納

            // get(que).then((snapshot) => {   //snapshot->データ全体  childSnapshot->データ一つ
            //     var data = [];
            //     snapshot.forEach(childSnapshot => {
            //         // ↓あるテキストが含まれていたら格納する処理
            //         console.log(childSnapshot)
            //         let text = childSnapshot.val().text;
            //         let result = text.indexOf('本日');
            //         if(result == -1) {
            //             data.push(childSnapshot.val());
            //         }

            //     });
            //     console.log(data) //確認用
            //     console.log('あいうえお')

            //     context.commit('setSearchData', data)
            // });
            var data = [];
            // console.log(context.state.fire_data) // 確認用
            var fdata = context.state.fire_data
            for (let i = 1; fdata[i] != null; i++) {
                let text = fdata[i].text;
                let result = text.indexOf(search);  //resultには大文字と小文字は区別し、値が見つからない場合は-1を返します。
                // console.log(result)  //確認用
                if(result != -1) {
                    data.push(fdata[i]);
                }
            }

            console.log(data) //確認用

            context.commit('setSearchData', data)

        }
    }
})


// context.state.fire_data or store.state.fire_dataで参照できる