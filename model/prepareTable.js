
const conn = require('./dbConnection');

exports.prepareTable = () => {
    const sql = 'drop table if exists example.country; CREATE TABLE example.country ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), language VARCHAR(50), capital VARCHAR(50));';
    conn.query(sql).then(ret => {
        console.log('country 테이블 준비 완료');
        conn.end();
    }).catch(err => {
        console.log('country 테이블 준비 실패 :', err);
        conn.end();
    });
} 
