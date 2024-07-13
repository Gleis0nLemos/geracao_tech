const CardDinamico = ({ children, image, title }) => {
  return (  
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #2c2c2c',
        backgroundColor: '#2c2c2c',
        borderRadius: '10px',
        margin: '5px 15px',
        width: '30%',
        height: 'fit-content',
      }}
      className="card"
      >
      { image &&
          <img
            src={image}
            alt={title}
            style={{
              height: 'fit-content',
              width: '100%',  
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            }}
          />
        }
        <div style={{ 
          padding: '10px',
          paddingBottom: '25px',
        }}>
          <h2 style={{marginBottom: '2px'}}>{title}</h2>  
          {children}
        </div>
    </div>
  );
}
 
export default CardDinamico;