
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate
}) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  };

  return (
    <nav>
      <ul className="ant-pagination">
        {pageNumbers.map((number) => {
          return <li key={number} className="ant-pagination-item">
            <a onClick={() => paginate(number)} >{number}</a>
          </li>
        })
        }
      </ul>
    </nav >
  )


  {/* < nav >
    <ul>
      {pageNumbers.map((nuber) => {
        <li key={number} className="page-item">
          <a href="#">{number}</a>
        </li>
      })
	</ul>
</nav > */}

}

export default Pagination;
