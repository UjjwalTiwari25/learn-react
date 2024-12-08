import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>25</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>30</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Mike Brown</td>
                <td>28</td>
                <td>Chicago</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Sara Wilson</td>
                <td>22</td>
                <td>Houston</td>
            </tr>
        </tbody>
    </table>
)

