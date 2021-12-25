import { useState } from "react";
import InputForm from "./components/InputForm";
import Analysis from "./components/Analysis";
import classes from "./KVocabApp.module.css";

export type AnalysisData = {
  exact: string[];
  almost: string[];
  unmatched: string[];
};

const emptyAnalysis: AnalysisData = {
  exact: [],
  almost: [],
  unmatched: [],
};

function KVocabApp() {
  const [analysis, setAnalysis] = useState<AnalysisData>(emptyAnalysis);
  const onAnalysisFetched = (data: AnalysisData) => {
    setAnalysis(data);
  };

  return (
    <div className={classes.KVocabApp}>
      <InputForm onAnalysisFetched={onAnalysisFetched} />
      <Analysis {...analysis} />
    </div>
  );
}

export default KVocabApp;
