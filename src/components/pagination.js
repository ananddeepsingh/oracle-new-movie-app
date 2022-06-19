
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate
}) => {

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i)
    };

    return pageNumbers.map((number) => {
      return <li key={number} className="ant-pagination-item">
        <a onClick={() => paginate(number)} >{number}</a>
      </li>
    })

  }

  return (
    <nav>
      <ul className="ant-pagination">
        {getPageNumbers()}
      </ul>
    </nav >
  )
}

export default Pagination;
