import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";
import instruction from "./instruction.md";

const convertData = (input) => {
  //return input.filter((item) => item.gender === "男性");//男性のみ表示
  
  
  /*let array = [];
  for(let i=0; i< input.length; i++){
    if(input[i].gender === "男性"){
      array.push(input[i]);
    }
  }
  console.log(array);
  return array;*/

  let array = [];
  for(const item of input){
    if(item.gender === "男性"){
      array.push(item);
    }
  }
  console.log(array);
  return array;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer03"
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      instruction={instruction}
      title="Lesson 03"
      Chart={Chart}
    />
  );
};

export default Lesson;
