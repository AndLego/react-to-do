import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        //localStorage solo almacena strings

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          //("nombre con el que se accede", metodo para volverlo string)
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          //metodo para sacar de string y volver objeto
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringfiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringfiedItem);
      setItem(newItem);
    } catch (err) {
      setError(err);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
