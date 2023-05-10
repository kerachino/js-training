import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

const convertData = (input) => {
  return input.map(([name, count]) => ({//inputのname, countを仮引数
    name,//name:name 省略されてて、こう書ける
    count,//count:count
  }));
};
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
