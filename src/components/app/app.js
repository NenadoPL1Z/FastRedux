import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../asyncActions/customers";
import { addCustomerAction, removeCustomersAction } from "../store/customerReducer";

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 10 });
  };

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 10 });
  };

  const addUser = () => {
    const customer = {
      name: "Иван",
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeUser = (customer) => {
    dispatch(removeCustomersAction(customer.id));
  };

  return (
    <div>
      <h1>Cash: {cash}</h1>
      <div>
        <button onClick={() => addCash()}>+10</button>
        <button onClick={() => getCash()}>-10</button>
        <button onClick={addUser}>Добавить клента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Клиенты из базы</button>
      </div>
      {customers.length ? (
        <div>
          {customers.map((item, index) => {
            return (
              <div id={item.id} onClick={() => removeUser(item)} key={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Клиенты отсутсвуют</h1>
      )}
    </div>
  );
};

export default App;
