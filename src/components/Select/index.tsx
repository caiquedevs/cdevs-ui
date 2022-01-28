import React from 'react';
import { Label, ReactSelect } from './styles';

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

export function Select(props: SelectProps) {
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      background: 'silver',
      borderRadius: state.isFocused ? '5px 5px 0 0' : 5,
      borderColor: props.error ? 'orange' : 'transparent',
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
      color: 'black',
      fontSize: 17,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'black',
    }),
    indicatorsContainer: () => ({
      '.myDropDown': {
        '&__dropdown-indicator': {
          color: 'black',
          '&:hover': {
            opacity: 1,
          },
        },
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      color: state.isSelected ? 'black' : 'silver',
      paddingTop: 12,
      paddingBottom: 12,
      background: state.isSelected ? 'silver' : 'white',
      '&:hover': {
        background: 'silver',
        color: 'black',
        cursor: 'pointer',
      },
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 0,
      marginTop: 5,
      background: 'black',
    }),
    menuList: (base: any) => ({
      ...base,
      padding: 0,
    }),
  };

  return (
    <Label>
      {props.label && <span>{props.label}</span>}
      <ReactSelect
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

Select.defaultProps = {
  value: null,
};
