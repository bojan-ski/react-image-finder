import { useGlobalContext } from "../context"
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const Pagination = () => {
    const { response, pageNumber, setPageNumber, totalNumberOfPages } = useGlobalContext()
    const availablePages = response?.data?.total_pages

    if (!availablePages || availablePages <= 1 ) return
    
    return (
        <div>
            <button onClick={() => {
                let prevPage = pageNumber - 1

                if (prevPage < 1) {
                    prevPage = totalNumberOfPages
                }
                setPageNumber(prevPage)
            }}>
                <HiChevronDoubleLeft />
                Prev
            </button>

            <button onClick={() => {
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
    )
}

export default Pagination