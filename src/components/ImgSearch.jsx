import { useGlobalContext } from "../context"

const ImgSearch = () => {
    const { setSearchTerm, response } = useGlobalContext()
    const searchResults = response?.data?.total

    const handleSubmit = e => {
        e.preventDefault()

        const enteredValue = e.target.elements.search.value.trim()

        if (!enteredValue) return

        setSearchTerm(enteredValue);

        e.target.elements.search.value = ''
    }    

    return (
        <section className="section-search">
            <h1>
                Image - Images Finder
            </h1>

            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="search-form-input" name="search" placeholder="Enter search term" />
                <button type="submit" className="btn search-form-btn">
                    Search
                </button>
            </form>

            {searchResults ? <h3>Found images: {searchResults}</h3> : ''}
        </section>
    )
}

export default ImgSearch