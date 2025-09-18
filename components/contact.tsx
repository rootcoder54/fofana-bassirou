import { FcBusinessContact } from "react-icons/fc";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-4 md:px-12 py-8 md:py-14 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold mb-4 flex flex-row items-center gap-2">
        <FcBusinessContact className="size-12" />
        Contactez-moi
      </h2>
      <p className="text-zinc-600 dark:text-zinc-200 text-lg text-center mb-6">
        Vous avez un projet en tête ou souhaitez simplement discuter ?
        N&apos;hésitez pas à me contacter !
      </p>
    </div>
  );
};

export default Contact;
