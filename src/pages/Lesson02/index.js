import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  input.sort((item1, item2) => item2.count - item1.count);
  //sort以降の()はコールバック関数)
  //(item1, item2)は仮に置いてるだけ、sortでの-は矢印で今回は大きいのから小さいの順に並べる=降順にする
  return input.slice(0, 20);//0~20を表示
  //末尾10個 input.slice(input.length-10, input.length);//0~20を表示
};
/*
function compareFn(a, b) {
  if (ある順序の基準において a は b より小さい) {
    return -1;
  }
  if (その順序の基準において a は b より大きい) {
    return 1;
  }
  // a は b と等しくなければならない
  return 0;
}
*/
const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
