import './MyTable.css'

export function Table1() {
    return(
        <>
            <div className='tableDiv'>
            <h3>My Favorites</h3>
            Here's a collection of my favorite music groups in certain genres:
            <table className="collapse">
                <tbody>
                <tr>
                    <th>Classic Rock</th>
                    <th>Alternative Rock</th>
                    <th>Jazz</th>
                    <th>Hip Hop / Rap</th>
                    <th>Miscellaneous</th>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>Styx</td>
                    <td>Imagine Dragons</td>
                    <td>Miles Davis</td>
                    <td>Kendrick Lamar</td>
                    <td>Dua Lipa</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>Toto</td>
                    <td>The Offspring</td>
                    <td>Louis Prima</td>
                    <td>JID</td>
                    <td>Bad Bunny</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>Kansas</td>
                    <td>Fall Out Boy</td>
                    <td>Harry James</td>
                    <td>Saba</td>
                    <td>Masayoshi Takanaka</td>
                </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}