# firebase 相關

## 範例教學

https://youtu.be/4d-gIPGzmK4

## 同學報告

### https://hackmd.io/PEuwxycnRA6oDXsvGHc-4w

## 專案中 Time Stemp 取法

time.textContent = el.data().createdTime.toDate().toString().slice(0,24);

## 專案結束老師分享

Firebase Cloud Firestore tips:

1. Document 的 Id 應多使用 `Random Id`。
2. 適當的重複資料，會提高 Read Data 的效率。但要考慮改動的頻率， `改動頻率太高則不太適合重複資料`。
3. 善用 Collection - Document - Collection 可以無限制增加的特性，除非是要大家共享的資料，否則可以考慮 Bind 在 User 底下
4. Value 欄位如果是 Array 或是 Dictionary 的形式，就不能透過 Firebase 做 query，要想辦法克服這件事。
Ex:
	- Turn Array to Collection
	- Create a extra key-value pair for searching functionality.
5. 可以 `重複利用 User 的 Random ID`，用以建立同一個使用者的資料，方便搜尋。
6. 多重條件的 Query，有時候 Firebase 並不支援，可以透過 新增 Index (索引) 的規則，讓 Firebase 支援這個條件的 Query。
