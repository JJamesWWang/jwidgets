import { Center, List, Title } from "@mantine/core";
import { FC } from "react";
import { AnalysisData } from "../KVocabApp";

const Analysis: FC<AnalysisData> = (props) => {
  const generateWordList = (wordsCategory: string, words: string[]) => {
    return (
      <div className="mt-5">
        <Center>
          <Title order={3}>{`${wordsCategory}: ${words.length}`}</Title>
        </Center>
        <List type="order">
          {words.map((word) => (
            <List.Item key={word}>
              <Center>{word}</Center>
            </List.Item>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div className="ml-auto mr-auto">
      {props.exact && generateWordList("Words matched exactly", props.exact)}
      {props.almost && generateWordList("Words almost matched", props.almost)}
      {props.unmatched && generateWordList("Words not matched", props.unmatched)}
    </div>
  );
};

export default Analysis;
