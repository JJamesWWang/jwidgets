import { useState } from "react";
import InputForm from "./components/InputForm";
import Analysis from "./components/Analysis";

export type Word = {
  original: string;
  korean: string;
  english: string;
};

export type AnalysisData = {
  exact: Word[];
  almost: Word[];
  unmatched: Word[];
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
    <div>
      <InputForm onAnalysisFetched={onAnalysisFetched} />
      <Analysis {...analysis} />
    </div>
  );
}

export default KVocabApp;
