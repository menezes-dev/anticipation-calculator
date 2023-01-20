import { useContext } from "react";
import { CalcContext } from "../../contexts";
import { Container } from "./style";
import Loading from "../Loading";

const Result = () => {
  const { response, loading } = useContext(CalcContext);

  return (
    <Container>
      <h1>VOCÊ RECEBERÁ:</h1>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="container-info">
            <div className="info">
              <span className="period">Amanhã: </span>
              <span className="value">R$ {response["1"].toFixed(2)}</span>
            </div>
          </div>

          <div className="container-info">
            <div className="info">
              <span className="period">Em 15 dias: </span>
              <span className="value">R$ {response["15"].toFixed(2)}</span>
            </div>
          </div>

          <div className="container-info">
            <div className="info">
              <span className="period">Em 30 dias: </span>
              <span className="value">R$ {response["30"].toFixed(2)}</span>
            </div>
          </div>

          <div className="container-info">
            <div className="info">
              <span className="period">Em 90 dias: </span>
              <span className="value">R$ {response["90"].toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Result;
