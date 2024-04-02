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
        <div>
            <h1>
                Image - Images Finder
            </h1>

            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="form-input" name="search" placeholder="Enter search term" />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>

            {searchResults ? <h2>Found images: {searchResults}</h2> : ''}
            <h2></h2>
        </div>
    )
}

export default ImgSearch