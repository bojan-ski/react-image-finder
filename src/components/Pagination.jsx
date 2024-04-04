import { useGlobalContext } from "../context"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const Pagination = () => {
    const { response, pageNumber, setPageNumber, totalNumberOfPages } = useGlobalContext()
    const availablePages = response?.data?.total_pages

    if (!availablePages || availablePages <= 1) return

    return (
        <div className="section-pagination">
            <div className="num-page">
                <p>Pages: {pageNumber} / {totalNumberOfPages}</p>
            </div>

            <div className="btn-container">
                <button className="btn btn-prev" onClick={() => {
                    let prevPage = pageNumber - 1

                    if (prevPage < 1) {
                        prevPage = totalNumberOfPages
                    }
                    setPageNumber(prevPage)
                }}>
                    <HiChevronDoubleLeft />
                    Prev
                </button>

                <button className="btn btn-next" onClick={() => {
                    let nextPage = pageNumber + 1

                    if (nextPage > totalNumberOfPages) {
                        nextPage = 1
                    }
                    setPageNumber(nextPage)
                }}>
                    Next
                    <HiChevronDoubleRight />
                </button>
            </div>
        </div>
    )
}

export default Pagination