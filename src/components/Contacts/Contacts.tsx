// Components
import ContactCard from "../ContactCard/ContactCard";
// Components

// Contacts Data
import contacts from "../../constants/contacts";
import { Decor } from "../Decor/Decor";
// Contacts Data

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
        {contacts.map(
          ({ name1, textName1, title, name2, textName2, icon, id }) => {
            return (
              <ContactCard
                name1={name1}
                textName1={textName1}
                title={title}
                name2={name2}
                textName2={textName2}
                icon={icon}
                key={id}
              />
            );
          }
        )}
      </div>
      <Decor fill="#202020"/>
    </section>
  );
};

export default Contacts;
