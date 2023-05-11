import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {
  const genders = Array.from(new Set(input.map(({ gender }) => gender)));
  //イメージは1つずつこのgenderはgender,2つめのgenderはgender...
  //mapは({x})で中身を引数としている。もし(x)なら、xのArrayを引数になる
  //setで重複がないか確認. mapを除くことはできないforeachの考えると..
  //※setはx = Array.from(set);のように省略も可
  //x=Setしたもの とすると"x=Set{0,1,2,3}" これにArray.from(または[...x])すると"x=[0,1,2,3]"
  //中身は[{id:1, key:a},{id:2, key:b}]のように[と{で成るので、{}を外して配列にするときはこれを使う
  const min = Math.round(Math.min(...input.map(({ y }) => y)));
  //...は展開する物　[...[1, 2, 3], 4, 5] は[1, 2, 3, 4, 5]になる　今回の入力では...は関係なし。{}はまとめるものだから、展開されても一つになればあってもなくても同じ意味
  //Math.minで配列の最小値, Math.roundは四捨五入
  //Math.min(...[1,2,3])つけないと実行できない
  const max = Math.round(Math.max(...input.map(({ y }) => y)));
  const bins = Array.from({ length: max - min + 1 }).map((_, i) => {
  //Array.from...のmapをしている。(これまではinput.map)
  //map(value,index)でindex(要素番号)は省略できる。{}で囲めば、valueを複数できる。
  //_はvalueを使わないから(分かりやすく書いている)
  //Array.fromで配列を作成(lengthがmax-min+1の)。これをmapする
  //つまり、まず[0,1,2,,,]とlengthまであるものの要素番号をmapのiで取得して使っている
    const obj = {
      bin: (min + i).toString(),
      // 'bin: ${min+i}';
    };
    //bin(という名前にしたオブジェクト、目標は[{"bin","name",,,}])だ)をobjに入れる
    for (const gender of genders) {
      obj[gender] = 0;//obj.genderで obj["男性"] = 0,,,となる //0で初期化
      //obj.gender はobj["gender"]と同じ意味(文字列で)
    }//for(変数 of 配列)
    //gendersの配列を1つずつ抜き出し、genderで呼び出し
    return obj;
  });

  for (const { y, gender } of input) {//上は配列だったが、この場合は{}をつけてオブジェクトをとる
    const i = Math.round(y) - min;//iが整数になる
    bins[i][gender] += 1;//
  }
  return bins;
};
//forEachは配列でしか使えない。for ofはなんでもできるが、添え字(何番目か)の処理はできない

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
