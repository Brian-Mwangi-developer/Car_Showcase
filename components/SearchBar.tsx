"use client"

import React from 'react'
import { SearchManufacturer } from '.';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState("");
    const router =useRouter()
    const handleSearch =(e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <form className='searchabr' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            manufacturer ={manufacturer}
            setManufacturer ={setManufacturer} />
        </div>
    </form>
  )
}

export default SearchBar