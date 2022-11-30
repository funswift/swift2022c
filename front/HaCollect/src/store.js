import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, query, orderByChild} from "firebase/database";
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
            //ここにコンポーネント間で共有するデータを書く
            fire_data: null,                    //全部のカテゴリ＋「函館」で一致するデータを格納する変数
            search_fire_data: null,         //検索結果ページに表示するデータ
            top_fire_data: null,              //トップページに表示するデータ
            food_fire_data: null,            //食べるカテゴリページに表示するデータ
            // news_fire_data: null,       
            // spa_fire_data: null,         
            tour_fire_data: null,           //見るカテゴリページに表示するデータ
            knowledge_fire_data: null   //知るカテゴリページに表示するデータ
        }
    },
    mutations: {
        //ここにデータを格納する処理"のみ"だけの関数？を書く(mutation->意味：変化)
        setFireData: (state, data) => {         //とりあえず、大枠で、新しいデータを格納する処理
            state.fire_data = data
        },
        setSearchData: (state, data) => {     //検索結果ページに表示するデータに新しいデータを格納する処理
            state.search_fire_data = data
        },
        setTopData: (state, data) => {          //トップページに表示するデータに新しいデータを格納する処理
            state.top_fire_data = data
        },
        setFoodData: (state, data) => {        //食べるカテゴリページに表示するデータに新しいデータを格納する処理
            state.food_fire_data = data
        },
        // setNewsData: (state, data) => {   
        //     state.news_fire_data = data
        // },
        // setSpaData: (state, data) => {     
        //     state.spa_fire_data = data
        // },
        setTourData: (state, data) => {        //見るカテゴリページに表示するデータに新しいデータを格納する処理
            state.tour_fire_data = data
        },
        setKnowledgeData: (state, data) => {    //知るカテゴリページに表示するデータに新しいデータを格納する処理
            state.knowledge_fire_data = data
        }
    },
    actions: {
        //ここにmutationsを実行するための関数を書く。そして、actionsをvue側で呼び出す。
        InitializeFireData: (context) => {                         //まず、おおもとのデータを取得する処理      
            
            return new Promise(function(resolve, reject) {
                try {
                    const que = query(ref(database, 'SNS_data/'), orderByChild('date'));  //SNS_dataを投稿日を秒数にしてマイナスをつけ、昇順でソートしたものをqueに格納する
                    let roop_count = 0       //ループ回数

                    get(que).then((snapshot) => {   //snapshot->データ全体  childSnapshot->データ一つ
        
                        const data = [];   //あとでデータの挿入(下のcontext.commit)に使う用
                        snapshot.forEach((childSnapshot) => {
                            if (roop_count < 100) {   //roopcountでループ回数を指定（現在100回ループ=データを全体で100個格納）
                                // ↓変数dataにデータベースのデータ一つを格納する処理
                                // console.log(roop_count)  //確認用
                                data.push(childSnapshot.val());
                                roop_count ++
                            }
                        });
        
                        console.log(data);  //確認用
                        context.commit('setFireData', data)
                        return resolve('Sucsess!')
                    });                     
                } catch(e) {
                    reject('Failed!')
                }
            })
        },
        getSearchData: (context, search) => {           //検索結果ページに表示するデータをRealtime databaseから取得してくる処理
            
            const data = [];
            // fdataにstateに書かれてあるtop_fire_dataを参照する
            //(参照する時点でtop_fire_dataにrealtime databaseのデータが入ってないといけない →getTopDataが前に実行されるべき -> topPage.vueで実行してます）
            const fdata = context.state.fire_data       
            // console.log(fdata);  //確認用
        
            for (let i = 0; fdata[i] != null; i++) {
                let text = fdata[i].text;
                //includes関数によって、resultには大文字と小文字は区別し、値が見つからない場合はfalseを返します。
                let result = text.includes(search);   //投稿テキストにsearch変数の値が含まれているかどうかをチェック
                // console.log(result)  //確認用
                if(result == true) {
                    data.push(fdata[i]);
                }
            }

            // console.log(data) //確認用
            context.commit('setSearchData', data)     //emutationsのsetSearchDataを実行する
        },
        getTopData: (context) => {                           //トップページに表示するデータをRealtime databaseから取得してくる処理
            
            const data = [];
            const fdata = context.state.fire_data
            
            for (let i = 0; fdata[i] != null; i++) {
                if (fdata[i].data_label == 'TopTimeLine' || fdata[i].data_label == 'Search'){
                    data.push(fdata[i]);
                }
            }       

            console.log(data) //確認用
            context.commit('setTopData', data)     //emutationsのsetSearchDataを実行する
        },
        getFoodData: (context) => {                         //食べるカテゴリページに表示するデータをRealtime databaseから取得してくる処理
            
            const category_word_list = /ラーメン|ごはん|飯|グルメ|カフェ|居酒屋/;       //カテゴリページに表示する際に、変数の内容が含まれているかどうかで判断する
            const data = [];
            const fdata = context.state.fire_data
            
            for (let i = 0; fdata[i] != null; i++) {
                if (fdata[i].data_label == 'FoodTimeLine'){
                    data.push(fdata[i]);
                } else {
                    if (fdata[i].data_label == 'TopTimeLine' || fdata[i].data_label == 'Search'){
                        let text = fdata[i].text;
                        //testもincludesと役割はほぼ同じ（正規表現が使えるかどうかの違い）
                        let result = category_word_list.test(text);   //投稿テキストにcategory_word_listの値が一つでも含まれているかどうかをチェック
                        // console.log(result)  //確認用
                        if(result == true) {
                            data.push(fdata[i]);
                        }
                    }
                }
            }       
            
            console.log(data) //確認用
            context.commit('setFoodData', data)
        },
        // getNewsData: (context) => {                        
            
        //     const category_word_list = /ニュース|事件/;
        //     const data = [];
        //     const fdata = context.state.fire_data
        //     for (let i = 0; fdata[i] != null; i++) {
        //         if (fdata[i].data_label == 'NewsTimeLine'){
        //             data.push(fdata[i]);
        //         } else {
        //             let text = fdata[i].text;
        //             let result = category_word_list.test(text);
        //             // console.log(result)  //確認用
        //             if(result == true) {
        //                 data.push(fdata[i]);
        //             }
        //         }
        //     }      
            
        //     console.log(data) //確認用
        //     context.commit('setNewsData', data)
        // },
        // getSpaData: (context) => {                         
            
        //     const category_word_list = /温泉|風呂/;
        //     const data = [];
        //     const fdata = context.state.fire_data
        //     for (let i = 0; fdata[i] != null; i++) {
        //         if (fdata[i].data_label == 'SpaTimeLine'){
        //             data.push(fdata[i]);
        //         } else {
        //             let text = fdata[i].text;
        //             let result = category_word_list.test(text);
        //             // console.log(result)  //確認用
        //             if(result == true) {
        //                 data.push(fdata[i]);
        //             }
        //         }
        //     }          
            
        //     console.log(data) //確認用
        //     context.commit('setSpaData', data)
        // },
        getTourData: (context) => {                          //見るカテゴリページに表示するデータをRealtime databaseから取得してくる処理
            
            const category_word_list = /スポット|観光|祭/;
            const data = [];
            const fdata = context.state.fire_data
            for (let i = 0; fdata[i] != null; i++) {
                if (fdata[i].data_label == 'TourTimeLine'){
                    data.push(fdata[i]);
                } else {
                    if (fdata[i].data_label == 'TopTimeLine' || fdata[i].data_label == 'Search'){
                        let text = fdata[i].text;
                        let result = category_word_list.test(text);
                        // console.log(result)  //確認用
                        if(result == true) {
                            data.push(fdata[i]);
                        }
                    }
                }
            }   
            
            console.log(data) //確認用
            context.commit('setTourData', data)
        },
        getKnowledgeData: (context) => {                          //知るカテゴリページに表示するデータをRealtime databaseから取得してくる処理
            
            const category_word_list = /スポット|観光|祭|ラーメン|ごはん|飯|グルメ|カフェ|居酒屋/;
            const data = [];
            const fdata = context.state.top_fire_data
            for (let i = 0; fdata[i] != null; i++) {
                    let text = fdata[i].text;
                    let result = category_word_list.test(text);
                    // console.log(result)  //確認用
                    if(result == false) {
                        data.push(fdata[i]);
                    }
                }
            
            console.log(data) //確認用
            context.commit('setKnowledgeData', data)
        },        
    },     
    plugins: [
        createPersistedState()
    ]
})

