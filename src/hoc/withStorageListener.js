import React from "react";

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {


    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("hubo cambios");

        props.sincronize()

        //este evento nos ahorra hacer todo lo que se hizo con el HOC para actualizar las otras ventanas, sin embargo hace re-render de toda la app y no solo el componente
        // window.location.reload();
      }
    });

    return <WrappedComponent  />;
  };
};

export { withStorageListener };
