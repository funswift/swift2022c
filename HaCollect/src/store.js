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
            fire_data: null,                //全部のカテゴリ＋「函館」で一致するデータを格納する変数
            search_fire_data: null,     //検索結果ページに表示するデータ
            top_fire_data: null,          //トップページに表示するデータ
            food_fire_data: null,        //ごはんカテゴリページに表示するデータ
            news_fire_data: null,       //ニュースカテゴリページに表示するデータ
            spa_fire_data: null,         //温泉カテゴリページに表示するデータ
            tour_fire_data: null,        //観光カテゴリページに表示するデータ
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
        setFoodData: (state, data) => {        //ごはんカテゴリページに表示するデータに新しいデータを格納する処理
            state.food_fire_data = data
        },
        setNewsData: (state, data) => {       //ニュースカテゴリページに表示するデータに新しいデータを格納する処理
            state.news_fire_data = data
        },
        setSpaData: (state, data) => {         //温泉カテゴリページに表示するデータに新しいデータを格納する処理
            state.spa_fire_data = data
        },
        setTourData: (state, data) => {        //観光カテゴリページに表示するデータに新しいデータを格納する処理
            state.tour_fire_data = data
        }
    },
    actions: {
        //ここにmutationsを実行するための関数を書く。そして、actionsをvue側で呼び出す。
        InitializeFireData: (context) => {                         //まず、おおもとのデータを取得する処理      
            
            return new Promise(function(resolve, reject) {
                try {
                    const que = query(ref(database, 'SNS_data/'), orderByChild('date'));  //SNS_dataを投稿日順に昇順でソートしたものをqueに格納する

                    get(que).then((snapshot) => {   //snapshot->データ全体  childSnapshot->データ一つ
        
                        const data = [];   //あとでデータの挿入(下のcontext.commit)に使う用
                        snapshot.forEach(childSnapshot => {
                            // ↓変数dataにデータベースのデータ一つを格納する処理
                            data.push(childSnapshot.val());
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
                if(result != false) {
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
        getFoodData: (context) => {                         //ごはんカテゴリページに表示するデータをRealtime databaseから取得してくる処理
            
            const category_word_list = /ラーメン|ごはん|飯|グルメ|カフェ|居酒屋/;       //カテゴリページに表示する際に、変数の内容が含まれているかどうかで判断する
            const data = [];
            const fdata = context.state.fire_data
            
            for (let i = 0; fdata[i] != null; i++) {
                if (fdata[i].data_label == 'FoodTimeLine'){
                    data.push(fdata[i]);
                } else {
                    let text = fdata[i].text;
                    //testもincludesと役割はほぼ同じ（正規表現が使えるかどうかの違い）
                    let result = category_word_list.test(text);   //投稿テキストにcategory_word_listの値が一つでも含まれているかどうかをチェック
                    // console.log(result)  //確認用
                    if(result != false) {
                        data.push(fdata[i]);
                    }
                }
            }       
            
            console.log(data) //確認用
            context.commit('setFoodData', data)
        },
        getNewsData: (context) => {                        //ニュースカテゴリページに表示するデータをRealtime databaseから取得してくる処理
            
            const category_word_list = /ニュース|事件/;
            const data = [];
            const fdata = context.state.fire_data
            for (let i = 0; fdata[i] != null; i++) {
                if (fdata[i].data_label == 'NewsTimeLine'){
                    data.push(fdata[i]);
                } else {
                    let text = fdata[i].text;
                    let result = category_word_list.test(text);
                    // console.log(result)  //確認用
                    if(result != false) {
                        data.push(fdata[i]);
                    }
                }
            }      
            
            console.log(data) //確認用
            context.commit('setNewsData', data)
        },
        getSpaData: (context) => {                          //温泉カテゴリページに表示するデータをRealtime databaseから取得してくる処理
            
            const category_word_list = /温泉|風呂/;
            const data = [];
            const fdata = context.state.fire_data
            for (let i = 0; fdata[i] != null; i++) {
                if (fdata[i].data_label == 'SpaTimeLine'){
                    data.push(fdata[i]);
                } else {
                    let text = fdata[i].text;
                    let result = category_word_list.test(text);
                    // console.log(result)  //確認用
                    if(result != false) {
                        data.push(fdata[i]);
                    }
                }
            }          
            
            console.log(data) //確認用
            context.commit('setSpaData', data)
        },
        getTourData: (context) => {                          //観光カテゴリページに表示するデータをRealtime databaseから取得してくる処理
            
            const category_word_list = /スポット|観光|祭/;
            const data = [];
            const fdata = context.state.fire_data
            for (let i = 0; fdata[i] != null; i++) {
                if (fdata[i].data_label == 'TourTimeLine'){
                    data.push(fdata[i]);
                } else {
                    let text = fdata[i].text;
                    let result = category_word_list.test(text);
                    // console.log(result)  //確認用
                    if(result != false) {
                        data.push(fdata[i]);
                    }
                }
            }   
            
            console.log(data) //確認用
            context.commit('setTourData', data)
        },
    },
    // getCategoryData: (context) => {     
        
    //     //トップページに表示するデータをRealtime databaseから取得してくる処理
    //     const top_data = [];
    //     const food_data = [];
    //     const news_data = [];
    //     const spa_data = [];
    //     const tour_data = [];
    //     const fdata = context.state.fire_data
        
    //     for (let i = 0; fdata[i] != null; i++) {
    //         if (fdata[i].data_label == 'TopTimeLine' || fdata[i].data_label == 'Search'){
    //             top_data.push(fdata[i]);
    //         }
    //     }       

    //     console.log(top_data) //確認用
    //     context.commit('setTopData', top_data)     //emutationsのsetSearchDataを実行する
        
        

    //     //ごはんカテゴリページに表示するデータをRealtime databaseから取得してくる処理
    //     const category_food_list = /ラーメン|ごはん|飯|グルメ|カフェ|居酒屋/;       //カテゴリページに表示する際に、変数の内容が含まれているかどうかで判断する
        
    //     for (let i = 0; fdata[i] != null; i++) {
    //         if (fdata[i].data_label == 'FoodTimeLine'){
    //             food_data.push(fdata[i]);
    //         } else {
    //             let text = fdata[i].text;
    //             //testもincludesと役割はほぼ同じ（正規表現が使えるかどうかの違い）
    //             let result = category_food_list.test(text);   //投稿テキストにcategory_word_listの値が一つでも含まれているかどうかをチェック
    //             // console.log(result)  //確認用
    //             if(result != false) {
    //                 food_data.push(fdata[i]);
    //             }
    //         }
    //     }       
        
    //     console.log(food_data) //確認用
    //     context.commit('setFoodData', food_data)        
        

    //     //ニュースカテゴリページに表示するデータをRealtime databaseから取得してくる処理
    //     const category_news_list = /ニュース|事件/;

    //     for (let i = 0; fdata[i] != null; i++) {
    //         if (fdata[i].data_label == 'NewsTimeLine'){
    //             news_data.push(fdata[i]);
    //         } else {
    //             let text = fdata[i].text;
    //             let result = category_news_list.test(text);
    //             // console.log(result)  //確認用
    //             if(result != false) {
    //                 news_data.push(fdata[i]);
    //             }
    //         }
    //     }      
        
    //     console.log(news_data) //確認用
    //     context.commit('setNewsData', news_data)            
        

    //     //温泉カテゴリページに表示するデータをRealtime databaseから取得してくる処理                        
    //     const category_spa_list = /温泉|風呂/;

    //     for (let i = 0; fdata[i] != null; i++) {
    //         if (fdata[i].data_label == 'SpaTimeLine'){
    //             spa_data.push(fdata[i]);
    //         } else {
    //             let text = fdata[i].text;
    //             let result = category_spa_list.test(text);
    //             // console.log(result)  //確認用
    //             if(result != false) {
    //                 spa_data.push(fdata[i]);
    //             }
    //         }
    //     }          

    //     console.log(spa_data) //確認用
    //     context.commit('setSpaData', spa_data)            



    //     //観光カテゴリページに表示するデータをRealtime databaseから取得してくる処理                        
    //     const category_tour_list = /スポット|観光|祭/;

    //     for (let i = 0; fdata[i] != null; i++) {
    //         if (fdata[i].data_label == 'TourTimeLine'){
    //             tour_data.push(fdata[i]);
    //         } else {
    //             let text = fdata[i].text;
    //             let result = category_tour_list.test(text);
    //             // console.log(result)  //確認用
    //             if(result != false) {
    //                 tour_data.push(fdata[i]);
    //             }
    //         }
    //     }   

    //     console.log(tour_data) //確認用
    //     context.commit('setTourData', tour_data)            
    // },            
    plugins: [
        createPersistedState()
    ]
})

