export const NodeService = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "CATEGORIAS",
        data: "Documents Folder",
        icon: "pi pi-fw pi-inbox",
        children: [
          {
            key: "0-0",
            label: "Frontend",
            data: "Work Folder",
        
          },
          {
            key: "0-1",
            label: "Backend",
            data: "Home Folder",
        
          },
        ],
      },
    ];
  },

  

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData());
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
