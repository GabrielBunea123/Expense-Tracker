import React, { useEffect, useState } from 'react'
import CreateExpense from '../components/CreateExpense';
import PaymentsList from '../components/PaymentsList';
import AreaChartExp from '../components/AreaChartExp';
import StackedChartExp from '../components/StackedChartExp';


const Home = () => {

    const [period, setPeriod] = useState("Daily")
    const [expenses, serExpenses] = useState([
        { id: 0, value: 10, label: 'Groceries' },
        { id: 1, value: 15, label: 'Entertainment' },
        { id: 2, value: 20, label: 'Subscriptions' },
    ])
    const [total, setTotal] = useState(null)
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value)
    }

    useEffect(() => {
        var sum = 0;
        expenses?.map((item, index) => {
            sum += item.value
        })
        setTotal(sum)
    }, [expenses])

    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div className="p-3 pt-1 pe-5 total-balance">Recent payments</div>
                <div className="p-3 pt-1 total-balance">Balance {total}$</div>
            </div>
            <div className="py-5">
                <div className="d-flex justify-content-between flex-wrap">
                    <AreaChartExp />
                    <PaymentsList />
                </div>
            </div>

            <button className="btn btn-default m-3 mb-5" onClick={handleDialogClickOpen}>+ Add Expense</button>
            <CreateExpense open={dialogOpen} handleClickOpen={handleDialogClickOpen} handleClose={handleDialogClose} />
           
            <div className="p-3 pt-1 pe-5 total-balance">Expenses by category</div>
            <div className="pt-4">
                <StackedChartExp />
            </div>
        </div>
    )
}

export default Home

{/* <div style={{ maxWidth: 200 }}>
                    <select class="form-select" value={period} onChange={handlePeriodChange}>
                        <option value={"Daily"}>Daily</option>
                        <option value={"Weekly"}>Weekly</option>
                        <option value={"Monthly"}>Monthly</option>
                        <option value={"3Months"}>Every 3 months</option>
                        <option value={"6Months"}>Every 6 months</option>
                        <option value={"Yearly"}>Yearly</option>
                    </select>
                </div> */}