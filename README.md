# 202012724 이규민

## update List
5/3  frontEndView 추가
## 설치

``` 
npm install
```

##  Contents


|       항목       |     URL     | Metho  |
| :--------------: | :---------: | :----: |
| [국가 리스트](#국가-정보-리스트) |  /country   |  GET   |
|  [국가 상세 정보](#국가-상세-정보)  | /country/id |  GET   |
|    [국가 추가](#국가-추가)     |  /country/add   |  POST  |
|    [국가 수정](#국가-수정)     |  /country/edit/id   |  POST   |
|    [국가 삭제](#국가-삭제)     | /country/delete/id | POST |

---

### 국가 리스트

#### 요청

|    업무     | 국가 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /country         |
|   URL 예    | /country         |
| 요청 메소드 | GET              |

#### 응답

| 컨텐츠 타입 | JSON  |          |         |
| ----------- | ----- | -------- | ------- |
|             | data  | ID       | 인덱스  |
|             |       | name  | 국가명  |
|             |       | capital  | 수도    |
|             |       | language     | 언어    |

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

|    업무     | 국가 추가 |
| :---------: | ---------------- |
|     URL     | /country/add         |
| 요청 메소드 | POST             |
| 콘텐츠 타입 | application/json |
| 메세지 구조 | id          |
|             | name          |
|             | language             |
|             | capital         |

##### 요청 메시지

``` json
{
    "id":2,
    "name": "미국",
    "language": "영어",
    "capital": "워싱턴 D.C."
}
```

##### 응답 메세지

```  json
{
    "msg": "success",
    "data": {
        "id": 2,
        "name": "일본",
        "language": "일본어",
        "capital": "도쿄"
    }
}
```

-------

### 국가 수정

#### 요청

|    업무     | 국가 수정 |
| :---------: | ---------------- |
|     URL     | /country/edit/id         |
|   URL 예    | /country/edit/1         |
| 요청 메소드 | POST         |
| 콘텐츠 타입 | application/json |
| 메세지 구조 | id          |
|             | name          |
|             | language             |
|             | capital         |

##### 요청 메시지

``` json
{
    "id":2,
    "name": "미국",
    "language": "영어",
    "capital": "워싱턴 D.C."
}
```



##### 응답 메세지

```  json
{
    "id":2,
    "name": "미국",
    "language": "영어",
    "capital": "워싱턴 D.C."
}

```

-----

### 국가 삭제

#### 요청

|    업무     | 국가 삭제 |              |
| :---------: | ---------------- | ------------ |
|     URL     | /country/delete/ID      | ID : 국가 ID |
|   URL 예    | /country/delete/2      |              |
| 요청 메소드 | POST           |              |


##### 응답 메세지 예

```  json
{
    "msg": "Deleted country",
    "data": 2
}
```

