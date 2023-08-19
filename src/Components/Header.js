import styles from "./Header.module.css";
import ButtonA from '../Elements/ButtonA'

function Header() {
  return (
    <div id="Header" className={styles.header}>
      <header>
        <h3>Bem-vindo ao meu Portfólio</h3>
        <h1>Olá, eu sou Cassio</h1>
        <p>
          Sou um apaixonado por tecnologia e soluções inovadoras.Como<br/>
          Product Manager, eu tenho o compromisso de resolver<br/> 
          problemascomplexos e trazer resultados excepcionais para os<br/>
          negócios.Meus projetos já geraram milhões de reais em receita<br/> 
          anualestou sempre em busca de novos desafios para superar.
        </p>
        <ButtonA/>
      </header>
    </div>
  );
}

export default Header;
