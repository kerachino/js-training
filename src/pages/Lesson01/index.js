import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

const convertData = (input) => {
  /*return input.map(([name, count]) => ({//inputのname, countを仮引数
    name,//name:name 省略されてて、こう書ける
    count,//count:count
  }));*/

  /*
  const f = ([a,b]) => ({
    name:a,
    count:b,
  })
  console.log(input.map(f));
  return input.map(f);
  */

  /*//オブジェクトショートハンド
  const f = (row) => ({
    name:row[0],
    count:row[1],
  })
  console.log(input.map(f));
  return input.map(f);*/

  //functionを使って
  function f(row){
    const a = {
      name:row[0],
      count:row[1]
    }//{[]} []内がプロパティ,nameなどがプロパティ名、
    //全体{}がオブジェクト
    return a;
    //※return a, bb;最後(bb)しか返せない

  }
  console.log(input.map(f));
  return input.map(f);
};
//mapは関数を受け取るメソッド、新しい配列を生成するもの
/*
const f = (row) => ({
  row.name,
  row.count,
})

const f = ([name, count]) => ({
  name,
  count,
})
coust ans = input.map(f);
fがcallbackFn, arrがinput, ansが
*/
/*
inputをmapする。
nameとcountを1要素ずつ見ていく(foreachみたいなやつ)
=>の先が
※{}は[]と同じ
*/

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
