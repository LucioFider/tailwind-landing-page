import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-4xl text-red-500">Featured Services</h1>
      <article>
        <div className="max-w-sm">
          <Image
            src="https://img.freepik.com/free-photo/young-female-traveler-enjoying-rural-surroundings_23-2149125547.jpg?w=740&t=st=1665446679~exp=1665447279~hmac=3b0493ef7630693a42d40b5a12ed60cc8a2ff0e012c2b14d44573fa91ea05013"
            alt="autume"
            layout="fill"
            objectFit="cover"
            className="h-52 w-52"
          />
        </div>
        <div>
          <h1></h1>
        </div>
      </article>
    </div>
  );
};

export default Feature;
