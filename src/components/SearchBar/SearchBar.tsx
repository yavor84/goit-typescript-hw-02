import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

type InitialValues = {
  query: string;
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const initialValues: InitialValues = { query: '' };
  return (
    <>
      <header>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: InitialValues, actions: FormikHelpers<InitialValues>) => {
            const trimmedQuery = values.query.trim();

            if (!trimmedQuery) {
              toast.error('Please enter a search term');
              return;
            }

            onSubmit(trimmedQuery);
            actions.resetForm();
          }}
        >
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.button} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </header>
      <Toaster position="top-right" />
    </>
  );
};
export default SearchBar;
