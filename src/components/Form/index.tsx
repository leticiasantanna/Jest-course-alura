import Button from "../Button";

import * as Styles from "./styles";

const Form = () => {
  return (
    <>
      <Styles.Container>
        <input type="text" placeholder="Adicione os nomes dos participantes" />
        <Button title="Adicionar" maxWidth={150} />
      </Styles.Container>
    </>
  );
};

export default Form;
