import { RESUME_UI } from "../config/resumeConfig";

export default function ResumeHeader({ profile }) {
  return (
    <header className={RESUME_UI.header.wrapper}>
      <div className={RESUME_UI.header.left}>
        <h1 className={RESUME_UI.header.name}>{profile.name}</h1>
        <p className={RESUME_UI.header.role}>
          <strong>{profile.role}</strong>
        </p>
      </div>

      <ul className={RESUME_UI.header.contactsList}>
        {profile.contacts.map((contact) => (
          <li
            key={`${contact.icon}-${contact.value}`}
            className={RESUME_UI.header.contactItem}
          >
            <span className={RESUME_UI.header.contactIcon}>{contact.icon}</span>
            <span>{contact.value}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}
