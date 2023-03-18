import Image from 'next/image';
import React from 'react';

import userTwoImg from '../../public/img/user2.jpeg';
import userThreeImg from '../../public/img/user3.jpeg';
import Container from './Container';

export default function OurTeam() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userTwoImg}
              name="I Putu Saputrayana"
              title="Software Engineer 4+ tahun pengalaman: DOOgether, Pintu."
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image={userThreeImg}
              name="Muh. Isrim"
              title="Software Engineer 4+ tahun pengalaman: DOOgether, Waresix."
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props: any) {
  return (
    <div className="flex flex-col text-center items-center mt-8 space-x-3">
      <Image src={props.image} alt="Avatar" placeholder="blur" className="rounded-full h-24 w-24" />
      <div className="mt-2">
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
