import React from "react";
import { Card } from "antd";
import dentistaMujer from "../assets/images/dentista-mujer.jpg";
import dentistaHombreUno from "../assets/images/dentistaHombrePerfil.jpg";
import dentistaHombreDos from "../assets/images/dentistahombre2.jpg";

const { Meta } = Card;

const Hero: React.FC = () => (
    <div id="profesionals" className=" mt-10 md:pb-10  bg-slate-800">
        <div className="w-full flex items-center justify-center p-10 text-3xl">
            <p className="text-white">Nuestros Porfesionales</p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-y-3 mt-10 sm:flex-row sm:gap-40 sm:mt-0 ">
            <Card
                className="text-center"
                style={{ width: 300, height: 400 }}
                cover={<img alt="example" src={dentistaHombreUno} />}
            >
                <Meta title="Stella Smith" description="Doctor" />
                <p className="mt-5">
                    {" "}
                    Universidad Nacional Del Nordeste - Master en lorem ipsum
                </p>
            </Card>
            <Card
                className="text-center"
                style={{ width: 300, height: 400 }}
                cover={<img alt="example" src={dentistaMujer} />}
            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
                <p className="mt-5">
                    {" "}
                    Universidad Nacional Del Nordeste - Master en lorem ipsum
                </p>
            </Card>
            <Card
                className="text-center mb-5"
                style={{ width: 300, height: 400 }}
                cover={<img alt="example" src={dentistaHombreDos} />}
            >
                <Meta title="Stella Smith" description="Cirujano" />
                <p className="mt-5">
                    {" "}
                    Universidad Nacional Del Nordeste - Master en lorem ipsum
                </p>
            </Card>
        </div>
    </div>
);

export default Hero;
