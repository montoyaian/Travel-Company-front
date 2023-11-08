import React,{useEffect,useState} from 'react'
import { DivAdd } from '../../../../components/DivAdd'
import { Divtable } from '../../../../components/Divtable'
import {Link} from 'react-router-dom'
import {confirmation, sendrequest} from '../../../../functions'
import Card from '../card'
import image1 from '../../../../assets/1366_2000.jpeg'
export const FirstClass = () => {
  const [vuelos, setVuelos] = useState([])
  const [classLoad, setClassload] = useState('')
  const [classTable, setTable] = useState('')
  useEffect(()=>{
    getVuelos()
  }, [])
  const getVuelos = async () =>{
    const res =await sendrequest('GET','','/flight/get/flights/all/first_class','')
    setVuelos(res)
    setTable('')
    setClassload('d-none')
  }
  const deleteVuelos= (id,name)=>{
    confirmation(name,('/flight/delete/flight/'+ id + '/first_class' ),'')

  }
  return (
    <div className='container-fluid'>
      <DivAdd>
        <Link to='/flight/createFirst' className='btn btn-dark'>
          <i className='fa-solid fa-circle-plus '></i>
          Agregar</Link>
      </DivAdd>
      <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {vuelos.map(({id , origin,destination,date,positions,hour,cost }) => (
          <div className="col-md-4 col-sm-6" key={id}>
            <Card id={id} image={image1} origin={origin} destination={destination} date={date} positions={positions} hour={hour} cost={cost} />
          </div>
        ))}
        </div>
      </div>

    </div>
  )
}
export default FirstClass
