<template>
    <div class="hello">
        <div class="infomation" v-for="(item, post_index) in fire_data">
            <template v-if="post_index < max">
                <!-- <p>{{post_index}}</p> -->
                <div class="item">
                    <!-- ツイッターの投稿の表示 -->
                    <template v-if="item.SNS_type == 'Twitter'">
                        <div class="card_All">
                            <img class="card_Head" src="../assets/SNScolor_Twitter.png" />

                            <template v-if="item.media != null">  
                                <template v-for="(url, url_name) in item.media">  
                                    <template v-if="url_name == 'url' + page[post_index]">
                                        <template v-if="url.media_type == 'video'">
                                            <iframe class="card_Movie" v-bind:src=url.media_url></iframe>
                                        </template>
                                        <template v-else>
                                            <img class="card_Image" v-bind:src=url.media_url> 
                                        </template>
                                    </template>
                                </template>
                            </template>

                            <template v-if="page[post_index] > 0">
                                <div class="left-btn" @click="prevPage(post_index)"><p>前へ</p></div>
                            </template>
                            
                            <template v-if="page[post_index] < getObjLength(item.media) - 1">
                                <div class="right-btn" @click="nextPage(post_index)"><p>次へ</p></div>
                            </template>

                            <div class="ac-box">
                                <p>{{ item.date2 }}</p>
                                <input :id="[post_index]" name="accordion-1" type="checkbox" />
                                <p class="card_Text">{{ item.text }}</p> <!-- テキスト(最初の文のみプレビュー) -->
                                <a v-bind:href=item.link target="_blank" class="card_Link" rel="noopener noreferrer"><img
                                        src="../assets/TwitterIcon.png" /></a>
                                <!-- リンク -->
                                <label :for="[post_index]"></label>
                            </div>
                        </div>
                    </template>
                    <!-- インスタグラムの投稿の表示 -->
                    <template v-if="item.SNS_type == 'Instagram'">
                        <div class="card_All">
                            <img class="card_Head" src="../assets/SNScolor_Instagram.png" />
                            <template v-if="item.media_type != 'CAROUSEL_ALBUM'">
                                <template v-if="item.media_type == 'VIDEO'">
                                    <!-- メディアの種類が動画だったら... -->
                                    <iframe class="card_Movie" v-bind:src=item.media_url></iframe> <!-- 動画のurl -->
                                </template>
                                <template v-else>
                                    <!-- メディアの種類が動画以外だったら... -->
                                    <img class="card_Image" v-bind:src=item.media_url> <!-- 画像のurl -->
                                </template>
                            </template>
                            <template v-else>

                                <template v-for="(url, url_name) in item.media">
                                    <!-- <p>確認用</p> -->
                                    <template v-if="url_name == 'url' + page[post_index]">
                                        <template v-if="url.media_type == 'VIDEO'">
                                            <iframe class="card_Movie" v-bind:src=url.media_url></iframe> <!-- 動画のurl -->
                                        </template>
                                        <template v-else>
                                            <img class="card_Image" v-bind:src=url.media_url> <!-- 画像のurl -->
                                        </template>
                                    </template>
                                </template>
                                <template v-if="page[post_index] > 0">
                                    <div class="left-btn" @click="prevPage(post_index)"><p>前へ</p></div>
                                </template>

                                <template v-if="page[post_index] < getObjLength(item.media) - 1">
                                    <div class="right-btn" @click="nextPage(post_index)"><p>次へ</p></div>
                                </template>

                                
                            </template>

                            <div class="ac-box">
                                <p>{{ item.date2 }}</p>
                                <input :id="[post_index]" name="accordion-1" type="checkbox" />
                                <p class="card_Text">{{ item.text }}</p> <!-- テキスト(最初の文のみプレビュー) -->
                                <a v-bind:href=item.link target="_blank" class="card_Link" rel="noopener noreferrer"><img
                                        src="../assets/InstagramIcon.png" /></a>
                                <!-- リンク -->
                                <label :for="[post_index]"></label>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </div>

    <div>
        <template v-if="max < fire_data.length">
            <!-- <p>{{max}}</p> -->
            <p  v-on:click="displayMore">more</p>
        </template>
    </div>
</template>




<script>
const posts_num = 30  //表示する投稿数
const get_posts_num = 100  //取得してくる投稿数

export default {
    name: "newsPage",
    data() {
        return {
            max: posts_num,
            page: this.InitializeArray(get_posts_num)
        }
    },
    methods: {
        nextPage(post_index){
            // console.log(post_index)
            this.page[post_index] ++;
        },
        prevPage(post_index){
            // console.log(post_index)
            this.page[post_index] --;
        },        
        displayMore() {
            this.max += posts_num
        },
        getObjLength (obj) {
            // console.log(Object.keys(num).length)
            return Object.keys(obj).length
        },
        InitializeArray(num) {
            let array = Array(num)
            array.fill(0)
            // console.log(array)
            return array
        }
    },    
    computed: {
        fire_data: function () {
            return this.$store.state.news_fire_data
        },
    },
};
</script>



<style scoped>
.hello {
    padding-top: 80px;
}

.infomation {
    display: inline-block;
    /* width: 30%; */
}

.item {
    display: flex;
    flex-wrap: wrap;
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

@media(min-width: 750px) {
    .card_All{
        border-left: 1px solid #aaaaaa;
        border-right: 1px solid #aaaaaa;
    }
}
</style>
