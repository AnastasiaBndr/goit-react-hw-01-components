export const TransactionHistory = (props) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(prop => {
                    return (
                        <tr key={prop.id}>
                            <th>{prop.type}</th>
                            <th>{prop.amount}</th>
                            <th>{prop.currency}</th>
                        </tr>
                    )
                })}
            </tbody></table>
    )
}