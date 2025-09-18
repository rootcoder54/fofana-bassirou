"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import { SiMinutemailer } from "react-icons/si";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  const [name, setName] = useState("");
  const [societe, setSociete] = useState("");
  const [text, setText] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [etat, setEtat] = useState(true);

  // Handler pour le formulaire
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEtat(false);
    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, societe, text, toEmail })
    }).then((response) => {
      setEtat(true);
      if (response.ok) {
        toast.success("Email envoyé avec succès!");
        setName("");
        setSociete("");
        setText("");
        setToEmail("");
      } else {
        toast.error("Erreur lors de l'envoi de l'email.");
      }
    });
  };

  return (
    <div className="space-y-4 max-w-full p-10 rounded-md shadow-2xl border">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start space-y-4"
      >
        <BiSolidMessageRoundedDots className="size-11" />
        <h2 className="text-2xl font-semibold">Discutons de votre projet</h2>
        <span>
          Plusieurs entreprises nous font confiance pour lancer leurs produits
          web, mobiles et IA.
        </span>

        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="nom">Nom</label>
          <Input
            id="nom"
            type="text"
            placeholder="nom complet"
            className="border-zinc-700"
            disabled={!etat}
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            required
          />
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Votre email"
            className="border-zinc-700"
            disabled={!etat}
            value={toEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setToEmail(e.target.value)
            }
            required
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="sujet">Societé</label>
          <Input
            id="sujet"
            type="text"
            placeholder="ou nom du projet"
            className="border-zinc-700"
            disabled={!etat}
            value={societe}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSociete(e.target.value)
            }
            required
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="message">Message</label>
          <Textarea
            id="message"
            placeholder="Information concernant votre projet ?"
            value={text}
            disabled={!etat}
            className="h-32 text-lg border-zinc-700"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            required
          />
        </div>

        {etat ? (
          <Button
            size={"lg"}
            className="border w-full flex flex-row items-center gap-x-2 cursor-pointer"
            type="submit"
          >
            <SiMinutemailer className="size-8" />
            <span className="text-lg">Envoyer</span>
          </Button>
        ) : (
          <Button
            disabled
            size={"lg"}
            className="border w-full flex flex-row items-center gap-x-2 cursor-pointer"
          >
            en cours d&apos;envoi...
          </Button>
        )}
      </form>
    </div>
  );
}