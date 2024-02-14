import { Route, Routes } from "react-router-dom";
import { Homepage } from "../HomePage/HomePage";
import { StatsPage } from "../StatsPage/StatsPage";
import { Container } from "./style";


export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/details/:pokemonName" element={<StatsPage />} />
      </Routes>
    </Container>
  );
}
