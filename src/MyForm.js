import { Button, TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";
import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import Row from './MockData';

const MyField: React.FC<FieldProps & TextFieldProps> = ({
    placeholder,
    field
}) => {
    return <TextField placeholder={placeholder} {...field} />;
};

interface Props {
    onSubmit: (values: Row) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "", rank: "" }}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
        >
            {({ values }) => (
                <Form style={{margin:20}}>
                    <div>
                        <Field name="firstName" placeholder="first name" component={MyField} />
                    </div>
                    <div>
                        <Field name="lastName" placeholder="last name" component={MyField} />
                    </div>
                    <div>
                        <Field name="email" placeholder="email" component={MyField} />
                    </div>
                    <div>
                        <Field name="rank" placeholder="rank" component={MyField} />
                    </div>

                    <Button variant="contained" style={{margin:10}} type="submit">submit</Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

