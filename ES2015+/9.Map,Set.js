const m = new Map();

m.set("a", "b");
m.set(3, "c");
const d = {};
m.set(d, "e");

m.get(d); // get(키)로 속성값 조회
console.log(m.get(d)); // e

m.size; // size로 속성 개수 조회
console.log(m.size); // 3

for (const [k, v] of m) {
    // 반복문에 바로 넣어 사용 가능
    console.log(k, v); // 'a', 'b', 3, 'c', {}, 'e'
} // 속성 간의 순서도 보장됩니다.

m.forEach((v, k) => {
    // forEach도 사용 가능
    console.log(k, v); // 결과는 위와 동일
});

m.has(d); // has(키)로 속성 존재 여부를 확인
console.log(m.has(d)); // true

m.delete(d); // delete(키)로 속성을 삭제
m.clear(); //  clear()로 전부 제거
console.log(m.size); // 0

//////////////////////////////////////////
// set

const s = new Set();
s.add(false); // add(요소)로 Set에 추가
s.add(1);
s.add("1");
s.add(1); // 중복이라 무시
s.add(2);

console.log(s.size); // 중복이 제거되어 4

s.has(1); // has(요소)로 요소 존재 여부 확인
console.log(s.has(1)); // true

for (const a of s) {
    console.log(a); // false 1 '1' 2
}

s.forEach((a) => {
    console.log(a); // false 1 '1' 2
});

s.delete(2); // delete(요소)로 요소를 제거
s.clear(); // clear()로 전부 제거합니다.
