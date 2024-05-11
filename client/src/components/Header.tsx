import dentistaTrabajando from "../assets/images/dentista-trabajando.jpg";
import { Button } from "antd";
import Nav from "./Nav";

const Header = () => {
    return (
        <div className="relative w-100%">
            <div className="ml-[100px]">
                <Nav></Nav>
            </div>

            <div className="absolute mt-[150px] text-white text-center w-full flex justify-end items-center">
                <div className="w-2/5">
                    <h3 className="text-4xl font-bold">
                        Cuidado oral en un lugar cálido y seguro
                    </h3>
                    <p className="text-2xl mt-10">
                        Nuestros profesionales ofrecen un servicio de cuidado
                        dental con tratamientos individuales según tus
                        necesidades.
                    </p>{" "}
                    <Button className="mt-10" type="primary">
                        CONTACTANOS
                    </Button>
                </div>
            </div>

            <div
                className="h-[700px] bg-cover bg-center bg-no-repeat flex justify-end"
                style={{ backgroundImage: `url(${dentistaTrabajando})` }}
            ></div>
        </div>
    );
};

export default Header;
