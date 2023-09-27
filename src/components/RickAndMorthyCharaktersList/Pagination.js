import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  //   const [width, setWidth] = useState(window.innerWidth);
  //   const updateDimensions = () => {
  //     setWidth(window.innerWidth);
  //   };
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  //   useEffect(() => {
  //     window.addEventListener("resize", updateDimensions);
  //     return () => window.removeEventListener("resize", updateDimensions);
  //   }, []);

  return (
    <>
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        // marginPagesDisplayed={width <= 250 ? 1 : 2}
        // pageRangeDisplayed={width <= 250 ? 1 : 2}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        pageCount={info?.pages}
        onPageChange={pageChange}
        className="pagination "
        nextLabel="Next"
        previousLabel="Prev"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};
