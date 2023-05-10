import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  input.sort((item1, item2) => item2.count - item1.count);
  //(item1, item2)は仮に置いてるだけ、sortでの-は矢印で今回は大きいのから小さいの順に並べる=降順にする
  return input.slice(0, 20);//0~20を表示
};

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
