# stylish 相關

## 範例程式碼

1. 程式碼:
https://github.com/AppWorks-School/Stylish-Web
2. 實際網址:
https://api.appworks-school.tw/

## 專案過程心得

1. 排版 ( Rita ):

- Menu
Menu 的部分是直接電腦和手機版本各用一組
電腦版時手機的就先隱藏起來
手機版時換電腦的隱藏
( 因為覺得擺放的位置差的有點多如果共用一組感覺要調很大 :joy: )
- Footer
另外卡超久的底部則是外層用一個 div 包起來用 Flexbox 大絕 ~~
裡面也分別用 3 個 div 包起來 (如圖
--區塊排版的部分--
當電腦版的時候順順的橫向排
當手機版的時候
把 3 的那個區塊 ( copyright ) 的 div 設定寬度 100%
這時候他就會被擠到換行
是參考這個的做法（https://stackoverflow.com/questions/29732575/how-to-specify-line-breaks-in-a-multi-line-flexbox-layout）
1 和 2 的區塊則用 flex-grow 的屬性去抓大概 3 ~ 4 : 1 的比例
就可以像圖上面的比例
然後再針對 1 裡面去調整 margin 讓他接近想要的位置
( 跟設計圖好像還是有差距，但暫時想不到其他好解法 :persevere: 跪求更好解法
- 選單的部分
電腦版的時候是直接用 Flexbox 的 flex-direction : row 讓他橫向排列
手機版的時候則是把分隔線的槓槓直接隱藏掉
接著改成用 flex-direction : column 讓它直的排列
他高度不夠的時候就會擠到換行

2. week1 part4:

- a. 座標定義 https://andyyou.github.io/2017/01/31/understand-coordinate-of-dom/
- b. (圖中A.B) 動態取得相對於目前視窗座標軸上，元件座標位置: ```document.getElementsByClassName('container-5')[0].getBoundingClientRect().bottom;``` (或.top)
https://juejin.im/entry/59c1fd23f265da06594316a9?fbclid=IwAR1j1TZ7TWBkqipedDJMi5EDLj3v9ZEdI9WHnrZ34ZAEGmM8G4A7NNqwhps
- c. (圖中C) 動態取得目前scroll bar捲動長度，可直接使用範例程式碼。: 引入事件監聽函數，隨時可取得當下位置y座標 scroll_pos，或自己一次性使用window.scrollY
https://developer.mozilla.org/zh-TW/docs/Web/API/Document/scroll_event
- d. (圖中D) 取得瀏覽器當下視窗高度: window.innerHeight
https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/294280/
- e. (圖中E) 靜態取得網頁總高度: document.body.clientHeight
https://blog.csdn.net/china_skag/article/details/30512877

3. week2 part2:

a. 依照圖片 id，設定該圖的超連結網址為 http://自己的網址/stylish/product.html?id=201807202140
b. index 點擊圖 ，index 偵測到點擊事件，跳轉到 product
c. product 頁面，用函數先抓出問號後面的 id 值 and 設定渲染畫面的 ajax url 網址


關於如何抓出 id 後面的值可參考以下網站
https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

4. week3 part2:

用 AJAX 送 Data 給 Server。白話的說明方便理解，有誤請再跟我說
觀念:
a. 方法要用 post 。```xhr.open('GET', src);``` 換成 ```xhr.open('POST', src);```
b. 之後還要設定給 server 看的標頭檔 header ，需要使用 ```xhr.setRequestHeader('Content-type', 'application/json'); ```，server 看標頭檔會大概知道這裡面是甚麼東西。
c. 之後將我們的物件 stringfy 後送出 ```xhr.send(stringfiedObj); ```，也回收 server 傳給我們的數字 ( 200 或 201 ) 及 JSON 資料

d. 回收的數字，意義可參考以下。在 Week 3 Part 2 ，會回收到 200 。


實作 code 參考 :
a. https://gist.github.com/EtienneR/2f3ab345df502bd3d13e
b. https://www.quora.com/What-is-the-way-to-send-a-JSON-object-via-a-POST-request-in-JavaScript-not-jQuery-or-Nodejs
數字意義 :
https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status
中文深入說明 :
https://segmentfault.com/a/1190000004322487 
