import { useSelector, useDispatch } from "react-redux";
import { CategoriesActions } from "../redux/slices/categoriesSlice";

const Table= () => {
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()

    return(
        <table style={{
            width: "100%"
        }}>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>description</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {categories.data.map((val, idx) => (
                    <tr key={idx}>
                        <td>{idx}</td>
                        <td>{val.name}</td>
                        <td>{val.description}</td>
                        <td>
                            <button
                                onClick={() => {
                                    dispatch(CategoriesActions.handleEdit(idx))
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(CategoriesActions.deleteItem(idx))
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
                    
                }
            </tbody>
        </table>
    )
}

export default Table