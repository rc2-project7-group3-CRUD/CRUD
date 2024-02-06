import "./Sidebar.css";
import { Button } from "primereact/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardDialog from "../CardDialog/CardDialog";
import { Tree } from 'primereact/tree';
import { NodeService } from '../../services/NodeService';
import { useEffect } from "react";

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [nodes, setNodes] = useState([]);
    const [selectedKey, setSelectedKey] = useState('');
    
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

  const postCard = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/cards";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        url: newUrl,
        description: newDescription,
        author: newAuthor,
      }),
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        setNewTitle("");
        setNewUrl("");
        setNewAuthor("");
        setNewDescription("");
        setVisible(false);
        window.location.reload();
      }
    });
  };

  return (
    <>
      <nav className="navContainer">
        <Link to="/">
          <img src="../../../src/assets/LOGO-CRUDO-APP.svg" className="logo" />
        </Link>

        <div className="card flex justify-content-center">
          <Button
            label="+ Añadir nueva entrada"
            className="addPost"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="treeCategories">
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} className="w-full md:w-30rem" />
        </div>
      

      </nav>
      <CardDialog
        visible={visible}
        onHide={() => setVisible(false)}
        onSubmit={postCard}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newUrl={newUrl}
        setNewUrl={setNewUrl}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        newAuthor={newAuthor}
        setNewAuthor={setNewAuthor}
      />
    </>
  );
};
