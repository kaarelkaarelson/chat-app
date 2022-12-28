import React from 'react';

const PageNotFound = () => (
  <div className="flex flex-row justify-center items-center content-center h-screen my-auto font-sans  text-black bg-white">
    <h1 className="inline-block border-r m-0 mr-5 py-2.5 pr-6 font-2xl font-medium align-top">
      404
    </h1>
    <div className="inline-block text-left align-middle h-12 leading-10 ">
      <h2 className="font-normal m-0 p-0 text-sm">Page Not Found.</h2>
    </div>
  </div>
);

export { PageNotFound };
