var React = require("react");

var tableMixin = {
  setTable(res) {
    this.setState({
      universities: res,
      totalItems: res.length,
      itemsPerPage: 10,
      activePage: 1,
    });
  },
  handleClick(page) {
    this.setState({
      activePage: page,
    });
  },
  renderTable(rows = []) {
    if (!this.state.universities.length) {
      return null;
    }
    return (
      <table>
        {/*  не хватало тега */}
        <thead>
          <tr>
            <th>University name</th>
            <th>Country code</th>
            <th>Domains</th>
          </tr>
        </thead>
        {/*  не хватало тега */}
        <tbody>
          {rows.map((u, ind) => (
            <tr key={ind}>
              <td>{u.name}</td>
              <td>{u.alpha_two_code}</td>
              <td>
                {u.domains.map((d, index) => (
                  <a key={index} href={`https://${d}`} target="_blank">
                    {" "}
                    {d}{" "}
                  </a>
                ))}
              </td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export default tableMixin;
