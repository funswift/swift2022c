<template>
    <header>
        <div class="header-inner">
            <a>
                <router-link to="/">
                    <img class="header-logoImg" src="./assets/HaCollectLogoText.png">
                </router-link>
            </a>

            <form action="/searchResult" method="get" id="form">
                <input type="text" name="searchName" class="searchArea" placeholder="知りたい情報は何ですか？">
            </form>
        </div>
    </header>
    <router-view></router-view>
</template>

<script>

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 80px;
}

body {
    display: block;
    margin: 8px 0;
}

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

header {
    background-color: #f5af5a;
    position: fixed;
    /* 要素を画面内で固定する */
    top: 0;
    /* 固定する基準を一番上に */
    left: 0;
    /* 固定する基準を一番左に */
    z-index: 100;
    /* 要素の重なりを指定 */
    width: 100%;
    /* 固定した要素は浮いた状態になるので、横幅100%にする */
    height: 80px;
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    margin: 0 auto;
}

.header-logo {
    display: flex;
    align-items: center;
    text-decoration-line: none;
}

.header-logoImg {
    display: block;
    /* 扱いやすいようにblock要素にする */
    width: 200px;
    /* 横幅を任意の大きさに調整 */
    margin-top: 10px;
}

.searchArea {
    width: 560px;
    /* inputの幅           */
    height: 35px;
    background-image: url("./assets/mushimegane.png");
    /* 背景画像：虫眼鏡(*1)*/
    background-repeat: no-repeat;
    /* 背景は繰り返さない  */
    background-position: 8px center;
    /* 背景の位置          */
    background-size: auto 60%;
    /* 背景のサイズ        */
    background-color: #fff;
    /* 背景色              */
    margin: 10px auto 0 auto;
    /* サンプルは中央寄せ  */
    padding-left: 30px;
    /* 虫眼鏡分の左余白    */
    border-radius: 6px;
    /* 角丸                */
    color: #555;
    /* 文字色              */
    font-size: 18px;
    /* フォントサイズ      */
    letter-spacing: 0.1em;
    /* 文字間隔            */
    font-weight: bold;
    /* 太字                */
    outline: 0;
    /* 入力薄枠を非表示    */
}

/*テキスト入力欄にフォーカスか来たとき*/
.searchArea:focus {
    background-color: #cfe7ff;
    /* フォーカス時背景色  */
}
</style>
    