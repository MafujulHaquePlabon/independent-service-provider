import React, { useEffect, useState } from 'react';
import Service from './Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-success text-center mt-5'> My Services</h1>
            <div   className='row row-cols-1 row-cols-md-3 w-100 gy-5 '>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;

























/* import React from 'react';
import Service from './Service/Service';

const Services = () => {
  return (
    <div>
      <Service></Service>
    </div>
  );
};

export default Services; */