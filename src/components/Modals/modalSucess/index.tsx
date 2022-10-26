import { Modalprops } from "../../../interface/index";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

function ModalLogin({ handleHidden, statusModal }: Modalprops) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4529E6",
        contrastText: "#fff",
      }
    },
  });

  const modal = statusModal
    ? "modal containerModal"
    : "modal containerModal hidden";

  return (
    <ContainerStyled>
    
      <section className={modal}>
        
        <div className="modal">
          
          <div className="modalHeader">
            
            <h1>Sucesso!</h1>
            <button className="removedModal" onClick={() => handleHidden()}> x </button>
          
          </div>

          <div className="modalBody">
          
            <h4>Sua conta foi criada com sucesso!</h4>
            
            <p>Agora você vai poder ver seus negócios crescendo em grande escala</p>
            
            <ThemeProvider theme={theme}>
              <Button size="small" color="primary" variant="contained" type="submit">
                Ir para o login
              </Button>
            </ThemeProvider>
            
          </div>
          
        </div>
        
      </section>
      
    </ContainerStyled>
  );
}

export default ModalLogin;