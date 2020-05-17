import React from "react";
import styled from "styled-components";
import Flex from "../../elements/Flex";
import Text from "../../elements/Text";
import { fontSize } from "styled-system";
import purpose from "../../../public/img/mission.png";

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  background-image: url(${purpose});
  height: 300px;
  background-repeat: no-repeat;
  opacity: 0.9;
  width: 100%;
  background-position: center;
  text-align: center;
  letter-spacing: 1px;
  line-height: 2;
  ${fontSize}
`;

const Purpose = () => (
  <Container fontSize={["16px", "18px", "20px"]}>
    <Flex width={["90%", "80%", "60%"]}>
      <Text>
        Excelência nos serviços de consultoria, assessoria e de advocacia com
        aplicação específica do Direito para cada cliente.
      </Text>
    </Flex>
  </Container>
);

export default Purpose;
