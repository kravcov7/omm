const { ApiMixinFactory } = require("./mixins/apiMixin");
const tableMixin = require("./mixins/tableMixin").default;
const paginationMixin = require("./mixins/paginationMixin");
const React = require("react");
const createReactClass = require("create-react-class");
const Pagination = require("./Pagination").default;
const $ = require("jquery");

const apiMixin = new ApiMixinFactory().getApiMixin($.ajax);
const App = createReactClass({
  mixins: [tableMixin, paginationMixin, apiMixin],

  render() {
    const self = this;
    const start = this.state.itemsPerPage * (this.state.activePage - 1);
    const end = this.state.itemsPerPage * this.state.activePage;
    const universities = this.state.universities.slice(start, end);
    const table = self.renderTable(universities);

    return (
      <div>
        <label htmlFor="#search">Поиск</label>
        <br />
        <input
          id="search"
          onChange={this.handleSearchChange}
          type="string"
          value={this.state.value}
        />
        <div>{table}</div>
        <Pagination
          itemsPerPage={10}
          totalItems={this.state.universities.length}
          onPageChange={self.handleClick} // исправил onPageChange для работы пагинации
        />
        <div>{this.state.color}</div>
      </div>
    );
  },
});

export { App };

// все var'ы переписал на const
