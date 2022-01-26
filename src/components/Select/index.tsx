import React from 'react';
import Select from 'react-select';
import { Label } from './styles';

interface IOption {
  label: string | number | null | undefined;
  value: string | number | null | undefined;
}

interface SelectProps {
  options: IOption[] | undefined;
  value: IOption | null;
  onChange: any;
  error: string | number | boolean | null;
  disabled: boolean;
  loading: boolean;
  label?: string;
  components?: any;
}

function SelectComponent(props: SelectProps) {
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      background: 'red',
      borderRadius: state.isFocused ? '5px 5px 0 0' : 5,
      borderColor: props.error ? 'red' : 'transparent',
      paddingTop: 4,
      paddingBottom: 3,
      paddingLeft: 6,
      paddingRight: 6,
      boxShadow: null,
      '&:hover': {
        cursor: 'pointer',
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'red',
      fontSize: 17,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'red',
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'none',
    }),
    indicatorsContainer: () => ({
      '.myDropDown': {
        '&__dropdown-indicator': {
          color: 'red',
          '&:hover': {
            opacity: 1,
          },
        },
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      color: state.isSelected ? 'red' : 'red',
      paddingTop: 12,
      paddingBottom: 12,
      background: state.isSelected ? 'red' : 'red',
      '&:hover': {
        background: 'red',
        cursor: 'pointer',
      },
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 0,
      marginTop: 5,
      background: 'red',
    }),
    menuList: (base: any) => ({
      ...base,
      padding: 0,
    }),
  };

  return (
    <Label>
      {props.label && <span>{props.label}</span>}
      <Select
        options={props.options}
        components={props.components}
        value={props.value}
        onChange={props.onChange}
        styles={customStyles}
        placeholder="Selecione..."
        classNamePrefix="myDropDown"
        isLoading={props.loading}
        isDisabled={props.loading || props.disabled}
      />
      {props.error && <span className="error">{props.error!}</span>}
    </Label>
  );
}

SelectComponent.defaultProps = {
  value: null,
};

export default SelectComponent;
