import { useGlobalContext } from "../context"

const ImgSearch = () => {
    const { setSearchTerm } = useGlobalContext()

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
                Image Finder
            </h1>

            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="form-input" name="search" placeholder="office" />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </div>
    )
}

export default ImgSearch