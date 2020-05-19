import React from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Image from "../Image";
import Text from "../Text";

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
`;

const List = ({ data, image }) => (
  <Container>
    {data.map((e) => (
      <Flex alignItems="center" justifyContent="flex-start" m={0}>
        <Image src={image} width="10px" height="15px" pr={3} pl={3} />
        <Text m={2} letterSpacing={"2px"} fontSize={["18px", "18px", "22px"]}>
          {e.title}
        </Text>
      </Flex>
    ))}
  </Container>
);

export default List;
