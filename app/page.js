import Hero from '@/components/Hero';
import HomeProperty from '@/components/HomeProperty';
import InfoBoxes from '@/components/InfoBoxes';
import React from 'react';


const Home = async () => {

  // console.log(process.env.DB_URL);
  // await connectDB()

  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperty />
    </div>
  );
};

export default Home;