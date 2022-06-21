import React from "react";

const Columns = () => {
  return (
    <React.Fragment>
      <td>Hello</td>
      <td>World</td>
    </React.Fragment>
  );
};

const Table = () => {
  return (
    <table>
      <tr>
        <Columns />
      </tr>
    </table>
  );
};

function FragementExample() {
  return <Table></Table>;
}

export default FragementExample;
