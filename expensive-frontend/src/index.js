import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configStore from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { startAccountUser } from './actions/userAction';
import { startListCategory } from './actions/categoryAction';
import { startBudgetUser } from './actions/budgetAction';
import { startExpenseList } from './actions/expenseAction';
import { startListProfile, startUpdateProfile, startUpdateProfilePic } from './actions/profileAction';

const store = configStore()
console.log(store)

store.subscribe(() => {
  console.log(store.getState())
})
console.log(store.getState())

if (localStorage.getItem("token")) {
  store.dispatch(startAccountUser())
  store.dispatch(startListCategory())
  store.dispatch(startBudgetUser())
  store.dispatch(startExpenseList())
  store.dispatch(startListProfile())
  store.dispatch(startUpdateProfile())
  store.dispatch(startUpdateProfilePic())


}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='name'>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>
  </div>





);


