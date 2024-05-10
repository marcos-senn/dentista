import dentistaTrabajando from "../assets/images/dentista-trabajando.jpg";
import { Button } from "antd";
import App from "./Nav";

const Header = () => {
    return (
        <div className="relative w-100%">
            <div className="ml-[100px]">
                <App></App>
            </div>

            <div className="absolute mt-[150px] text-white text-center flex flex-col items-end w-full pr-10 ">
                <h3 className="text-4xl font-bold">
                    Cuidado oral en un lugar cálido y seguro
                </h3>
                <p className="text-2xl mt-10 w-1/3 flex aling-end justify-center">
                    Nuestros profesionales ofrecen un servicio de cuidado dental
                    con tratamientos individuales según tus necesidades.
                </p>

                <Button className="w-1/3 mr-3 mt-10" type="primary">
                    CONTACTANOS
                </Button>
            </div>

            <div
                className="h-[700px] bg-cover bg-center bg-no-repeat flex justify-end"
                style={{ backgroundImage: `url(${dentistaTrabajando})` }}
            ></div>
        </div>
    );
};

export default Header;
