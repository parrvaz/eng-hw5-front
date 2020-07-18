import React, { Component } from "react";
import { List, Divider } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

class Forms extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:8000/api/forms");
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <Divider orientation="left">
          <h1>Forms</h1>
        </Divider>
        <List
          size="large"
          bordered
          dataSource={this.state.data}
          renderItem={(item) => (
            <List.Item>
              {" "}
              <Link to={`/api/forms/${item.id}`}>{item.title}</Link>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Forms;
