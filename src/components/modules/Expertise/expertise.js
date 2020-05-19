import React from "react";
import styled from "styled-components";
import Box from "../../elements/Box";
import Flex from "../../elements/Flex";
import Text from "../../elements/Text";
import List from "../../elements/List";
import { iconExpandable } from "../../../public/img";

const Container = styled(Box)`
  width: 100%;
  max-width: 1280px;
`;

const mockData = [
  [
    {
      title: "Acompanhamentos",
    },
    {
      title: "Andamentos",
    },
    {
      title: "Despachos",
    },
    {
      title: "Elaboração de Tese",
    },
    {
      title: "Protocolos",
    },
  ],
  [
    {
      title: "Alvarás",
    },
    {
      title: "Audiências",
    },
    {
      title: "Exame de Processos",
    },
    {
      title: "Elaboração de Peças",
    },
    {
      title: "Consultas",
    },
  ],
  [
    {
      title: "Análises",
    },
    {
      title: "Sustentações Orais",
    },
    {
      title: "Mandados",
    },
    {
      title: "Visitas in loco",
    },
    {
      title: "Distribuições",
    },
  ],
];

const Expertise = () => (
  <Flex width="100%" justifyContent="center" alignItems="center">
    <Container>
      <Box>
        <Text
          textAlign="center"
          letterSpacing={"2px"}
          fontSize={["22px", "25px", "32px"]}
          as={"h3"}
        >
          ÁREAS DE ATUAÇÃO
        </Text>
      </Box>
      <Flex
        flexDirection={["column", "row", "row"]}
        alignItems={["flex-star", "flex-star", "center"]}
        justifyContent={["center", "space-between", "space-between"]}
        pl={[2, 2, 5]}
        pr={[2, 2, 5]}
      >
        <List data={mockData[0]} image={iconExpandable} />
        <List data={mockData[1]} image={iconExpandable} />
        <List data={mockData[2]} image={iconExpandable} />
      </Flex>
    </Container>
  </Flex>
);

export default Expertise;
