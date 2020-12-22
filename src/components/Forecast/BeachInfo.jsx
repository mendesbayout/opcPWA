import React from 'react';
import { FaWater, FaUmbrellaBeach } from 'react-icons/fa';
import { GiWaveSurfer, GiSurfBoard, Gi3DStairs} from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';




const BeachInfo = ({ Pico }) => {
  
  return (
    <div className="card">
      <div className="card-body">
      
      <img className="card-img-top" src={Pico.URI_Foto_Prev} alt=""></img>
        <h4 className="card-title">{" "}Previsões da PicoCerto</h4> 
        
        <div className="flex justify-content" class="beach">
        
        
          <h6 className="text"><FaWater/> <strong> Praia : </strong>{Pico.Nome_Praia}</h6>
          <h6 className="text-inline"> <FaUmbrellaBeach /> <strong>Pico : </strong> {Pico.Nome_Pico}</h6>
          <h6 className="text-inline">  <Gi3DStairs/>  <strong>Nivel :</strong> {Pico.Desc_Nivel}</h6>
          <h6 className="text-inline"> <GiWaveSurfer /> <strong>Altura (ft) : </strong> De {Pico.Altura_Min_Onda} a {Pico.Altura_Max_Onda}</h6>
          <h6 className="text-inline"><GiSurfBoard /> <strong> Qualidade : </strong>{Pico.Nota_Qualidade_Surf}<AiOutlineStar/></h6>
          <button type="button" class="btn btn-success">Clique aqui para agendar sua trip!</button>
        </div>
      </div>
    </div>
  );
};

export default BeachInfo;

