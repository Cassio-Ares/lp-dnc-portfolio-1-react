import styles from "./Header.module.css";
import ButtonA from '../Elements/ButtonA';
import { useEffect, useState } from "react";


function Header() {

  
  const [text, setText]= useState('');
  const toRotate = ['Cassio', 'Desenvolvedor Front End', 'Product Manager'];
  const [loop, setLoop]= useState(0);
  const [isDeleting, setIsDeleting]= useState(false);
  const period = 1000;
  const [delta, setDelta] = useState(100);


  useEffect(() =>{
    let ticker = setInterval(() => {
      toType()
    }, delta);
    return ()=> {clearInterval(ticker)}
  }, [text])
  
  
 const toType =() =>{
  let i = loop % toRotate.length;
  let fullText = toRotate[i]
  let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

  setText(updatedText);

  if(!isDeleting && updatedText === fullText){
    setIsDeleting(true);
    setDelta(period)
  }else if(isDeleting && updatedText === ''){
    setIsDeleting(false);
    setDelta(period)
    setLoop(loop + 1)
  }
 }



  return (
       <div id="Header" className={styles.header}>
      <header>
        <h3>Bem-vindo ao meu Portfólio</h3>
          <h1>Olá, eu sou {text}</h1>
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
