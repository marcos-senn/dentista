import mail from "../assets/icons/iconomail.png";
import phone from "../assets/icons/iconophone.png";
import location from "../assets/icons/iconogps.png";

const Contact = () => {
    return (
        <div>
            <h3>Ponte en contacto</h3>
            <div className="flex grid-cols-1 gap-y-0">
                <span className="">
                    <img
                        src={mail}
                        alt="Icono de correo electrónico"
                        style={{ width: 30, height: 30 }}
                    />
                </span>
                <address>
                    <a href="mailto:info@dentalcare.com">info@dentalcare.com</a>
                </address>
            </div>

            <div className="flex grid-cols-1">
                <span className="inline-block">
                    <img 
                        src={phone}
                        alt="Icono de correo electrónico"
                        style={{width: 30, height: 30 }}
                    />
                </span>
                <address>
                    <a href="tel:+18005622487">+1 (800) 562-2487</a>
                </address>
            </div>
            <div className="flex grid-cols-1 ">
                <span>
                    <img
                        src={location}
                        alt="Icono de correo electrónico"
                        style={{ width: 30, height: 30 }}
                    />
                </span>
                <address>
                    Wood Workshop, 562, Mallin Street New York, NY 100 254
                </address>
            </div>
        </div>
    );
};

export default Contact;
