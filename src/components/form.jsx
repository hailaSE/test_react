import { useEffect, useId, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { CategoriesActions } from "../redux/slices/categoriesSlice";

const Form = () => {
    const categories= useSelector(state => state.categories)
    const dispatch= useDispatch()
    const id= useId()
    const myRef = useRef(null)

    useEffect(()=>{
        if(categories.edit !== -1){
            formik.setValues(categories.data[categories.edit])
        } else {
            formik.resetForm()
        }

        return () => {
            console.log("byeeee")
        }
    }, [categories.edit])

    const formik= useFormik({
        initialValues: {
            name: '',
            description: ""
        },
        onSubmit: (values => {
            if(categories.edit === -1){
                dispatch(CategoriesActions.addItem(values))
            } else{
                dispatch(CategoriesActions.editItem(values))
            }
            formik.resetForm()
        })
    })

    return(
        <>
            <div>
                <div
                    style={{
                        height: '200px',
                        backgroundColor: 'aqua'
                    }}
                    ref={myRef}
                >

                </div>
                <button
                    onClick={()=>{
                        console.log(myRef)
                    }}
                >
                    click
                </button>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                        {...formik.getFieldProps("name")}
                        id={ id +"name"}
                    />
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <input type="text" 
                        {...formik.getFieldProps("description")}
                        id={id+ "description"}
                    />
                </div>
                <button
                    onClick={formik.handleSubmit}
                >
                    {categories.edit !== -1 ?
                        "Edit" : "Add"
                    }
                </button>
            </div>
        </>
    )
}

export default Form