import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart07";
import answer from "./answer.md";

const convertData = (input) => {
  for (const item of input) {//itemは決まったもの //mapでも書ける
    //itemには{}内のもの(createrAt,text,isRetweer)が入っており、input数順番に繰り返す
    const d = new Date(`${item.createdAt} UTC`);
    //new Date(item.createdAt + 'UTC'); もOK
    //new Date()で現在の日時 バグが起きないようにもUTCはつけたほうが良さそう
    const year = d.getFullYear();
    //dateの年を代入
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    //月(0~11)を取得、padStartで2桁にする(1桁なら前に0をつける)
    const date = `${d.getDate()}`.padStart(2, "0");
    item.createdAt = `${year}-${month}-${date}`;
    //xxxx-xx-xx
  }
  const dates = Array.from(new Set(input.map(({ createdAt }) => createdAt)));
  dates.sort();//昇順
  //降順は　dates.sort((a, b) => b - a); 日付だとb.getTime() - a.getTime());こうなる。
  const count = { tweet: {}, retweet: {} };
  //countにオブジェクト作成
  for (const d of dates) {
    count.tweet[d] = 0; //は文字列で[]は変数//[""]とすれば文字列として
    count.retweet[d] = 0;
  }
  for (const { createdAt, isRetweet } of input) {//ここでyをカウント
    if (isRetweet) {
      count.retweet[createdAt] += 1;
    } else {
      count.tweet[createdAt] += 1;
    }
  }
  return ["tweet", "retweet"].map((key) => {
    //配列のmap
    //keyは前に指定したオブジェクト["tweet", "retweet"]
    //まずtweet、次にretweetでmapする(全2回)
    return {
      id: key,
      data: dates.map((d) => {//dにdatesの各要素の値が入る
        return {
          x: d,
          y: count[key][d],
        };
      }),
    };
  });
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      dataUrl="data/covid19-tweets.json"
      lessonUrl="/lesson07"
      title="Lesson 07 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
