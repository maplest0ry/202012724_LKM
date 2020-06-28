# 202012724-LKM 이규민

## update List
6/29 final 과제

## 설치

``` 
npm install sequelize
npm install mysql
```


##  Contents


|       항목       |     URL     | Metho  |
| :--------------: | :---------: | :----: |
| [국가 리스트](#국가-정보-리스트) |  /countrys   |  GET   |
|  [국가 상세 정보](#국가-상세-정보)  | /countrys/id |  GET   |
|    [국가 추가](#국가-추가)     |  /countrys/add   |  POST  |
|    [국가 수정](#국가-수정)     |  /countrys/edit/id   |  POST   |
|    [국가 삭제](#국가-삭제)     | /countrys/delete/id | POST |

---

### 국가 리스트

#### 요청

|    업무     | 국가 정보 리스트 |
| :---------: | ---------------- |
|     URL     | /countrys         |
|   URL 예    | /countrys         |
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
|     URL     | /countrys/id      | ID : 국가 id |
|   URL 예    | /countrys/1       |              |
| 요청 메소드 | GET              |             |


##### 응답 메세지

```  json
 {
            "id": 1,
            "countrys": "미국",
            "capital": "워싱턴 D.C",
            "language": "영어",
        }
```

------

### 국가 추가

#### 요청

|    업무     | 국가 추가 |
| :---------: | ---------------- |
|     URL     | /countrys/add         |
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
|     URL     | /countrys/edit/id         |
|   URL 예    | /countrys/edit/1         |
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
|     URL     | /countrys/delete/ID      | ID : 국가 ID |
|   URL 예    | /countrys/delete/2      |              |
| 요청 메소드 | POST           |              |


##### 응답 메세지 예

```  json
{
    "msg": "Deleted countrys",
    "data": 2
}
```


###reference 
202012703-MKJ
https://github.com/IDU-SW/202012703-MKJ
