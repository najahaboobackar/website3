"use client";

import { makes } from '@/constants/constants';
import { SearchManufacturesProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';


const SearchManufactures = ({make, setMake}: SearchManufacturesProps) => {
    const [query, setQuery] = useState(" ");
    const Filtermake = query === "" 
        ? makes
        : makes.filter(item => 
            item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

    return (
        <div className='search_make'>
            <Combobox>
                <div className='relative w-full'> </div>
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        className='ml-4'
                        alt="car logo"
                    />
                </Combobox.Button>
                <Combobox.Input 
                    className="search-make__input" 
                    placeholder='Volkswagon'
                    displayValue={(make: string) => make}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <div>
                        <Combobox.Options>
                            {Filtermake.length === 0 && query !== "" ? (
                                <Combobox.Option value={query} className="search-make__option">
                                    create "{query}"
                                </Combobox.Option>
                            ) : Filtermake.map(item => (
                                <Combobox.Option 
                                    key={item}
                                    className={({ active }) => `search-make__option ${active ? 'bg-primary-blue text-white' : 'text-grey-800'}`}
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                            >
                                                {item}
                                            </span>
                                            {selected && (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                                                >
                                                    
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </div>
                </Transition>
            </Combobox>
        </div>
    );
}

export default SearchManufactures;
