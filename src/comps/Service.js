
import React from 'react';
import  Button from 'react-bootstrap/Button';
import '../Styles.css/Service.css';
function Service() {
  return (
    <div>
      <div className='service'>
      
        <h2>Our Services</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable 
        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable
        </p>

       </div>

       <div className='cardservice'>

        <div className='cardservices'>
            <img src='https://cdn.pixabay.com/photo/2015/03/14/18/09/welder-673559__340.jpg' alt='bible'/>
               <div className='text'>
                <h4>Construction</h4>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Thnt here, content here', making it look like readable</p>
                <Button>Learn More</Button>
            </div>
        </div>
        <div className='cardservices'>
            <img src='https://cdn.pixabay.com/photo/2018/05/11/11/29/construction-3390318__340.jpg' alt='bible'/>
               <div className='text'>
                <h4> Manpower</h4>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Thnt here, content here', making it look like readable</p>
                <Button>Learn More</Button>
            </div>
        </div>
           
        <div className='cardservices'>
            <img src='https://cdn.pixabay.com/photo/2017/11/23/22/21/reservoir-2973775__340.jpg' alt='bible'/>
               <div className='text'>
                <h4> Constructing</h4>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Thnt here, content here', making it look like readable</p>
                <Button>Learn More</Button>
            </div>
        </div>

        <div className='cardservices'>
            <img src='https://cdn.pixabay.com/photo/2017/05/22/22/44/bridges-2335609__340.jpg' alt='bible'/>
               <div className='text'>
                <h4>Designing</h4>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Thnt here, content here', making it look like readable</p>
                <Button>Learn More</Button>
            </div>
        </div>
        <div className='cardservices'>
            <img src='https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096__340.jpg' alt='bible'/>
               <div className='text'>
                <h4>Metal Works</h4>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Thnt here, content here', making it look like readable</p>
                <Button>Learn More</Button>
            </div>
        </div>
        <div className='cardservices'>
            <img src='https://cdn.pixabay.com/photo/2017/05/22/22/44/work-industrial-2335611__340.jpg' alt='bible'/>
               <div className='text'>
                <h4>Civil Works</h4>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Thnt here, content here', making it look like readable</p>
                <Button>Learn More</Button>
            </div>
        </div>
        </div>
     
    </div>
  )
}

export default Service