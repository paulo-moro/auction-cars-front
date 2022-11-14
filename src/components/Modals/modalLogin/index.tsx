import { Modalprops } from "../../../interface/modal";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { FormContainer } from "react-hook-form-mui";
import { InputText } from "../../input";
import { ButtonUI } from "../../buttonUI";
import { useLogin } from "../../../providers/userLogin";
import { useModal } from "../../../providers/modal";
import { motion } from 'framer-motion';

function ModalLogin() {
  
  const { 
    inOnLogin, 
    setInOnLogin, 
    showModalLogin, 
    hideModalLogin,
    showModalRegister
 } = useModal();

  const modal = inOnLogin
    ? "modal containerModal"
    : "modal containerModal hidden";

    const { user, setUser} = useLogin();

    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginFunction = () => {
      setUser({email, password});
    }

    const registerFunction = () => {
      hideModalLogin();
      showModalRegister();
    }

  return (
    <ContainerStyled>
      <section className={modal}>
        <div className="modal">

          <div className="modalHeader">
            <h1>Login</h1>
            <button className="removedModal" onClick={() => hideModalLogin()}>x</button>
          </div>

          <motion.form>
            <div className="modalBody">
            
              <InputText setFunction={setUsername} label="Usuário" placeholder="Usuário"  color="secondary"/>
              <InputText setFunction={setPassword} label="Senha" placeholder="Senha"  color="secondary"/>
            
              <a href=" ">Esqueci minha senha</a>
              <ButtonUI 
              setBoolean={loginFunction}  text="Entrar"
              type="submit" color="primary" variant="contained"/> 

              <label className="label--register">Ainda não possui conta?</label>
              <ButtonUI setBoolean={registerFunction} type="submit" text="Cadastrar" color="primary" variant="outlined" />
              
            </div>
          
          </motion.form>
        
        </div>
      
      </section>
    
    </ContainerStyled>
  );
}

export default ModalLogin;
