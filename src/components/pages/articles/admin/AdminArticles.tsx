import React, { useEffect, useState } from "react";
import ArticleService from "../../../../services/ArticleService";
import { Article } from "../../../../common/types/Article";
import Test from "../test_article";
import { Button, Space, Table } from "antd";
import { Link, useHistory } from "react-router-dom";

const AdminArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const history = useHistory();

  useEffect(() => {
    ArticleService.getAllArticles()
      .then((resp) => setArticles(resp.data))
      .catch(console.log);
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    // },
    // {
    //   title: "Created At",
    //   dataIndex: 'createdAt'
    // },
    // {
    //   title: "Updated At",
    //   dataIndex: 'updatedAt'
    // },
    {
      title: "",
      dataIndex: "actions",
      render: (text: any, record: any) => (
        <Space size="middle">
          <Link to={`/admin/articles/${record.id}`}>Edit</Link>
          <a onClick={() => ArticleService.deleteArticleById(record.id)}>
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Button
        type={"primary"}
        onClick={() => {
          history.push("/admin/articles/-1");
        }}
      >
        New
      </Button>
      <Table columns={columns} dataSource={articles} />
    </>
  );
};

export default AdminArticles;
