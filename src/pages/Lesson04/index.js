import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  const speciesSet = new Set();
  for(const item of input){
    speciesSet.add(item.species);
  }
  const species = Array.from(speciesSet);

  //Array.fromの代わりに、[...speciesSet]//イテラブルな物から配列を作るという意味

  //上を一行で書くと、const species = Array.from(new Set(input.map(({ species }) => species)));
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
//for ofの右側はイテラブル、setも、配列みたいなもの
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
