import './App.css'
import Card from './components/Card'
import CardDinamico from './components/CardDinamico'
import MainContent from './components/MainContent'

function App() {

  return (
    <>
      <MainContent />
      <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
        <Card
          image={'https://img.freepik.com/fotos-gratis/vista-de-uma-bola-de-futebol-no-campo_23-2150995795.jpg'}
          title={'Futebol'}
          category={'Esportes'}
          paragraph={'England x Spain'}
        />
        <Card 
          title={'Desenhos'}
          category={'Animes'}
          paragraph={'Demon Slayer'}
        />
        <CardDinamico title={'Amor'} image={'https://media.gazetadopovo.com.br/2023/09/30130131/1920x1080-960x540.jpg'}>
          <h6 style={{marginBottom: '20px'}}>Familia</h6>
          <p>Pais e Filhos</p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae sit tempora placeat id illo enim, odio, neque velit animi voluptatum. Deserunt culpa corporis nihil saepe minus magni delectus incidunt?</p>
        </CardDinamico>          
      </div>
     
    </>
  )
}

export default App
