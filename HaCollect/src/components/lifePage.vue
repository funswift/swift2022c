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
                    <router-link to="/event">イベント</router-link>
                </li> 
                <li>
                    <router-link class="nowPage" to="/life">くらし</router-link>
                    <hr color="#4c9eeb" size="5px">
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
        <div class="infomation">
            <li>
                <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BENuvqIvC-6/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/BENuvqIvC-6/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BENuvqIvC-6/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Blessyou🕊️(@blessyou_2000)がシェアした投稿</a></p></div></blockquote>
                <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">急用で地元に帰ってました。<br><br>色々とありましたとさっ。<a href="https://twitter.com/hashtag/%E3%83%87%E3%83%8B%E3%83%A0?src=hash&amp;ref_src=twsrc%5Etfw">#デニム</a>　<a href="https://twitter.com/hashtag/%E3%83%A6%E3%83%8B%E3%82%AF%E3%83%AD?src=hash&amp;ref_src=twsrc%5Etfw">#ユニクロ</a>　<a href="https://twitter.com/hashtag/%E3%82%AB%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB?src=hash&amp;ref_src=twsrc%5Etfw">#カジュアル</a>　<a href="https://twitter.com/hashtag/%E3%83%A1%E3%83%B3%E3%82%BA?src=hash&amp;ref_src=twsrc%5Etfw">#メンズ</a>　<a href="https://twitter.com/hashtag/%E3%82%B3%E3%83%BC%E3%83%87?src=hash&amp;ref_src=twsrc%5Etfw">#コーデ</a>　<a href="https://twitter.com/hashtag/%E3%83%95%E3%82%A1%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ファッション</a>　<a href="https://twitter.com/hashtag/%E7%A7%8B?src=hash&amp;ref_src=twsrc%5Etfw">#秋</a>　<a href="https://twitter.com/hashtag/%E6%97%85%E8%A1%8C?src=hash&amp;ref_src=twsrc%5Etfw">#旅行</a>　<a href="https://twitter.com/hashtag/%E5%9C%B0%E5%85%83?src=hash&amp;ref_src=twsrc%5Etfw">#地元</a>　<a href="https://twitter.com/hashtag/%E5%87%BD%E9%A4%A8?src=hash&amp;ref_src=twsrc%5Etfw">#函館</a> <a href="https://t.co/TJ6Kgn55tC">pic.twitter.com/TJ6Kgn55tC</a></p>&mdash; かば@デニムスタイル (@kaba_gon_ootd) <a href="https://twitter.com/kaba_gon_ootd/status/1577636540540366848?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FLoiseau.par.Matsunaga%2Fposts%2Fpfbid0gkFC5oFRv3m7uEURPoDXLdaTaQFVkr6vgdPMchE2k25UheuGN5x2c6MxfTqjnpvEl&show_text=true&width=500" width="500" height="667" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@ainarenove/video/7151187531571252481" data-video-id="7151187531571252481" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@ainarenove" href="https://www.tiktok.com/@ainarenove?refer=embed">@ainarenove</a> 函館市東山にある新築平家をご紹介！！ <a title="お部屋探し" target="_blank" href="https://www.tiktok.com/tag/%E3%81%8A%E9%83%A8%E5%B1%8B%E6%8E%A2%E3%81%97?refer=embed">#お部屋探し</a> <a title="housetour" target="_blank" href="https://www.tiktok.com/tag/housetour?refer=embed">#Housetour</a> <a title="リノベーション" target="_blank" href="https://www.tiktok.com/tag/%E3%83%AA%E3%83%8E%E3%83%99%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3?refer=embed">#リノベーション</a> <a title="ルームツアー" target="_blank" href="https://www.tiktok.com/tag/%E3%83%AB%E3%83%BC%E3%83%A0%E3%83%84%E3%82%A2%E3%83%BC?refer=embed">#ルームツアー</a> <a title="不動産" target="_blank" href="https://www.tiktok.com/tag/%E4%B8%8D%E5%8B%95%E7%94%A3?refer=embed">#不動産</a> <a title="賃貸" target="_blank" href="https://www.tiktok.com/tag/%E8%B3%83%E8%B2%B8?refer=embed">#賃貸</a> <a title="家" target="_blank" href="https://www.tiktok.com/tag/%E5%AE%B6?refer=embed">#家</a> <a title="家作り" target="_blank" href="https://www.tiktok.com/tag/%E5%AE%B6%E4%BD%9C%E3%82%8A?refer=embed">#家作り</a> <a title="引越し" target="_blank" href="https://www.tiktok.com/tag/%E5%BC%95%E8%B6%8A%E3%81%97?refer=embed">#引越し</a> <a title="物件紹介" target="_blank" href="https://www.tiktok.com/tag/%E7%89%A9%E4%BB%B6%E7%B4%B9%E4%BB%8B?refer=embed">#物件紹介</a> <a title="一戸建て" target="_blank" href="https://www.tiktok.com/tag/%E4%B8%80%E6%88%B8%E5%BB%BA%E3%81%A6?refer=embed">#一戸建て</a> <a title="モデルハウス" target="_blank" href="https://www.tiktok.com/tag/%E3%83%A2%E3%83%87%E3%83%AB%E3%83%8F%E3%82%A6%E3%82%B9?refer=embed">#モデルハウス</a> <a title="内覧" target="_blank" href="https://www.tiktok.com/tag/%E5%86%85%E8%A6%A7?refer=embed">#内覧</a> <a title="デザイナーズマンション" target="_blank" href="https://www.tiktok.com/tag/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%8A%E3%83%BC%E3%82%BA%E3%83%9E%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3?refer=embed">#デザイナーズマンション</a> <a target="_blank" title="♬ blue men (サビ) - Mega Shinnosuke" href="https://www.tiktok.com/music/blue-men-サビ-7007680785847175169?refer=embed">♬ blue men (サビ) - Mega Shinnosuke</a> </section> </blockquote>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02rQpWYsQRojN2EMw1Pys44U2SW25yqJ3HxAVCnj1c8rs6bijUuvPdJJN7fT9D14uFl%26id%3D104507731075672&show_text=true&width=500" width="500" height="530" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">昨日は🎉<br>北海道教育大学附属函館中学校の<br>皆様の前でネタをやらさせて頂きました！<br><br>彼らの中学生活のmemoryに少しでも<br>刻まれたら嬉しいなって。そう思います。 <a href="https://t.co/UyE1eACaba">pic.twitter.com/UyE1eACaba</a></p>&mdash; スクランブル だいき (@scrambledaiki) <a href="https://twitter.com/scrambledaiki/status/1583281481639944192?ref_src=twsrc%5Etfw">October 21, 2022</a></blockquote>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@bratshakodate/video/7062530203490274562" data-video-id="7062530203490274562" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@bratshakodate" href="https://www.tiktok.com/@bratshakodate?refer=embed">@bratshakodate</a> <a title="感情的なプリズムダンス" target="_blank" href="https://www.tiktok.com/tag/%E6%84%9F%E6%83%85%E7%9A%84%E3%81%AA%E3%83%97%E3%83%AA%E3%82%BA%E3%83%A0%E3%83%80%E3%83%B3%E3%82%B9?refer=embed">#感情的なプリズムダンス</a> <a title="春物新作" target="_blank" href="https://www.tiktok.com/tag/%E6%98%A5%E7%89%A9%E6%96%B0%E4%BD%9C?refer=embed">#春物新作</a><a title="レディース" target="_blank" href="https://www.tiktok.com/tag/%E3%83%AC%E3%83%87%E3%82%A3%E3%83%BC%E3%82%B9?refer=embed">#レディース</a><a title="ファッション" target="_blank" href="https://www.tiktok.com/tag/%E3%83%95%E3%82%A1%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3?refer=embed">#ファッション</a><a title="服" target="_blank" href="https://www.tiktok.com/tag/%E6%9C%8D?refer=embed">#服</a><a title="プチプラ" target="_blank" href="https://www.tiktok.com/tag/%E3%83%97%E3%83%81%E3%83%97%E3%83%A9?refer=embed">#プチプラ</a><a title="函館" target="_blank" href="https://www.tiktok.com/tag/%E5%87%BD%E9%A4%A8?refer=embed">#函館</a><a title="メガドンキホーテ" target="_blank" href="https://www.tiktok.com/tag/%E3%83%A1%E3%82%AC%E3%83%89%E3%83%B3%E3%82%AD%E3%83%9B%E3%83%BC%E3%83%86?refer=embed">#メガドンキホーテ</a><a title="brats函館店" target="_blank" href="https://www.tiktok.com/tag/brats%E5%87%BD%E9%A4%A8%E5%BA%97?refer=embed">#Brats函館店</a> <a target="_blank" title="♬ WA DA DA - Kep1er" href="https://www.tiktok.com/music/WA-DA-DA-7046584056095442945?refer=embed">♬ WA DA DA - Kep1er</a> </section> </blockquote>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdesign.plus.hakodate%2Fposts%2Fpfbid02LQzb6AiqwyMs8itjJyi3ZobQiHnwEmJBbvUQNrF7z4QbSvGBWh4aS7ru6mdcy8r6l&show_text=true&width=500" width="500" height="652" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Cj9eIL7rIIq/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/Cj9eIL7rIIq/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/Cj9eIL7rIIq/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">古着屋ハンバーグカフェ®(@hamburgcafe)がシェアした投稿</a></p></div></blockquote>
            </li>
        </div>
    </div>
</template>



<script>
export default {
    name: "lifePage",
};
</script>



<style scoped>
.infomation {
    margin-left: 30px;
    margin-right: 100px;

}
.infomation li {
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
}

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
</style>
