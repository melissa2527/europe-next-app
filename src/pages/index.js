import React, {useState} from 'react';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/Layout/SearchInput/SearchInput';
import styles from '../styles/Home.module.css';
import CountriesTable from '../components/Layout/CountriesTable/CountriesTable';

export default function Home({europe}) {
  console.log(europe)
  const [keyword, setKeyword] = useState('');

  const filteredCountries = europe.filter(country => country.name.toLowerCase().includes(keyword) ||
  country.subregion.toLowerCase().includes(keyword))

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase())
  }

  return (
   <Layout>
     <div className={styles.countries}>Found {europe.length} Countries</div>
     <SearchInput placeholder='Filter by Name or SubRegion' onChange={onInputChange}/>
     <CountriesTable countries={filteredCountries} />
   </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json()
  const europe = countries.filter(c => c.region === 'Europe');

  return {
    props: {
      europe
    }
  }
}