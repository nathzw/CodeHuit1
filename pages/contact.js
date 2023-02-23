import React from 'react';
// import styles from "../styles";
import { useState } from 'react';
import { useEffect } from 'react';
import { Footer, Navbar } from '../components';
import '../styles/globals.css';
import HeroC from '../sections/HeroC';
import FormC from '../components/FormC';
// import { ClipLoader } from "react-spinners";
import SyncLoader from 'react-spinners/SyncLoader';

function Contact() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <div className={`loader`}>
      {loading ? (
        <SyncLoader color={"#b4ff00"} loading={loading} size={20} />
      ) : (
        <div className="overflow-hidden bg-black">
          <Navbar />
          <HeroC />
          <div className="relative">
            <FormC />
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Contact