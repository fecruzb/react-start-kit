import { Box, Button, TextField, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import * as api from "../api";
import React, { useContext } from "react";
import { Store } from "@/components";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const { setStore } = useContext(Store.Context);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const user = await api.login(values.email, values.password);
      setStore({ user });
    },
  });

  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      height={"100vh"}
    >
      <Box p={4} py={6} border={1} borderRadius={5} maxWidth={"480px"}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
