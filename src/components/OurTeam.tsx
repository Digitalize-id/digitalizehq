import React from 'react';

import CFImage from './CFImage';
import Container from './Container';

export default function OurTeam() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 max-w-4xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 opacity-50 duration-300 group-hover:opacity-100 to-pink-600 rounded-lg blur"></div>
          <div className="flex relative flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image="https://digitalizehq.pages.dev/img/user2.jpeg"
              name="I Putu Saputrayana"
              title="Software Engineer 4+ tahun pengalaman: DOOgether, Pintu."
            />
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 opacity-50 duration-300 group-hover:opacity-100 to-pink-600 rounded-lg blur"></div>
          <div className="flex relative flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <Avatar
              image="https://digitalizehq.pages.dev/img/user3.jpeg"
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
    <div className="flex flex-col relative text-center items-center mt-8 space-x-3">
      <CFImage
        src={props.image}
        alt="Avatar"
        className="rounded-full h-24 w-24"
        height={96}
        width={96}
      />
      <div className="mt-2">
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
