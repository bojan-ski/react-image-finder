const ImgSearch = () => {
    const handleSubmit = e => {
        e.preventDefault()

        const searchTerm = e.target.elements[0].value.trim()

        if (!searchTerm) return

        console.log(searchTerm);
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