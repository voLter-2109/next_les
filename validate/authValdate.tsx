import { number, object, string } from "yup";

export const validEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const authValidate = object({
  email: string()
    .nullable()
    .email()
    .matches(validEmail, "enter a valid email")
    .required("Required"),
  password: number()
    .test("len", "Must be exactly 6 characters", (val) =>
      val ? val.toString().length >= 6 : false
    )
    .required("Required"),
});

export default authValidate;
