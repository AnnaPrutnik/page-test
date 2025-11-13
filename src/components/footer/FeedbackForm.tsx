"use client";

import { Formik, Field, Form } from "formik";
import { Button } from "../shared/Button";
import { siteData } from "@/src/data/data";
import * as Yup from "yup";

const {
    footer: {
        feedback: { placeholder },
    },
    buttonTitles: { send },
} = siteData;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Невалідна електрона пошта")
        .required("Обов'язкове поле"),
});

export const FeedbackForm = () => {
    return (
        <Formik
            initialValues={{
                email: "",
            }}
            onSubmit={async values => {
                console.log(values);
            }}
            validationSchema={validationSchema}
        >
            {({ errors, touched }) => (
                <Form className="mb-5">
                    <div className="flex flex-col tablet:flex-row gap-2">
                        <label
                            htmlFor="email"
                            aria-label={placeholder}
                            className="relative"
                        >
                            <Field
                                id="email"
                                name="email"
                                placeholder={placeholder}
                                type="email"
                                className="bg-neutral-50 h-full text-neutrals-80 placeholder:text-neutrals-40 placeholder:data px-4 py-3 hover:outline-none focus-within:outline-none"
                            />
                            {errors.email && touched.email ? (
                                <p className="text-small text-red-600 absolute -bottom-6">
                                    {errors.email}
                                </p>
                            ) : null}
                        </label>

                        <Button
                            view="primary"
                            type="submit"
                            className="max-w-[250px] "
                            disabled={!!(errors.email && touched.email)}
                        >
                            {send}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
