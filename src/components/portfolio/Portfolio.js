import React, {useEffect, useState} from 'react'
import './Portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from '../../data'


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
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  useEffect(() => {

      switch(selected){
        case "featured":
            setData(featuredPortfolio);
            break;
        case "featured":
            setData(featuredPortfolio);
            break;
        case "featured":
            setData(featuredPortfolio);
            break;
        case "featured":
            setData(featuredPortfolio);
            break;
        case "featured":
            setData(featuredPortfolio);
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
          <div className='container'>
            <div className='item'>
              <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <h3> Banking app</h3>
              </div>
              <div className='item'>
              <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <h3> Banking app</h3>
              </div>
              <div className='item'>
              <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <h3> Banking app</h3>
              </div>
              <div className='item'>
              <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <h3> Banking app</h3>
              </div>
              <div className='item'>
              <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <h3> Banking app</h3>
              </div>
              <div className='item'>
              <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <h3> Banking app</h3>
              </div>
            </div>
        </div>
  )
}

export default Portfolio