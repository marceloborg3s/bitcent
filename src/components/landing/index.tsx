import Pagina from "../template/Pagina";
import Cabecalho from "./cabecalho";
import Destaque from "./destaque";
import Vantagens from "./vantagens";
import Depoimentos from "./depoimentos";
import Rodape from "./rodape";


export default function Landing() {
  return (
    <div>
      <Pagina externa>
        <Cabecalho />
        <Destaque />
        <Vantagens />
        <Depoimentos />
        <Rodape />
      </Pagina>
    </div>
  )
}