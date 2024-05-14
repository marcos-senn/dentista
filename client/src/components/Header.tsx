import dentistaTrabajando from "../assets/images/dentista-trabajando.jpg";
import { Button } from "antd";


const Header = () => {
    return (
        <div className="relative w-full h-[700px] bg-cover bg-center bg-no-repeat flex justify-end">
            <div
                className="relative w-full h-[700px] bg-cover bg-center bg-no-repeat flex justify-end "
                style={{ backgroundImage: `url(${dentistaTrabajando})`}}
            >
                <div className="absolute bottom-0 left-0 p-4">
                    <div className="">
                        <h3 className="text-white text-4xl mb-4 ">
                            Cuidado oral en un lugar cálido y seguro
                        </h3>
                        <p className="text-white mb-4">
                            Nuestros profesionales ofrecen un servicio de
                            cuidado dental con tratamientos individuales según
                            tus necesidades.
                        </p>{" "}
                        <Button className="" type="primary" href="#contact">
                            CONTACTANOS
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
