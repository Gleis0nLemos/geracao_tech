const Card = ({ title, category, paragraph, image}) => {
  return (  
    <>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '2px solid #2c2c2c',
          backgroundColor: '#2c2c2c',
          borderRadius: '10px',
          margin: '5px 10px',
          marginLeft: '15px',
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
        <div
         style={{
          padding: '10px',
          marginBottom: '20px'  
         }}>
          <h2 style={{marginBottom: '2px'}}>{title}</h2>
          <h6 style={{marginBottom: '20px'}}>{category}</h6>
          <p>{paragraph}</p><br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste impedit blanditiis earum accusamus in est repudiandae, aspernatur non obcaecati doloribus rem ipsa maxime ea aliquid ratione. Incidunt, nisi tempora? Soluta.</p>
        </div> 
     </div>
    </>
  );
}
 
export default Card;