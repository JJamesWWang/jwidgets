import { useRef, FC, FormEvent } from "react";
import { AnalysisData } from "../KVocabApp";
import { Button, Center, Textarea, Title } from "@mantine/core";

const InputForm: FC<{ onAnalysisFetched: (data: AnalysisData) => void }> = (props) => {
  const essayRef = useRef<HTMLTextAreaElement>(null);

  async function analyzeEssay(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const getAnalysis = async () => {
      if (!essayRef.current) {
        throw Error("Invalid essayRef");
      }
      // const response = await fetch("https://jwidgets.herokuapp.com/wordchecker/", {
      const response = await fetch("http://localhost:8000/wordchecker/", {
        method: "POST",
        body: essayRef.current.value,
      });
      const data = await response.json();
      props.onAnalysisFetched(data);
    };

    getAnalysis().catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Title align="center">안녕하세요. 제임스의 사이트입니다.</Title>
      <Center>
        <form onSubmit={analyzeEssay}>
          <Textarea
            ref={essayRef}
            label="Paste your essay here:"
            className={"w-[50vw] mt-5"}
            minRows={20}
            required
          />
          <Center>
            <Button type="submit">Analyze</Button>
          </Center>
        </form>
      </Center>
    </>
  );
};

export default InputForm;
