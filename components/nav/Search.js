// search bar component

function Search() {
  return (
    <div className="nav justify-content-center pt-2">
      <div className="input-group mb-3 m-1" style={{ width: '20rem' }}>
        <input
          type="text"
          className="form-control text-dark fw-normal bg-blur border-0"
          aria-label="Text input with dropdown button"
          placeholder="Search"
        />
        <button
          className="btn btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon">
            <i className="social-icon fa-solid fa-magnifying-glass"></i>
          </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end"></ul>
      </div>
    </div>
  );
}

export default Search;
