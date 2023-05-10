import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  const species = Array.from(new Set(input.map(({ species }) => species)));
  //setは重複をなくす、Array.fromで配列を作っている
  return species.map((species) => {//mapの中のspeciesは仮引数 species=species(mapの前の)となる
    return {//単純に=>は関数に入るものだから必要
      id: species,
      data: input
        .filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
