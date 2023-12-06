import OpenAI from "openai";
import User from "../../../models/users.js";
import { openAiApiKey } from "../../../config/index.js";

const archetypes = {
  sabio: {
    name: "sabio",
    description:
      "quiero que el texto me haga sentir que leo la verdad absoluta.",
    keywords: "Conocedor, Confiable, Poderoso.",
  },
  // Inocente: Quiero que el texto me hagas sentir que todo es bello y feliz (descripción arquetipo)
  // Palabras Clave: Tranquilidad, felicidad, satisfacción
  // Gobernante: Me hace sentir con el texto que eres un líder imponente. (descripción arquetipo)
  // Palabras clave: prestígio, liderazgo, poder.
  // Común: Vives una vida común, pero se va convertir en una persona mejor (descripción arquetipo)
  // Palabras Clave: mérito, esfuerzo, vida tranquila
  // Cuidador: Se sientas confortable, protegido (descripción arquetipo)
  // Palabras Clave: Amabilidad, cuidado, anidado
  // Amante: Nos dá deseo y demonstra fidelidad (descripción arquetipo)
  // Palabras Clave: Amor, Lealtad, Fijación
  // Bufón: Quiero que el texto me haga reir (descripción arquetipo)
  // Palabras clave: Cómico, humor, fantasía
  // Rebelde: Quero texto me haga sentir que puedo romper reglas (descripción arquetipo)
  // Palabras clave: Rebeldía, obstinación y oposición
  // Explorador: Quiero que me haga sentir que vamos a descubrir algo nuevo, o que me llevas en una aventura (descripción arquetipo)
  // Palabras clave: Sin límites, pioneiro, explorador
  // Creativo: Quiero que el texto despierte mi imaginación (descripción arquetipo)
  // Palabras clave: Imaginación, Invención, Creatividad
  // Héroe: Quiere que el texto me haga creer que puedo superar desafíos con valentía sobrepasar los  límites (descripción arquetipo)
  // Palabras clave: Grandiosidad, resistencia, inspiración
  // Mago: Quiero que el texto me haga sentir que todo se resuelve de forma sencilla. (descripción arquetipo)
  // Palabras clave: Libertad, magia, facilidad, geniosidad
};

const createUser = async (req, res) => {
  try {
    // const user = await User.create(req.body);

    // Promise.all
    await generateStory(req.body);

    // res.status(201).json(`${user} Creado`);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "hay un error!?" });
  }
};

export { createUser };

async function generateStory(storyConfigs) {
  const openAiInstance = new OpenAI({ apiKey: openAiApiKey });
  const {
    nombre,
    empresa,
    mision,
    genero,
    protagonista,
    objetivo,
    motivacion,
    malo,
    ayudante,
    actitud,
    mensaje,
    comportamiento,
  } = storyConfigs;

  const mensajeUsuario = `####Contexto#####

    Tu eres un experto en campañas publicitarias y estás ayudando a una empresa a crear su Transmedia Storytelling que represente la identidad de la marca y la importancia de su servicio/producto. Estos son los datos del cliente:

    Nombre de la campaña: ${nombre}
    Nombre de la Marca: ${empresa}
    Descripción del producto: ${mision}

    #########Instrucción##########:
    Crea un Storytelling en que el tono comunicativo es: ${archetypes[comportamiento].keywords}

    a demostrar que la marca representada tiene un posicionamiento de que: ${archetypes[comportamiento].description}. Con base en los siguientes requisitos narrativos:

    El protagonista de la historia es ${protagonista}
    El género del protagonista es ${genero}
    El protagonista tiene como objetivo ${objetivo}
		El protagonista es motivado por ${motivacion}
    Pero, ${malo} impide el protagonista a cumplir su objetivo
    ${ayudante} ayuda el protagonista
    La actitud que tiene el ayudante es ${actitud}
    En el fin, ${mensaje}

    #########Forma##########:

    Primero, escribe el storytelling 3 párrafos de 250 caracteres cada uno.

    Segundo, escribe otro texto más corto de 180 caracteres conteniendo hashtags y emojis, para divulgación en las redes sociales de la misma narrativa.
    `;

  const chatCompletion = await openAiInstance.chat.completions.create({
    messages: [{ role: "user", content: mensajeUsuario }],
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    // max_tokens: 750 ???
  });

  const responseOpenAI = chatCompletion.choices[0].message.content;

  const updateData = await miModelo.findByIdAndUpdate(
    historyId,
    { responseAI: responseOpenAI },
    { new: true }
  );

  console.log("Respuesta de OpenAI guardada en la base de datos:", updateData);
}
