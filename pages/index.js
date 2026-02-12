import Calculator from '../components/Calculator';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {/* VIDEO DE FONDO */}
      <div className={styles.videoBackground}>
        <video autoPlay loop muted playsInline>
          <source src="/f1-video.mp4" type="video/mp4" />
          {/* Fallback para navegadores que no soportan video */}
          Tu navegador no soporta video.
        </video>
      </div>
      <div className={styles.overlay}></div>
      
      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            <span className={styles.f1Logo}>F1</span> CALCULADORA
          </h1>
          <div className={styles.speedLines}></div>
        </div>
        
        <Calculator />
        
        <div className={styles.footer}>
          <div className={styles.tireMarks}></div>
          <p>PIT WALL • MATHEMATICS DIVISION</p>
          <div className={styles.flag}>
            <span className={styles.flagGreen}></span>
            <span className={styles.flagWhite}></span>
            <span className={styles.flagRed}></span>
          </div>
        </div>
      </div>
    </>
  );
}