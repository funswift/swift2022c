<template>
    <div class="header-inner2">
        <nav class="header-nav">
            <ul class="header-navList">
                <li>
                    <router-link to="/">ホーム</router-link>
                </li>
                <li>
                    <router-link class="nowPage" to="/eat">ごはん</router-link>
                    <hr color="#4c9eeb" size="5px">
                </li>
                <li>
                    <router-link to="/tour">観光</router-link>
                </li>
                <li>
                    <router-link to="/event">イベント</router-link>
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
        <div class="infomation">
            <li>
                <blockquote class="twitter-tweet" ><p lang="ja" dir="ltr">＼✅2日間連続開催／<br>【函館港店限定】明日22日は生姜焼き定食が、明後日23日はカツ丼がワンコイン（500円）で食べられちゃうわよ🍚 期間限定メニューがお得に食べられるチャンスだから、ぜひ食べに来てね😊<a href="https://twitter.com/hashtag/%E3%81%94%E3%81%AF%E3%82%93%E3%81%A9%E3%81%8D?src=hash&amp;ref_src=twsrc%5Etfw">#ごはんどき</a> <a href="https://twitter.com/hashtag/%E3%81%94%E3%81%AF%E3%82%93%E3%81%A9%E3%81%8D%E3%81%8A%E5%BE%97%E6%83%85%E5%A0%B1?src=hash&amp;ref_src=twsrc%5Etfw">#ごはんどきお得情報</a> <a href="https://t.co/7Yr4Occ76h">pic.twitter.com/7Yr4Occ76h</a></p>&mdash; となりの🍚ごはんちゃん (@gohandoki_chan) <a href="https://twitter.com/gohandoki_chan/status/1583337536201494529?ref_src=twsrc%5Etfw">October 21, 2022</a></blockquote>
                <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Cjt-8H1j0Gt/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/Cjt-8H1j0Gt/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/Cjt-8H1j0Gt/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">北海道じゃらん【公式】(@hokkaido_jalan)がシェアした投稿</a></p></div></blockquote>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ft.hakodate%2Fposts%2Fpfbid029F3qUWEt6E5stiDjxAh6zS5W7nzd7dcMJ2Xc8Wo9s6QjKLouomxnEwq9ad6Edyv4l&show_text=true&width=500" width="500" height="696" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>                
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@kyonogohan_bydoan/video/7124521202625809666" data-video-id="7124521202625809666" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@kyonogohan_bydoan" href="https://www.tiktok.com/@kyonogohan_bydoan?refer=embed">@kyonogohan_bydoan</a> 北海道函館グルメ〜　<a title="今日のご飯" target="_blank" href="https://www.tiktok.com/tag/%E4%BB%8A%E6%97%A5%E3%81%AE%E3%81%94%E9%A3%AF?refer=embed">#今日のご飯</a> <a title="グルメ" target="_blank" href="https://www.tiktok.com/tag/%E3%82%B0%E3%83%AB%E3%83%A1?refer=embed">#グルメ</a> <a title="北海道グルメ" target="_blank" href="https://www.tiktok.com/tag/%E5%8C%97%E6%B5%B7%E9%81%93%E3%82%B0%E3%83%AB%E3%83%A1?refer=embed">#北海道グルメ</a> <a title="函館グルメ" target="_blank" href="https://www.tiktok.com/tag/%E5%87%BD%E9%A4%A8%E3%82%B0%E3%83%AB%E3%83%A1?refer=embed">#函館グルメ</a>　<a title="japanfood" target="_blank" href="https://www.tiktok.com/tag/japanfood?refer=embed">#japanfood</a> <a title="kyonogohan_bydoan" target="_blank" href="https://www.tiktok.com/tag/kyonogohan_bydoan?refer=embed">#kyonogohan_bydoan</a> <a target="_blank" title="♬ Ghibli system. A sad and beautiful ballad(87172) - 朝木春美千" href="https://www.tiktok.com/music/Ghibli-system-A-sad-and-beautiful-ballad-87172-6839378849520683010?refer=embed">♬ Ghibli system. A sad and beautiful ballad(87172) - 朝木春美千</a> </section> </blockquote>
                <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CjwsL0ULRFM/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CjwsL0ULRFM/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CjwsL0ULRFM/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">河崎 智範(@tomonorikawasaki)がシェアした投稿</a></p></div></blockquote>
                <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">今日の朝は朝マックでした。<br>お昼はセイコマートのカツ丼でした😌540円ですが、まあまあ美味しいですよね😂 <a href="https://t.co/vfutK20b5I">pic.twitter.com/vfutK20b5I</a></p>&mdash; 函館×独身男のご飯日記😋 (@716vkqOvYYcuVq4) <a href="https://twitter.com/716vkqOvYYcuVq4/status/1583295626288431105?ref_src=twsrc%5Etfw">October 21, 2022</a></blockquote>
                <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ミスドで朝ごはん！<br>函館価格の4つで396円 <a href="https://t.co/6bqkwXGIzT">pic.twitter.com/6bqkwXGIzT</a></p>&mdash; いたや (@AKAIWA8095D) <a href="https://twitter.com/AKAIWA8095D/status/1583255843482800128?ref_src=twsrc%5Etfw">October 21, 2022</a></blockquote>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@___ksdayo/video/7069688140604247322" data-video-id="7069688140604247322" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@___ksdayo" href="https://www.tiktok.com/@___ksdayo?refer=embed">@___ksdayo</a> うにいくら蟹のどんぶりは最高すぎた✨<a title="雲丹いくらカニ丼" target="_blank" href="https://www.tiktok.com/tag/%E9%9B%B2%E4%B8%B9%E3%81%84%E3%81%8F%E3%82%89%E3%82%AB%E3%83%8B%E4%B8%BC?refer=embed">#雲丹いくらカニ丼</a>  <a title="函館グルメ" target="_blank" href="https://www.tiktok.com/tag/%E5%87%BD%E9%A4%A8%E3%82%B0%E3%83%AB%E3%83%A1?refer=embed">#函館グルメ</a> <a title="北海道旅行" target="_blank" href="https://www.tiktok.com/tag/%E5%8C%97%E6%B5%B7%E9%81%93%E6%97%85%E8%A1%8C?refer=embed">#北海道旅行</a> <a title="朝市" target="_blank" href="https://www.tiktok.com/tag/%E6%9C%9D%E5%B8%82?refer=embed">#朝市</a> <a target="_blank" title="♬ Solo piano of nursery rhyme &#34;Yuki&#34; (Yukiya Konko)(1108442) - Akira Orihata" href="https://www.tiktok.com/music/Solo-piano-of-nursery-rhyme-Yuki-Yukiya-Konko-1108442-7021207894042118146?refer=embed">♬ Solo piano of nursery rhyme &#34;Yuki&#34; (Yukiya Konko)(1108442) - Akira Orihata</a> </section> </blockquote>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@momomomomo4545/video/7142737999481081090" data-video-id="7142737999481081090" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@momomomomo4545" href="https://www.tiktok.com/@momomomomo4545?refer=embed">@momomomomo4545</a> <a title="北海道" target="_blank" href="https://www.tiktok.com/tag/%E5%8C%97%E6%B5%B7%E9%81%93?refer=embed">#北海道</a> <a title="函館" target="_blank" href="https://www.tiktok.com/tag/%E5%87%BD%E9%A4%A8?refer=embed">#函館</a><a title="函館朝市" target="_blank" href="https://www.tiktok.com/tag/%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82?refer=embed">#函館朝市</a><a title="活イカ踊り丼" target="_blank" href="https://www.tiktok.com/tag/%E6%B4%BB%E3%82%A4%E3%82%AB%E8%B8%8A%E3%82%8A%E4%B8%BC?refer=embed">#活イカ踊り丼</a> <a title="イカ" target="_blank" href="https://www.tiktok.com/tag/%E3%82%A4%E3%82%AB?refer=embed">#イカ</a> <a target="_blank" title="♬ 売れたいエモーション_音源使って - さわりん。" href="https://www.tiktok.com/music/売れたいエモーション音源使って-7071569304227040002?refer=embed">♬ 売れたいエモーション_音源使って - さわりん。</a> </section> </blockquote>
                <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">干し貝柱入荷しました😊そのまま食べてもOK！炊き込みご飯にもいいですよっ😊 <a href="https://t.co/MHs6YjuWD5">pic.twitter.com/MHs6YjuWD5</a></p>&mdash; ㈱広海（ひろみ）水産🦀函館朝市ひろば内 (@hiromisuisan) <a href="https://twitter.com/hiromisuisan/status/1583230878901481472?ref_src=twsrc%5Etfw">October 20, 2022</a></blockquote>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdanshakuclub%2Fposts%2Fpfbid0XDRWtf9AfjJy8q3FcUkZU2oCQjw9wB4k2EiiKg7XgWGwbK31tXA23aZMtdHdnU7rl&show_text=true&width=500" width="500" height="742" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@gpunk10/video/7053459295945657601" data-video-id="7053459295945657601" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@gpunk10" href="https://www.tiktok.com/@gpunk10?refer=embed">@gpunk10</a> 函館のベイエリアにあるきくよ食堂で海鮮3色丼をいただきました。お店の定番メニューのカニクリームコロッケも美味しかった！<a title="北海道" target="_blank" href="https://www.tiktok.com/tag/%E5%8C%97%E6%B5%B7%E9%81%93?refer=embed">#北海道</a><a title="函館" target="_blank" href="https://www.tiktok.com/tag/%E5%87%BD%E9%A4%A8?refer=embed">#函館</a>#函館旅行<a title="海鮮" target="_blank" href="https://www.tiktok.com/tag/%E6%B5%B7%E9%AE%AE?refer=embed">#海鮮</a><a title="グルメ" target="_blank" href="https://www.tiktok.com/tag/%E3%82%B0%E3%83%AB%E3%83%A1?refer=embed">#グルメ</a><a title="きくよ食堂" target="_blank" href="https://www.tiktok.com/tag/%E3%81%8D%E3%81%8F%E3%82%88%E9%A3%9F%E5%A0%82?refer=embed">#きくよ食堂</a><a title="japan" target="_blank" href="https://www.tiktok.com/tag/japan?refer=embed">#japan</a><a title="観光" target="_blank" href="https://www.tiktok.com/tag/%E8%A6%B3%E5%85%89?refer=embed">#観光</a> <a target="_blank" title="♬ Nachos - FASSounds" href="https://www.tiktok.com/music/Nachos-6992142765844875265?refer=embed">♬ Nachos - FASSounds</a> </section> </blockquote>



            </li>
        </div>
    </div>
</template>



<sc>
export default {
    name: "eatPage",
};
</sc>



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
    margin-left: 30px;
    margin-right: 100px;

}

.infomation li {
    display: grid;
    grid-gap: 80px;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
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
