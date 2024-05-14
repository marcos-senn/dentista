import React from "react";
import { Card } from "antd";
import { services } from "../data/index";
const { Meta } = Card;

const App: React.FC = () => (
    <div id="services" className="w-full flex flex-col items-center justify-center gap-y-3 mt-10 md:flex-row md:flex-wrap md:gap-x-5">
      <div className='flex items-center justify-center w-full p-5 text-4xl '>
         <p className="text-start md:text-center">Ofrecemos un completo listado de servicios generales y cosmeticos para tu cuidado bucal</p>
      </div>
        {services.map((element:any) => (
            <Card className="flex flex-col items-center justify-center "
                hoverable
                style={{ width: 250, height:250 , textAlign:'center'}}
                cover={<img  alt="example" src={element.Imagen} style={{ width: '100px', height: '100px' }}/>}
            >
                <Meta
                    title={element.Servicio}
                    description={element.Descripción}
                />
            </Card>
        ))}
    </div>
);

export default App;
