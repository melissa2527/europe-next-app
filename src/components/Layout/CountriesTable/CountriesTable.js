import React from 'react'
// import { StylesProvider } from '@material-ui/core';
import styles from './CountriesTable.module.css';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';


const orderBy = (countries, direction) => {
    if (direction === 'asc') {
    return [...countries].sort((a, b) => a.population > b.population ? 1 : - 1)
    }
    if (direction === 'desc') {
        return [...countries].sort((a, b) => a.population > b.population ? -1 : 1)
    }
    return countries;
}

const CountriesTable = ({countries}) => {

    const orderedCountries = orderBy(countries, 'desc');

    const SortArrow = ({direction}) => {
        if (!direction) {
            return <></>;
        }
    }

    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name}>
                    <div>Name: </div>
                    <div className={styles.heading_arrow}>
                        <KeyboardArrowDownRounded color='inherit'/>
                    </div>
                </button>

                <button className={styles.heading_population}>
                    <div>Population: </div>
                    <div className={styles.heading_arrow}>
                        <KeyboardArrowDownRounded color='inherit'/>
                    </div>
                </button>
            </div>

            {orderedCountries.map(c => 
                <div className={styles.row}>
                    <div className={styles.name}>{c.name}</div>
                    <div className={styles.population}>{c.population}</div>
                </div>
            )}
        </div>
    )
}

export default CountriesTable