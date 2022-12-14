import { Vehicle, VehiclesProps } from "../../interface/vehicle";
import { UserIcon } from "../iconUser";
import ButtonUI from "../buttonUI";
import { LiCard, DivCard, Span } from "./style";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"

const Card = ({owner, vehicle }: VehiclesProps) => {
  const [initialsName, setInitialsName] = useState("");
  const {
    id,
    username,
    heading,
    description,
    km,
    img,
    year,
    price
  }: Vehicle = vehicle;

  useEffect(() => {
    if (username) {
      const splitName = username?.split(" ");
      splitName.length > 1
        ? setInitialsName(splitName[0][0] + splitName[1][0])
        : setInitialsName(splitName[0][0]);
    }
  }, []);

  const history = useHistory();
  const priceBRL = Number(price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  const kmLabel = Number(km).toLocaleString();
  

  return (
    <LiCard>
      <figure>
        <img onClick={()=> history.push(`/product/${id}`)} src={img} alt="" />
      </figure>

      <h3>{heading}</h3>

      <p>{description}</p>

      <UserIcon 
        color={""}
        theme={"red"}
        name={username}
        initials={initialsName}
      />

      <DivCard>
        <div>
          <Span>{kmLabel} KM</Span>
          <Span>{year}</Span>
        </div>
        <span>{priceBRL}</span>
      </DivCard>

      {owner && 
      <div className="div-buttons">
          <ButtonUI text="Editar" color="secondary" variant="outlined" />
          <ButtonUI text="Ver como" color="secondary" variant="outlined" />
      </div>
      }
    </LiCard>
  );
};

export default Card;
