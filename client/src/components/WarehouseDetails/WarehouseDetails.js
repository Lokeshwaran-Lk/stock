import "./WarehouseDetails.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import editButton from "../../assets/Icons/edit-24px.svg"
import sortButton from "../../assets/Icons/sort-24px.svg"
import trashButton from "../../assets/Icons/delete_outline-24px.svg";
import axios from "axios";
// import { response } from "express";

const inventoriesArray = axios.get('http://localhost:8080/inventories')
  .then(response => { console.log(response.data) })

const warehousesArray = axios.get('http://localhost:8080/warehouses')
  .then(response => {
    console.log(response.data)
  })

function WarehouseDetails() {
  return <div>
    <header className="Header">
      <h1 className="Header__title"><img src={backArrow} alt="arrow_back" />Warehouse_name</h1>
      {/* Populate this with details from the warehouses array */}
      {/* need to find a way to change the icon to white */}
      <button className="Header__edit-button"><img className="Header__edit-icon" src={editButton} alt="edit" />Edit</button>
    </header>
    <section className="warehouse-details">
      <div className="warehouse-details__address">
        <h2 className="warehouse-details__title">WAREHOUSE ADDRESS:</h2>
        <p className="warehouse-details__info">33 Pearl Street SW</p>
        <p className="warehouse-details__info">Washington, USA</p>
      </div>
      <div className="warehouse-details__name">
        <h2 className="warehouse-details__title">CONTACT NAME:</h2>
        <p className="warehouse-details__info">Graeme Lyon</p>
        <p className="warehouse-details__info">Warehouse Manager</p>
      </div>
      <div className="warehouse-details__contact">
        <h2 className="warehouse-details__title">CONTACT INFORMATION:</h2>
        <p className="warehouse-details__info">+1-647-504-0911</p>
        <p className="warehouse-details__info">glyon@instock.com</p>
      </div>
    </section>
    <section className="Inventory">
      <ul className="Inventory__header">
        <li className="Inventory__item-title">INVENTORY ITEM <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">CATEGORY <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">STATUS <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">QTY <img src={sortButton} alt="sortButton" /></li>
        <li className="Inventory__item-title">ACTIONS <img src={sortButton} alt="sortButton" /></li>
      </ul>
      {/* populate this with details from the inventories array */}
      <ul className="Inventory__items">
        <li>Item name</li>
        <li>Electronics</li>
        <li>Stock-status</li>
        <li>Amt number</li>
        <li><img src={trashButton} alt="delete" /><img src={editButton} alt="edit" /></li>
      </ul>
    </section>
  </div>;
}

export default WarehouseDetails;
