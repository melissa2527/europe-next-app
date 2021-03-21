import Layout from '../components/Layout/Layout';
import SearchInput from '../components/Layout/SearchInput/SearchInput';

export default function Home({europe}) {
  console.log(europe)
  return (
   <Layout>
     <div >Found {europe.length} Countries</div>
     <SearchInput placeholder='Filter Countries'/>
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