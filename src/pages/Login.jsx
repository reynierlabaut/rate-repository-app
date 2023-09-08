import React from 'react';
import {Formik, useField} from 'formik';
import {Button, StyleSheet, View} from 'react-native';
import StyledTextInput from '../components/StylesTextInput';
import StylesText from '../components/StylesText';

const initialValue = {
  email: '',
  password: '',
};

const FormikInputValue = ({name, ...props}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StylesText style={styles.error}></StylesText>}
    </>
  );
};

export default function LogInPage() {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={values => console.log(values)}
      validate={validate}>
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
});
