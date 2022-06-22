import React from "react";
import BaseDrop from "../interface/BaseDrop";

function QuestionsSection() {
  const questionsData = [
    {
      id: 1,
      question: "¿Cómo iniciar mi negocio junto a Tickea?",
      anwser: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 2,
      question: "¿Cómo conocer mis ingresos dentro de la plataforma?",
      anwser: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 3,
      question: "¿Cuánto tiempo tardo en darme de alta?",
      anwser: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 4,
      question: "¿Cómo elijo mi propio plan personalizado?",
      anwser: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 5,
      question: "¿Cuánto cuesta hacerse miembro?",
      anwser: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 6,
      question: "¿Qué tengo que presentar para darme de alta?",
      anwser: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  const questionsList = questionsData.map((e) => {
    return (
      <li className="questions-item" key={e.id}>
        <BaseDrop name={e.question} description={e.anwser} />
      </li>
    );
  });

  return (
    <section className="questions-section">
      <div className="questions-container container">
        <div className="questions-title-container">
          <h2 className="questions-title title-text">Preguntas frecuentes</h2>
        </div>
        <div className="questions-list-container">
          <ul className="questions-list">{questionsList}</ul>
        </div>
      </div>
    </section>
  );
}

export default QuestionsSection;
