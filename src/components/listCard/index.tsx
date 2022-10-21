import { useState } from "react";
import Card from "../card";
import { ListStyle } from "./style";



const ListCard = () => {

    const [listVehicle, setlistVehicle] = useState([
        {
            id: "1",
            name: "Douglas Ramires",
            img: 'https://th.bing.com/th/id/OIP.UQeKbZTigv91K96LGwGAZgHaE8?pid=ImgDet&rs=1',
            title: "Product title stays here - max 1 line",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
            KM: "0 KM",
            year: "2019",
            price: "R$ 00.000,00"
        },
        
          {
              id: "1",
              name: "Douglas Ramires",
              img: 'https://th.bing.com/th/id/OIP.UQeKbZTigv91K96LGwGAZgHaE8?pid=ImgDet&rs=1',
              title: "Product title stays here - max 1 line",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
              KM: "0 KM",
              year: "2019",
              price: "R$ 00.000,00"
          }
          ,
        
          {
              id: "1",
              name: "Douglas Ramires",
              img: 'https://th.bing.com/th/id/OIP.UQeKbZTigv91K96LGwGAZgHaE8?pid=ImgDet&rs=1',
              title: "Product title stays here - max 1 line",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
              KM: "0 KM",
              year: "2019",
              price: "R$ 00.000,00"
          },
        
          {
              id: "1",
              name: "Douglas Ramires",
              img: 'https://th.bing.com/th/id/OIP.UQeKbZTigv91K96LGwGAZgHaE8?pid=ImgDet&rs=1',
              title: "Product title stays here - max 1 line",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
              KM: "0 KM",
              year: "2019",
              price: "R$ 00.000,00"
          },
        
          {
              id: "1",
              name: "Douglas Ramires",
              img: 'https://th.bing.com/th/id/OIP.UQeKbZTigv91K96LGwGAZgHaE8?pid=ImgDet&rs=1',
              title: "Product title stays here - max 1 line",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
              KM: "0 KM",
              year: "2019",
              price: "R$ 00.000,00"
          }
    ]);

  return (
    <ListStyle>
      <h2>
        Carros
      </h2>
      <ul className="ul--list-cars">
      {listVehicle && listVehicle.map((vehicle) => (
        <Card  key={vehicle.id} vehicles={vehicle} />
      ))}
      </ul>
    </ListStyle>
  );
};

export default ListCard;