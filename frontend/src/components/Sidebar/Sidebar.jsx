import "./Sidebar.css";
import { Button } from 'primereact/button';

export const Sidebar = () => {
  return (
    <nav className="navContainer">
      <img src="../../../src/assets/LOGO-CRUDO-APP.svg" className="logo"/>

      <div className="card flex justify-content-center">
            <Button label="+ Añadir nueva entrada" className="addPost"/>
      </div>
    </nav>
  );
};
