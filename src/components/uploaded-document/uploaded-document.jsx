import './uploaded-styles.css';

const Uploadedtab = ({data})=>{
  return(
		<div className="uploaded-myfiles">
      <h3>{data.Name}</h3>
      <p className="upload-p">{data.description}</p>
		</div>
    )
}

export default  Uploadedtab;