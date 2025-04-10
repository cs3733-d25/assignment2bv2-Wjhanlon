import './MyTable.css'

export function Table2() {
    return (
        <>
            <div className='tableDiv'>
        <table className="collapse">
            <caption>Comparison of Different Music Workspaces</caption>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Ease of Use</th>
                <th>Overall Rating</th>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <th>Ableton Live</th>
                <th>~$400</th>
                <th>4/5</th>
                <th>5/5</th>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <th>FL Studio</th>
                <th>~$200</th>
                <th>4/5</th>
                <th>4/5</th>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <th>Reaper</th>
                <th>Free</th>
                <th>1/5</th>
                <th>2/5</th>
            </tr>
            </tbody>
        </table>

            </div>
            </>
    )
}