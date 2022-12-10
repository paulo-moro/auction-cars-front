import { ContainerStyled } from "./style";
import { useState } from "react";
import { useNewVehicle } from "../../../providers/newVehicle";
import { Modalprops } from "../../../interface/modal";
import { useModal } from "../../../providers/modal";
import * as C from "../../index";

function ModalAnnouncement(){

  const {setNewVehicle} = useNewVehicle();
  const { inOnAnnouncement, setInOnAnnouncement, hideModalAnnouncement } = useModal();

  const modal = inOnAnnouncement
    ? "modal containerModal"
    : "modal containerModal hidden";

  const [sale, setSale] = useState(false);
  const [auction, setAuction] = useState(true);
  const [car, setCar] = useState(true);
  const [motorCycle, setMotorcycle] = useState(false);
  const [heading, setTitle] = useState("");
  const [year, setAge] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImgCape] = useState("");
  const [imgGalery1, setImgGalery1] = useState("");
  const [imgGalery2, setImgGalery2] = useState("");
  const [typeVehicle, setTypeVehicle] =useState("");
  
  const saleOrAuction = () => {
    if(sale){ 
      setSale(false);
      setAuction(true);
    }else {
      setSale(true);
      setAuction(false);
    }
  }
  
  const carOrMotorcycle = () => {
    if(car){ 
      setCar(false);
      setMotorcycle(true);
      setTypeVehicle("motorCycle")
      
    }else {
      setCar(true);
      setMotorcycle(false);
      setTypeVehicle("car")
    }
  }

const createVehicle = () => {
  setNewVehicle({heading, year, km, price, description, img, imgGalery1, imgGalery2, published: sale || true, status: auction || false, categorie: typeVehicle || "car"})
}

    
  return (
    <ContainerStyled>
      <section className={modal}>

        <div className="modal">
        
          <div className="modalHeader">
            <h1>Criar anúncio</h1>
            <button className="removedModal" onClick={() => hideModalAnnouncement()}>
              x
            </button>
          </div>

          <form className="modalBody"
           onSubmit={(e) => {  
            e.preventDefault();
            createVehicle()
          }}>
          
              <p>Tipo de anúncio</p>
              
              <div className="div--field">
                
                <C.ButtonUI type="submit" 
                setBoolean={saleOrAuction} 
                text="Venda" color={"primary"} variant={sale ? "contained" : "outlined"}  />

                <C.ButtonUI type="submit" setBoolean={saleOrAuction} text="Leilão" color={"primary"} variant={auction ? "contained" : "outlined"} />
              
              </div>

              <p>Informações do veículo</p>
              
              <C.InputText setFunction={setTitle} label="Título" placeholder="Tipo de anúncio"  color="secondary"/>
              
              <div className="div--field">
                <C.InputText setFunction={setAge} label="Ano" rows={1} placeholder="Digitar ano"  color="secondary"/>

                <C.InputText setFunction={setKm} label="Quilometragem" rows={1}placeholder="0" color="secondary"/> 
                
                <C.InputText setFunction={setPrice} label="Preço" rows={1} placeholder="Digitar preço"  color="secondary"/>              
              </div>
              
              <C.InputText multiline rows={3} setFunction={setDescription} label="Descrição" placeholder="Digitar descrição" color="secondary"/>

              <div className="div--field">
                
                <C.ButtonUI setBoolean={carOrMotorcycle} type="submit" text="Carro" color="primary" variant={car ? "contained" : "outlined"} />

                <C.ButtonUI setBoolean={carOrMotorcycle} type="submit" text="Moto" color="primary" variant={motorCycle ? "contained" : "outlined"}  />
              
              </div>

              <C.InputText multiline label="Imagem da capa" setFunction={setImgCape} placeholder="https://image.com" color="secondary"/>

              <C.InputText multiline label="1ª Imagem da galeria"  setFunction={setImgGalery1} placeholder="https://image.com" color="secondary"/>

              <C.InputText multiline label="2ª Imagem da galeria" setFunction={setImgGalery2} placeholder="https://image.com" color="secondary"/>

              <div className="div--field">
               
                <C.ButtonUI setBoolean={hideModalAnnouncement} type="submit" text="Cancelar" color="primary" variant="outlined" />
                <C.ButtonUI setBoolean={createVehicle} type="submit" text="Criar anúncio" color="primary" variant="contained" />
              
              </div>
            
          </form>
        </div>
      </section>
    </ContainerStyled>
  );
}

export default ModalAnnouncement;
