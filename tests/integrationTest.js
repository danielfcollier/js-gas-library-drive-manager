function integrationTest() {
  const baseDirId = "1V-9TQLkGTh9EM0u-RYHp8xUQ5VyM6RWi";
  const tree = {
    folders: {
      root: {
        name: "Daniel Collier",
        files: [
          {
            id: "19vklLgc_RwVwcKwA7_i22Sr823PQOpPLKlwTxf3y5hk",
            name: "Daniel Collier",
          },
        ],
      },
      sub: [
        {
          name: "Exames",
        },
        {
          name: "Receitas",
          files: [
            {
              id: "19vklLgc_RwVwcKwA7_i22Sr823PQOpPLKlwTxf3y5hk",
              name: "Daniel Collier",
              data: {
                Test: "Substitui teste",
                Var1: "003.212.781-27",
                Var2: "28/01/2023",
              },
            },
          ],
        },
      ],
    },
  };

  MakeTree(baseDirId, tree);
}
