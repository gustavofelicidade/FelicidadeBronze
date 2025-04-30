import "./App.css";

export default function App() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-orange-200 text-brown-900">
      <h1 className="text-4xl font-extrabold italic mb-4 text-center">
        𝓐 𝓶𝓪𝓻𝓺𝓾𝓲𝓷𝓱𝓪 𝓺𝓾𝓮 𝓽𝓮 𝓭𝓮𝓲𝔁𝓪 𝓯𝓮𝓵𝓲𝔃
      </h1>

      <section className="text-center space-y-2 mb-8">
        <p>Bronze no Sol · Bronze na Máquina</p>
        <p>Atendimento: 9 h – 18 h</p>
        <p>📍 Rua Eugênio Paiva 462A, Senador Camará – RJ</p>
      </section>

      <a
        href="https://api.whatsapp.com/send?phone=5521976617848&text=Oi%2C+gostaria+de+agendar+meu+bronze%21"
        target="_blank"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold shadow-lg transition"
      >
        Falar no WhatsApp
      </a>
    </main>
  );
}
