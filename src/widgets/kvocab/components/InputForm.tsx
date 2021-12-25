import { useRef, FC, FormEvent } from "react";
import classes from "./InputForm.module.css";
import { AnalysisData } from "../KVocabApp";

const InputForm: FC<{ onAnalysisFetched: (data: AnalysisData) => void }> = (
  props
) => {
  const essayRef = useRef<HTMLTextAreaElement>(null);

  async function analyzeEssay(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const getAnalysis = async () => {
      if (!essayRef.current) {
        throw Error("Invalid essayRef");
      }
      const response = await fetch(
        "https://jwidgets.herokuapp.com/wordchecker/",
        {
          method: "POST",
          body: essayRef.current.value,
        }
      );
      const data = await response.json();
      props.onAnalysisFetched(data);
    };

    getAnalysis().catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <h2>안녕하세요. 제임스의 사이트입니다.</h2>
      <form className={classes.InputForm} onSubmit={analyzeEssay}>
        <label htmlFor="essay">Paste in your essay here.</label>
        <textarea id="essay" ref={essayRef} rows={20} cols={80}></textarea>
        <button>Analyze</button>
      </form>
    </>
  );
};

export default InputForm;
