import { FC } from "react";
import { Container } from "./style";

interface Props {
  massage: string;
}

export const ErrorMassage: FC<Props> = ({ massage }) => {
  return (
    <Container>
      {massage}
    </Container>
  );
};