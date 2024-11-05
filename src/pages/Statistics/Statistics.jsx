import React from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  Line,
  ResponsiveContainer,
  Scatter,
} from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
  // Use the loader data
  const data = useLoaderData();
  const productData = data.productData;

  return (
    <>
      <section className='px-4 xl:px-0'>
        <Helmet>
          <title>Statistics | Gadget E-commerce website</title>
        </Helmet>

        <div className="section_hero container mt-4 mx-auto text-center bg-primary text-white rounded-lg h-[140px] lg:h-[160px] py-4">
          <h2 className='text-3xl md:text-5xl font-semibold'>Statistics</h2>
          <p className='px-2 text-xs lg:text-lg md:w-7/12 mx-auto mt-2'>
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>

        </div>

        <div className='container mx-auto py-3'>
          <h2 className='text-xl font-bold md:text-2xl lg:text-3xl mt-5'>Statistics</h2>
        </div>

        <div className='max-w-6xl mx-auto mt-12'>
          <ResponsiveContainer width="100%" height={500} >
            <ComposedChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#82ca9d" />
              <Bar dataKey="price" barSize={30} fill="#413ea0" />
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>


      </section>
    </>
  );
};

export default Statistics;
