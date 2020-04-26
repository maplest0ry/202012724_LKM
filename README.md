# 202012724 이규민

## 설치

``` 
npm install
```

##  Contents
- [국가 정보 리스트](#국가-정보-리스트)
- [국가 상세 정보](#국가-상세-정보)
- [국가 추가](#국가-추가)
- [국가 수정](#국가-수정)
- [국가 삭제](#국가-삭제)


|       항목       |     URL     | Method  |
| :--------------: | :---------: | :----: |
| 국가 정보 리스트 |  /country   |  GET   |
|  국가 상세 정보  | /country/id |  GET   |
|    국가 추가     |  /country   |  POST  |
|    국가 수정     |  /country   |  PUT   |
|    국가 삭제     | /country/id | DELETE |

---

### 국가 정보 리스트

#### 요청

|    업무     | 국가 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /country         |
|   URL 예    | /country         |
| 요청 메소드 | GET              |


##### 응답 메세지

```  json
{
    "data": [
        {
            "id": 0,
            "name": "대한민국",
            "language": "한국어",
            "capital": "서울"
        },
        {
            "id": 1,
            "name": "미국",
            "language": "영어",
            "capital": "워싱턴 D.C."
        },
        {
            "id": 2,
            "name": "일본",
            "language": "일본어",
            "capital": "도쿄"
        }
    ]
}
```

--------

### 국가 상세 정보

#### 요청

|    업무     | 국가 정보 리스트 |              |
| :---------: | ---------------- | ------------ |
|     URL     | /country/id      | ID : 국가 id |
|   URL 예    | /country/1       |              |
| 요청 메소드 | GET              |             |


##### 응답 메세지

```  json
 {
            "id": 1,
            "country": "미국",
            "capital": "워싱턴 D.C",
            "language": "영어",
        }
```

------

### 국가 추가

#### 요청

|    업무     | 국가 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /country         |
| 요청 메소드 | POST             |
| 콘텐츠 타입 | application/json |

##### 요청 메시지

``` json
{
    "id":4,
    "name": "캐나다",
    "language": "영어, 프랑스어",
    "capital": "오타와"
}
```

##### 응답 메세지

```  json
{
    "msg": "success",
    "data": {
    "id":4,
    "name": "캐나다",
    "language": "영어, 프랑스어",
    "capital": "오타와"
}
}
```

-------

### 국가 수정

#### 요청

|    업무     | 국가 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /country         |
|   URL 예    | /country         |
| 요청 메소드 | PUT              |
| 콘텐츠 타입 | application/json |

##### 요청 메시지

``` json
{
    "id":4,
    "name": "캐나다",
    "language": "영어, 프랑스어",
    "capital": "오타와"
}
```



##### 응답 메세지

```  json
{
    "id":4,
    "name": "캐나다",
    "language": "영어, 프랑스어",
    "capital": "오타와"
}

```

-----

### 국가 삭제

#### 요청

|    업무     | 국가 정보 리스트 |              |
| :---------: | ---------------- | ------------ |
|     URL     | /country/ID      | ID : 국가 ID |
|   URL 예    | /country/2      |              |
| 요청 메소드 | DELETE           |              |


##### 응답 메세지 예

```  json
{
    "msg": "Deleted country",
    "data": 2
}
```

