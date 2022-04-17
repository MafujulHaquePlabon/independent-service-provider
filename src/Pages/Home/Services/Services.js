import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Services = () => {
    return (
        <div className='w-100  '>
            <h1 className='my-5'>My services</h1>
           <div  className='row row-cols-1 row-cols-md-3 w-100 gy-5 '>
           <div>
           <Card style={{ width: '18rem' , height:"400px", margin:"Auto" }}>
  <Card.Img variant="top" src="https://imgs.search.brave.com/VKTDN2FM_Naft7xdbmLAg6vZhIkCmz4Arlp7YpvnySo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzU3/MC82MTAvb3JpZ2lu/YWwvbWVkaWNhbC1j/b25jZXB0LWRvY3Rv/ci13aXRoLXdvbWFu/LXBhdGllbnQtaW4t/ZmxhdC1jYXJ0b29u/LW9uLWhvc3BpdGFs/LWhhbGwtdmVjdG9y/LmpwZw" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn-success px-3 py-2 border-0 rounded mt-4">Go Checkout</Button>
  </Card.Body>
</Card>
   </div>   
               <div>
               <Card style={{ width: '18rem' , height:"400px",margin:"Auto" }}>
  <Card.Img variant="top" src="https://imgs.search.brave.com/jYY3Sx4PiP2oR_g4UzuojE3XwoTtHlJzt1FJIaaKVWY/rs:fit:622:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/aldmUXdEdGRlVkFa/dVUtVS1Geld3SGFG/cCZwaWQ9QXBp" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn-success px-3 py-2 border-0 rounded">Go Checkout</Button>
  </Card.Body>
</Card>
               </div>
           <div>
           <Card style={{ width: '18rem'  , height:"400px",margin:"Auto"  }}>
  <Card.Img variant="top" src="https://imgs.search.brave.com/rGktPNTNtAfnIy-n9deR57hExCHQLoLL8F-0rUOe-h4/rs:fit:1200:957:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vei9kb2N0/b3ItdGFsa2luZy10/by1oaXMtcGF0aWVu/dC12ZWN0b3ItaWxs/dXN0cmF0aW9uLWhv/c3BpdGFsLTY5MzA4/MDA0LmpwZw" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className="btn-success px-3 py-2 border-0 rounded">Go Checkout</Button>
  </Card.Body>
</Card>
       </div> 
          </div>
        </div>
    );
};

export default Services;