import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      return toast.error("Enter search text");
    }
    onSearch(values.query);
  };
  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          ></Field>
          <button className={css.btnSearch} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar