import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

export const RickAndMorthyCharaktersList = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="rick-and-morthy-component">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        className="paginator"
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};
