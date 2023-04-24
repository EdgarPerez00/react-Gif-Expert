import {useState} from 'react';
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One punch']);

     const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;

        setCategories([newCategory,...categories])
    }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
            onNewCategory={ event=> onAddCategory(event)}
            />
        
       

      
          { categories.map((category) =>(<GifGrid key={category} category={category}/>))  }
       
    </>
  )
}
