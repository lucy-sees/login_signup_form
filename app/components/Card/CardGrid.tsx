"use client";
import React from 'react';

const CardGrid = ({ children }) => (
  <main className="
    grid 
    grid-cols-1 
    gap-4 
    mx-auto 
    w-full 
    max-w-[15rem]
    md:grid-cols-2 
    md:max-w-[30rem]
    xl:grid-cols-4 
    xl:max-w-[60rem]
  ">
    {children}
  </main>
);
