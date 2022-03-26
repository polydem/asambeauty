const Delivery = () => {
  let today = new Date();

  //Add ca. 3 Delivery dates
  today.setDate(today.getDate() + 3);

  //Format to dd/mm/yyy
  let deliveryDay = today.getDate().toString().padStart(2, "0"),
    deliveryMonth = (today.getMonth() + 1).toString().padStart(2, "0"),
    deliveryYear = today.getFullYear().toString().padStart(2, "0"),
    deliveryDate = deliveryDay + "/" + deliveryMonth + "/" + deliveryYear;

  return <div className="product-availabiity">
    <div className="isAvailable"></div>
    Lieferung ca. {deliveryDate}
    </div>;
};

export default Delivery;
