"use client";
import React from "react";
import Image from "next/image";

import {
  building,
  dining,
  gate,
  hall,
  dining2,
  Lake_Side,
  room1,
  room2,
  room3,
  washroom,
  washroom2,
  garden_Area,
} from "@/assets";

const GallaryFlow = () => {
  return (
    <div className="image-grid grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4 grid_column">
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer "
            src={building}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={garden_Area}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={gate}
            alt="resort bhama lake"
          />
        </div>
      </div>
      <div className="grid gap-4 grid_column">
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={Lake_Side}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={room1}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl ">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={room2}
            alt="resort bhama lake"
          />
        </div>
      </div>
      <div className="grid gap-4 grid_column">
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={room3}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={dining}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={dining2}
            alt="resort bhama lake"
          />
        </div>
      </div>
      <div className="grid gap-4 grid_column">
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={hall}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={washroom2}
            alt="resort bhama lake"
          />
        </div>
        <div className="img transition-all rounded-lg shadow-xl hover:shadow-2xl">
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={washroom}
            alt="resort bhama lake"
          />
        </div>
      </div>
    </div>
  );
};

export default GallaryFlow;
