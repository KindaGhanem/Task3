import Cards from '../Cards/Cards'
import './FilterComponent.css'
import {VillaCardsProperties} from './../Section6Properties/Section6Properties'
import { useState } from 'react';


import imgPropertyCard7 from './../../assets/images/property-01.jpg'
import imgPropertyCard8 from './../../assets/images/property-02.jpg'
import imgPropertyCard9 from './../../assets/images/property-03.jpg'


export default function FilterComponent() {
  const VillaCardsProperties2 = [
    ...VillaCardsProperties,
    {
        id: 7,
        img: imgPropertyCard7,
        button:'Apartment' ,
        price:'$1.460.000',
        title:'26 Old Street Miami, OR 38540' ,
        num1: '5',
        num2: '4',
        num3: '225m2',
        num4: '3',
        num5:'10 spots' ,
        category: "Card1" ,
    },
    {
        id: 8,
        img: imgPropertyCard8,
        button:'Apartment' ,
        price:'$1.460.000',
        title:'26 Old Street Miami, OR 38540' ,
        num1: '5',
        num2: '4',
        num3: '225m2',
        num4: '3',
        num5:'10 spots' ,
        category: "Card1" ,
    },
    {
        id: 9,
        img: imgPropertyCard9,
        button:'Apartment' ,
        price:'$1.460.000',
        title:'26 Old Street Miami, OR 38540' ,
        num1: '5',
        num2: '4',
        num3: '225m2',
        num4: '3',
        num5:'10 spots' ,
        category: "Card1" ,
    },
  ];



  const [items , setItems] = useState(VillaCardsProperties2)

  const filterItems = (catItem)=>{
      const updateItems = VillaCardsProperties2.filter((curItem)=>{
          return curItem.category === catItem
      });
      setItems(updateItems); 
  }

  
  return (
    <section className='SectionFilter'>
         <div className='Button-Filter'>
            <button onClick={()=>setItems(VillaCardsProperties2)} >Show All</button>
            <button onClick={()=>filterItems("Card1")}>Apartment</button>
            <button onClick={()=>filterItems("Card2")} >Villa House</button>
            <button onClick={()=>filterItems("Card3")} >Penthouse</button>
        </div>

        <Cards data={items} />


        <div className='PagenationButton'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button> 
              &gt;
              &gt;
            </button>
        </div>




    </section>
  )
}
