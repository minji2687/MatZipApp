import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {colors} from '../constants';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = ({disabled = false, ...props}: InputFieldProps) => {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <TextInput
        editable={!disabled}
        placeholderTextColor={colors.GRAY_500}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    textColor: colors.GRAY_700,
  },
});

export default InputField;
