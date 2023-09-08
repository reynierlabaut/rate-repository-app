import React from 'react';
import {Formik, useField} from 'formik';
import {Button, StyleSheet, View} from 'react-native';
import StyledTextInput from '../components/StylesTextInput';
import StylesText from '../components/StylesText';
import {loginValidationSchema} from '../validationSchemas/login';

const initialValue = {
  email: '',
  password: '',
};

const FormikInputValue = ({name, ...props}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StylesText style={styles.error}>{meta.error}</StylesText>}
    </>
  );
};

export default function LogInPage() {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={values => console.log(values)}
      validationSchema={loginValidationSchema}>
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Login" />
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 15,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginBottom: 20,
    marginTop: -5,
  },
});
