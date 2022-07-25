
import styles from "./Footer.module.scss";
import ig from "../../Assets/instagram.png";
import wha from "../../Assets/whatsapp.png";
import tw from "../../Assets/twitter.png";

const Footer = () => {
  const socials = [
    { img: ig, name: "instagram", link: "instagram.com" },
    { img: wha, name: "whatsapp", link: "whatsapp.com" },
    { img: tw, name: "twitter", link: "twitter.com" },
  ];

  return (
    <div>
     
      <div className={styles.containerFooter}>
        <h3> Petshop</h3>
        <div className={styles.containerSM}>
          {socials.map((s) => (
            <a
              href={s.link}
              rel="noreferrer noopener"
              target="_blank"
              key={s.name}
            >
              <img
                src={s.img}
                alt={`logo de ${s.name}`}
                className={styles.sm}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
