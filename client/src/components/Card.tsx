import React from "react";
import { Card } from "antd";
import { services } from "../data/index";
const { Meta } = Card;

const App: React.FC = () => (
    <div className="w-full ">
        {services.map((element:any) => (
            <Card className="flex items-center justify-items-center justify-center flex-col "
                hoverable
                style={{ width: 250, height:350 }}
                cover={<img  alt="example" src={element.Imagen} style={{ width: '100px', height: '100px' }}/>}
            >
                <Meta
                    style={{textAlign:'center'}}
                    title={element.Servicio}
                    description={element.Descripción}
                />
            </Card>
        ))}
    </div>
);

export default App;
