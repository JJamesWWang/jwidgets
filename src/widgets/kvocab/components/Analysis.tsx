import { FC } from "react";
import { AnalysisData } from "../KVocabApp";
import classes from "./Analysis.module.css";

const Analysis: FC<AnalysisData> = (props) => {
  const generateWordList = (wordsCategory: string, words: string[]) => {
    return (
      <div className={classes.Analysis}>
        <h3>{`${wordsCategory}: ${words.length}`}</h3>
        <ol>
          {words.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <>
      {props.exact && generateWordList("Words matched exactly", props.exact)}
      {props.almost && generateWordList("Words almost matched", props.almost)}
      {props.unmatched && generateWordList("Words not matched", props.unmatched)}
    </>
  );
};

export default Analysis;
