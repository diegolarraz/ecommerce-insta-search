import React from 'react'
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination
  } from 'react-instantsearch-dom';
import ProductCard from '../ProductCard';
import algoliasearch from 'algoliasearch/lite';
import classes from './InstaSearch.module.css'

const searchClient = algoliasearch('NJHW9RGPR0', 'e89bb752c801a081713e3ec3d0b7b39a');

const InstaSearch = () => {
    return(
        <section className='middleSection'>
            <div className="container">

                <InstantSearch searchClient={searchClient} indexName="new-index-1649104049">
 
                    <div className="search-panel">
                        <div className="search-panel__results">
                        <div className={classes.Slogan}>
                            <p>Begin your search and create your list!</p>
                        </div>
                        <div className={classes.SearchBoxWrap}>
                            <SearchBox
                                className="searchbox"
                                translations={{
                                placeholder: '',
                                }}
                            />
                        </div>
                        <br />
                        <br />
                        <div className={classes.CardContainer}>
                            <div className={classes.Spacer}></div>
                            <div className={classes.CardCont}>
                                <Hits hitComponent={ProductCard} className="ProductCards"/>
                            </div>
                            <div className={classes.Spacer}></div>
                        </div>
                        <br />
                        <div className="pagination">
                            <Pagination />
                        </div>
                        <br />
                        </div>
                    </div>
                </InstantSearch>
            </div>
        </section>

    )
}

export default InstaSearch;