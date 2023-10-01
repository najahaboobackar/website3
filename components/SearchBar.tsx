"use client";
import React, { use } from 'react'
import { useState } from 'react'
import { SearchManufactures } from '.'
import Image from 'next/image'
import { text } from 'stream/consumers'
import { useRouter } from 'next/navigation'
const SearchButton =({otherClasses}:{otherClasses:string})=>{
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
       <Image src="/magnifying-glass.svg" alt="magnifying image "width={40} height={40} className="object-contain"/>
    </button>
   
  )
}

const SearchBar = () => {
    const [make,setMake]=useState(" ");
    const [model,setModel]=useState(" ");
    const router=useRouter();
    const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(make===" "&& model===" ") {
      return alert("pls fill the box")
      

    }

    updateSearchParams(model.toLowerCase(),make.toLowerCase());
    }
    const updateSearchParams =(model:string,make:string)=>{
      const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("model",model);
        searchParams.set("make",make);
        console.log(searchParams.toString());

      const newPathname=`${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)
    }
  return (
   <form className='searchbar' onSubmit={handleSearch}>
    <div className='searchbar__item'>
        <SearchManufactures
        make ={make }
        setMake={ setMake}
        />
<SearchButton otherClasses="sm:hidden"/>
    </div>
    <div className='searchbar__item'>
    <Image src="/model-icon.png" width={45} height={45} className='absolute w-[20px] h-[20px] ml-4 'alt="car model" />
    <input type="text"
    name="model"
    value={model}
    onChange={(e)=>setModel(e.target.value)}
    placeholder='trigger your search'
    className='searchbar__input'/>
<SearchButton otherClasses="sm:hidden"/>
    </div>
    <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar
