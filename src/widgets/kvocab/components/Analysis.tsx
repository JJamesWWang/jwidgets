import { Center, List, Title } from "@mantine/core";
import { FC } from "react";
import { AnalysisData, Word } from "../KVocabApp";

const Analysis: FC<AnalysisData> = (props) => {
  const generateWordList = (
    wordsCategory: string,
    words: Word[],
    format?: (word: Word) => string
  ) => {
    return (
      <div className="mt-5">
        <Center>
          <Title order={3}>{`${wordsCategory}: ${words.length}`}</Title>
        </Center>
        <List type="order">
          {words.map((word) => (
            <List.Item key={word.korean}>
              <Center>
                {format ? format(word) : `${word.korean} - ${word.english}`}
              </Center>
            </List.Item>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div className="ml-auto mr-auto">
      {props.exact && generateWordList("Words matched exactly", props.exact)}
      {props.almost &&
        generateWordList(
          "Words almost matched",
          props.almost,
          (word) =>
            `${word.original} almost matched with ${word.korean} - ${word.english}`
        )}
      {props.unmatched && generateWordList("Words not matched", props.unmatched)}
    </div>
  );
};

export default Analysis;
