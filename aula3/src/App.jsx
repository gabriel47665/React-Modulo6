import Card from "./components/Card";
import "./App.css";

function App() {
  const noticias = [
    {
      titulo: "titulo 1",
      descricao: "descrição 1",
      link: "link 1",
      status: true
    },
    {
      titulo: "titulo 2",
      descricao: "descrição 2",
      link: "link 2",
      status: true
    },
    {
      titulo: "titulo 3",
      descricao: "descrição 3",
      link: "link 3",
      status: false
    },
    {
      titulo: "titulo 4",
      descricao: "descrição 4",
      link: "link 4",
      status: true
    },
    {
      titulo: "titulo 5",
      descricao: "descrição 5",
      link: "link 5",
      status: false
    },
  ];

  return (
    <>
      <section id="cartoes">
        {
          noticias.map((noticia) => {
            return noticia.status && <Card 
                        titulo={noticia.titulo}
                        descricao={noticia.descricao}
                        link={noticia.link}/>
          })
        }
      </section>
    </>
  );
}

export default App;
