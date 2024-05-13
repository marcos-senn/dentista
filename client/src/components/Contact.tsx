import mail from "../assets/icons/iconomail.png";
import phone from "../assets/icons/iconophone.png";
import location from "../assets/icons/iconogps.png";

const Contact = () => {
    return (
        <div>
            <h3 className="text-3xl w-full text-center mb-5 mt-5 sm:text-start sm:ml-10">
                Ponte en contacto
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-0 justify-items-certer sm:text-2xl">
                <div className="sm:col-start-1 sm:col-span-1 sm:self-center">
                    <div className="flex flex-col items-center sm:items-start sm:ml-10">
                        <div className="flex items-center sm:mb-5 gap-3">
                            <span className="sm:mr-5">
                                <img
                                    src={mail}
                                    alt="Icono de correo electrónico"
                                    style={{ width: 30, height: 30 }}
                                />
                            </span>
                            <address>
                                <a href="mailto:info@dentalcare.com">
                                    info@dentalcare.com
                                </a>
                            </address>
                        </div>

                        <div className="flex items-center sm:mb-5 gap-3">
                            <span className="sm:mr-5">
                                <img
                                    src={phone}
                                    alt="Icono de correo electrónico"
                                    style={{ width: 30, height: 30 }}
                                />
                            </span>
                            <address>
                                <a href="tel:+18005622487">+1 (800) 562-2487</a>
                            </address>
                        </div>
                        <div className="flex items-center sm:mb-2 gap-3">
                            <span className="sm:mr-5">
                                <img
                                    src={location}
                                    alt="Icono de correo electrónico"
                                    style={{ width: 30, height: 30 }}
                                />
                            </span>
                            <address>Córdoba 1101, Resistencia, Chaco</address>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto mb-5">
                    <iframe
                        className="w-full h-64 md:h-96 lg:h-128 xl:h-144 "
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.478435623988!2d-58.97315492373374!3d-27.45436081605434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450ce33dbb6cc5%3A0x341ed6b455fbe823!2sC%C3%B3rdoba%201101%2C%20H3504DIX%20Resistencia%2C%20Chaco!5e0!3m2!1ses!2sar!4v1715611350418!5m2!1ses!2sar"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
