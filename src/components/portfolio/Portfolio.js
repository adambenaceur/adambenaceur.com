import React, {useEffect, useState} from 'react'
import './Portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import { featuredPortfolio, webPortfolio, mobilePortfolio, pythonPortfolio, solidityPortfolio} from '../../data'


function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'python',
      title: 'Python',
    },
    {
      id: 'web 3.0',
      title: 'Web 3.0',
    },
  ];

  useEffect(() => {

      switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
        case "web":
            setData(webPortfolio);
            break;
        case "mobile":
            setData(mobilePortfolio);
            break;
        case "design":
            setData(pythonPortfolio);
            break;
        case "web 3.0":
            setData(solidityPortfolio);
            break;
            default:
              setData(featuredPortfolio);
      }
  },[selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1 className='title-page'>Portfolio</h1>
        
        <ul>
          {list.map( (item) => (
            <PortfolioList 
              title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected} 
              id={item.id}
            />
          ))}
        </ul>
            <div className='portfolio-container'>
              <div className='container'>
                {data.map(data => (

                <div className='item'>
                  <img src={data.img} />
                  <h3>{data.title}</h3>
                </div>

                  ))}
                </div>
            </div>
        </div>
  )
}

export default Portfolio