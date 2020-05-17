// // npm install mysql mysql2는 mysql모듈 호환 + Promise 지원

// const mysql = require('mysql2'); //모듈사용

// // 커넥션 설정(Config)
// // const dbConfig = {
// //     host         : 'localhost', // host, port : DMBS 주소와 포트(기본 3306)
// //     user         : 'dev', // user, password : DBMS 사용자 계정과 암호
// //     password     : 'secret',
// //     database     : 'example' // database : 데이터베이스 이름
// //     // multipleStatements : 동시에 여러 SQL 실행. 기본 false. 보안에 주의
// //     // connectTimeout : DBMS 연결 타임 아웃 시간. 기본은 10,000 ms
// //  };
// const fs = require('fs')
// const config = fs.readFileSync('./dbConfig.json'); 
// const dbConfig = JSON.parse(config);
// const conn = mysql.createConnection(dbConfig).promise();
// //  callback 기반
// //  conn.connect( (err) => { if (err) { //  connect : 연결하기
// //     console.error('error connecting: ' + err.stack);
// //     return; }
// //     console.log('connected as id ' + conn.threadId);
// //     conn.end(); }); //  end : 연결 종료하기
// // //  query : SQL문 실행. (커넥션 자동 연결)

// //promise 기반
// // conn.connect().then(ret => { console.log('DB 연결 성공'); conn.end();
// // }).catch(err => {
// // console.log('DB 연결 실패', err);
// // });

// // 커넥션 풀
// // 다수의 커넥션 관리 기법
// // 풀에서 커넥션 얻어서 사용
// // 사용이 끝난 커넥션은 풀에 반납 
// //https://ko.wikipedia.org/wiki/연결_풀
// // 커넥션 풀 생성 함수
// // mysql.createPool(Option)

// // 커넥션 풀 생성, 옵션
// // const pool = mysql.createPool({
// //      host : 'localhost', 
// //      user : 'dev', 
// //      password : 'secret',
// //      connectionLimit : 50 //connectionLimit : 최대 커넥션 개수. 기본 10개
// //      // waitForConnections : 풀에 여유 커넥션이 없는 경우 대기 여부 
// // });

// // 커넥션 풀 생성 - 프라미스 기반
// const pool = mysql.createPool(dbConfig).promise();


// // 커넥션 풀 사용하기 - 콜백
// // getConnection(CALLBACK) //풀에서 커넥션 얻기
// // release(); //커넥션 풀에 커넥션 반환하기. 중요!
// // end(); //커넥션 풀 닫기

// // 커넥션 풀 사용하기 - 콜백
// // 커넥션 얻기, 사용, 반환 코드
// // pool.getConnection( (err, conn) => { // 커넥션 사용하기
// //     conn.query('SELECT 1;', (err, ret) => { console.log('ret:', ret[0]);
// //     // 커넥션 풀에 커넥션 반환
// //     conn.release(); });
// //     });

// // 커넥션 풀 사용하기 - 프라미스
// // pool.getConnection().then(conn => { conn.query('SELECT 2;').then( ret => {
// //     console.log('query result:', ret[0]); })
// //     .catch( err => {
// //     console.log('query error:', err);
// //     }) }).catch(err => {
// //     console.log('connection error:', err); });

// // 커넥션 풀 사용하기 - 프라미스 체인
// pool.getConnection().then(conn => { return conn.query('SELECT 3;')
// })
// .then( ret => {
// console.log('query result:', ret[0]); })
// .catch(err => { console.log('error:', err);
// });

// // 커넥션 풀 사용하기 - async/await
// // await 함수에 작성
// // 프라미스 기반의 커넥션 풀
// // try {
// // const conn = await pool.getConnection(); 
// // const ret = await conn.query('SELECT 4;'); 
// // conn.release();
// // console.log('query result:', ret[0]);
// // } catch (error) { 
// //     console.log('error:', error);
// // }
// module.exports = pool;