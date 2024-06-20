import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ pageCount, onPageChange }: any) => {
    return (
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageChange}
            containerClassName={"pagination"}
            // subContainerClassName={'pages pagination'}
            activeClassName={"active"}
        />
    );
};

export default Pagination;
