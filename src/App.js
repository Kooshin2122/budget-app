import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import Cards from './components/Cards';
import { FaRegMoneyBillAlt, FaAmazonPay } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { useCustomHook } from './services/Context';
import CustomTable from './components/CustomTable';


function App() {
  const { inCome, setInCome, expenses, transactions } = useCustomHook()
  console.log('expenses----------', transactions);
  return (
    <div className="w-[100%] h-[98vh] bg-gray-50">
      <Header />
      <section className='flex justify-between'>
        <div className='w-[40%] h-[100vh] p-7 flex flex-col gap-10'>
          <IncomeForm />
          <ExpenseForm />
        </div>
        <div className='w-[60%] p-7 flex flex-col gap-7'>
          <div className='w-[100%] grid grid-cols-3 gap-x-7'>
            <Cards
              amount={inCome}
              Icon={FaRegMoneyBillAlt}
              cardName='Monthly income'
              color='text-blue-500'
            />
            <Cards
              amount={expenses.amount}
              Icon={FaAmazonPay}
              cardName='Expenses'
              color='text-rose-500'
              fontSize='text-5xl'
            />
            <Cards
              amount={inCome - expenses.amount}
              Icon={GiMoneyStack}
              cardName='Balance'
              color='text-green-500' />
          </div>

          <div className='w-[100%] h-[57vh] p-5 bg-white shadow-md'>
            <CustomTable />
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
