import React, { useState, useEffect } from 'react';

const ListsComponent = () => {
  const [listsData, setListsData] = useState(null);

  useEffect(() => {
    // Fetch the data from the JSON file or an API endpoint
    // For simplicity, I'm using a local import here
    import('./data.json').then(data => setListsData(data));
  }, []);

  if (!listsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {listsData.lists.map(list => (
        <div key={list.id}>
          <h2>{list.name}</h2>
          <ul>
            {list.items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListsComponent;
